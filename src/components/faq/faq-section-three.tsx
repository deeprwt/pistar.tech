import React from "react";
import Link from "next/link";
// internal
import faq_data from "@/data/faq-data";
import FaqItem from "./faq-item";
import Image, {StaticImageData} from "next/image";

import screen from '@/assets/images/assets/screen_11.png';



const FaqSolutionsThree = ({cls,title,para,page}:{cls?:string,title:string,para:string,page:string}) => {
  return (
    <>
      <div className={`faq-section-one service-details ${cls?cls:'pt-150 pb-120 lg-pt-120 md-pt-80'}`} style={{background:"#ebf3ee"}}>
        <div className="container">
          <div className="row">

            <div className="col-lg-12 details-meta">
                <div className="title-one mb-40 lg-mb-20">
                    <h3>{title}</h3>
                </div>
                <p className="text-lg mb-40 lg-mb-20">
                 {para}
                </p>
              <div
                className="accordion accordion-style-one mt-15 md-mt-50"
                id="accordionOne"
              >
                {faq_data.filter(faq => faq.page === `${page}`)
                .map((faq, i) => (
                  <FaqItem key={i} {...faq} parent="accordionOne" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSolutionsThree;
