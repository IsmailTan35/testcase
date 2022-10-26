import React, { useState } from "react";
import CongratulationsPoppup from "./congratulationspoppup";
import EarnPoppup from "./earnpoppup";
const Actions = props => {
  const { data } = props;
  const [selected, setSelected] = useState(null);
  const [success, setSucces] = useState(false);
  const handleSelect = action => {
    setSelected(action);
  };
  return (
    <>
      <div
        style={{
          background: "#F5F5F5",
          flex: "1 1",
          padding: "10px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div>Actions to be completed</div>
        <div className="actions-wrapper">
          <div className="actions">
            {data &&
              data.map((action, index) => {
                return (
                  <div
                    key={index}
                    className="action-wrapper"
                    onClick={() => {
                      handleSelect(action);
                    }}
                  >
                    <div className="action">
                      <div className="action-container">
                        <div className="action-icon">
                          <img src={action.image} />
                        </div>
                        <div className="action-content">
                          <div className="action-title">{action.title}</div>
                          <div className="action-description">
                            {action.description}
                          </div>
                        </div>
                      </div>
                      <div className="action-point">+{action.point}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {selected && (
          <EarnPoppup
            data={selected}
            btnClick={() => {
              setSucces(true);
              setSelected(null);
            }}
          />
        )}
        {success && (
          <CongratulationsPoppup
            btnClick={() => {
              setSucces(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Actions;
