/* eslint no-eval: 0 */
import React, { useState } from "react";

function App() {
  const [calc, setClac] = useState("");
  const [results, setResults] = useState("");

  const ops = ["/", "*", "+", "-", ". "];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === " ") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setClac(calc + value);

    if (!ops.includes(value)) {
      setResults(eval(calc + value).toString());
    }
  };

  const creatDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate = () => {
    setClac(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === " ") {
      return;
    }
    const value = calc.slice(0, -1);
    setClac(value);
  };

  return (
    <div>
      <div className="  App">
        <div className=" calculator">
          <div className=" display">
            {results ? <span> ({results})</span> : ""} &nbsp;
            {calc || "0"}
          </div>
          <div className=" operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>

            <button onClick={() => deleteLast()}>DEL</button>
          </div>
          <div className="digits">
            {creatDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={() => calculate()}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
