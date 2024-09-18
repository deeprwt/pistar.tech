import React from "react";
import Image from "next/image";
// internal
import screen from "@/assets/images/assets/screen_16.png";
import img from "@/assets/images/pistar/why.jpg";
// import { IFaq2 } from "@/data/faq_data_edit";
// import { IFaq2 } from "@/data/faq-data_edit";
import FaqItem from "../faq/faq-item";
import Link from "next/link";
import FaqItemLi from "../faq/faq-item-li";

// type
type IPropType = {
  id: number;
  title: string;
  desc?: string[]; // Make desc optional
  isShow?: boolean;
  parent: string;
  cls?: string;
};

// Declare IFaq2 type at the top
export type IFaq2 = {
  id: number;
  title: string;
  desc?: string[]; // Optional array of strings
  isShow?: boolean;
};

// faq data 2
const faq_data_2: IFaq2[] = [
  {
    id: 1,
    title: "Advantages for Healthcare Providers:",
    desc: [
      " Improves diagnostic precision and understanding.",
      "Confirms clinical findings with quantitative data.",
      "Tracks patient recovery progress effectively post-surgery.",
      "Enhances patient trust and confidence through advanced technology.",
    ],
    isShow: true,
  },
  {
    id: 2,
    title: "Advantages for Patients:",
    desc: [
      "Offers insights into the causes of foot pain.",
      "Assists in monitoring progress and improvements over time.",
      " Allows for regular use to perform exercises and track progress as advised by doctors.",
    ],
  },
  {
    id: 3,
    title: "Trusted & Secure",
    desc: [
      "It only takes 5 minutes.",
      "Set-up is smooth and simple.",
      "Fully customizable page design to reflect your brand.",
    ],
  },
];

// image style
const imgStyle = {
  height: "auto",
};

const TextFeatureTen = () => {
  return (
    <div className="text-feature-eight mt-80 mb-80 lg-mt-80 service-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 wow fadeInLeft">
            <Image
              src={img}
              alt="screen"
              className="lazy-img w-full h-auto rounded"
            />
          </div>
          <div className="col-lg-6 ms-auto wow fadeInRight details-meta">
            <div className="title-one mt-20">
              {/* <div className="upper-title">Why Choose Us</div> */}
              <h3 className="color-deep">Why Choose the DiaPS Mat?</h3>
            </div>
            <div
              className="accordion accordion-style-three md-mt-40"
              id="accordionOne"
            >
              {faq_data_2.map((faq, i) => (
                <FaqItemLi
                  key={i}
                  {...faq}
                  desc={faq.desc ?? []} // Provide a default empty array if desc is undefined
                  parent="accordionOne"
                  cls="fw-bold"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureTen;
