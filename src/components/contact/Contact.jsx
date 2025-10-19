import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch 📩</h2>
      <span className="section__subtitle">
        Feel free to reach out! You can contact me through the channels below.
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">
            Contact Me <i className="uil uil-calling"></i>
          </h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">yuvarajauv05@gmail.com</span>

              <a
                href="mailto:soumyajitbasak.work@gmail.com"
                className="contact__button"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">(+91) 9008792360</span>

              <a
                href="https://api.whatsapp.com/send?phone=9591688760&text=Hello, I would like to connect with you!"
                className="contact__button"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Yuvaraja</span>

              <a
                href="https://www.linkedin.com/in/a-yuvaraja-8269b723b/"
                className="contact__button"
              >
                Visit LinkedIn{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* LinkedIn */}
            {/* <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">
                <a
                  href="https://www.linkedin.com/in/soumyajitbasak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__linkedin-link"
                >
                  soumyajitbasak
                </a>
              </span>

              <a
                href="https://www.linkedin.com/in/soumyajitbasak/"
                className="contact__button contact__linkedin-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit LinkedIn{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
