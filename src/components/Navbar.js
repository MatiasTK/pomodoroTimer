import React from "react";

export default function Navbar(props) {
  const pomodoro = props.state;
  const changeLanguage = props.changeLanguage;

  return (
    <div>
      <div className="navbar mb-0 pb-0">
        <div className="navbar-start" />
        <div className="navbar-center">
          <h1 className="text-white text-2xl">
            {pomodoro.language === "spanish"
              ? "Temporizador Pomodoro"
              : "Pomodoro Timer"}
          </h1>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-left">
            <label
              tabIndex="0"
              className="btn m-1 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-dots-vertical"
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
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="19" r="1" />
                <circle cx="12" cy="5" r="1" />
              </svg>
            </label>
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={() => changeLanguage("spanish")}>
                <button>
                  {pomodoro.language === "spanish" ? "Español" : "Spanish"}
                </button>
              </li>
              <li onClick={() => changeLanguage("english")}>
                <button>
                  {pomodoro.language === "spanish" ? "Ingles" : "English"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
