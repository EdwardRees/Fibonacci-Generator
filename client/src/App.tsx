import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import icon from "./icon.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [val, setVal] = useState(0);
  const [fib, setFib] = useState(0);

  const onSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/", { num: val })
      .then(
        (res) => {
          setFib(res.data);
        },
        (rej) => {
          console.warn(rej);
          setFib(-1);
        }
      )
      .catch((err) => {
        console.error("failed");
      });
  };

  const showValue = () => {
    if(fib > 8944394323791464){
      return `≈${fib}`;
    }
    return fib;
  }

  const onChangeValue = (e: any) => {
    setVal(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} alt="Logo for Calculator" width="10%"/>
        <br />
        <h1>Fibonacci Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="input">Please input a value:</label>
            <input type="number" id="input" className="form-control" onChange={onChangeValue} />
          </div>
        </form>
        <h2>{showValue()}</h2>
      </header>
    </div>
  );
}

export default App;
