import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import NavBar from "./sections/NavBar";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import LinkedinIcon from "./icons/LinkedinIcon";
import GitHubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import LightTracing from "./projects/2d-light-tracing/LightTracing";
import BallPassGame from './projects/2d-light-tracing/BallPassGame';

const Home = () => {
  return (
    <div className="App" id="intro">
      <NavBar />
      <div className="line1" />
      <span className="line1-text">
        <a href="https://www.linkedin.com/in/trevor-drayton/" target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/TrevorDrayton03" target="_blank" rel="noreferrer">
          <GitHubIcon title="Trevor Drayton's GitHub" />
        </a>
        <a href="mailto:trevorpdrayton@gmail.com" target="_blank" rel="noreferrer">
          <MailIcon />
        </a>
      </span>
      <div className="main-container">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2d-light-tracing" element={<LightTracing />} />
        <Route path="/ballpassgame" element={<BallPassGame  />} />
      </Routes>
    </Router>
  );
}

export default App;
