import SectionHeading from "../components/SectionHeading.jsx";
import { education } from "../data/site.js";

function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <SectionHeading
        id="education-heading"
        eyebrow="Background"
        title="Education"
        description="Add your real details when you are ready. These entries are placeholders only."
      />
      <ol className="timeline">
        {education.map((item) => (
          <li key={item.title} className="timeline__item">
            <p className="timeline__period">{item.period}</p>
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__institution">{item.institution}</p>
            <p className="timeline__detail">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Education;
