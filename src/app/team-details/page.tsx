import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FooterTwo from "@/layout/footer/footer-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamTwoArea from "@/components/team/team-v2-area";
import TeamDetailsArea from "@/components/team/team-details-area";
import HeaderTwo from "@/layout/header/Header";
import FooterOne from "@/layout/footer/footer-one";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import service_bg from "@/assets/images/media/team-details.png";

export const metadata: Metadata = {
  title: "Team Details Page",
};

const TeamDetailsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Get in Touch"
            subtitle="Get our all info and also can message us directly from here"
            page="Founder Detials"
            bg_img={service_bg}
            // // shape={shape}
          />
          {/* <BreadcrumbTwo
            title="Single Team Details"
            subtitle="Find the team members details here with all the information"
            page="Team"
            style_4={true}
            col="col-xxl-7 col-xl-6 m-auto"
          /> */}
          {/* breadcrumb end */}

          {/* team details area start */}
          <TeamDetailsArea />
          {/* team details area end */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default TeamDetailsPage;
