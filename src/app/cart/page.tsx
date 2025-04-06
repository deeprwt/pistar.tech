import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FooterThree from "@/layout/footer/footer-three";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import CartArea from "@/components/cart/cart-area";
import HeaderTwo from "@/layout/header/Header";
import FooterOne from "@/layout/footer/footer-one";


export const metadata: Metadata = {
  title: "Cart Page",
};

const CartPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        {/* <HeaderOne /> */}
        <HeaderTwo cls="fixed" />
        {/* header end */}
        <main>
          {/* cart area start */}
          <CartArea />
          {/* cart area end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* <FooterThree style_2={true} /> */}
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default CartPage;
