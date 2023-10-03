import React, { useState } from "react";
import Timer from "./Timer";
import "./MathHandler.css";

let x = Math.floor(1 + Math.random() * 12);
let y = Math.floor(1 + Math.random() * 12);

const MathHandler = () => {
  const [amount, setAmount] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [points, setPoints] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  const recognitionSvc = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new recognitionSvc();
  recognition.continuous = true;
  recognition.lang = "en-GB";
  recognition.start();
  recognition.onresult = (event) => {
    for (const result of event.results) {
      let x = `${result[0].transcript}`;
      console.log(x);
      if(x == "start") {
        console.log("start here");
      }
      x = x.replaceAll("zero", 0);
      x = x.replaceAll("one", 1);
      x = x.replaceAll("two", 2);
      x = x.replaceAll("three", 3);
      x = x.replaceAll("four", 4);
      x = x.replaceAll("five", 5);
      x = x.replaceAll("six", 6);
      x = x.replaceAll("seven", 7);
      x = x.replaceAll("eight", 8);
      x = x.replaceAll("nine", 9);
      x = x.replace(/\D/g, "");
      setAmount(x);
      submitHandler(event);
    }
  };

  const inputChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const handleTimerStart = () => {
    setTimerStarted(true);
  };

  const handleTimerFinish = () => {
    setDisabled(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (amount.includes(String(x * y)) && !disabled) {
      setAmount("");
      setPoints((points) => points + 1);
      Shuffle();
    }
  };

  return (
    <div>
      <div className="control_actions">Points: {points}</div>
      <Timer onTimerStart={handleTimerStart} onTimerFinish={handleTimerFinish} />
      <div className="text">
      {timerStarted && (
        <label>{x}</label>
        )}
        {timerStarted && (
        <label> x </label>
        )}
        {timerStarted && (
        <label>{y}</label>
        )}
      
      </div>
      <form onSubmit={submitHandler}>
        <div className="control_input">
        {timerStarted && (
          <input type="text" value={amount} onChange={inputChangeHandler} />
        )}
        </div>
        {timerStarted && (
          <div className="btn">
            <button type="submit">
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const Shuffle = () => {
  x = Math.floor(1 + Math.random() * 12);
  y = Math.floor(1 + Math.random() * 12);
};

export default MathHandler;