"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal
import staffing_data from "@/data/staffing-data";
import shape from "@/assets/images/background/element_half.png";
import img from "@/assets/images/media/carousel-small-modular.jpg";

// slider settings
const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const StaffingSolutions = () => {
  const service_items = staffing_data
    .filter((s) => s.page === "staffing-1")

  const [currentSlide, setCurrentSlide] = useState<number>(0); // Declare currentSlide and setCurrentSlide

  // Function to handle slide change with type declaration
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex); // Update current slide state
  };

  return (
    <div className="block-feature-eleven service-details overflow-hidden position-relative pt-80 lg-pt-80 pb-80 lg-pb-100 md-pb-80" style={{background:"#f5f5f5"}}>
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="title-one details-meta">
              <h2>Leveraging Familiar Techniques with the Podiascanner Mat</h2>
            </div>
            <p className="text-lg mt-40 lg-mt-30 mb-50">
              PiStarTech Private Limited ensures that the Podiascanner Mat integrates
              smoothly into the medical professional&apos;s existing knowledge and
              workflow. Much like familiar diagnostic tools, the Podiascanner Mat
              builds on well-known foot assessment methods while providing
              advanced digital insights. Its user-friendly interface allows
              clinicians to quickly gain proficiency, offering fast and accurate
              plantar pressure analysis without requiring extensive retraining.
              This seamless transition empowers healthcare providers to enhance
              their diagnostic capabilities while continuing to rely on their
              established expertise in foot care.
            </p>
          </div>
          <div className="col-lg-4 wow fadeInLeft">
            <div className="title-one card-style-nine" style={{ background: "none", padding: "0px" }}>
              <h3 className="fw-bold mt-30 lg-mt-20 text-dark">{service_items[currentSlide]?.title}</h3>{" "}
              {/* Dynamic Title */}
            </div>
            <p className="text-lg text-dark mt-30 md-mt-20 mb-45 md-mb-30">
              {service_items[currentSlide]?.desc} {/* Dynamic Description */}
            </p>
            <Link
              href={service_items[currentSlide]?.link}
              className="btn-eighteen tran3s"
            >
              Explore All
            </Link>
          </div>
          <div className="col-lg-8">
            <div className="slider-wrapper md-mt-50">
              <Slider
                {...slider_setting}
                beforeChange={handleBeforeChange} // Call handleBeforeChange
                className="service-slider-one"
              >
                {service_items.map((s, index) => (
                  <div key={s.id} className="item">
                    <Image
                      src={s.img}
                      alt="icon"
                      layout="responsive"
                      className="service-img rounded"
                      style={{
                        opacity: index === currentSlide ? 1 : 0.3, // Apply opacity based on active slide
                        transition: "opacity 0.5s ease-in-out", // Smooth transition for opacity
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* <Image src={shape} alt="shape" className="lazy-img shapes shape_01" layout="responsitve" style={{
        maxHeight:"96%",
        maxWidth:"40%",
        opacity:"0.1",
      }} /> */}
    </div>
  );
};

export default StaffingSolutions;
