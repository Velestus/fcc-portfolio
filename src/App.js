import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav id="navbar">
            <ul>
              <li><a href="#welcome-section">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#profile-link">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="welcome-section">
            <article>
              <h1 id="welcome-caption">Hello, I'm Bartosz Borawski</h1>
              <p id="welcome-text">Here you can find my freeCodeCamp projects.</p>
            </article>
          </section>
          <section id="projects">
            <article id="projects-desc">
              <p>Click into the caption above each project to go to that website.</p>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/tribute" target="_blank">Tribute Page</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/tribute.PNG" alt="freeCodeCamp Tribute Page project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/survey" target="_blank">Survey</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/survey.PNG" alt="freeCodeCamp Survey project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/landing-page" target="_blank">Product Landing Page</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/landing-page.PNG" alt="freeCodeCamp Product Landing Page project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/technical" target="_blank">Technical Documentation Page</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/technical.PNG" alt="freeCodeCamp Technical Documentation Page project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/quote" target="_blank">Random Quote Generator</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/quote.PNG" alt="freeCodeCamp Random quote Generator project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/markdown" target="_blank">Markdown Previewer</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/markdown.PNG" alt="freeCodeCamp Markdown Previewer project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/drums" target="_blank">Drum Machine</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/drums.PNG" alt="freeCodeCamp Drum Machine project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/calculator" target="_blank">JavaScript Calculator</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/calculator.PNG" alt="freeCodeCamp JavaScript Calculator project"></img>
            </article>
            <article className="project-tile">
              <a className="project-caption" href="http://projects.bborawski.pl/fcc/pomodoro" target="_blank">Pomodoro Clock</a>
              <img src="http://projects.bborawski.pl/fcc/static/media/pomodoro.PNG" alt="freeCodeCamp Pomodoro Clock project"></img>
            </article>
          </section>
          <section id="profile-section">
            <div id="profile-caption">
              <h1>Let's work together!</h1>
            </div>
            <a className="link" target="_blank" 
              id="profile-link" href="https://github.com/Velestus"
              rel="noopener noreferrer">
              GitHub
            </a>
            <a className="link" target="_blank"
              href="https://www.linkedin.com/in/bartosz-borawski-134a7b142/"
              rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="link" href="mailto:b.borawski92@gmail.com">Send a mail</a>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
