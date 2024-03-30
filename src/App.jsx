import { useState } from 'react';
import './App.css';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <div>
      <Hero />
      <h1 className="text-left pb-3">Tools</h1>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
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
          image="https://e7.pngegg.com/pngimages/604/592/png-clipart-css3-cascading-style-sheets-logo-html-beautify-blue-angle-thumbnail.png"
        />

        <Skills
          name="HTML"
          image="https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp"
        />

        <Skills
          name="React"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
        <Skills
          name="PostgreSQL"
          image="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
        />
        <Skills
          name="SQL"
          image="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
        />
        <Skills
          name="Node JS"
          image="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png"
        />
      </div>
      <section>
        <h1 className="text-left my-3">Selected Projects</h1>
        <Project name="What To Do" />
        <Project name="What To Do" />
      </section>

      <section>
        <About />
      </section>
    </div>
  );
}

export default App;
