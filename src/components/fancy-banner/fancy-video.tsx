"use client";
import React, { useState } from "react";
import Image from "next/image";
// internal
import sticker from "@/assets/images/assets/sticker_02.png";
import VideoPopup from "../common/video-popup";
import Link from "next/link";

// img style
const imgStyle = {
  height: "auto",
};

const FancyVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="fancy-banner-five position-relative mt-150 lg-mt-80 pt-80 md-pt-60 pb-80 md-pb-60"
        // style={{ height: "60vh" }}
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 left-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: -1 }}
        >
          <source src="/assets/videos/glob.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div
          className="position-absolute top-0 left-0 w-100 h-100"
          style={{ backgroundImage: "linear-gradient(#0006, #0006)", zIndex: 0}}
        />

        <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
          <div>
            {/* <h4 className="text-white fw-bold">
              You have Entered Our Corporate Business Zone
            </h4> */}
            <p className="text-white text-xl pt-30 md-pt-10 pb-45 lg-pb-30">
              Watch our intro video to get the idea about our services & many more
            </p>
            <a
              className="fancybox rounded-circle video-icon tran5s text-center d-flex align-items-center justify-content-center m-auto cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
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
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"aXFSJTjVjw0"}
      />
      {/* Video modal end */}
    </>
  );
};

export default FancyVideo;
