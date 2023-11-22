import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <center>
        <input
          type="text"
          value={input}
          name="input"
          onChange={changeHandler}
        ></input>
        <br />
        <br />
        <button onClick={() => setResult(eval(input))}>result</button>
        <br />
        <br />
        <h4>result is : {result}</h4>
        <br />
        <br />
        <button className="back" onClick={() => setInput(input + "1")}>
          1
        </button>
        <button className="back" onClick={() => setInput(input + "2")}>
          2
        </button>
        <button className="back" onClick={() => setInput(input + "3")}>
          3
        </button>
        <button className="back" onClick={() => setInput(input + "+")}>
          +
        </button>

        <br />
        <br />
        <button className="back" onClick={() => setInput(input + "4")}>
          4
        </button>
        <button className="back" onClick={() => setInput(input + "5")}>
          5
        </button>
        <button className="back" onClick={() => setInput(input + "6")}>
          6
        </button>
        <button className="back" onClick={() => setInput(input + "-")}>
          -
        </button>

        <br />
        <br />
        <button className="back" onClick={() => setInput(input + "7")}>
          7
        </button>
        <button className="back" onClick={() => setInput(input + "8")}>
          8
        </button>
        <button className="back" onClick={() => setInput(input + "9")}>
          9
        </button>
        <button className="back" onClick={() => setInput(input + "*")}>
          *
        </button>
        <br />
        <br />
        <button className="back" onClick={() => setInput(input + "/")}>
          /
        </button>
        <button className="back" onClick={() => setInput("")}>
          AC
        </button>
        <button className="back" onClick={() => setInput(input + "*")}>
          *
        </button>
        <button className="back" onClick={() => setResult(eval(input))}>
          =
        </button>
        <br />
        <br />
        <button className="back" onClick={() => setInput(input + "0")}>
          0
        </button>
        <button className="back" onClick={() => setInput(input + ".")}>
          .
        </button>
      </center>
    </div>
  );
};

export default Calculator;
