import React from "react";

const completed = props => {
  const { data } = props;
  return (
    <div
      style={{
        background: "#F5F5F5",
        flex: "1 1",
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div>Completed completed-items</div>
      <div className="completed-items-wrapper">
        <div className="completed-items">
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="completed-item-wrapper">
                  <div className="completed-item">
                    <div className="completed-item-container">
                      <div className="completed-item-content">
                        <div className="completed-item-title">{item.title}</div>
                      </div>
                    </div>
                    <div className="completed-item-point">+{item.point}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default completed;
