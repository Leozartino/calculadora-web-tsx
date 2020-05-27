import React from "react";
import "./style.css";

const ClearButton = (props: any) => {
  return (
    <div className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
