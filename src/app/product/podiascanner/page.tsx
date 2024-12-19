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
  title: "High-Quality Pressure Mats for Foot Health Assessment",
  description:
    "PiStar offers pressure mats designed to capture accurate foot pressure data, enabling effective assessment and early detection of foot health issues.",
  keywords: "IT consulting, financial growth, insightful solutions",
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

const Podiascanner = () => {
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
            title="Podia Scanner "
            subtitle="Foot Scan Podiascan: Precision Scanning with Pressure Sensors"
            page="Podia Scanner "
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
                        Innovative podiascanner by PiStarTech
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      At PiStarTech, we specialize in advanced{" "}
                      <b>wireless pressure sensor</b> solutions designed to meet
                      the evolving needs of industries that demand precise,
                      real-time data. Our cutting-edge{" "}
                      <b>pressure sensor technology</b> offers high accuracy,
                      reliability, and efficiency in various applications, from
                      industrial automation to healthcare and biomechanics.{" "}
                      <br />
                      As one of the leading <b>pressure sensor manufacturers</b>
                      , we focus on providing <b>pressure measuring devices</b>{" "}
                      that deliver consistent and accurate readings. Our sensors
                      stand out for their ability to measure and monitor{" "}
                      <b>surface pressure </b>
                      with remarkable precision, enabling informed
                      decision-making across sectors.
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
                  <div className="col-lg-12 wow fadeInUp">
                    <p
                      className="text-lg mt-10 lg-mt-20 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      With a commitment to <b>pressure sensor accuracy</b>,
                      PiStarTech&apos;s sensors ensure that every reading is
                      reliable, even in challenging environments. Explore our
                      range of <b>pressure measuring devices</b> designed for
                      applications that require consistent and accurate{" "}
                      <b>pressure sensor technology</b>. Experience the
                      PiStarTech difference, where innovation meets precision.
                    </p>
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
                <h3 className="pb-4">Overview</h3>
                <div className="row">
                  <div className="col-lg-6 wow text-extra fadeInRight order-last order-md-first">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SMART TECHNOLOGY
                        </div>
                      </div>
                      <h3>Features of PiStarTech&apos;s Pressure Sensors</h3>
                    </div>
                    <div className="card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>Advanced Wireless Connectivity :</b> PiStarTech&apos;s
                          <b>wireless pressure sensor</b> solutions provide
                          real-time data transmission without the limitations of
                          wired setups, making them ideal for remote monitoring
                          and flexible installations.
                        </li>
                        <li>
                          <b>High Accuracy and Precision:</b> Engineered for
                          <b>pressure sensor accuracy</b>, our devices offer
                          precise measurements to meet the needs of critical
                          applications, ensuring minimal error and consistent
                          data integrity.
                        </li>
                        <li>
                          <b>Robust Pressure Sensor Technology:</b> Built with
                          innovative <b>pressure sensor technology</b>, our
                          sensors are reliable in various environmental
                          conditions and are designed to withstand pressure
                          fluctuations, delivering dependable performance.
                        </li>
                        <li>
                          <b>Compact and Surface-Friendly Design:</b> Our
                          <b>surface pressure sensors</b> are designed to
                          seamlessly fit on surfaces, making them suitable for a
                          wide range of industrial, medical, and consumer
                          applications. for patients.
                        </li>
                        <li>
                          <b>Durability and Reliability:</b>As a trusted
                          <b>pressure sensor manufacturer</b>, PiStarTech
                          ensures that each sensor is crafted for longevity and
                          is tested for durability in demanding environments,
                          from high-pressure settings to harsh weather
                          conditions.
                        </li>
                        <li>
                          <b>Easy Integration and Scalability:</b>Our
                          <b>pressure measuring devices</b> are built to
                          integrate smoothly into existing systems, with
                          scalable options that grow with your operational
                          requirements.
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
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SPORTS PERFORMANCE
                        </div>
                      </div>
                      <h3>Why Choose PiStarTech Pressure Sensor?</h3>
                    </div>
                    <div className="card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>Proven Expertise and Innovation :</b>PiStarTech has
                          a track record of delivering reliable{" "}
                          <b>pressure measuring devices</b> that incorporate the
                          latest advancements in{" "}
                          <b>pressure sensor technology</b>. Our team
                          continuously innovates to provide sensors that meet
                          the highest industry standards.
                        </li>
                        <li>
                          <b>Unmatched Accuracy for Critical Applications:</b>
                          Our focus on <b>pressure sensor accuracy</b> makes
                          PiStarTech a preferred choice for industries where
                          precision is crucial, such as healthcare, aerospace,
                          and manufacturing.
                        </li>
                        <li>
                          <b>Customized Solutions for Diverse Needs:</b> Whether
                          you need <b>surface pressure sensors</b> for unique
                          applications or <b>wireless pressure sensors</b> for
                          remote monitoring, PiStarTech offers tailored
                          solutions to suit specific use cases.
                        </li>
                        <li>
                          <b>Comprehensive Support and Maintenance:</b> As a top{" "}
                          <b>pressure sensor manufacturer</b>, PiStarTech
                          provides end-to-end support, from product selection to
                          installation and maintenance, ensuring a seamless
                          experience for our clients.
                        </li>
                        <li>
                          <b>Sustainability and Efficiency</b>
                          PiStarTech designs sensors that are energy-efficient
                          and sustainable, minimizing environmental impact while
                          maximizing operational efficiency.
                        </li>
                      </ul>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "rgb(0 0 0 / 60%);" }}
                    >
                      Choose PiStarTech for unparalleled quality in{" "}
                      <b>pressure sensor technology</b>—solutions that drive
                      accuracy, reliability, and innovation in every
                      application.
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

export default Podiascanner;
