// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.css";
//import AboutImg from "./src/assets/react.svg"; // Uncomment and add your image path if needed
//import CV from "../../src/assets/Soumyajit's Resume.pdf"; // Uncomment to add your resume link
import Info from "./Info"; // Optional: If you have reusable info components, you can import here

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      {/* <span className="section__subtitle">My Introduction</span> */}
      <br />
      <div className="about__container container grid">
        {/* Replace with your profile image if you have one */}
        <div className="about__content">
          <h3 className="about__subtitle">
            Full Stack Developer | Java, Spring Boot, React
          </h3>
          <p className="about__description">
            I'm a passionate Full Stack Developer with hands-on experience in
            building web applications using Java, Spring Boot for the backend,
            React for the front-end, and MySQL for database management.
          </p>
          <p className="about__description">
            Despite being a fresher, I am dedicated to growing my skills and
            staying up-to-date with industry trends. I am focused on developing
            scalable and efficient applications while embracing new technologies
            and methodologies.
          </p>
          {/* <a
            href="https://cal.com/soumyajit-basak"
            className="button button--flex"
          >
            Connect with Me
          </a> */}
        </div>
        <Info />
      </div>
    </section>
  );
};

export default About;
