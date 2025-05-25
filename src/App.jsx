import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/project/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";
function App() {
  return (
    <Router>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </Router>
  );
}

export default App;
