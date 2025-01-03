import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import Image, { StaticImageData } from "next/image";
// import FooterThree from "@/layout/footer/footer-three";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/banners/diaspmat.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_25.svg";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import BlockFeatureOne from "@/components/block-feature/block-feature-one";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import FeedbackOne from "@/components/feedback/feedback-one";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import TeamSectionThree from "@/components/team/team-section-three";
import HomeFourBlogs from "@/components/blogs/home-4-blogs";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import TextFeatureHome from "@/components/text-feature/text-feature-home";
import TextFeatureAbout from "@/components/text-feature/text-feature-about";
import BlockFeatureAbout from "@/components/block-feature/block-feature-about";
import DottedMap from "@/components/map/maps";
import HowWeDo from "@/components/home-data/how-we-do";
import logo_2 from "@/assets/images/logo/logome.png";
import HeroVideoTwo from "@/components/hero-banner/hero-video-two";
import FaqSolutionsThree from "@/components/faq/faq-section-three";
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
  title: "Force Sensing Resistor & Pressure Sensitive Mats | PiStarTech",
  description:
    "Discover PiStarTech's force sensing resistors and pressure sensitive mats for precise force and pressure measurement in various industries. Contact us today!",
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

const ForceSensingResistor = () => {
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
            title="Force Sensing Resistor"
            subtitle="Reliable and Accurate Force Sensors with Advanced Force Sensing Resistors."
            page="Force Sensing Resistor"
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
                        High-Performance Force Sensing Resistors for Accurate
                        Measurement
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      At PiStarTech, we offer <b>force sensing resistors</b>{" "}
                      (FSRs) designed to provide accurate and reliable
                      measurements in a variety of applications. Our{" "}
                      <b>force sensitive resistors</b> are ideal for use in
                      sensors, smart devices, and industrial systems, offering
                      unparalleled precision for force and pressure detection.
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
                <div className="row">
                  <div className="col-lg-6 wow text-extra fadeInRight order-last order-md-first">
                    <div className="title-three mb-35 md-mb-20">
                      {/* <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SMART TECHNOLOGY
                        </div>
                      </div> */}
                      <h3>What is a Force Sensing Resistor?</h3>
                      <p>
                        A <b>force sensing resistor</b> is a type of sensor that
                        changes its resistance when pressure or force is
                        applied. The more force applied, the lower the
                        resistance. This characteristic makes FSRs ideal for
                        applications requiring real-time force measurement. Our
                        FSRs are engineered for high sensitivity, providing
                        accurate data that can be easily integrated into your
                        systems.
                      </p>
                    </div>
                    <div className=" title-three card-style-twelve w-100 mt-30">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> Key Features :
                        </div>
                      </div>
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>High Sensitivity:</b>Detects even the smallest
                          changes in force with precision.
                        </li>
                        <li>
                          <b>Flexible Design::</b>Suitable for various form
                          factors, from compact devices to large-area sensors.
                        </li>
                        <li>
                          <b>Durability: </b> Built to withstand repetitive use
                          and harsh environments, ensuring longevity.
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
                      <div>
                        {/* <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SPORTS PERFORMANCE
                        </div> */}
                      </div>
                      <h3>
                        Pressure Sensitive Mats for Enhanced Force Detection
                      </h3>
                      <p>
                        In addition to our <b>force sensing resistors</b>, we
                        also provide <b>pressure sensitive mats</b> that allow
                        for detailed force measurement over larger surfaces.
                        These mats are perfect for applications like human
                        interaction detection, weight measurement, and force
                        distribution analysis.
                      </p>
                      <p>
                        Our <b>pressure sensitive mats</b> are used in diverse
                        industries, including automotive, healthcare, and
                        robotics, where force measurement and detection are
                        crucial. These mats offer precise and reliable
                        performance, allowing for real-time pressure mapping and
                        feedback.
                      </p>
                    </div>
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
                  <div className="col-lg-12 text-extra wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        {/* <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SPORTS PERFORMANCE
                        </div> */}
                      </div>
                      <h3>
                        Why Choose PiStarTech&apos;s Force Sensing Solutions?
                      </h3>
                      <p>
                        PiStarTech also offers advanced{" "}
                        <b>pressure mapping sensors</b>
                        that provide detailed insights into pressure
                        distribution. These sensors are ideal for applications
                        such as{" "}
                        <b>biomechanical analysis, foot pressure analysis,</b>
                        and <b>medical diagnostics,</b> where understanding
                        pressure patterns is crucial for optimal performance and
                        health outcomes.
                      </p>
                      <p>
                        Our <b>pressure mapping sensors</b> allow for the
                        collection of high-resolution data, helping industries
                        make informed decisions and optimize their processes.
                        Whether you&apos;re monitoring a production line or
                        analyzing human movement, our sensors deliver precise
                        data in real-time.
                      </p>
                    </div>
                    <div className="card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>Precision and Accuracy:</b> Our sensors offer
                          superior force measurement capabilities with high
                          sensitivity.
                        </li>
                        <li>
                          <b>Customizable: </b> Tailored solutions for specific
                          applications, including medical devices, robotics, and
                          automation.
                        </li>
                        <li>
                          <b>Proven Performance:</b> Trusted by leading
                          industries for high-quality, reliable force and
                          pressure sensing technology.
                        </li>
                      </ul>
                    </div>
                    <p className="pt-4">
                      Discover how PiStarTech&apos;s{" "}
                      <b>force sensing resistors</b> and
                      <b>pressure sensitive mats</b> can enhance your
                      product&apos;s performance. Contact us today to learn more
                      about our innovative sensing solutions and how we can help
                      you meet your specific needs.
                    </p>
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

export default ForceSensingResistor;
