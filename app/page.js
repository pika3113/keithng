"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Hide the overlay after 1 second
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  useEffect(() => {
    // Handle dynamic height adjustment on component mount
    const navbar = document.querySelector(".stickytop");
    const bottomDiv = document.querySelector(".main-page-greeting-content");

    const updateBottomDivHeight = () => {
      const navbarHeight = navbar.offsetHeight;
      bottomDiv.style.setProperty("--navbar-height", `${navbarHeight}px`);
    };

    // Update height on load and window resize
    window.addEventListener("resize", updateBottomDivHeight);
    updateBottomDivHeight(); // Initial height calculation

    return () => {
      window.removeEventListener("resize", updateBottomDivHeight);
    };
  }, []); // Empty dependency array to run only once after the component mounts

  return (
    <main className="main-page">  
      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">Loading...</div>
        </div>
      )}

      <div className="main-page-greeting-content">
        <div className="main-page-greeting font-bold">Hi,</div>
        <div className="main-page-greeting-animate font-bold">I&apos;m Keith</div>
      </div>
    
      <main>
        <div className="main-page-content">
          <p>YapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYap</p>
          <p>YapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYap</p>
          <p>YapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYap</p>
          <p>YapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYap</p>
          <p>YapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYap</p>
          <p>YapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYapYap</p>
        </div>
        <div style={{ height: "2000px" }}></div>
      </main>

      <script src="mainpagename.js" async />
    </main>
  );
};

export default HomePage;
