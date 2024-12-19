import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import Image, { StaticImageData } from "next/image";
// import FooterThree from "@/layout/footer/footer-three";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/banners/diaspmat.jpg";
import mat from "@/assets/images/pistar/1.png";
import mat0 from "@/assets/images/pistar/2.png";
import ContactForm from "@/components/forms/contact-form";
import bg_image2 from "@/assets/images/background/counter_dark_pattern.png";
import img4 from "@/assets/images/media/doctor.jpg";
import mat1 from "@/assets/images/pistar/mat.jpg";
import mat2 from "@/assets/images/pistar/mat1.jpg";
import mat3 from "@/assets/images/pistar/mat2.jpg";
import data from "@/assets/images/pistar/data.jpg";
import SolutionsSlider from "@/components/feedback/solutions-slider";

const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

export const metadata: Metadata = {
  title: "Diabetic Foot Care with Pressure Measurement Sensors | PiStarTech",
  description:
    "Discover PiStarTech's innovative diabetic foot care solutions with advanced pressure measurement sensors to support health care providers and improve patient outcomes.",
  keywords: "",
};

// card item
function CardItem({
  icon,
  title,
  subtitle,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
}: {
  icon?: StaticImageData;
  title?: string;
  subtitle?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
  li6?: string;
}) {
  return (
    <div className="card-style-twelve w-100 mt-30">
      <div className="d-flex">
        {/* <div
          className="icon tran3s d-flex align-items-center justify-content-center rounded-circle"
          style={{ marginRight: "2rem" }}
        >
          <Image src={icon} alt="icon" className="lazy-img" />
        </div> */}
        <h4 className="fw-bold mt-15 mb-15">{title}</h4>
      </div>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
      <ul className="style-none">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
        <li>{li5}</li>
        <li>{li6}</li>
      </ul>
    </div>
  );
}

