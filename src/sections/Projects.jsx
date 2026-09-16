import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/site.js";

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Work"
        title="Projects"
        description="Selected learning projects covering Job application tracking platform, music, country search, newsfeed and location selector."></SectionHeading>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
