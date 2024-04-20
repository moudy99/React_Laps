import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <h2 className="display-3 text-center mb-4 portfolio-section">
        Portfolio
      </h2>
      <div className="row">
        <div className="col-md-4">
          <div className="portfolio-item">
            <h3 className="project-title">Project </h3>
            <img
              src="https://fakeimg.pl/300/?text=Project1"
              alt="Project 1"
              className="project-img"
            />
            <p>Description of project </p>
            <div className="project-links">
              <a href="#">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="portfolio-item">
            <h3 className="project-title">Project </h3>
            <img
              src="https://fakeimg.pl/300/?text=Project2"
              alt="Project 2"
              className="project-img"
            />
            <p>Description of project </p>
            <div className="project-links">
              <a href="#">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="portfolio-item">
            <h3 className="project-title">Project </h3>
            <img
              src="https://fakeimg.pl/300/?text=Project2"
              alt="Project 2"
              className="project-img"
            />
            <p>Description of project </p>
            <div className="project-links">
              <a href="#">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="portfolio-item">
            <h3 className="project-title">Project </h3>
            <img
              src="https://fakeimg.pl/300/?text=Project1"
              alt="Project 1"
              className="project-img"
            />
            <p>Description of project</p>
            <div className="project-links">
              <a href="#">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="portfolio-item">
            <h3 className="project-title">Project </h3>
            <img
              src="https://fakeimg.pl/300/?text=Project2"
              alt="Project 2"
              className="project-img"
            />
            <p>Description of project </p>
            <div className="project-links">
              <a href="#">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="portfolio-item">
            <h3 className="project-title">Project </h3>
            <img
              src="https://fakeimg.pl/300/?text=Project2"
              alt="Project 2"
              className="project-img"
            />
            <p>Description of project </p>
            <div className="project-links">
              <a href="#">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
