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
  name: string;
  number: string;
  email: string;
  date: string;
  timingSlot: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup.string().required("Phone Number is required").matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  date: yup.string().required("Date is required"),
  timingSlot: yup.string().required("Timing Slot is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

const BookDemoForm = () => {
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
  //       const contactRef = collection(db, "bookademo");
  //       await addDoc(contactRef, data);
  //       notifySuccess("Message sent successfully! Your slot is booked now.");
  //       reset();
  //     }
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     notifyError("Error sending message, please try again.");
  //   }
  // };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/bookademo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        notifySuccess("Demo booked successfully! Email sent.");
        reset(); // Clear the form
      } else {
        notifyError("Error booking demo, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      notifyError("Error submitting form, please try again.");
    }
  };

  return (
    <form id="book-demo-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Full Name*</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Enter Your Name"
            />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Phone Number*</label>
            <input
              type="number"
              {...register("number")}
              id="number"
              placeholder="Enter Your Phone Number"
              maxLength={10}
              pattern="\d{10}"
              onInput={(e) => {
                if (e.currentTarget.value.length > 10) {
                  e.currentTarget.value = e.currentTarget.value.slice(0, 10); // Restrict input to 10 digits
                }
              }}
            />
            <ErrorMsg msg={errors.number?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="YourEmail@gmail.com"
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Date*</label>
            <input
              type="date"
              {...register("date")}
              id="date"
              placeholder="Select Date"
            />
            <ErrorMsg msg={errors.date?.message!} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group-meta position-relative mb-25">
            <label>Timing Slot*</label>
            <input
              type="time"
              {...register("timingSlot")}
              id="timingSlot"
              placeholder="Enter Timing Slot"
            />
            <ErrorMsg msg={errors.timingSlot?.message!} />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Message*</label>
            <textarea
              placeholder="Your message"
              {...register("message")}
              id="message"
              name="message"
            ></textarea>
            <ErrorMsg msg={errors.message?.message!} />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
            Book Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookDemoForm;
