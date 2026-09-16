import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Education from "./sections/Education.jsx";
import Focus from "./sections/Focus.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Resume from "./sections/Resume.jsx";
import Skills from "./sections/Skills.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Projects />
        <Education />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
