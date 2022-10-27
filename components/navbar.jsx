import React from "react";
import { useSelector } from "react-redux";
import { countDivider } from "../services";

const Navbar = () => {
  const points = useSelector(item => item.points.item);
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="header">
          <div>TestCase</div>
          <div>App</div>
        </div>
        <div className="navbar-point-wrapper">
          <div className="navbar-point-text">Points:</div>
          <div className="navbar-point">{countDivider(points)}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
