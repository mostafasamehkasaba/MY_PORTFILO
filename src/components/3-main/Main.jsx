import React, { useState } from "react";
import "./Main.css";
import {MyProjects} from './My-project'

import { motion } from "framer-motion";


const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr ,setArr] = useState(MyProjects);

  const handleClick = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setArr([...MyProjects]);
    } else {
      const newArr = MyProjects.filter((item) =>
        item.cattegory.includes(category)
      );
      setArr(newArr);
    }
  };
  return (
    <div className="main flex" id="projects">
      <section className="left-section ">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr([...MyProjects]);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All-Projects
        </button>
        <button
          onClick={() => {
            handleClick("html-css")
          }}
          className={currentActive === "html-css" ? "active" : null}
        >
          {" "}
          Html & Css
        </button>

        <button
          onClick={() => {
            handleClick("js")
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react")
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & Vite
        </button>
      </section>

      <section className="flex  right-section">
      
        {arr.map((item) => {
          return (
            <motion.article
              layout
              animate={{ transform: "scale(1)" }}
              initial={{ transform: "scale(0)" }}
              // exit={{ opactiy: 0 }}
              key={item.projectTitle}
              className="card"
            >
              <img
                width={260}
                src={item.imgPath}
                alt=""
                className="img-project"
              />
              <div
                className="box"
              
              >
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.cattegory}</p>
                <div className="flex last ">
                  <div className="link">
                    <a href="http://" className="link1">
                      <img src="/public/link.svg" alt="" />
                    </a>
                    <a href="http://" className="link2">
                      <img src="/public/github.svg" alt="" />
                    </a>
                  </div>
                  <button className="link-to-page">More</button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
};

export default Main;
