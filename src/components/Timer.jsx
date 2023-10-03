import React, { useState, useEffect } from "react";
import "./MathHandler.css";

let hasStarted = 0;

const Timer = ({ onTimerStart, onTimerFinish }) => {

  
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [start, setStart] = useState(false);

  const isClicked = (event) => {
    hasStarted = 1;
    setStart(true);
    onTimerStart();
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - hasStarted);
    }, 1000);

    if (timeRemaining <= 0) {
      clearInterval(intervalID);
      onTimerFinish();
    }

    return () => clearInterval(intervalID);
  }, [onTimerFinish, onTimerStart, timeRemaining]);

  return (
    <div>
      <div className="control_actions">Time Left: {timeRemaining}</div>
      {!start && (
        <div className="start">
          <button type="start" onClick={isClicked}>Start</button>
        </div>
      )}
    </div>
  );
};

export default Timer;