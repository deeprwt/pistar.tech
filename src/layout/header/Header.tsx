"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// internal
import Navbar from "./navbar";
import logo from "@/assets/images/logo/logo-white.png";
import icon from "@/assets/images/icon/icon_94.svg";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/components/common/login-modal";
import BookADemo from "@/components/forms/book-a-demo";
import { auth } from "@/database/firebase"; // Import Firebase auth

interface HeaderTwoProps {
  cls?: string; // Optional class name
}

const HeaderTwo: React.FC<HeaderTwoProps> = ({ cls = "" }) => {
  const { sticky } = useSticky();
  // Access the current page URL
  const pathrouter = usePathname();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user);
    });
  });

  return (
    <>
      <header
        className={`${
          pathrouter === "/solutions/digital-marketing" ? "header-change " : ""
        }  ${cls} theme-main-menu menu-overlay menu-style-one white-vr sticky-menu ${
          sticky ? "fixed" : ""
        }`}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link
                  href="/"
                  className="d-flex align-items-center justify-content-center"
                >
                  <Image width={110} src={logo} alt="logo" />
                </Link>
              </div>

              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="ps-2 pe-2 text-center">
                    <a
                      href={isUserLoggedIn ? "/user-dashboard" : "#"}
                      {...(!isUserLoggedIn && {
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#loginModal",
                      })}
                      className="signup-btn-one icon-link w-100"
                    >
                      <span
                        className="flex-fill text-center"
                        style={{ padding: "0px 15px" }}
                      >
                        <i className="bi bi-person-circle"></i>
                      </span>
                    </a>
                  </li>
                  <li className="d-none d-md-block">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#BookDemo"
                      //  className="signup-btn-one icon-link w-100 mt-20"
                      className="btn-two tran3s w-100"
                    >
                      Book a Demo
                    </a>
                  </li>
                  {/* <li className="d-flex align-items-center login-btn-two">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                      className="btn-fourteen tran3s"
                    >
                      <i className="bi bi-person"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  <Navbar logo_white={true} />
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
      <BookADemo />
    </>
  );
};

export default HeaderTwo;
