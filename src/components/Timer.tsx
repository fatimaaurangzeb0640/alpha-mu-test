import React, { useState, useEffect } from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { time } from "console";

const Timer = () => {
  const FULL_DASH_ARRAY = 283;
  const TIME_LIMIT = 60;

  const calculateTimeFraction = (timeLeft: number) => {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  };

  const setCircleDasharray = (timeLeft: number) => {
    const circleDasharray = `${(
      calculateTimeFraction(timeLeft) * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    const pathRemaining = document.getElementById(
      "base-timer-path-remaining"
    );
    if (pathRemaining) {
      pathRemaining.setAttribute("stroke-dasharray", circleDasharray);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    let s = time % 60;
    let seconds: string;

    if (s < 10) {
      seconds = `0${s}`;
      return `${minutes}:${seconds}`;
    }
    return `${minutes}:${s}`;
  };

  function createTimer() {
    return makeAutoObservable({
      secondsRemaining: 60,
      decrease() {
        this.secondsRemaining -= 1;
      },
      reset() {
        this.secondsRemaining = 60;
      },
    });
  }

  type TimerType = {
    timer: {
      secondsRemaining: number;
      decrease(): void;
      reset(): void;
    };
  };

  const myTimer = createTimer();

  const TimerView = observer(({ timer }: TimerType) => {
    function r(secondsRemaining: number) {
      if (secondsRemaining <= 0) {
        timer.reset();
      }
      setCircleDasharray(timer.secondsRemaining);
    }
    r(timer.secondsRemaining);

    return (
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <path
              id="base-timer-path-remaining"
              strokeDasharray="283"
              className={`base-timer__path-remaining black`}
              d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">
          <div>{formatTime(timer.secondsRemaining)}</div>
        </span>
      </div>
    );
  });
  setInterval(() => {
    myTimer.decrease();
  }, 1000);

  return <TimerView timer={myTimer} />;
};

export default Timer;
