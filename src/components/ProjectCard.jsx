import Button from "./Button.jsx";

function ProjectCard({ title, description, technologies, github, live }) {
  return (
    <article className="project-card">
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__text">{description}</p>
        <ul className="project-card__tech" aria-label={`${title} technologies`}>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="project-card__actions">
        <Button href={github} variant="ghost">
          GitHub
        </Button>
        <Button href={live} variant="secondary">
          Live Demo
        </Button>
      </div>
    </article>
  );
}

export default ProjectCard;
