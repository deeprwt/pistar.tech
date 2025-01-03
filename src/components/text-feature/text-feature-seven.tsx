import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import screen from "@/assets/images/pistar/fitness.jpg";
import icon_1 from "@/assets/images/icon/icon_43.svg";
import icon_2 from "@/assets/images/icon/icon_44.svg";
import icon_3 from "@/assets/images/icon/icon_45.svg";

// image style
const imgStyle = {
  height: "auto",
};

// card item
function CardItem({
  icon,
  title,
  subtitle,
  li1,
  li2,
  li3,
}: {
  icon: StaticImageData;
  title: string;
  subtitle?: string;
  li1?: string;
  li2?: string;
  li3?: string;
}) {
  return (
    <div className="card-style-twelve w-100 mt-30">
      <div className="d-flex">
        <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle" style={{marginRight:"2rem"}}>
          <Image src={icon} alt="icon" className="lazy-img" />
        </div>
        <h4 className="fw-bold mt-15 mb-15">{title}</h4>
      </div>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
      <ul className="style-none">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
      </ul>
    </div>
  );
}

const TextFeatureSeven = () => {
  return (
    <div className="text-feature-seven mt-80 lg-mt-80 service-details">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 order-lg-last wow fadeInRight">
            <div className="ps-xl-3 ms-xxl-4">
              <div className="title-three mb-35 md-mb-20 details-meta">
                <div className="upper-title">management</div>
                <h3>
                  Transforming Foot Care with Cutting-Edge Pressure Analysis
                  Technology
                </h3>
              </div>
              <p className="text-lg mb-40 lg-mb-30">
                PiStarTech Private Limited develops innovative solutions like
                the <b>Diabetic PodiaScan Mat (Podiascanner Mat)</b>, providing precise
                plantar pressure analysis for improved foot health diagnostics.
                Our technology offers a reliable, cost-effective tool to support
                medical professionals and enhance patient care through accurate,
                real-time data.
              </p>
              {/* <ul className="style-none">
                <li>Mobile app easy management & access.</li>
                <li>Ton’s of features for handle the card easily & safely</li>
                <li>Strong security system.</li>
              </ul> */}
              <div className="d-flex justify-content-between align-items-center mt-65 lg-mt-50">
                <Link href="/about-us" className="btn-thirteen tran3 flex-fill">
                  Learn More
                </Link>
                <Link href="/about-us" className="btn-fourteen tran3s">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-8 m-auto wow fadeInLeft">
            <div className="media-wrapper md-mt-60">
              <Image
                src={screen}
                alt="screen"
                className="lazy-img"
                style={imgStyle}
              />
            </div>
          </div>
        </div>

        <div className="border-bottom mt-40 pb-50 sm-pb-30">
          <div className="row">
            <div className="col-lg-6 d-flex wow fadeInUp">
              <CardItem
                icon={icon_1}
                title="Outdated, Disconnected Diagnostic Systems"
                li1="High Precision: Real-time data allows for detailed foot pressure mapping."
                li2="Early Detection: Identifies abnormal pressure points to prevent complications."
                li3="Reduced Errors: Minimizes the risk of misdiagnosis with clear, accurate readings."
                // subtitle="0% charge for online money transfer from you wallet instant."
              />
            </div>
            <div className="col-lg-6 d-flex wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon={icon_2}
                title="PiStarTech's Next-Gen Integrated Solution"
                li1="Cost-Effective Solution: Affordable for widespread use in clinics and hospitals."
                li2="User-Friendly Design: Easy integration into medical practices with minimal training."
                li3="Better Patient Outcomes: Supports proactive care, reducing risks of severe foot issues."
                // subtitle="Pay google & apple payment with your card without any hassle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureSeven;
