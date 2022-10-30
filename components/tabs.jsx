import React from "react";

const Tabs = props => {
  const { onChange, selectedTab } = props;

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        <div
          className={`tab${selectedTab === 0 ? " active" : ""}`}
          onClick={() => {
            onChange(0);
          }}
        >
          Actions
        </div>
        <div
          className={`tab${selectedTab === 1 ? " active" : ""}`}
          onClick={() => {
            onChange(1);
          }}
        >
          Completed
        </div>
      </div>
    </div>
  );
};

export default Tabs;
