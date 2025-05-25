// Header.js
import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          &lt;Yuvaraja/&gt;
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                {" "}
                {/* Use href="#projects" */}
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link">
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item theme-toggle-desktop">
              <ThemeToggle />
            </li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
