import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/success confetti.json";
import contactAnimatin from '../../../public/animation/Contact us.json'
const Contact = () => {
  const [state, handleSubmit] = useForm("xwprpdzk");

  const [showSuccess, setShowSuccess] = useState(false);

  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="contact" id="contact">
      <h1 className="title">
        <img src="/public/envelop.svg" alt="" />
        Contact us
      </h1>
      <p>
        Contact us for more information and get notified when I publish
        something new
      </p>

      <div className="detailes flex">
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              ref={emailRef}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="texteara">
            <label htmlFor="messege">Your Message</label>
            <textarea
              required
              name="message"
              id="messege"
              ref={messageRef}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button disabled={state.submitting}>
            {state.submitting ? "submitting..." : "submit"}
          </button>

          {showSuccess && (
            <p className="success-message flex">
              <Lottie
                className="sucess flex"
                loop={false}
                height={37}
                width={37}
                animationData={doneAnimation}
              />
              Thanks for joining!
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contactUS"
            
            height={37}
            width={37}
            animationData={contactAnimatin}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
