// eslint-disable-next-line no-unused-vars
import React from "react";
import Footer from "../footer/Footer";

const Info = () => {
  return (
    <div>
      <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>

          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">0 Year Working</span>
        </div>

        <div className="about__box">
          <i className="bx bx-briefcase-alt about__icon"></i>

          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">12 + Tasks</span>
        </div>

        {/* <div className="about__box">
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div> */}
      </div>
    </div>
  );
};

export default Info;
