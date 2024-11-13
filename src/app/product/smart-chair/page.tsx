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

const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

export const metadata: Metadata = {
  title: "DiaPs Mat - Pistar Tech",
  description:
    "Unlock financial growth with CGB Solutions experienced IT consulting & insightful solutions. Navigate your journey with us!",
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
  title: string;
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

const Chair = () => {
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
            title="DiaPs Mat"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="DiaPs Mat"
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
                        Why is the DiaPS Mat so easy to adopt?
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      The DiaPS Mat from PiStarTech Private Limited is designed
                      for easy adoption into any clinical setting. Its portable,
                      flexible design allows it to seamlessly integrate into
                      existing medical workflows without the need for extensive
                      training or changes to the current setup. The device is
                      user-friendly and highly adaptable, making it suitable for
                      clinics and hospitals of any size. <br /> <br />
                      Since it provides instant, digital plantar pressure
                      analysis in just 5 seconds, healthcare professionals can
                      easily incorporate the DiaPS Mat into their patient
                      evaluation process, streamlining diagnosis and enhancing
                      accuracy without interrupting day-to-day operations. Its
                      affordability and ease of use make it accessible to a wide
                      range of practitioners, ensuring they can upgrade to
                      modern foot analysis technology with minimal effort.
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
                  {/* <div className="col-lg-10 m-auto">
                    <div className="title-one details-meta">
                      <h3 style={{ color: "white" }}>
                        Why is the DiaPS Mat so easy to adopt?
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      The DiaPS Mat from PiStarTech Private Limited is designed
                      for easy adoption into any clinical setting. Its portable,
                      flexible design allows it to seamlessly integrate into
                      existing medical workflows without the need for extensive
                      training or changes to the current setup. The device is
                      user-friendly and highly adaptable, making it suitable for
                      clinics and hospitals of any size.
                    </p>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      Since it provides instant, digital plantar pressure
                      analysis in just 5 seconds, healthcare professionals can
                      easily incorporate the DiaPS Mat into their patient
                      evaluation process, streamlining diagnosis and enhancing
                      accuracy without interrupting day-to-day operations. Its
                      affordability and ease of use make it accessible to a wide
                      range of practitioners, ensuring they can upgrade to
                      modern foot analysis technology with minimal effort.
                    </p>
                  </div> */}
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
                  <div className="col-lg-6 wow fadeInRight order-last order-md-first">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SMART TECHNOLOGY
                        </div>
                      </div>
                      <h3>PiStarTech FlePS Mat</h3>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      Evaluate plantar pressure, foot function, and gait with
                      PiStarTech&#39;s FlePS Mat. This advanced mat is portable,
                      flexible, and lightweight, designed to capture accurate
                      data on foot pressure without compromising natural
                      movement.
                    </p>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      Avoid lengthy setup and recalibration processes, ensuring
                      smooth and reliable testing, whether in a clinical setting
                      or in the field.
                    </p>
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
                  <div className="col-lg-6 wow fadeInRight order-first order-md-last">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SPORTS PERFORMANCE
                        </div>
                      </div>
                      <h3>Enhance Foot Health & Performance</h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      The FlePS Mat enables in-depth plantar pressure analysis,
                      helping to identify pressure points that could lead to
                      ulcers, calluses, or other foot issues. It also identifies
                      asymmetries between the left and right foot for more
                      accurate diagnoses.
                    </p>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      Use the high-resolution sensor mat to analyze dynamic foot
                      movement and reduce the risk of injury during athletic
                      performance, helping athletes to improve through
                      data-driven insights.
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
                  <div className="col-lg-6 wow fadeInRight order-last order-md-first">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> Durable Hardware
                        </div>
                      </div>
                      <h3>Designed for Long-Term Use</h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      The FlePS Mat is built with durable sensors capable of
                      withstanding continuous use in both research and
                      performance testing environments. Its user-friendly design
                      enables quick setup with a simple USB connection, making
                      it convenient and accessible.
                    </p>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      No need to spend hours setting up—get started within
                      minutes, maximizing valuable lab time for testing and
                      research.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft order-first order-md-last">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={mat3}
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
                  <div className="col-lg-6 wow fadeInRight order-first order-md-last">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div>Plantar Pressure & Gait
                          Analysis Software
                        </div>
                      </div>
                      <h3>Feature-Rich Software</h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      The FlePS Mat comes with comprehensive software that
                      allows users to visualize plantar pressure data with
                      precision. With detailed visualizations, you can make
                      confident, data-backed decisions. The software provides
                      static and dynamic pressure measurement data for foot and
                      gait analysis.
                    </p>
                    {/* <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                    >
                      Evaluate gait, plantar pressure, and foot function with
                      insole sensors that are reliable and durable enough to
                      accurately capture data wherever activity takes place —
                      and without compromising natural motion.
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft order-last order-md-first">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={data}
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
            className="fancy-banner-two text-feature-seven pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            style={{ background: "#f5f5f5" }}
          >
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-6 wow fadeInRight ">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div>Specifications &
                          Performance
                        </div>
                      </div>
                      <h3>Lab-Quality Data in the Field</h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      With a robust sensor design, the FlePS Mat delivers
                      accurate, repeatable data. It provides high-speed,
                      high-resolution pressure measurements for human
                      performance testing. The system ensures reliable data
                      collection, even during long-term testing.
                    </p>
                    {/* <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                    >
                      Evaluate gait, plantar pressure, and foot function with
                      insole sensors that are reliable and durable enough to
                      accurately capture data wherever activity takes place —
                      and without compromising natural motion.
                    </p> */}
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={mat0}
                        alt="screen"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
                  </div>

                  <div className="border-bottom mt-40 pb-50 sm-pb-30">
                    <div className="row">
                      <div className="col-lg-6 d-flex wow fadeInUp">
                        <CardItem
                          title="Key Features"
                          li1="Portable, flexible, and lightweight pressure sensing mat for plantar pressure analysis."
                          li2="Simple and easy to use with a slim convenient design."
                          li3="Provides quantifiable pressure data."
                          li4="Fast and easy setup with USB connection."
                          li5="Most affordable and reliable."
                          li6="Provides static and dynamic pressure measurement data for
foot and gait analysis."
                          // subtitle="0% charge for online money transfer from you wallet instant."
                        />
                      </div>
                      <div
                        className="col-lg-6 d-flex wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <CardItem
                          title="Applications"
                          li1="Helps in identifying pathologies and making accurate diagnoses."
                          li2="Reduce the incidence of pressure sores or ulcers on feet by
analyzing high-pressure points."
                          li3="Identify areas of potential ulcers and calluses."
                          li4="Identify plantar pressure asymmetries between the left and
right foot."
                          li5="A screening device for complete plantar pressure analysis."
                          li6="Suggest customized insoles according to the orthotics."
                          // subtitle="Pay google & apple payment with your card without any hassle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* block feature one area start */}
          {/* <BlockFeatureOne style_2={true} /> */}
          {/* block feature one area end */}

          {/* text feature one area start */}
          {/* <TextFeatureThree style_2={true} /> */}
          {/* text feature one area end */}

          {/* <BlockFeatureAbout style_2={true} /> */}

          {/* <HowWeDo /> */}

          {/* feedback one start */}
          {/* <FeedbackOne cls="top-border pt-80 pb-80" /> */}
          {/* feedback one end */}

          <div
            className={`faq-section-one service-details pt-80 pb-80 bg-white  `}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 details-meta">
                  <div className="title-one mb-40 lg-mb-20">
                    <h3>Specifications</h3>
                    <p className="text-lg mb-40 lg-mb-20">Need a mat with your own specifications? We will <b>customize</b> it for you!</p>
                  </div>
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col" className="fontcolorimp">Features</th>
                        <th scope="col" className="fontcolorimp">FlePS Mat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-td">Overall Area</td>
                        <td className="bg-td">50 cm x 50 cm</td>
                      </tr>
                      <tr>
                        <td>Sensing Area</td>
                        <td>42 cm x 42 cm</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Number of Sensors</td>
                        <td className="bg-td">1024</td>
                      </tr>
                      <tr>
                        <td>Matrix Topology</td>
                        <td>32 x 32</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Max Weight Range</td>
                        <td className="bg-td">40-120 kg</td>
                      </tr>
                      <tr>
                        <td>Scan Rate</td>
                        <td>20 Hz</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Connection</td>
                        <td className="bg-td">USB Cable</td>
                      </tr>
                      <tr>
                        <td>Operating Temp Range</td>
                        <td>0°C to 50°C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

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

          {/* <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <DottedMap />
            </div>
          </div> */}

          {/* blogs start */}
          {/* <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" /> */}
          {/* blogs end */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Chair;
