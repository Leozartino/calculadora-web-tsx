import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

import "./App.css";

function App() {
  const [inputState, setInput] = useState<string>("");
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={inputState}></Input>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
