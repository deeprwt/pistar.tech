import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
// adding this gtag

import "./globals.scss";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Advanced Foot Systems Podiatry | Diabetic Foot Care Solutions",
  description:
    "Discover PiStarTech flexible pressure sensor technology designed for diabetic foot care, providing accurate podiatry insights to enhance foot health and prevent complications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
      {/* staring here gtag */}
      <GoogleAnalytics gaId="G-FJXVS176M2" />
      {/* End here gtag */}
    </html>
  );
}
