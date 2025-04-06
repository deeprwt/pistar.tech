import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import CheckoutArea from "@/components/checkout/checkout-area";
import HeaderTwo from "@/layout/header/Header";

export const metadata: Metadata = {
  title: "Checkout Page",
};

const CheckoutPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo cls="fixed" />
        {/* header end */}
        <main>
          {/* checkout area start */}
          <CheckoutArea />
          {/* checkout area end */}
        </main>
      </div>
    </Wrapper>
  );
};

export default CheckoutPage;
