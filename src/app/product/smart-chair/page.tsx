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
import seating from "@/assets/images/pistar/seating.png";

const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

export const metadata: Metadata = {
  title:
    "Posture-Perfect Smart Chair by PiStarTech | Elevate Comfort & Wellness",
  description:
    "Experience the future of sitting with PiStarTech's Posture-Perfect Smart Chair. Featuring advanced AI, real-time posture analysis, and ergonomic design, it promotes health and productivity. Energy-efficient, privacy-focused, and perfect for homes and offices—sit smarter today!",
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
  li7,
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
  li7?: string;
}) {
  return (
    <div className="card-style-twelve w-100 mt-30">
      <div className="d-flex">
        <h4 className="fw-bold mt-15 mb-15">{title}</h4>
      </div>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
      <ul className="style-none">
        {li1 && <li>{li1}</li>}

        {li2 && <li>{li2}</li>}

        {li3 && <li>{li3}</li>}

        {li4 && <li>{li4}</li>}

        {li5 && <li>{li5}</li>}

        {li6 && <li>{li6}</li>}
        {li7 && <li>{li7}</li>}
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
            title="Smart Chair "
            subtitle="Smart Chair by PiStarTech - Advanced Seating for Posture & Health Monitoring"
            page="Smart Chair "
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
                        Introducing the Posture-perfect Smart Chair – Elevating
                        Health and Comfort
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      Sitting may be a part of our everyday lives, but bad
                      posture doesn&apos;t have to be. At PiStarTech, we present
                      the revolutionary Posture-perfect Smart Chair, an
                      intelligent solution to ensure your sitting habits are as
                      healthy as they are comfortable.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/GjmX4fUCaDk?si=Vj0Cktp9E55MyHWL"
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        // referrerpolicy="strict-origin-when-cross-origin"
                        // allowfullscreen
                      ></iframe>
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
            className={`faq-section-one service-details pt-80 pb-80 bg-white  `}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 details-meta">
                  <div className="title-one mb-40 lg-mb-20">
                    <h3>Specifications</h3>
                  </div>
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col" className="fontcolorimp">
                          Technology
                        </th>
                        <th scope="col" className="fontcolorimp">
                          Piezoresistive
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-td">
                          Number of sensing pixels on seat
                        </td>
                        <td className="bg-td">512</td>
                      </tr>
                      <tr>
                        <td>Number of sensing pixels on backrest</td>
                        <td>512</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Sensors area on seat</td>
                        <td className="bg-td">48 cm x 48 cm</td>
                      </tr>
                      <tr>
                        <td>Sensor area on backrest</td>
                        <td>46 cm x 48 cm</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Thickness</td>
                        <td className="bg-td">0.4 mm</td>
                      </tr>
                      <tr>
                        <td>Material </td>
                        <td>PVC</td>
                      </tr>
                      <tr>
                        <td className="bg-td">Connectivity</td>
                        <td className="bg-td">Bluetooth</td>
                      </tr>
                      <tr>
                        <td>Weight range</td>
                        <td>10 kg - 120 kg </td>
                      </tr>
                    </tbody>
                  </table>
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
                  <div className="col-lg-12 wow fadeInRight order-last order-md-first">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> SMART TECHNOLOGY
                        </div>
                      </div>
                      <h3>Why Choose the Posture-perfect Smart Chair?</h3>
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
                    <div className="card-style-twelve w-100 mt-30 text-feature-seven">
                      <div className="d-flex">
                        {/* <div
          className="icon tran3s d-flex align-items-center justify-content-center rounded-circle"
          style={{ marginRight: "2rem" }}
        >
          <Image src={icon} alt="icon" className="lazy-img" />
        </div> */}
                      </div>
                      <ul className="style-none font-bold-none">
                        <li>
                          <b>Advanced Posture Recognition</b> <br />
                          Equipped with state-of-the-art patented pressure
                          sensing technology and Artificial Intelligence, the
                          Posture-perfect Smart Chair identifies and classifies
                          seven common sitting postures with remarkable
                          accuracy. Whether you&apos;re sitting straight,
                          leaning back, or crossing your legs, our chair has you
                          covered.
                        </li>
                        <li>
                          <b>Promotes Health & Well-being</b> <br />
                          Designed to reduce the risks associated with poor
                          posture, such as back pain, muscle strain, and
                          metabolic disorders. By encouraging proper alignment,
                          the SMART CHAIR safeguards your long-term health.
                        </li>
                        <li>
                          <b>Cutting-Edge Technology</b> <br />
                          Utilizing artificial intelligence and real-time data
                          analysis, the chair offers unparalleled performance
                          with a remarkable accuracy. It&apos;s a smart choice
                          for homes, offices, and healthcare environments.
                        </li>
                        <li>
                          <b>Energy-Efficient Design</b> <br />
                          With minimal power consumption, the SMART CHAIR
                          operates efficiently, ensuring sustained performance
                          without frequent charging or maintenance.
                        </li>
                        <li>
                          <b>Privacy & Comfort Assured</b> <br />
                          Unlike vision-based solutions, the SMART CHAIR
                          respects your privacy, offering a seamless,
                          non-intrusive monitoring experience.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft order-first order-md-last">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={mat1}
                        alt="screen"
                        className="lazy-img rounded"
                        layout="responsive"
                      />
                    </div>
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
                <div className="row">
                  <div className="col-lg-6 wow fadeInRight order-first order-md-last">
                    <div className="title-three mb-35 md-mb-20">
                      <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> POSTURE-PERFECT SMART
                          CHAIR
                        </div>
                      </div>
                      <h3>The Future of Sitting Starts Here</h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      Reimagine comfort with technology designed to support your
                      health. Say goodbye to slouching and discomfort and step
                      into a new era of <b>smart sitting</b> with the{" "}
                      <b>Posture-perfect Smart Chair.</b>
                    </p>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      <b>Discover More</b> or <b>Contact Us</b> to learn how you
                      can make your workplace or home smarter, healthier, and
                      more productive with the{" "}
                      <b>Posture-perfect Smart Chair</b> by PiStarTech.
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
                          <div className="line-2"></div>Innovative. Reliable.
                          Transformative.
                        </div>
                      </div>
                      <h3>Why SMART CHAIR?</h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      Whether you&apos;re working long hours at the office or
                      enjoying leisure time at home, the <b>SMART CHAIR</b>{" "}
                      adapts to your needs, giving you the comfort and health
                      benefits you deserve.
                    </p>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      With built-in features like posture correction, dynamic
                      lumbar support, and pressure redistribution, it ensures
                      that your body is supported in all the right places.
                      Advanced sensors monitor your sitting habits, providing
                      insights and reminders to encourage better posture and
                      healthier sitting practices.
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
                          <div className="line-2"></div>Get in Touch
                        </div>
                      </div>
                      <h3>Step into the Future of Sitting</h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      The Posture-perfect Smart Chair is more than
                      furniture—it&apos;s your personal wellness coach,
                      engineered to support your body and enhance your
                      productivity. With PiStarTech&apos;s legacy of innovation,
                      you&apos;re not just sitting; you&apos;re making a
                      statement about health, technology, and progress.
                    </p>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      Get in Touch to bring the Posture-perfect Smart Chair into
                      your life today. Together, let&apos;s elevate the way you
                      sit.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft order-last order-md-first">
                    <div className="media-wrapper md-mt-60 pe-xxl-5 pe-4 ps-xxl-5">
                      <Image
                        src={seating}
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
                      <h3>Features of a Smart Chair</h3>
                    </div>
                    <div className="card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>Posture Monitoring Sensors:</b> Smart chairs are
                          embedded with sensors that analyze your sitting
                          posture and detect misalignment.
                        </li>
                        <li>
                          <b>Real-Time Alerts: </b> These chairs notify users
                          through app notifications when they slouch or sit
                          incorrectly.
                        </li>
                        <li>
                          <b>Ergonomic Design:</b>They come with adjustable
                          lumbar support, armrests, and headrests, ensuring
                          comfort and correct posture.
                        </li>
                        <li>
                          <b>App Integration:</b> Smart chairs are connected
                          with mobile apps, providing personalized posture
                          analytics and improvement tips.
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
            className="fancy-banner-two text-feature-seven pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            style={{ background: "#f5f5f5" }}
          >
            <div className="container details-meta">
              <div className="wow fadeInUp">
                <div className="row">
                  {/* <div className="col-lg-6 wow fadeInRight ">
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

                    >
                      With a robust sensor design, the FlePS Mat delivers
                      accurate, repeatable data. It provides high-speed,
                      high-resolution pressure measurements for human
                      performance testing. The system ensures reliable data
                      collection, even during long-term testing.
                    </p>
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
                  </div> */}

                  <div className="border-bottom mt-40 pb-50 sm-pb-30">
                    <div className="row">
                      <div className="col-lg-6 d-flex wow fadeInUp">
                        <CardItem
                          title="Key Features at a Glance"
                          li1="Real-time posture analysis and feedback"
                          li2="Durable and ergonomically designed for extended use"
                          li3="Easy-to-integrate with health tracking systems"
                          li4="Powered by innovative flex sensor technology"
                          li5="Portable and lightweight for enhanced mobility"
                          // subtitle="0% charge for online money transfer from you wallet instant."
                        />
                      </div>
                      <div
                        className="col-lg-6 d-flex wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <CardItem
                          title="The SMART CHAIR: Where Technology Meets Wellness"
                          li1="Sitting straight"
                          li2="Left recline"
                          li3="Right recline"
                          li4="Slouching"
                          li5="Leaning backward"
                          li6="Crossing the left leg"
                          li7="Crossing the right leg"
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
