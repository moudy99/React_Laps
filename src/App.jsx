import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
};

// Lets create a react element

export default App;
