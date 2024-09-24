import React from "react";
import Link from "next/link";
import Image from "next/image";
import sindhu from "@/assets/images/cgbhome/sindhuUpdate.png";
import linkd from "@/assets/images/icon/linkedinicon.png";
import anisfatema from "@/assets/images/team/anisfatema.jpg";
import aftab from "@/assets/images/team/aftab.jpg";

const TeamDetailsArea = () => {
  return (
   <>
    <div className="team-details light-bg border-top pt-120 pb-60 lg-pt-80 ">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-4 align-self-center">
              {/* <div
                className="member-img"
                style={{ backgroundImage: `url(${bg_img.src})` }}
              > */}
                <Image
                  src={anisfatema}
                  layout="responsive"
                  alt="Anis Fatema"
                  className="w-100"
                ></Image>

                {/* <Image src={bg_img} alt="Sindhu mam profile"></Image> */}
              {/* </div> */}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                <h2 className="name fw-bold m-0 d-flex justify-content-between align-items-center">Anis Fatema<Link
                        href="https://www.linkedin.com/in/anis-f-1034765a/"
                        className=""
                      >
                        <Image
                          src={linkd}
                          width={50}
                          height={50}
                          alt="linkedinicon"
                        ></Image>
                      </Link></h2>
                <div className="post">CEO, PiStar Tech</div>
                <h6 className="fw-bold">About Me</h6>
                <p className="m-0">
                Sindhu brings over two decades of experience in managing
                  strategic engagements and leverages her vast operational
                  expertise to advise companies on expanding their business by
                  discovering new opportunities and identifying untapped revenue
                  streams, alongside developing leadership capital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="team-details light-bg border-top pt-60 pb-120 lg-pt-80 ">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-4 align-self-center order-lg-last">
              {/* <div
                className="member-img"
                style={{ backgroundImage: `url(${bg_img.src})` }}
              > */}
                <Image
                  src={aftab}
                  layout="responsive"
                  alt="Sindhu profile"
                  className="w-100"
                ></Image>

                {/* <Image src={bg_img} alt="Sindhu mam profile"></Image> */}
              {/* </div> */}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 h-100">
                <h2 className="name fw-bold m-0 d-flex justify-content-between align-items-center">Prof. Aftab Hussain<Link
                        href="https://www.linkedin.com/in/aftab-m-hussain-b9b22518/"
                        className=""
                      >
                        <Image
                          src={linkd}
                          width={50}
                          height={50}
                          alt="linkedinicon"
                        ></Image>
                      </Link></h2>
                <div className="post">Technical Advisor</div>
                <h6 className="fw-bold">About Me</h6>
                <p className="m-0">
                Sindhu brings over two decades of experience in managing
                  strategic engagements and leverages her vast operational
                  expertise to advise companies on expanding their business by
                  discovering new opportunities and identifying untapped revenue
                  streams, alongside developing leadership capital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default TeamDetailsArea;
