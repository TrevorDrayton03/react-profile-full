import React, { useState, useEffect } from "react"
import '../src/App.css'
import NavBar from './sections/NavBar'
import Intro from './sections/Intro'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import LinkedinIcon from './icons/LinkedinIcon'
import GithubIcon from './icons/GithubIcon'
import MailIcon from './icons/MailIcon'

function App() {
  const [route, setRoute] = useState(window.location.pathname)

  const handleRouteClick = (route) => {
    setRoute(route)
    window.history.pushState(null, null, route);
  }

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  useEffect(() => {
    const handlePopstate = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <div className="App">
      <NavBar brandClick={handleRouteClick} scrollToSection={scrollToSection} />
      <div className="line1" />
      <span className="line1-text">
        <a href="https://www.linkedin.com/in/trevor-drayton/" target="_blank">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/TrevorDrayton03" target="_blank">
          <GithubIcon title="Trevor Drayton's Github Repo" />
        </a>
        <a href="mailto:trevorpdrayton@gmail.com" target="_blank">
          <MailIcon />
        </a>
      </span>
      <div className="main-container">
        <Intro></Intro>
        <About></About>
        <Work></Work>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App;
