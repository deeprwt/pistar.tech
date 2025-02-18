"use client";
import React, { useEffect, useState } from "react";
import Newsletter from "../forms/newsletter";
import Image from "next/image";
import img4 from "@/assets/images/pistar/popup.jpeg";

const ImgPopUp = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the user has opted to never show the popup again
    const noShow = localStorage.getItem("noShowPopup");
    const lastVisit = localStorage.getItem("lastVisit");
    const hasSubmitted = localStorage.getItem("formSubmitted");

    // Only show the popup if the user hasn't opted out and hasn't submitted the form
    if (!noShow && !hasSubmitted) {
      const now = new Date();
      const lastVisitDate = new Date(lastVisit || 0);

      // Show the popup only if it's a new day
      if (!lastVisit || now.getDate() !== lastVisitDate.getDate()) {
        setTimeout(() => {
          setShowModal(true);
        }, 3000); // Delay the popup by 6 seconds
      }

      localStorage.setItem("lastVisit", now.toString());
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = () => {
    localStorage.setItem("formSubmitted", "true");
    setShowModal(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem("noShowPopup", "true");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen modal-dialog-centered mb-10 mt-10">
            <div className="container d-flex align-items-center justify-content-center">
              <div
                className="user-data-form modal-content p-5"
                style={{
                  boxShadow: "2px 5px 20px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(#313638,#313638)",
                  maxWidth: "fit-content",
                }}
              >
                <div className="main-wrapper bottom-border">
                  <div
                    className="row footer-one"
                    style={{
                      padding: "0px",
                      background: "linear-gradient(#313638,#313638)",
                    }}
                  >
                    <div className="col-12">
                      <Image
                        src={img4}
                        alt="cgb aboutus"
                        width={500}
                        height={500}
                        className="rounded"
                        // layout="responsive"
                      ></Image>
                    </div>

                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
                {/* <button
                  className="mt-3"
                  onClick={handleDontShowAgain}
                >
                  Don't show this again
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgPopUp;
