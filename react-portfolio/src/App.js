import React from 'react';
import '../src/App.css';
// import petUniverseHome from './projects/pet-universe/home.png';
// import petUniverseVideo from './projects/pet-universe/video.mp4';
import NavBar from './sections/NavBar'
import Intro from './sections/Intro'
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
import MailIcon from './icons/MailIcon';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="line1" />
      <span className="line1-text">
        <a href="https://www.linkedin.com/in/trevor-drayton/" target="_blank" className="App-anchor">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/TrevorDrayton03" target="_blank">
          <GithubIcon />
        </a>
        <a href="mailto:trevorpdrayton@gmail.com" target="_blank">
          <MailIcon />
        </a>
      </span>
      <div className="main-container">

        {/* <div className="line2" />
      <a href="mailto:trevorpdrayton@gmail.com" target="_blank">
        <span className="line2-text">trevorpdrayton@gmail.com</span>
      </a> */}
        <Intro></Intro>
      </div>
    </div>
  )
}

export default App;
