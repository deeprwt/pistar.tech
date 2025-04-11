"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import FooterOne from "@/layout/footer/footer-one";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const paymentId = searchParams.get("payment_id");

  return (
    <div className="thank-you-wrapper">
      <h1>🎉 Thank You for Your Order!</h1>
      <p>Hi {name || "Customer"}, your payment was successful.</p>
      <p>Payment ID: {paymentId || "N/A"}</p>
      <p>We&apos;ve received your order and will process it soon.</p>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}

        <main>
          <Suspense fallback={<p>Loading...</p>}>
            <ThankYouContent />
          </Suspense>
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
