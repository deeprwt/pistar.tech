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
  title: "Foot Pressure Mapping & Mattress Pressure Mapping | PiStarTech",
  description:
    "Explore PiStarTech's advanced foot pressure mapping technology and mattress pressure mapping systems for accurate foot health and comfort analysis. Contact us today!",
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

const FootPressureMapping = () => {
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
            title="Foot Pressure Mapping"
            subtitle="Precision Insights with Foot Pressure Mapping Technology"
            page="Foot Pressure Mapping"
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
                        Advanced Foot Pressure Mapping for Precision and Comfort
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      At PiStarTech, we specialize in{" "}
                      <b>foot pressure mapping</b>
                      technology, offering advanced solutions for accurate{" "}
                      <b>foot pressure maps</b> that help optimize foot health,
                      comfort, and performance. Our cutting-edge{" "}
                      <b>foot mapping technology </b> and
                      <b>foot pressure mapping systems</b> are trusted by
                      professionals in healthcare, sports, and orthotics.
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
                      <h3>What is Foot Pressure Mapping? </h3>
                      <p>
                        <b>Foot pressure mapping</b> is a technology that uses
                        sensors to measure the distribution of pressure across
                        the foot. By analyzing the <b>foot pressure map</b>, we
                        can gain valuable insights into the way force is
                        distributed during standing, walking, or running. This
                        data is crucial for diagnosing foot issues, improving
                        gait analysis, and designing custom orthotics and
                        footwear.
                      </p>
                    </div>
                    <div className="title-three card-style-twelve w-100 mt-30">
                    <div>
                        <div className="upper-title d-flex align-items-center">
                          <div className="line-2"></div> Key Features :
                        </div>
                      </div>
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>High Precision:</b>Our foot pressure mapping
                          systems provide highly detailed pressure data,
                          offering a clear picture of foot health.
                        </li>
                        <li>
                          <b>Real-Time Analysis:</b>Instant feedback on pressure
                          distribution for quicker diagnosis and
                          decision-making.
                        </li>
                        <li>
                          <b>Customizable Reports: </b> Tailored reports for
                          individual assessments and treatment planning.
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
                      <h3>Mattress Pressure Mapping for Comfort and Support</h3>
                      <p>
                        PiStarTech also offers <b>mattress pressure mapping</b>
                        solutions to evaluate the distribution of pressure on
                        mattresses. This technology is essential for
                        understanding how different sleeping positions and body
                        types affect pressure distribution on a mattress,
                        ultimately helping to improve sleep comfort and overall
                        health. Whether for consumer use or medical evaluations,
                        <b> mattress pressure mapping</b> ensures the right
                        level of support.
                      </p>
                    </div>
                    <div className="card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <h3>Applications of Foot Pressure Mapping Technology</h3>
                      <p>
                        Our <b>foot mapping technology</b> is used across
                        various fields, including:
                      </p>
                      <ul className="style-none">
                        <li>
                          <b>Orthotics and Podiatry:</b>Customize orthotic
                          designs based on precise pressure data for better
                          support.
                        </li>
                        <li>
                          <b>Sports Science: </b> Optimize performance by
                          analyzing foot pressure during running, walking, and
                          other activities.
                        </li>
                        <li>
                          <b>Medical Diagnostics:</b> Detect and treat
                          foot-related health issues such as diabetes,
                          neuropathy, and ulcers with accurate pressure
                          analysis.
                        </li>
                      </ul>
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
                        Why Choose PiStarTech&apos;s Foot Pressure Mapping Solutions?
                      </h3>
                    </div>
                    <div className="card-style-twelve w-100 mt-30">
                      <div className="d-flex"></div>
                      <ul className="style-none">
                        <li>
                          <b>Innovative Technology:</b> Our advanced sensors
                          provide unmatched accuracy in foot pressure and
                          mattress pressure mapping.
                        </li>
                        <li>
                          <b>Comprehensive Insights: </b> Detailed pressure maps
                          allow for effective diagnosis, treatment, and design
                          of custom solutions.
                        </li>
                        <li>
                          <b>Proven Reliability:</b> Trusted by healthcare
                          providers, sports professionals, and manufacturers for
                          high-quality foot and mattress pressure mapping
                          systems.
                        </li>
                      </ul>
                    </div>
                    <p className="pt-4">
                      Explore how PiStarTech&apos;s <b>foot pressure mapping technology</b>
                      and <b>foot pressure mapping systems</b> can improve foot health,
                      comfort, and performance. Contact us today to learn more
                      about our innovative solutions!
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

export default FootPressureMapping;
