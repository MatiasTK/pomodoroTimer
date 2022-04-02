import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from './components/Navbar';
import Clock from './components/Clock';
import Buttons from './components/Buttons';

export default function App() {
  const [pomodoro, setPomodoro] = useState({
    timer: 1500 /* 25 Min */,
    session: 25,
    break: 5,
    status: "off",
    onBreak: false,
    language: "english",
  });

  useEffect(() => {
    if (pomodoro.timer === 0) {
      document.querySelector("#beep").play();
    }

    let interval = null;
    if (pomodoro.status === "on") {
      interval = setInterval(() => {
        setPomodoro({ ...pomodoro, timer: pomodoro.timer - 1 });
        if (pomodoro.timer === 0) {
          let newBreakStatus = !pomodoro.onBreak;
          if (newBreakStatus) {
            setPomodoro({
              ...pomodoro,
              timer: pomodoro.break * 60,
              status: "on",
              onBreak: newBreakStatus,
            });
          } else {
            setPomodoro({
              ...pomodoro,
              timer: pomodoro.session * 60,
              status: "on",
              onBreak: newBreakStatus,
            });
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [pomodoro]);

  const handleStartStop = () => {
    if (pomodoro.status === "on") {
      setPomodoro({ ...pomodoro, status: "stopped" });
    } else {
      setPomodoro({ ...pomodoro, status: "on" });
    }
  };

  const changeSession = (Increment = true) => {
    if (
      pomodoro.status === "off" &&
      pomodoro.session > 1 &&
      pomodoro.session < 60
    ) {
      if (Increment) {
        let newSession = pomodoro.session + 1;
        setPomodoro({
          ...pomodoro,
          session: newSession,
          timer: newSession * 60,
        });
      } else {
        let newSession = pomodoro.session - 1;
        setPomodoro({
          ...pomodoro,
          session: newSession,
          timer: newSession * 60,
        });
      }
    }
  };

  const changeBreak = (Increment = true) => {
    if (
      pomodoro.status === "off" &&
      pomodoro.break > 1 &&
      pomodoro.break < 60
    ) {
      if (Increment) {
        let newBreak = pomodoro.break + 1;
        setPomodoro({ ...pomodoro, break: newBreak });
      } else {
        let newBreak = pomodoro.break - 1;
        setPomodoro({ ...pomodoro, break: newBreak });
      }
    }
  };

  const restartPomodoro = () => {
    document.querySelector("#beep").load();
    setPomodoro({
      timer: 1500 /* 25 Min */,
      session: 25,
      break: 5,
      status: "off",
      onBreak: false,
      language: "english",
    });
  };

  const changeLanguage = (newLanguage) => {
    setPomodoro({ ...pomodoro, language: newLanguage });
  };
  return (
    <div className="App text-center">
      <div className="bg-red-500 h-screen">
        <Navbar state={pomodoro} changeLanguage={changeLanguage} />
        <Clock state={pomodoro} />
        <Buttons
          state={pomodoro}
          handleStartStop={handleStartStop}
          changeSession={changeSession}
          changeBreak={changeBreak}
          restartPomodoro={restartPomodoro}
        />
        <div>
          <audio
            className="hidden"
            ref={useRef("audio_tag")}
            src="https://audio.jukehost.co.uk/mPjysg5XRSZTJhDfWZ4aeIzX3kPDCqWd"
            id="beep"
            controls
          ></audio>
        </div>
      </div>
    </div>
  );
}
