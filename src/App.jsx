import { useState } from 'react';
import './App.css';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';

function App() {
  return (
    <div>
      <Hero />
      <div className="skills-section">
        <Skills
          name="Ruby"
          image="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png"
        />
        <Skills
          name="JavaScript"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
        />
        <Skills
          name="Tailwind"
          image="https://www.loopple.com/img/tailwind-logo.png"
        />
        <Skills
          name="CSS"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
        />

        <Skills
          name="HTML"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
        />
      </div>
      <section>
        <h1>Projects</h1>
        <Project name="What To Do" />
      </section>
    </div>
  );
}

export default App;
