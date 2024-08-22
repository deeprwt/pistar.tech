"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { db } from "@/database/firebase"; // Import Firestore instance
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions

// ... existing imports

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
  // const onSubmit = handleSubmit((data) => {
  //   alert(JSON.stringify(data));
  //   reset();
  // });

  // Define form submission handler
  const onSubmit = async (data: FormData) => {
    try {
      // Add data to Firestore collection (conditionally executed only in the client-side)
      if (typeof window !== "undefined") {
        // Check if window is defined (browser environment)
        const { db } = await import("@/database/firebase");
        const contactRef = collection(db, "newsletter");
        await addDoc(contactRef, data);
        notifySuccess("Successfully subscribed to the newsletter!"); // Use notifySuccess
        reset(); // Clear the form
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      notifyError("Error sending message, please try again."); // Use notifyError
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter your email address"
          {...register("email")}
          id="email"
          name="email"
          style={{padding:"0 30px", height:"60px"}}
        />
        <button style={{top:"5px"}}>
          <i className="bi bi-arrow-right"></i>
        </button>
        <div className="help-block with-errors">
          <ErrorMsg msg={errors.email?.message!} />
        </div>
        <div className="messages"></div>
      </form>
    </>
  );
};

export default Newsletter;
