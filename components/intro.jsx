import React from "react";
import IntroPoppup from "./poppup/intropoppup";

const Intro = props => {
  const { btnClick } = props;

  return (
    <div className="intro-wrapper">
      <div className="intro-header-wrapper">
        <div className="intro-header">
          <div>TestCase</div>
          <div>APP</div>
        </div>
        <div className="subheader">&quot;Pixel Perfect&quot;</div>
      </div>
      <div className="icon-wrapper">
        <div className="icon" />
      </div>
      <IntroPoppup btnClick={btnClick} />
    </div>
  );
};

export default Intro;
