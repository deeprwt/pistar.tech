"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import service_img from "@/assets/images/media/vision.jpg";
import ramarao from "@/assets/images/thumbnail/ramarao.png";
import SideBar from "./side-bar";
import ImgGallery from "../gallery/img-gallery";

// internal
import sticker from "@/assets/images/assets/sticker_02.png";
import VideoPopup from "../common/video-popup";
import VideoPopupLocal from "../common/video-popup-local";
import FaqSectionOne from "../faq/faq-section-one";
import FaqSectionTwo from "../faq/faq-section-two";
import FaqSectionFour from "../faq/faq-section-four";

// CardItem
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};
const OurCompanySection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>

    {/* <FaqSectionTwo /> */}
    <FaqSectionFour />
      <div className="fancy-banner-five position-relative pt-80 md-pt-60 pb-80 md-pb-60">
        {/* Dark overlay */}
        <div className="position-absolute top-0 left-0 w-100 h-100" />

        <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
          <div className="position-relative">
            {/* <p className="text-white text-xl pt-30 md-pt-10 pb-45 lg-pb-30">
        Watch our intro video to get the idea about our services & many more
      </p> */}

            {/* Main image */}
            <Image
              src={ramarao}
              alt="service_img"
              className="lazy-img w-100 rounded-4"
              style={imgStyle}
            />

            {/* Video play button */}
            <a
              className="fancybox rounded-circle video-icon tran5s text-center d-flex align-items-center justify-content-center cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1, // Ensure it is above the image
              }}
            >
              <Image
                src={sticker}
                alt="sticker"
                className="lazy-img"
                style={imgStyle}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"aXFSJTjVjw0"}
      /> */}
      <VideoPopupLocal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        url={"/assets/videos/file.mp4"}
      />
      {/* Video modal end */}
      {/* <ImgGallery /> */}
    </>
  );
};

export default OurCompanySection;
