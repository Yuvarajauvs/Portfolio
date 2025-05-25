// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  const parallaxRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid" ref={parallaxRef}>
        <div className="home__content grid">
          <Social />

          <div className="home__img-wrapper">
            <div className="home__img"></div>
            <div className="home__img-glow"></div>
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
