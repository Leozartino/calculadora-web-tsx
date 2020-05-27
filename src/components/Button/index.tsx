import React from "react";
import "./style.css";
import isOperator from "../../util/isOperator";

interface Props {
  handleClick: any;
  children: string;
}

const Button = (props: Props) => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      } `}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
