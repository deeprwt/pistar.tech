"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { db } from "@/database/firebase"; // Import Firestore instance
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions
import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions

type FormData = {
  email: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
});

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     if (typeof window !== "undefined") {
  //       const { db } = await import("@/database/firebase");
  //       const contactRef = collection(db, "newsletter");

  //       await addDoc(contactRef, data);

  //       notifySuccess("Successfully subscribed to the newsletter!");
  //       reset();
  //     }
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     notifyError("Error sending message, please try again.");
  //   }
  // };

    const onSubmit = async (data: FormData) => {
    try {
      if (typeof window !== "undefined") {
        // Firestore instance and reference setup
        const contactRef = collection(db, "newsletter");

        // Add data to Firestore collection
        await addDoc(contactRef, { email: data.email });

        // Send email using your Next.js API route
        const emailResponse = await fetch("/api/newsletter", {
          method: "POST", // Adjust based on your API route method
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (emailResponse.ok) {
          notifySuccess("Successfully subscribed and email sent!");
          reset();
        } else {
          const errorResponse = await emailResponse.json();
          console.error("Error sending email: ", errorResponse);
          notifyError("Error sending email, please try again.");
        }
      }
    } catch (error) {
      console.error("Error processing request: ", error);
      notifyError("Error processing request, please try again.");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Enter your email address"
        {...register("email")}
        id="email"
        name="email"
        style={{ padding: "0 30px", height: "60px" }}
      />
      <button type="submit" style={{ top: "5px" }}>
        <i className="bi bi-arrow-right"></i>
      </button>
      <div className="help-block with-errors">
        <ErrorMsg msg={errors.email?.message!} />
      </div>
      <div className="messages"></div>
    </form>
  );
};

export default Newsletter;
