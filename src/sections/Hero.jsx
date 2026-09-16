import Button from "../components/Button.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import { site } from "../data/site.js";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__content">
        <p className="hero__eyebrow">Portfolio_</p>
        <h1 id="hero-heading" className="hero__title">
          Hi, I&apos;m {site.name}
        </h1>
        <p className="hero__role">{site.role}</p>
        <p className="hero__intro">
          I design and build clean, responsive web interfaces while learning
          frontend and full-stack development. This site collects the projects
          I am creating as I grow my skills.
        </p>
        <div className="hero__actions">
          <Button href="#projects">View Projects</Button>
          <Button href={site.resumePath} variant="secondary" download>
            Download Resume
          </Button>
        </div>
        <SocialLinks github={site.github} linkedin={site.linkedin} />
      </div>
    </section>
  );
}

export default Hero;
