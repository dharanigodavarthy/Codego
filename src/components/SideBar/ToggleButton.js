import React from "react";
import "./sidebar.css";
import "./sidebar.css";
const toggleButton = props => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
    </button>
  );
};

export default toggleButton;
