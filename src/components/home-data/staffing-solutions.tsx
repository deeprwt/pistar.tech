"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal
import staffing_data from "@/data/staffing-data";
import shape from "@/assets/images/shape/shape_44.svg";
import img from "@/assets/images/media/Aboutbanner.png";

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
    .slice(0, 4);

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="block-feature-eleven service-details overflow-hidden position-relative mt-150 lg-mt-100 pb-80 lg-pb-100 md-pb-80">
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="title-one details-meta">
              <h3>Leveraging Familiar Techniques with the DiaPS Mat</h3>
            </div>
            <p className="text-lg mt-40 lg-mt-30 mb-50">
              PiStarTech Private Limited ensures that the DiaPS Mat integrates
              smoothly into the medical professional's existing knowledge and
              workflow. Much like familiar diagnostic tools, the DiaPS Mat
              builds on well-known foot assessment methods while providing
              advanced digital insights. Its user-friendly interface allows
              clinicians to quickly gain proficiency, offering fast and accurate
              plantar pressure analysis without requiring extensive retraining.
              This seamless transition empowers healthcare providers to enhance
              their diagnostic capabilities while continuing to rely on their
              established expertise in foot care.
            </p>
          </div>
          <div className="col-lg-5 wow fadeInLeft">
            <div className="title-one card-style-nine" style={{backgroundColor:"none",padding:"0px"}}>
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
          <div className="col-lg-7">
            <div className="slider-wrapper md-mt-50">
              <Slider
                {...slider_setting}
                className="service-slider-one"
                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)} // Update currentSlide on slide change
              >
                {service_items.map((s, index) => (
                  <div key={s.id} className="item">
                    {/* <div className="card-style-seventeen tran3s w-100">
                      <div className="tran3s rounded-circle d-flex justify-content-center">
                        <Image src={s.icon} alt="icon" width={70} height={70} />
                      </div>
                      <div className="text">
                        <h4 className="fw-bold mb-25 md-mb-20">
                          {s.title}
                        </h4>
                        <p className="mb-25">
                          {s.desc}
                        </p>
                        <Link href={s.link} className="btn-three">
                          <span>Learn More</span>{" "}
                          <i className="bi bi-chevron-right"></i>
                        </Link>
                      </div>
                    </div> */}
                    <Image
                      src={img}
                      alt="icon"
                      layout="responsive"
                      className="service-img rounded"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default StaffingSolutions;
