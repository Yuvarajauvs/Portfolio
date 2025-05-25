const Coursework = () => {
  return (
    <div className="skills__content">
      {/* Updated Title */}
      <h3 className="skills__title">Skills, Technologies & Tools</h3>

      <div className="skills__box">
        {/* Frontend Skills Section */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-css3"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        {/* Backend Skills Section */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-java"></i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-spring"></i>
            <div>
              <h3 className="skills__name">Spring Boot</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-python"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-mysql"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-github"></i>
            <div>
              <h3 className="skills__name">GitHub</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-visual-studio"></i>
            <div>
              <h3 className="skills__name">VS Code</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-intellij"></i>
            <div>
              <h3 className="skills__name">IntelliJ IDEA</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-eclipse"></i>
            <div>
              <h3 className="skills__name">Eclipse</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursework;
