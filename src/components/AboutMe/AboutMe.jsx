import "./AboutMe.css";

const AboutMe = () => {
  const downloadCv = () => {
    const cvLink = "https://chocolate-juliette-93.tiiny.site";
    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "cv.pdf";
    link.click();
  };
  return (
    <div className="about-me-container">
      <div className="about-me">About Me</div>
      <div className="text-content">
        <div className="text">
          I'm a Full Stack Developer. I love to build web applications using
          MERN stack and also enjoy working on open source projects. Feel free
          to explore my work or connect with me! JavaScript and ReactJS.
          Currently working as a Frontend Developer.
        </div>
        <button className="btn btn-lg " onClick={downloadCv}>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
