// src/components/project/Work.jsx

import React from "react";
import Works from "./Works";
import "./work.css";

const Work = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects 🧑🏻‍💻</h2>
      {/* <span className="section__subtitle">Most Recent Works</span> */}
      <Works />
    </section>
  );
};

export default Work;
