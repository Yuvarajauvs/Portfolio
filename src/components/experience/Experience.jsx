/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="section experience section" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">What I work as</span>

      <div className="exp__container container grid">
        {/* Experience Card 1: Software Developer Trainee */}
        <div className="exp__content">
          <div>
            <i className="uil uil-web-grid exp__icon"></i>
            <h1 className="exp__title">
              Software Developer (Project Experience)
            </h1>
          </div>

          {/* <div>
            <span className="exp__comp">EXA AG</span>
          </div> */}

          <div className="exp__description">
            <p className="exp__modal-description">
              As a recent graduate, I may not have formal work experience in a
              company, but I have gained valuable hands-on experience through
              personal projects, particularly in web development. I've worked on
              a variety of web applications, where I applied my skills in both
              front-end and back-end development. These projects have provided
              me with real-world problem-solving experience, and I am confident
              in my ability to contribute to a professional team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
