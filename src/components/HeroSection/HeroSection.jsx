import "./HeroSection.css";
const HeroSection = () => {
  const downloadCv = () => {
    const cvLink = "https://chocolate-juliette-93.tiiny.site";
    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "cv.pdf";
    link.click();
  };
  return (
    <>
      <div className="hero-section-container">
        <div className="here-section-content">
          <div className="section-img">
            <img
              src="https://www.pngitem.com/pimgs/m/112-1127587_software-hire-developers-hd-png-download.png"
              alt="hero-section img"
            />
          </div>
          <div className="text-content">
            <h1 className="my-name">
              Hi, I'm <span>Moudy</span>
            </h1>
            <p className="display-3">I'm a Full Stack Developer.</p>

            <button
              className="btn btn-lg btn-outline-dark"
              onClick={downloadCv}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
