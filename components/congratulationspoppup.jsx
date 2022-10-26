import React from "react";

const CongratulationsPoppup = props => {
  const { btnClick } = props;
  return (
    <div className="poppup-wrapper" style={{ position: "absolute" }}>
      <div className="poppup-container">
        <div className="poppup-wrapper">
          <div>
            <svg
              width="72"
              height="51"
              viewBox="0 0 72 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.2525 50.5517C24.2447 50.5515 23.2782 50.1509 22.5656 49.4382L1.06682 27.9394C0.374543 27.2226 -0.00851522 26.2626 0.000143664 25.2662C0.00880255 24.2697 0.408486 23.3165 1.11311 22.6119C1.81773 21.9073 2.77092 21.5076 3.76737 21.499C4.76382 21.4903 5.72381 21.8734 6.44057 22.5656L25.2525 41.3776L65.5594 1.06681C66.2762 0.374543 67.2362 -0.00851522 68.2326 0.000143665C69.2291 0.00880255 70.1823 0.408485 70.8869 1.11311C71.5915 1.81773 71.9912 2.77092 71.9999 3.76737C72.0085 4.76382 71.6255 5.7238 70.9332 6.44057L27.9394 49.4382C27.2268 50.1509 26.2603 50.5515 25.2525 50.5517Z"
                fill="black"
              />
            </svg>
            ;
          </div>
          <div className="poppup-header">Congratulations!</div>
          <div className="poppup-content">
            {
              "You've earned points for your participation! Keep Up the great work!."
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
