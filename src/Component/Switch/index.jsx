import React from "react";
import ModeToggle from "../ModeToggle";
import "./Switch.scss";

function Switch() {
  return (
    <ModeToggle>
      {function (mode, changeModeHandler) {
        console.log(mode);
        return (
          <label className="switch">
            <input type="checkbox" checked={mode} />
            <span className="slider" onClick={changeModeHandler}></span>
          </label>
        );
      }}
    </ModeToggle>
  );
}

export default Switch;
