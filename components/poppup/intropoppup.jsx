import React from "react";

const IntroPoppup = props => {
  const { btnClick } = props;
  return (
    <div>
      <div className="poppup-wrapper">
        <div className="poppup-container">
          <div className="poppup-wrapper">
            <div className="poppup-header">Welcome to the TestCase APP!</div>
            <div className="poppup-content">
              We created this exercise to gain insights about your development
              skills.
            </div>
            <div className="poppup-button-wrapper">
              <div
                className="poppup-button"
                onClick={() => {
                  btnClick();
                }}
              >
                Start
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPoppup;
