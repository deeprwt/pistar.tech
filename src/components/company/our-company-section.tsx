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
      <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12 order-lg-1">
              <div className="details-meta ps-xxl-5 ps-xl-3 pb-30">
                <h2>Our Story</h2>
                <p>
                  As we forge ahead, the spirit of innovation is not confined to
                  our internal processes alone. We strive to create an ecosystem
                  where our clients experience the tangible benefits of
                  technological advancements, making their interaction with us
                  not just a service but a seamless, convenient experience.
                </p>
                <p>
                  At CGB Solutions, innovation is not just a commitment;
                  it&apos;s a way of life. We are driven by the belief that
                  convenience is the cornerstone of exceptional service
                  delivery, and we tirelessly work towards ensuring that our
                  clients not only receive solutions but experience the
                  unparalleled convenience that comes with partnering with a
                  forward-thinking, innovative organization.
                </p>
                {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3 pb-30">
                <h2>Our Vision</h2>
                <p>
                  We aspire to be the visionary of a future where the seamless
                  integration of unparalleled talent and cutting-edge technology
                  not only redefines success for businesses but sets an entirely
                  new standard for global excellence
                </p>
                {/* <p>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects. We work collaboratively with organizations to identify and leverage the potential within their risk and compliance functions, enabling them to thrive in an ever-changing business landscape.</p> */}
                <div className="img-meta mb-60 lg-mb-40">
                  <Image
                    src={service_img}
                    alt="service_img"
                    className="lazy-img w-100 rounded-4"
                    style={imgStyle}
                  />
                </div>
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3 pb-30">
                {/* <div className="upper-title"></div> */}
                <h2>Our Mission</h2>
                <p>
                  We are on a relentless mission to shatter the ordinary,
                  empowering businesses with extraordinary staffing and
                  technology solutions. At CGB Solutions, we don&apos;t just
                  adapt to change; we sculpt it, ensuring our clients lead the
                  way in innovation and triumph.
                </p>

                {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <div className="upper-title">
                  Morales and Values That Make Legacies
                </div>
                <h2>Our Culture</h2>
                <p>
                  Corporate culture is defined by practices and values that
                  reflect the relationship between management and employees. It
                  determines how the organization conducts its business. Vision,
                  values, practices, people, and geographies are the building
                  blocks of any culture. A distinct culture and a thriving
                  organization need all these elements to come together. <br />
                  <br />
                  At CGB, an employee-friendly environment is fostered, and
                  various recreational team-building activities are regularly
                  organized. We ensure the workplace is stress-free by indulging
                  in the celebration of all the major global festivals. We have
                  people whose personal values match our corporate values, and
                  as a team, we strive to keep up with our values and aim for
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-banner-five position-relative mt-150 lg-mt-80 pt-80 md-pt-60 pb-80 md-pb-60">
  {/* Dark overlay */}
  <div
    className="position-absolute top-0 left-0 w-100 h-100"
  />

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
