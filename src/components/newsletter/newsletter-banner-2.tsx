import React from "react";
import Link from "next/link";
import Newsletter from "../forms/newsletter";

const NewsletterBannerTwo = () => {
  return (
    <div className="newsletter-banner white-vr" style={{background: "#292e31"}}>
      <div className="container">
        <div className="main-wrapper bottom-border">
          <div className="row footer-one">
            <div className="col-lg-6">
              <h2 className="text-white fw-bold">Newsletter.</h2>
              <p className="text-lg text-white opacity-75 md-pb-20">
                Get instant news by subscribe to our daily newsletter
              </p>
            </div>
            <div className="col-lg-6 footer-newsletter">
             <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBannerTwo;
