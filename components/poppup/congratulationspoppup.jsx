import React from "react";

const CongratulationsPoppup = props => {
  const { btnClick } = props;

  return (
    <div className="poppup-wrapper" style={{ position: "absolute" }}>
      <div className="poppup-container">
        <div className="poppup">
          <div className="poppup-cong-img">
            <img src={"/success.svg"} />
          </div>
          <div className="poppup-header">Congratulations!</div>
          <div className="poppup-content">
            {
              "You've earned points for your participation! Keep Up the great work!"
            }
          </div>
          <div className="poppup-button-wrapper">
            <div className="poppup-button" onClick={btnClick}>
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsPoppup;
