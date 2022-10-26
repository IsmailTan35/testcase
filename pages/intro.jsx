import Head from "next/head";
import React from "react";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="header-wrapper">
        <div className="header">
          <div>TextCase</div>
          <div>APP</div>
        </div>
        <div className="subheader">Pixel Perfect</div>
      </div>
      <div className="icon-wrapper">
        <img src="https://www.nicepng.com/png/full/870-8707419_755-x-680-11-web-design-website-clip.png" />
      </div>
      <div className="poppup-wrapper">
        <div className="poppup-container">
          <div className="poppup-wrapper">
            <div className="poppup-header">Welcome to the TestCase APP!</div>
            <div className="poppup-content">
              We created this exercise to gain insights about your development
              skills.
            </div>
            <div className="poppup-button-wrapper">
              <div className="poppup-button">Start</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
