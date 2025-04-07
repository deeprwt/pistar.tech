'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import useCartInfo from '@/hooks/use-cart-info';
import { getCartProducts } from '@/redux/features/cart';
import { db } from '@/database/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

type CheckoutOrderReviewProps = {
  onFinalAmountCalculated: (amount: number) => void;
};

const CheckoutOrderReview = ({ onFinalAmountCalculated }: CheckoutOrderReviewProps) => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const { total } = useCartInfo();
  const dispatch = useAppDispatch();
  const ship_cost = 0;
  // const finalAmount = (total + ship_cost).toFixed(2);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      dispatch(getCartProducts());
    }
  }, [dispatch]);

  // Load Razorpay Script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const finalAmount = parseFloat((total + ship_cost).toFixed(2));

  // Notify parent of final amount
  useEffect(() => {
    onFinalAmountCalculated(finalAmount);
  }, [finalAmount, onFinalAmountCalculated]);


  // Payment Handler
  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert('Failed to load Razorpay SDK.');
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'YOUR_KEY_HERE',
      amount: Number(finalAmount) * 100, // in paise
      currency: 'INR',
      name: 'Your Shop Name',
      description: 'Order Payment',
      handler: async function (response: any) {
        // Save order to Firestore
        try {
          const docRef = await addDoc(collection(db, 'orders'), {
            cart: cart_products,
            total: Number(finalAmount),
            razorpay_payment_id: response.razorpay_payment_id,
            createdAt: Timestamp.now(),
          });
          alert('Payment successful! Order saved.');
        } catch (err) {
          console.error('Error saving order:', err);
        }
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      {cart_products.length === 0 && (
        <div className="product-review">
          <h4>No cart product</h4>
        </div>
      )}
      {cart_products.length > 0 && (
        <div>
          <table className="product-review">
            <tbody>
              {cart_products.map((item) => (
                <tr key={item.id}>
                  <th>
                    <span>{item.title}</span>
                  </th>
                  <td>
                    <span>₹{item.price}</span>
                  </td>
                </tr>
              ))}
              <tr>
                <th>
                  <span>Subtotal</span>
                </th>
                <td>
                  <span>₹{total.toFixed(2)}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Shipping</span>
                </th>
                <td>
                  <span>₹{ship_cost.toFixed(2)}</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>
                  <span>Total</span>
                </th>
                <td>
                  <span>₹{finalAmount}</span>
                </td>
              </tr>
            </tfoot>
          </table>

          {/* <button type='submit' className="btn-ten tran3s w-100">Pay Now</button> */}
        </div>
      )}
    </>
  );
};

export default CheckoutOrderReview;
