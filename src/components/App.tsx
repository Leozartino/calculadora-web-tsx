import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import ClearButton from "./ClearButton";
import * as math from "mathjs";

import "./App.css";

function App() {
  const [inputState, setInput] = useState<string>("");

  function addToInput(val: string) {
    setInput(inputState + val);
  }

  function handleEqual() {
    setInput(math.evaluate(inputState));
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={inputState}></Input>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
