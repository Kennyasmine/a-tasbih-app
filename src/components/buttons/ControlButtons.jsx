import React from "react";
import IconContainer from "../iconContainer/IconContainer";
import "./control-buttons.css";

const ControlButtons = ({ onIncrease, onDecrease, onReset }) => {

  const reset = "https://cdn-icons-png.flaticon.com/128/17509/17509296.png"
  const back = "https://cdn-icons-png.flaticon.com/128/16784/16784608.png"
  return (
    <div className="all-btns-container">
      <div className="small-btns-container">
        <IconContainer bgColor="#59717D">
          <button className="btnReset" onClick={onDecrease}>
            <img src={back} alt="back" />
          </button>
        </IconContainer>
        <IconContainer bgColor="#59717D">
          <button className="btnReset" onClick={onReset}>
            <img src={reset} alt="reset" />
          </button>
        </IconContainer>
      </div>
      <div>
        <div className="increase-btn" onClick={onIncrease}></div>
      </div>
    </div>
  );
};

export default ControlButtons;
