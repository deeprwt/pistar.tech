"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/database/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type Order = {
  id: string;
  payment_id: string;
  order_id: string;
  amount?: number;
  createdAt: any;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
  };
  cartItems?: any[];
};

const SpecificUserOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userEmail = user.email;

        try {
          const q = query(collection(db, "payments"), orderBy("createdAt", "desc"));
          const querySnapshot = await getDocs(q);

          const fetchedOrders: Order[] = [];
          querySnapshot.forEach((doc) => {
            const orderData = doc.data() as Order;
            if (orderData.user?.email === userEmail) {
                fetchedOrders.push({ ...orderData, id: doc.id });
            }
          });

          setOrders(fetchedOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("User not logged in");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="name fw-bold m-0">Your Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Order ID</th>
                <th>Payment ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    {order.user?.firstName} {order.user?.lastName}
                  </td>
                  <td>{order.user?.email}</td>
                  <td>₹{order.amount || "N/A"}</td>
                  <td>{order.order_id}</td>
                  <td>{order.payment_id}</td>
                  <td>
                    {new Date(order.createdAt?.seconds * 1000).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SpecificUserOrders;
