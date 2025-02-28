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

    // Only show the popup if the user hasn't opted out
    if (!noShow) {
      setTimeout(() => {
        setShowModal(true);
      }, 3000);
    }
  }, []);

  const handleClose = () => {
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
                className="user-data-form modal-content"
                style={{
                  boxShadow: "2px 5px 20px rgba(0, 0, 0, 0.1)",
                  maxWidth: "fit-content",
                }}
              >
                <div className="main-wrapper bottom-border">
                  <div
                    className="row"
                    style={{
                      padding: "0px", 
                    }}
                  >
                    <div className="col-12">
                      <Image
                        src={img4}
                        alt="cgb aboutus"
                        width={500}
                        height={500}
                        className="rounded"
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
                <button
                  className="mt-3 btn btn-secondary"
                  onClick={handleDontShowAgain}
                >
                  Don't show this again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgPopUp;
