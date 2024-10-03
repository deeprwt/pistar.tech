 "use client"
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import FooterOne from "@/layout/footer/footer-one";
import Header from "@/layout/header/Header";
import Wrapper from "@/layout/wrapper";
import { useState } from "react"; // Import useState to manage state

export default function Test() {
  const [emailStatus, setEmailStatus] = useState(""); // State to store the email status
  const [emailError, setEmailError] = useState(""); // State to store any errors

  // Function to send email test
  const sendTestEmail = async () => {
    setEmailStatus("Sending email...");
    setEmailError("");
  
    try {
      const response = await fetch("/api/newsletter", {
        method: "GET",
      });
  
      const contentType = response.headers.get("content-type");
  
      // Log the raw response for debugging
      const rawResponse = await response.text();
      console.log("Raw response:", rawResponse);
  
      if (contentType && contentType.includes("application/json")) {
        const data = JSON.parse(rawResponse);
  
        if (response.ok) {
          setEmailStatus(data.message);
          console.log("Email sent successfully:", data.message);
        } else {
          setEmailStatus("Failed to send email");
          console.error("Error response from server:", data.message);
          setEmailError(data.message);
        }
      } else {
        setEmailStatus("Failed to send email");
        console.error("Unexpected response:", rawResponse);
        setEmailError("Received an unexpected response from the server.");
      }
    } catch (error) {
      setEmailStatus("Failed to send email");
  
      if (error instanceof Error) {
        console.error("Error fetching API:", error.message);
        setEmailError("Error occurred: " + error.message);
      } else {
        console.error("Unknown error occurred", error);
        setEmailError("An unknown error occurred");
      }
    }
  };
  
  
  

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* Header */}
        <Header />

        <main>
          {/* Hero Banner */}
          <HeroBannerTwo />

          {/* Button to trigger the email test */}
          <div className="email-test-section" style={{ padding: "20px", textAlign: "center" }}>
            <button onClick={sendTestEmail} className="email-test-button" style={{ padding: "10px 20px", cursor: "pointer" }}>
              Send Test Email
            </button>

            {/* Display email status */}
            {emailStatus && <p>Status: {emailStatus}</p>}
            {/* Display error if any */}
            {emailError && <p style={{ color: "red" }}>Error: {emailError}</p>}
          </div>
        </main>

        {/* Footer */}
        <FooterOne />
      </div>
    </Wrapper>
  );
}
