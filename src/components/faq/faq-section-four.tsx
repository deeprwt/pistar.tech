"use client";
import React, { useState } from "react";
import Image from "next/image";
// internal
import story_data from "@/data/story-data";
import { IStory } from "@/types/story-d-t";
import arrow from "@/assets/images/icon/icon_29.svg";
import shape from "@/assets/images/shape/shape_06.svg";
import VideoPopup from "../common/video-popup";
import Link from "next/link";

function FaqProjectItem({ item }: { item: IStory }) {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${item.isShow ? "" : "collapsed"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${item.id}`}
            aria-expanded={item.isShow ? "true" : "false"}
            aria-controls={`collapse-${item.id}`}
          >
            {item.title}
          </button>
        </h2>
        <div
          id={`collapse-${item.id}`}
          className={`accordion-collapse collapse ${item.isShow ? "show" : ""}`}
          data-bs-parent={`#${item.parent}`}
        >
          <div className="accordion-body">
            <div className="row">
              <div className="col-lg-6">
                <h6>{item.body_title}</h6>
                {item.body_desc.map((b, i) => (
                  <p key={i}>{b}</p>
                ))}
                {/* <p className="mb-50">{item.body_desc}</p> */}
                {/* <h6>{item.body_subtitle}</h6> */}
              </div>
              <div className="col-lg-6">
                <Image
                  src={item.bg_img}
                  alt="cgb aboutus"
                  className="rounded"
                  layout="responsive"
                ></Image>
              </div>
              <div className="col-12">
                {item.body_desc_second?.map((c, i) => (
                  <p key={i}>{c}</p>
                ))}
                {item.body_lists && item.body_lists.length > 0 && (
                  <ul className="style-none pt-20 pb-30">
                    {item.body_lists.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                )}
                {/* <Link
                  href="/project-details-v1"
                  className="btn-eight icon-link"
                >
                  <span className="text">Full Case Study</span>
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const FaqSectionFour = () => {
  const project_items = story_data.filter((p) => p.page === "home");
  return (
    <>
      <div className="faq-section-two position-relative mt-180 lg-mt-100 pb-150 lg-pb-80">
        <div className="container">
          <div className="position-relative">
            <div className="title-one mb-40">
              <h2>Our Foundational Inspiration</h2>
              <p className="text-lg pt-15 lg-pt-10">That in</p>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  className="accordion accordion-style-two mt-15"
                  id="accordionOne"
                >
                  {project_items.map((p, i) => (
                    <FaqProjectItem key={i} item={p} />
                  ))}
                </div>
              </div>
            </div>

            <div className="section-btn sm-mt-40">
              <Link
                href="/project-v2"
                className="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s"
              >
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape} alt="shape" className="lazy-img shapes shape_02" />
      </div>
    </>
  );
};

export default FaqSectionFour;
