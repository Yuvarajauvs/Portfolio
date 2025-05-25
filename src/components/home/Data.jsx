import React from "react";

const Data = () => {
  const originalText = "Yuvaraja"; // Name displayed

  return (
    <div className="home__data">
      {/* Main heading with styling for hover effect */}
      <h1
        className="home__title font-bold"
        style={{
          fontFamily: "monospace",
          cursor: "pointer",
          transition: "all 0.25s", // Smooth transition effect
        }}
      >
        {originalText}
      </h1>

      {/* Subtitle indicating profession */}
      <h3 className="home__subtitle">
        Full Stack Developer (Java, Spring Boot, React)
      </h3>

      {/* Description about your background */}
      <p className="home__description">
        Passionate about building scalable web applications with Java, Spring
        Boot, and React. Always eager to learn and grow in the tech field.
      </p>

      {/* Call to action link */}
      {/* <a href="https://cal.com/soumyajit-basak" className="button button--flex">
        Say Hello
      </a> */}
    </div>
  );
};

export default Data;
