import React from "react";
import Link from "next/link";

const FancyBannerTwo = () => {
  return (
    <div className="fancy-banner-two mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-one">
                <h2>Want to chat? Feel free to contact our team.</h2>
              </div>
              <p className="text-lg mt-40 lg-mt-30 mb-30">
              We&lsquo;d love to hear how we can match you with a solution that meets your needs.
              </p>
              <div className="d-inline-flex flex-wrap justify-content-center">
                <Link
                  href="/contact"
                  className="btn-seventeen d-inline-flex align-items-center tran3s"
                >
                  <span className="text">Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerTwo;
