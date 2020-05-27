import React from "react";
import "./style.css";

interface propDTO {
  input: string;
}

const Input = (props: propDTO) => {
  return <div className="input">{props.input}</div>;
};

export default Input;
