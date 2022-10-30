import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { countDivider } from "../services";
import { useCountUp } from "react-countup";
const Navbar = () => {
  const countUpRef = useRef(null);
  const points = useSelector(item => item.points.item);

  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    delay: 100,
    duration: 1,
    separator: ",",
  });

  useEffect(() => {
    update(points);
  }, [points]);

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-header">
          <div>TestCase</div>
          <div>APP</div>
        </div>
        <div className="navbar-point-wrapper">
          <div className="navbar-point-text">Points:</div>
          <div className="navbar-point" ref={countUpRef} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
