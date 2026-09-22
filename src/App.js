import './App.css';
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Capabilities } from "./components/Capabilities";
import { TechStack } from "./components/TechStack";
import { Experience } from './components/Experience';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="ambient" aria-hidden="true"></div>
      <NavBar />
      <Hero />
      <Capabilities />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
