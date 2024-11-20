"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
// internal
import icon from "@/assets/images/icon/icon_48.svg";
import PartnersSliderOne from "../partners/partners-slider-one";
import { feedback_four } from "@/data/feedback-data";
import { solutions_data } from "@/data/solutions-data";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SolutionsSlider = ({ spacing }: { spacing?: string }) => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <div
      className={`feedback-section-four bg-white pb-60 ${
        spacing ? spacing : "pt-80 lg-pt-80"
      }`}
    >
      <div className="container">
        <div className="position-relative">
          <div className="newsletter-banner">
            <h2>Solutions</h2>
          </div>
          <p className="text-lg mt-30 lg-mt-20 mb-70 lg-mb-40 w-80">
            Develop a range of innovative products to assist doctors and clinic
            hospitals in efficiently diagnosing patients and gathering
            comprehensive details about their health issues.
          </p>
          <Slider
            {...slider_setting}
            ref={sliderRef}
            className="feedback-slider-four"
          >
            {solutions_data.map((item, i) => (
              <div key={i} className="item">
                <div
                  className="feedback-block-four tran3s"
                  style={{ padding: "0", border: "none" }}
                >
                  {/* <div className="d-flex align-items-center justify-content-between">
                    <ul className="style-none d-flex rating">
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                    </ul>
                    <Image src={icon} alt="icon" className="icon" />
                  </div> */}
                  <Image
                    src={item.user!}
                    alt="user"
                    className="lazy-img"
                    layout="responsive"
                  />
                  <blockquote className="p-4">{item.desc}</blockquote>
                  {/* <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="name fw-500 text-dark">{item.name},</div>
                      <p className="m0 opacity-75">{item.location}</p>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>

          <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none">
            <li onClick={sliderPrev} className="prev_a slick-arrow">
              <i className="bi bi-chevron-left"></i>
            </li>
            <li onClick={sliderNext} className="next_a slick-arrow">
              <i className="bi bi-chevron-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSlider;
