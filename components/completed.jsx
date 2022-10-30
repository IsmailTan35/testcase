import React from "react";
import { useSelector } from "react-redux";
import { countDivider } from "../services";

const Completed = props => {
  const { data } = props;

  const points = useSelector(item => item.tasks.items);

  return (
    <div className="completed-items-container">
      <div className="completed-items-title">Completed actions</div>
      <div className="completed-items-wrapper">
        <div className="completed-items">
          {data &&
            data
              .filter(item => points.includes(item.id))
              .map((item, index) => {
                return (
                  <div key={index} className="completed-item-wrapper">
                    <div className="completed-item">
                      <div className="completed-item-container">
                        <div className="completed-item-content">
                          <div className="completed-item-title">
                            {item.title}
                          </div>
                        </div>
                      </div>
                      <div className="completed-item-point">
                        +{countDivider(item.point)}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Completed;
