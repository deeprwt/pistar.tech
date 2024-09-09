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
import img4 from "@/assets/images/media/doctor.jpg";
import AwardsSection from "@/components/company/awards-section";

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
          <HeroVideoOne />

          {/* hero banner end */}

          {/* number counter start  */}
          <TextFeatureHome style_2={true} />
          {/* number counter end */}

          {/* whatsnew section start */}
          {/* <WhatsNew /> */}
          {/* whatsnew section end */}

          {/* about us content start  */}
          <TextFeatureHome />
          {/* about us content start  */}

          {/* <TextFeatureNine /> */}

          {/* tabs are for solutions start */}
          {/* <TabsData /> */}
          <BlockFeatureSeven />
          {/* tabs are for solutions start */}

          {/* <StaffingSolutions /> */}

          {/* clints logo start  */}
          <ClintLogo />
          {/* clints logo start  */}

          {/* Ceo Profile logo start  */}
          {/* <CeoData /> */}
          {/* CEO Profile logo end  */}

          {/* partner logos start  */}
          <PartnersLogos />
          {/* partner logos end  */}

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
          {/* <BlockFeatureThree /> */}
          <BlockFeatureThree />
          {/* block feature three end */}

          {/* feedback one start */}
          <FeedbackOne />
          {/* feedback one end */}

          {/* team section one start */}
          {/* <TeamSectionOne /> */}
          {/* team section one end */}

          {/* faq section start */}
          {/* <FaqSectionOne /> */}
          {/* faq section end */}

          {/* blog item start */}
          {/* <HomeTwoBlogs /> */}
          <PortfolioTwo />
          {/* blog item end */}

          <AwardsSection />

          {/* fancy banner two start */}
          <FancyBannerTwo />
          {/* fancy banner two end */}
          {/* <FancyVideo /> */}
          <div className="contact-us-section pt-80 lg-pt-80" style={backImg2}>
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper lg-mt-40">
                  <div className="row">
                    <div className="col-lg-5 d-flex">
                      <Image
                        src={img4}
                        alt="icon"
                        layout="responsive"
                        className="lazy-img me-auto ms-auto rounded"
                      />
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
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
