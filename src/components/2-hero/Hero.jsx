import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animation/Desktop and smartphone app development.json";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className="hero " id="hero">
      <div className="left_section">
        <div className="parent-avater ">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 8, type: "spring", stiffness: 100 }}
            className="avatar"
            src="/public/Mos-modified.png"
            alt=""
          />
          <span>
            <img className="icon-verified" src="/public/verified.svg" alt="" />
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Hi,I'm Mostafa,FrontEnd Developer
        </motion.h1>
        <p className="description">
          💼 Front-End Developer with a Bachelor’s degree in Management
          Information Systems, skilled in React, Vite,Next.js , HTML, CSS, and
          JavaScript. Passionate about building responsive and user-friendly web
          applications.
        </p>
        <div className="icons flex">
          <div className="icon">
            <a href="https://surl.lt/fbijcc">
              <img src="public/linkedin-square.svg" alt="" />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/mostafasamehkasaba">
              <img src="/public/github.svg" alt="" />
            </a>
          </div>
          <div className="icon">
            <a href="http://">
              <img src="/public/twitter.svg" alt="" />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/share/1G5BaAbjSA/">
              <img src="/public/facebook.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="right_section animation ">
        <Lottie
          className="developerAnimation"
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
