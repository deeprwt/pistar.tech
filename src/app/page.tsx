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
import mat from "@/assets/images/pistar/1.png";
import smartchair1 from "@/assets/images/pistar/smartchair.png";
import AwardsSection from "@/components/company/awards-section";
import TeamTwoArea from "@/components/team/team-v2-area";
import TeamOneArea from "@/components/team/team-v1-area";
import TeamThreeArea from "@/components/team/team-v3-area";
import TextFeatureSeven from "@/components/text-feature/text-feature-seven";
import TextFeatureEight from "@/components/text-feature/text-feature-eight";
import TextFeatureTen from "@/components/text-feature/text-freature-ten";
import PopUpModal from "@/components/common/popup-model";
import ImgPopUp from "@/components/common/img-popup";

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
  title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
  description:
    "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",
  keywords:
    "foot systems podiatry, flexible pressure sensor, Diabetic Foot Care ",
  openGraph: {
    title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
    description:
      "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",
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

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details">
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-4 col-md-6 m-auto wow fadeInLeft  order-last order-md-first">
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={smartchair1}
                        alt="screen"
                        className="lazy-img"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      {/* <div className="upper-title">management</div> */}
                      <h2>Why Smart Chair?</h2>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      In today&apos;s sedentary lifestyle, a person spends a
                      substantial amount of time in a sitting position. Having a
                      poor sitting posture can put more stress on specific
                      muscles and joints, forcing them to be overworked and
                      causing them to fatigue which results in back pains. This
                      is already leading to widespread chronic back pain and
                      other related health issues, particularly in young adults.
                      <br /> <br />
                      According to the estimates, 60% of the Indian population
                      experiences back pain at some time in their lives. It is
                      the third most common reason for a doctor&apos;s visit,
                      and as we all know that “Prevention is better than cure”,
                      We present to you, a patented smart seating solution
                      called- smart chair which is the best preventive measure
                      for all types of pains that may occur to incorrect seating
                      postures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                      <h2 style={{ color: "white" }}>
                        Why is the Podiascanner Mat so easy to adopt?
                      </h2>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                      style={{ color: "#fff9" }}
                    >
                      The <b>Podiascanner Mat</b> from PiStarTech Private
                      Limited is designed for easy adoption into any clinical
                      setting. Its portable, flexible design allows it to
                      seamlessly integrate into existing medical workflows
                      without the need for extensive training or changes to the
                      current setup. The device is user-friendly and highly
                      adaptable, making it suitable for clinics and hospitals of
                      any size. <br /> <br />
                      Since it provides instant, digital plantar pressure
                      analysis in just 5 seconds, healthcare professionals can
                      easily incorporate the Podiascanner Mat into their patient
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
                </div>
              </div>
            </div>
          </div>

          <div className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details">
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-4 col-md-6 m-auto wow fadeInLeft">
                    <div className="media-wrapper md-mt-60">
                      <Image
                        src={smartchair1}
                        alt="screen"
                        className="lazy-img"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      {/* <div className="upper-title">management</div> */}
                      <h2>Ensuring proper sitting posture with smart chair</h2>
                    </div>
                    <p className="text-lg mt-40 lg-mt-30 mb-30">
                      Incorrect posture puts pressure on muscles, joints, and
                      ligaments leading to many health problems like back, neck,
                      and shoulder aches. “Health is Wealth” and when we are
                      talking about a healthy body, posture is as important as
                      eating in the right way and regular exercising. Correct
                      posture means the bones are properly aligned, and the
                      weight of the body is well distributed so that the muscles
                      and joints can work in a more efficient, energetic, and
                      less stressful way. Hence, it is very important for us to
                      sit in a correct posture.
                      <br /> <br />
                      To solve the above-mentioned problem, we present a
                      flexible pressure-sensor-array-based smart chair that
                      analyses sitting posture in real-time using artificial
                      intelligence algorithms. The proposed smart chair will
                      monitor the sitting posture of the user and suggest
                      corrective action. It will identify the posture of the
                      person and tell us if the user is sitting in the right way
                      or not, by mapping the body pressure at the seat and at
                      the backrest. This will be done by training an artificial
                      intelligence-based software to detect the baseline
                      pressure distribution for an individual and then determine
                      the variations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <StaffingSolutions />
          {/* <TeamThreeArea /> */}

          {/* feedback one start */}
          {/* back to deepak accont */}
          {/* <FeedbackOne /> */}
          {/* feedback one end */}

          {/* <TextFeatureSeven /> */}

          {/* number counter start  */}
          {/* <TextFeatureHome style_2={true} /> */}
          {/* number counter end */}

          {/* clints logo start  */}
          <ClintLogo />
          {/* clints logo start  */}

          {/* partner logos start  */}
          <PartnersLogos />
          {/* partner logos end  */}

          {/* <div
            className="fancy-banner-two pt-80 lg-pt-80 pb-80 lg-pb-60 service-details"
          >
            <div className="container">
              <div className="wow fadeInUp">
                <div className="row">
                  <div className="col-lg-12 wow fadeInRight">
                    <div className="title-three mb-35 md-mb-20 details-meta">
                      <h2>
                        Welcome to PiStarTech – Revolutionizing Healthcare with
                        Cutting-Edge Pressure Measurement Sensors
                      </h2>
                    </div>
                    <p
                      className="text-lg mt-40 lg-mt-30 mb-30"
                    >
                      At PiStarTech, we are committed to enhancing healthcare
                      with innovative solutions that bridge the gap between
                      technology and medical practice. Our flagship product, the
                      <b> Diabetic PodiaScan Mat (Podiascanner Mat)</b>, is an
                      advanced, research-backed foot pressure analysis system
                      designed to support medical professionals in diagnosing
                      and treating foot-related ailments, particularly for
                      diabetic patients.
                      <br />
                      The Podiascanner Mat is a portable and flexible
                      pressure-sensing mat that provides both static and dynamic
                      podiatric pressure patterns (SPPP and DPPP). These
                      insights help doctors detect normal and abnormal foot
                      posture, track patient recovery post-injury or surgery,
                      and authenticate clinical findings with accurate,
                      quantifiable data. With just a 5-second scan, healthcare
                      professionals can prescribe customized treatments,
                      recommend proper footwear, and monitor progress over time.
                      <br />
                      Our mission is to make affordable, precise, and
                      evidence-based foot scanning technology accessible to a
                      wider range of medical professionals, empowering them to
                      provide better care. Whether you&#39;re looking to improve
                      diagnosis accuracy, enhance patient trust through
                      cutting-edge technology, or monitor patient progress
                      post-surgery, PiStarTech has you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <TextFeatureTen /> */}

          {/* <BlockFeatureSeven /> */}
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
          <ImgPopUp />
          {/* <PopUpModal /> */}
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
