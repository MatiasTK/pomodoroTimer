import React from "react";

export default function Buttons(props) {
  const pomodoro = props.state;
  const handleStartStop = props.handleStartStop;
  const changeSession = props.changeSession;
  const changeBreak = props.changeBreak;
  const restartPomodoro = props.restartPomodoro;

  return (
    <div className="buttons">
      <div className="h-full">
        <div className="flex flex-row justify-center items-center min-w-10 mb-8">
          <button
            className="btn bg-red-600 border-red-600 btn-circle"
            onClick={() => changeSession()}
            id="session-increment"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div className="mx-10 w-20">
            <label className="text-white text-lg mb-2" id="session-label">
              {pomodoro.language === "spanish" ? "Sesión:" : "Session:"}
            </label>
            <p className="text-white text-2xl" id="session-length">
              {pomodoro.session}
            </p>
          </div>
          <button
            className="btn bg-red-600 border-red-600 btn-circle"
            onClick={() => changeSession(false)}
            id="session-decrement"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-minus"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-row justify-center items-center mb-16">
          <button
            className="btn bg-red-600 border-red-600 btn-circle"
            onClick={() => changeBreak()}
            id="break-increment"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div className="mx-10 w-20">
            <label className="text-white text-lg mb-2" id="break-label">
              {pomodoro.language === "spanish" ? "Descanso:" : "Break:"}
            </label>
            <p className="text-white text-2xl" id="break-length">
              {pomodoro.break}
            </p>
          </div>
          <button
            className="btn bg-red-600 border-red-600 btn-circle"
            onClick={() => changeBreak(false)}
            id="break-decrement"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-minus"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 absolute inset-x-0 bottom-5">
        <button
          className="btn btn-circle bg-red-600 border-red-600"
          onClick={handleStartStop}
          id="start_stop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-player-play"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 4v16l13 -8z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-player-pause"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        </button>
        <button
          className="btn btn-circle bg-red-600 border-red-600"
          onClick={restartPomodoro}
          id="reset"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-repeat"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
            <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
