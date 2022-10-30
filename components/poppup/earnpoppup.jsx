import React, { useState } from "react";
import { countDivider } from "../../services";

const EarnPoppup = props => {
  const { data, btnClick } = props;
  return (
    <div className="poppup-wrapper" style={{ position: "absolute" }}>
      <div className="poppup-container">
        <div className="poppup">
          <div className="poppup-img">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="poppup-points">
            +{countDivider(data.point)} Points
          </div>
          <div className="poppup-header">{data.title}</div>
          <div className="poppup-content">
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div className="poppup-button-wrapper">
            <div className="poppup-button" onClick={btnClick}>
              Earn points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnPoppup;
