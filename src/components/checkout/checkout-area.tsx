"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Script from "next/script";
import { useRouter } from 'next/navigation';
import ErrorMsg from "../common/error-msg";
import CheckoutCouponForm from "./checkout-coupon-form";
import CheckoutOrderReview from "./checkout-order-review";
import { useDispatch } from "react-redux";
import { forceClearCart } from "@/redux/features/cart"; // update the path based on your project

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  orderNote?: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  company: yup.string().required().label("Company"),
  country: yup.string().required().label("Country"),
  address: yup.string().required().label("Address"),
  city: yup.string().required().label("City"),
  state: yup.string().required().label("State"),
  zipCode: yup.string().required().label("Zip Code"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().min(4).label("Phone"),
  orderNote: yup.string().label("Order Note"),
});

const CheckoutArea = () => {
  const [openCoupon, setOpenCoupon] = useState<boolean>(false);
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const router = useRouter();
  const dispatch = useDispatch(); // ✅ This is required

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount * 100 }), // in paisa
      });

      const order = await res.json();

      if (!order || !order.id) {
        alert("Failed to create Razorpay order");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: "INR",
        name: "Pistar Tech",
        description: "Order Payment",
        order_id: order.id,
        handler: async (response: any) => {
          const save = await fetch("/api/save-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
              user: data,
              time: new Date().toISOString(),
            }),
          });

          if (save.ok) {
            // Optional: clear localStorage/cart if you use it
            localStorage.removeItem("cart"); // Adjust if needed
            sessionStorage.removeItem("cart"); // if session storage used
            dispatch(forceClearCart()); // ✅ This clears cart without asking
            // Redirect with order info in query string
            router.push(
              `/thank-you?payment_id=${response.razorpay_payment_id}&name=${data.firstName}`
            );
            
            alert("Payment Successful & Saved!");
          } else {
            alert("Payment save failed.");
          }
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment Error", err);
      alert("Something went wrong.");
      console.log("Razorpay Key:", process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
    }
  };

  return (
    <>
      {/* Razorpay script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <div className="checkout-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
        <div className="container">
          <div className="checkout-toggle-area mb-80 md-mb-60">
            <p>
              Have a promo code?
              <button
                className="d-inline-block"
                data-bs-toggle="collapse"
                data-bs-target="#promo-code"
                onClick={() => setOpenCoupon(!openCoupon)}
              >
                Click to enter your code.
              </button>
            </p>
            <div
              id="promo-code"
              className={`collapse ${openCoupon ? "show" : ""}`}
            >
              <p>Please enter your promo code below.</p>
              <CheckoutCouponForm />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="main-title">Billing Details</h2>
                <div className="user-profile-data">
                  <div className="row">
                    <div className="col-lg-6 mb-55">
                      <input
                        type="text"
                        {...register("firstName")}
                        placeholder="First Name*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.firstName?.message!} />
                    </div>
                    <div className="col-lg-6 mb-55">
                      <input
                        type="text"
                        {...register("lastName")}
                        placeholder="Last Name*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.lastName?.message!} />
                    </div>
                    <div className="col-12 mb-55">
                      <input
                        type="text"
                        {...register("company")}
                        placeholder="Company Name*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.company?.message!} />
                    </div>
                    <div className="col-12 mb-55">
                      <select
                        className="theme-select-menu"
                        {...register("country")}
                      >
                        <option value="">Country*</option>
                        <option value="usa">USA</option>
                        <option value="bd">Bangladesh</option>
                        <option value="in">India</option>
                        <option value="je">Germany</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="tu">Turkey</option>
                        <option value="eg">Egypt</option>
                      </select>
                      <ErrorMsg msg={errors.country?.message!} />
                    </div>
                    <div className="col-12 mb-55">
                      <input
                        type="text"
                        {...register("address")}
                        placeholder="Street Address*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.address?.message!} />
                    </div>
                    <div className="col-lg-4 mb-55">
                      <input
                        type="text"
                        {...register("city")}
                        placeholder="Town/City*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.city?.message!} />
                    </div>
                    <div className="col-lg-4 mb-55">
                      <input
                        type="text"
                        {...register("state")}
                        placeholder="State*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.state?.message!} />
                    </div>
                    <div className="col-lg-4 mb-55">
                      <input
                        type="text"
                        {...register("zipCode")}
                        placeholder="Zip Code*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.zipCode?.message!} />
                    </div>
                    <div className="col-lg-6 mb-55">
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Email Address*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.email?.message!} />
                    </div>
                    <div className="col-lg-6 mb-55">
                      <input
                        type="text"
                        {...register("phone")}
                        placeholder="Phone Number*"
                        className="single-input-wrapper"
                      />
                      <ErrorMsg msg={errors.phone?.message!} />
                    </div>
                    <div className="col-12">
                      <div className="other-note-area">
                        <p>Order Note (Optional)</p>
                        <textarea {...register("orderNote")}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-lg-5 ms-auto">
                <div className="order-confirm-sheet md-mt-60">
                  <h2 className="main-title">Order Details</h2>
                  <div className="order-review">
                    <CheckoutOrderReview
                      onFinalAmountCalculated={setFinalAmount}
                    />
                  </div>
                  <button type="submit" className="btn-four w-100 mt-40">
                    Pay with Razorpay
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutArea;