const Pressuremat = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main className="bgcolor2">
          {/* breadcrumb start */}
          {/* <HeroVideoTwo /> */}
          <BreadcrumbOne
            title="Diabetic Foot Care"
            subtitle="Diabetic Foot Care Solutions Powered by Advanced Pressure Mapping Sensors"
            page="Diabetic Foot Care"
            maincls="bg-bottom"
            bg_img={about_bg}
            style_2={true}
          />
          {/* breadcrumb end */}

          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            // style={backImg1}
            style={{ background: "#292e31" }}
          >
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      {/* <div className="upper-title">management</div> */}
                      <h3 style={{ color: "white" }}>
                        Innovative Diabetic Foot Care with Advanced Pressure
                        Measurement Sensors
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      At PiStarTech, we are revolutionizing{" "}
                      <b>diabetic foot care</b>
                      with cutting-edge <b>pressure measurement sensors</b>{" "}
                      designed to help prevent complications related to
                      diabetes. Our sensors provide accurate, real-time data,
                      enabling <b>health care providers</b> to monitor foot
                      health effectively and take proactive steps to prevent
                      injuries or ulcers, ensuring better outcomes for diabetic
                      patients.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={mat}
                        alt="screen"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            style={{ background: "#f5f5f5" }}
          >
            <div className="container details-meta">
              <div className="wow fadeInUp">
                {/* <h3 className="pb-4">Overview</h3> */}
                <div className="row">
                  <div className="col-lg-6 wow text-extra fadeInRight order-last order-md-first">
                    <div className="title-three mb-35 md-mb-20">
                      {/* <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SMART TECHNOLOGY
                        </div>
                      </div> */}
                      <h3>Why Diabetic Foot Care is Critical</h3>
                      <p>
                        Diabetes can lead to reduced sensation in the feet,
                        increasing the risk of unnoticed injuries. Pressure
                        measurement sensors are vital in detecting abnormal
                        pressure points on the feet, which may lead to ulcers or
                        other complications. Early detection and intervention
                        are key to preventing more serious health issues, and
                        PiStarTech&apos;s advanced sensors are designed to
                        support this proactive approach.
                      </p>
                    </div>
                    <div className="title-three card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> Key Features :
                        </div>
                      </div>
                      <ul className="style-none">
                        <li>
                          <b>Precise Pressure Measurement:</b> Our sensors
                          provide highly accurate readings of foot pressure,
                          identifying potential problem areas before they become
                          serious.
                        </li>
                        <li>
                          <b>Real-Time Monitoring:</b> Constant monitoring of
                          foot pressure enables timely interventions by{" "}
                          <b>health care providers</b>, minimizing the risk of
                          injury or infection.
                        </li>
                        <li>
                          <b>User-Friendly:</b> Designed for ease of use, our
                          system allows health professionals to quickly assess a
                          patient&apos;s condition and make informed decisions.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft order-first order-md-last">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={mat1}
                        alt="screen"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            style={{ background: "#f5f5f5" }}
          >
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6 text-extra wow fadeInRight order-first order-md-last">
                    <div className="title-three mb-35 md-mb-20">
                      {/* <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SPORTS PERFORMANCE
                        </div>
                      </div> */}
                      <h3>
                        Supporting Health Care Providers in Managing Diabetic
                        Foot Health
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                    >
                      <b> Health care providers</b> play a crucial role in
                      managing diabetic foot health. With our{" "}
                      <b>pressure measurement sensors</b>, providers can get
                      detailed insights into a patient&apos;s foot pressure
                      distribution. This data helps in creating personalized
                      care plans that prevent complications and promote
                      long-term foot health.
                    </p>

                    <h3 className="mt-40 lg-mt-30">Shaping the Future of Diabetic Foot Care</h3>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                    >
                      PiStarTech is committed to the <b>future of health</b> by
                      integrating technology that empowers both patients and
                      health professionals. Our innovative foot care solutions
                      are designed to meet the growing demand for more effective
                      and preventative health care, especially for people living
                      with diabetes.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft order-last order-md-first">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={mat2}
                        alt="screen"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            style={{ background: "#f5f5f5" }}
          >
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-12 wow text-extra fadeInRight">
                    <div className="title-three mb-35 md-mb-20">
                      {/* <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SMART TECHNOLOGY
                        </div>
                      </div> */}
                      <h3>Why Choose PiStarTech for Diabetic Foot Care?</h3>
                    </div>
                    <div className="card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>Innovative Technology:</b> Our advanced pressure sensors are at the forefront of diabetic foot care.

                        </li>
                        <li>
                          <b>Trusted by Professionals:</b> Used by leading health care providers to enhance foot care for diabetic patients.

                        </li>
                        <li>
                          <b>Future-Ready Solutions:</b> We are shaping the future of health with products that make a difference in the daily lives of those affected by diabetes.

                        </li>
                      </ul>
                    </div>
                    <p className="pt-4">Contact PiStarTech today to learn more about how our <b>pressure measurement sensors</b> can help transform diabetic foot care and improve patient outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <SolutionsSlider /> */}

          <div
            className="contact-us-section pt-80 lg-pt-80"
            style={backImg2}
            // style={{background:"#292e31"}}
          >
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper lg-mt-40">
                  <div className="row">
                    <div className="col-lg-5 d-flex">
                      {/* <Image
                        src={img4}
                        alt="icon"
                        layout="responsive"
                        className=""
                      /> */}
                      <div className="ms-auto pe-xxl-5 ps-xxl-5 pb-35 md-mt-60 d-flex align-items-end">
                        <Image
                          src={img4}
                          alt="cgb aboutus"
                          className="shap-animate rounded"
                          style={{ height: "auto" }}
                        ></Image>
                        {/* <ul className="style-none">
                        <li>Mobile app easy management & access</li>
                        <li>Ton’s of features for handle the card easily</li>
                        <li>Strong security system.</li>
                    </ul> */}
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="form-style-one ps-xl-5">
                        {/* form start */}
                        <ContactForm />
                        {/* form end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Pressuremat;
