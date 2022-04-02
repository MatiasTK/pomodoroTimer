import React from "react";

export default function Clock(props) {
  const pomodoro = props.state;

  const calculatePercentage = () => {
    if (pomodoro.onBreak) {
      return (pomodoro.timer * 100) / (pomodoro.break * 60);
    } else {
      return (pomodoro.timer * 100) / (pomodoro.session * 60);
    }
  };

  const calculateHourString = (time) => {
    let conversion = String(time / 60).split(".");
    let min = conversion[0];
    let sec = conversion[1] ? parseInt(`0.${conversion[1]}` * 60) : "00";
    if (String(min).length === 1) {
      min = "0" + min;
    }
    if (String(sec).length === 1) {
      sec = "0" + sec;
    }
    return `${min}:${sec}`;
  };

  return (
    <div
      className={
        "flex justify-center items-center text-white md:h-2/6 my-12 " +
        (pomodoro.status === "stopped" ? "animate-pulse" : "animate-none")
      }
    >
      <div
        className="radial-progress"
        style={{
          "--value": calculatePercentage(),
          "--size": "12rem",
          "--thickness": "2px",
        }}
      >
        <div className="text-xl">
          <p className="capitalize" id="timer-label">
            {pomodoro.onBreak
              ? pomodoro.language === "spanish"
                ? "Descanso"
                : "Break"
              : pomodoro.language === "spanish"
              ? "Sesión"
              : "Session"}
          </p>
          <div id="time-left">{calculateHourString(pomodoro.timer)}</div>
        </div>
      </div>
    </div>
  );
}
