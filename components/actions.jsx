import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pointsActions, tasksActions } from "../store";
import CongratulationsPoppup from "./poppup/congratulationspoppup";
import EarnPoppup from "./poppup/earnpoppup";
import { countDivider } from "../services";
import Backdrop from "./backdrop";

const Actions = props => {
  const { data } = props;

  const dispatch = useDispatch();

  const points = useSelector(item => item.tasks.items);

  const [selected, setSelected] = useState(null);
  const [success, setSucces] = useState(false);

  const handleSelect = action => {
    setSelected(action);
  };

  const handleEarnPoint = () => {
    dispatch(tasksActions.update(selected.id));
    dispatch(pointsActions.update(selected.point));

    setSucces(true);
    setSelected(null);
  };

  const handleCong = () => {
    setSucces(false);
  };

  return (
    <>
      <div className="actions-container">
        <div class="counter" data-from="0" data-to="100"></div>
        <div className="actions-title">Actions to be completed</div>
        <div className="actions-wrapper">
          <div className="actions">
            {data &&
              data
                .filter(item => !points.includes(item.id))
                .map((action, index) => {
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
                        <div className="action-point">
                          +{countDivider(action.point)}
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {selected || success ? (
          <Backdrop>
            {selected && (
              <EarnPoppup data={selected} btnClick={handleEarnPoint} />
            )}
            {success && <CongratulationsPoppup btnClick={handleCong} />}
          </Backdrop>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Actions;
