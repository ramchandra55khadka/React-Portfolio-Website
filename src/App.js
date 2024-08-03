import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutMe from "./components/AboutMe";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <br />

        <AboutMe />
        <br />
        <br />
        <br />
        <br />

        <Experience />
        <br />
        <br />
        <br />
        <Skills />

        <br />
        <br />
        <br />
        <br />
        <Contact />
      </div>
    </>
  );
}

export default App;
