import React, { useEffect } from "react";
import { useState } from "react";
import "../../../public/style.css"
import "./Header.css";
const Header = () => {
  const [showmodel, setShowmodel] = useState(false);
  const [mode, setmode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <header className=" flex">
      <div className="one"></div>
      <button
        className="icon-menu menu"
        onClick={() => setShowmodel(true)}
      ></button>
      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#hero">Articles</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // send to localStorage
          localStorage.setItem(
            "currentMode",
            mode === "dark" ? "light" : "dark"
          );

          // get value from ls
          setmode(localStorage.getItem("currentMode"));
        }}
        className=" moon"
      >
        {mode === "dark" ? (
          <span className="icon-adjust"> </span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showmodel && (
        <div className=" fixed">
          <ul>
            <li>
              <button
                className="icon-cross "
                onClick={() => setShowmodel(false)}
              ></button>
            </li>
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
