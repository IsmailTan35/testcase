import React from "react";
import IntroPoppup from "./poppup/intropoppup";

const Intro = props => {
  const { btnClick } = props;

  return (
    <div className="intro-wrapper">
      <div className="header-wrapper">
        <div className="header">
          <div>TextCase</div>
          <div>APP</div>
        </div>
        <div className="subheader">&quot;Perfect&quot;</div>
      </div>
      <div className="icon-wrapper">
        <img
          src="https://www.nicepng.com/png/full/870-8707419_755-x-680-11-web-design-website-clip.png"
          alt="intro"
        />
      </div>
      <IntroPoppup btnClick={btnClick} />
    </div>
  );
};

export default Intro;
