import React from "react";
import "./style.css";
import isOperator from "../../util/isOperator";

const Button: React.FC = (props) => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      } `}
    >
      {props.children}
    </div>
  );
};

export default Button;
