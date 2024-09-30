import HomeTwoBlogs from "@/components/blogs/home-2-blogs";
import ClintLogo from "@/components/clint-logo/logo";
import FancyBannerOne from "@/components/fancy-banner/fancy-banner-one";
import FancyBannerTwo from "@/components/fancy-banner/fancy-banner-two";
import FaqSectionOne from "@/components/faq/faq-section-one";
import FeedbackOne from "@/components/feedback/feedback-one";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import HowWeDo from "@/components/home-data/how-we-do";
import StaffingSolutions from "@/components/home-data/staffing-solutions";
import WhatsNew from "@/components/home-data/whats-new";
import CeoData from "@/components/leadership/ceo";
import PartnersLogos from "@/components/partners/partners-logo";
import TabsData from "@/components/tabs/tabs";
import TeamSectionOne from "@/components/team/team-section-one";
import TextFeatureHome from "@/components/text-feature/text-feature-home";
import TextFeatureNine from "@/components/text-feature/text-feature-nine";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import FooterOne from "@/layout/footer/footer-one";
import Header from "@/layout/header/Header";
import Wrapper from "@/layout/wrapper";
import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import HeroVideoOne from "@/components/hero-banner/hero-video-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FancyBannerFive from "@/components/fancy-banner/fancy-banner-five";
import FancyBannerFour from "@/components/fancy-banner/fancy-banner-four";
import FancyBannerSix from "@/components/fancy-banner/fancy-banner-six";
import BlockFeatureSeven from "@/components/block-feature/block-feature-seven";
import BlockFeatureThree from "@/components/block-feature/block-feature-three";
import FancyVideo from "@/components/fancy-banner/fancy-video";
import PortfolioTwo from "@/components/portfolio/portfolio-two";
import ContactArea from "@/components/contact/contact-area";
import ContactForm from "@/components/forms/contact-form";
import icon_1 from "@/assets/images/icon/icon_90.svg";
import icon_2 from "@/assets/images/icon/icon_91.svg";
import icon_3 from "@/assets/images/icon/icon_92.svg";
import Link from "next/link";
import bg_image2 from "@/assets/images/background/counter_dark_pattern.png";
import bg_image1 from "@/assets/images/background/background-explore.jpg";
import img4 from "@/assets/images/media/doctor.jpg";
import mat from "@/assets/images/pistar/mat.png";
import AwardsSection from "@/components/company/awards-section";
import TeamTwoArea from "@/components/team/team-v2-area";
import TeamOneArea from "@/components/team/team-v1-area";
import TeamThreeArea from "@/components/team/team-v3-area";
import TextFeatureSeven from "@/components/text-feature/text-feature-seven";
import TextFeatureEight from "@/components/text-feature/text-feature-eight";
import TextFeatureTen from "@/components/text-feature/text-freature-ten";
import PopUpModal from "@/components/common/popup-model";

const backImg1 = {
  backgroundImage: `url('${bg_image1.src}')`,
  backgroundSize: "cover,auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

const backImg2 = {
  backgroundImage: `url('${bg_image2.src}')`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundAttachment: "local",
  backgroundColor: "#292e31",
};

export const metadata = {
  title: "Pistar",
  openGraph: {
    title: "Pistar",
    description: "Pistar is a...",
    images: [
      {
        url: "@/assets/images/logo/logo.png", // URL of the image
        width: 1200, // Optional: specify the width of the image
        height: 630, // Optional: specify the height of the image
        alt: "Pistar logo Image", // Optional: alternative text for the image
      },
    ],
  },
};

export default function HomePage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <Header />
        {/* header end */}
        <main>
          {/* hero banner start */}
          {/* <HeroVideoOne /> */}
          <HeroBannerTwo />

          {/* hero banner end */}

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
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={mat}
                        alt="screen"
                        className="lazy-img"
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

          <StaffingSolutions />
          <TeamThreeArea />

          {/* feedback one start */}
          <FeedbackOne />
          {/* feedback one end */}

          <TextFeatureSeven />

          {/* number counter start  */}
          <TextFeatureHome style_2={true} />
          {/* number counter end */}

          {/* clints logo start  */}
          <ClintLogo />
          {/* clints logo start  */}

          {/* partner logos start  */}
          <PartnersLogos />
          {/* partner logos end  */}

          <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
            // style={backImg1}
            // style={{ background: "#292e31" }}
          >
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-12 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      <h3>
                        Welcome to PiStarTech Private Limited – Innovating
                        Healthcare Technology
                      </h3>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      // style={{ color: "#fff9" }}
                    >
                      At PiStarTech, we are committed to enhancing healthcare
                      with innovative solutions that bridge the gap between
                      technology and medical practice. Our flagship product, the
                      Diabetic PodiaScan Mat (DiaPS Mat), is an advanced,
                      research-backed foot pressure analysis system designed to
                      support medical professionals in diagnosing and treating
                      foot-related ailments, particularly for diabetic patients.
                      <br />
                      The DiaPS Mat is a portable and flexible pressure-sensing
                      mat that provides both static and dynamic podiatric
                      pressure patterns (SPPP and DPPP). These insights help
                      doctors detect normal and abnormal foot posture, track
                      patient recovery post-injury or surgery, and authenticate
                      clinical findings with accurate, quantifiable data. With
                      just a 5-second scan, healthcare professionals can
                      prescribe customized treatments, recommend proper
                      footwear, and monitor progress over time.
                      <br />
                      Our mission is to make affordable, precise, and
                      evidence-based foot scanning technology accessible to a
                      wider range of medical professionals, empowering them to
                      provide better care. Whether you're looking to improve
                      diagnosis accuracy, enhance patient trust through
                      cutting-edge technology, or monitor patient progress
                      post-surgery, PiStarTech has you covered.
                    </p>
                  </div>
                  {/* <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={mat}
                        alt="screen"
                        className="lazy-img"
                        layout="responsive"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <TextFeatureTen />

          <BlockFeatureSeven />
          <PortfolioTwo />
          {/* blog item end */}
          <AwardsSection />
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
          <PopUpModal />
          {/* fancy banner two start */}
          {/* <FancyBannerTwo /> */}
          {/* fancy banner two end */}
          {/* <FancyVideo />   */}
          {/* whatsnew section start */}
          {/* <WhatsNew /> */}
          {/* whatsnew section end */}
          {/* <TextFeatureEight /> */}
          {/* about us content start  */}
          {/* <TextFeatureHome /> */}
          {/* about us content start  */}

          {/* <TextFeatureNine /> */}
          {/* Ceo Profile logo start  */}
          {/* <CeoData /> */}
          {/* CEO Profile logo end  */}

          {/* tabs are for solutions start */}
          {/* <TabsData /> */}

          {/* tabs are for solutions start */}
          {/* fancy banner one start */}
          {/* <FancyBannerOne /> */}
          {/* fancy banner one end */}

          {/* block feature one start */}
          {/* <BlockFeatureOne /> */}
          {/* block feature one end */}

          {/* text feature one start */}
          {/* <TextFeatureOne /> */}
          {/* text feature one end */}

          {/* block feature two start */}
          {/* <BlockFeatureTwo /> */}
          {/* block feature two end */}

          {/* block feature three start */}

          {/* team section one start */}
          {/* <TeamSectionOne /> */}
          {/* team section one end */}

          {/* faq section start */}
          {/* <FaqSectionOne /> */}
          {/* faq section end */}

          {/* blog item start */}

          {/* <BlockFeatureThree /> */}
          {/* <BlockFeatureThree /> */}
          {/* block feature three end */}
          {/* <HomeTwoBlogs /> */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
