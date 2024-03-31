import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-left pb-3">Skills</h1>
      <Skills />
      <section>
        <h1 className="text-left my-3">Projects</h1>
        <Project />
      </section>

      <section>
        <About />
      </section>
    </div>
  );
}

export default App;
