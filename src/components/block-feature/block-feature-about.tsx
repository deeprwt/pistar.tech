import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_27.svg";
import shape_1 from "@/assets/images/logo/animationlogo.gif";
// import shape_2 from "@/assets/images/shape/shape_05.svg";
import shape_2 from "@/assets/images/shape/shape_05.svg";
import service_data from "@/data/service-data";
import icon1 from "@/assets/images/icon/customer-satisfaction.png";
import icon2 from "@/assets/images/icon/financial-sustainability.png";
import icon3 from "@/assets/images/icon/health-Safety-environment.png";
import icon4 from "@/assets/images/icon/human-resources-development.png";
import icon5 from "@/assets/images/icon/lean-manufacturing.png";
import icon6 from "@/assets/images/icon/management-excellence.png";
import icon7 from "@/assets/images/icon/sales-client-relations.png";

const BlockFeatureAbout = ({ style_2 = false }: { style_2?: boolean }) => {
  const service_items = service_data.filter((s) => s.page === "home-3");
  return (
    <>
      {!style_2 && (
        <div className="block-feature-six service-details position-relative pt-150 lg-pt-80 pb-120 lg-pb-50">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-4 wow fadeInLeft">
                <div className="title-one details-meta">
                  <h3 className="text-dark">What We Do</h3>
                </div>
                <p className="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">
                  Inciddnt ut labore et dolor magna aliu. ad mim venam, quis
                  nostru
                </p>
                <Link
                  href="/service-v2"
                  className="btn-eleven d-inline-flex align-items-center"
                >
                  <span className="text">All Services</span>
                  <div className=" tran3s rounded-circle d-flex align-items-center">
                    <Image
                      src={icon}
                      alt="icon"
                      width="100"
                      height="100"
                      className="lazy-img"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-lg-8 md-mt-50">
                <div className="row">
                  {service_items.map((item, i) => (
                    <div
                      key={item.id}
                      className="col-md-6 d-flex wow fadeInUp"
                      data-wow-delay={`0.${i}s`}
                    >
                      <div className="card-style-eight position-relative vstack tran3s w-100 mb-30 active">
                        <div className=" d-flex align-items-center">
                          <Image
                            src={item.icon}
                            alt="icon"
                            width="100"
                            height="100"
                            className="lazy-img"
                          />
                        </div>
                        <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                        <p>{item.desc}</p>
                        <Link
                          href="/service-details"
                          className="stretched-link"
                        ></Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Image
            src={shape_1}
            alt="shape"
            className="lazy-img shapes shape_01"
          />
          <Image
            src={shape_2}
            alt="shape"
            className="lazy-img shapes shape_02"
          />
        </div>
      )}

      {style_2 && (
        <div className="block-feature-six service-details bg-two position-relative pt-150 lg-pt-60 pb-120 lg-pb-40">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-12">
                <div className="row">
                  <div className="title-one details-meta">
                    <h3>
                      Pistar Technologies: Our Quality Assurance Commitment
                    </h3>
                  </div>
                  <p className="text-lg text-dark mb-35 md-mb-30">
                    At PiStarTech, we are committed to providing innovative and
                    high-quality solutions that exceed the expectations of our
                    customers. Our goal is to deliver exceptional service and
                    products that align with industry standards, ensuring both
                    customer satisfaction and continuous improvement throughout
                    our processes.
                  </p>
                  {/* <div className="col-lg-4 wow fadeInLeft"></div> */}
                  {/* {service_items.map((item, i) => (
                    <div
                      key={item.id}
                      className="col-md-4 d-flex wow fadeInUp"
                      data-wow-delay={`0.${i}s`}
                    >
                      <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                        <div className="d-flex align-items-center">
                          <Image
                            src={item.icon}
                            width={70}
                            height={70}
                            alt="icon"
width="100"
height="100"
                            className="lazy-img"
                          />
                        </div>
                        <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))} */}
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.1s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center">
                        <Image
                          src={icon1}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">
                        Customer Satisfaction:
                      </h4>
                      <p>
                        We aim to consistently meet and surpass the expectations
                        of our clients by delivering reliable and cutting-edge
                        solutions.
                      </p>
                      <p>
                        We emphasize proactive communication and responsiveness
                        to ensure that customer needs are understood and
                        fulfilled in a timely manner.
                      </p>
                      {/* <Link
                        href="/service-details"
                        className="stretched-link"
                      ></Link> */}
                    </div>
                  </div>
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.2s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center">
                        <Image
                          src={icon3}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">
                        Health, Safety & Environment:
                      </h4>
                      <p>
                        Safety is integral to our operations, ensuring a secure
                        workplace through compliance with international safety
                        and environmental standards.
                      </p>
                      <p>
                        We provide continuous training to our employees,
                        equipping them with the skills and knowledge necessary
                        to maintain a safe and sustainable work environment.
                      </p>
                      {/* <Link
                        href="/service-details"
                        className="stretched-link"
                      ></Link> */}
                    </div>
                  </div>
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.3s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center">
                        <Image
                          src={icon6}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">
                        Management Excellence:
                      </h4>
                      <p>
                        We lead with a clear vision and ensure that all
                        stakeholders are aligned with our strategic goals
                        through effective communication.
                      </p>
                      <p>
                        Our leadership is committed to continuous investment in
                        our people, technology, and infrastructure to drive
                        future growth and innovation.
                      </p>
                      {/* <Link
                        href="/service-details"
                        className="stretched-link"
                      ></Link> */}
                    </div>
                  </div>
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.4s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center">
                        <Image
                          src={icon4}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">
                        Human Resources Development:
                      </h4>
                      <p>
                        Our success is driven by our people. We focus on hiring,
                        developing, and retaining top talent to maintain a
                        competitive edge.
                      </p>
                      <p>
                        We provide opportunities for personal and professional
                        growth while ensuring full compliance with government
                        regulations and industry standards.
                      </p>
                      {/* <Link
                        href="/service-details"
                        className="stretched-link"
                      ></Link> */}
                    </div>
                  </div>
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.5s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center">
                        <Image
                          src={icon5}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">
                        Lean Manufacturing:
                      </h4>
                      <p>
                        Our manufacturing process is centered on lean
                        principles, ensuring efficiency, waste reduction, and
                        high-quality outputs.
                      </p>
                      <p>
                        We strive for operational excellence in all phases of
                        production, delivering high-performance solutions that
                        meet the requirements of our clients.
                      </p>
                      {/* <Link
                        href="/service-details"
                        className="stretched-link"
                      ></Link> */}
                    </div>
                  </div>
                  <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.6s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center">
                        <Image
                          src={icon2}
                          alt="icon"
                          width="100"
                          height="100"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">
                        Sales and Client Relations:
                      </h4>
                      <p>
                        We build long-term, trusted relationships with our
                        clients by delivering value-driven solutions that cater
                        to their specific needs.
                      </p>
                      <p>
                        Our sales approach is focused on being proactive,
                        transparent, and results-oriented to ensure lasting
                        partnerships.
                      </p>
                      {/* <Link
                        href="/service-details"
                        className="stretched-link"
                      ></Link> */}
                    </div>
                  </div>
                  {/* <div
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.7s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className=" d-flex align-items-center">
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">
                        Financial Sustainability:
                      </h4>
                      <p>
                        We ensure that our financial strategies are agile and
                        adaptive to support our global operations and future
                        expansion.
                      </p>
                      <p>
                        We maintain a balance between growth and financial
                        health, ensuring that all investments are sustainable
                        and value-driven.
                      </p>
                      <Link
                        href="/service-details"
                        className="stretched-link"
                      ></Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <Image
            src={shape_1}
            alt="shape"
            className="lazy-img shapes shape_01"
            width="200"
            height="200"
          />
          <Image
            src={shape_2}
            alt="shape"
            className="lazy-img shapes shape_02"
          />
        </div>
      )}
    </>
  );
};

export default BlockFeatureAbout;
