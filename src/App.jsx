import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { profile } from "./data.js";

export default function App() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </div>
  );
}
