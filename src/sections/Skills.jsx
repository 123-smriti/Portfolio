import SectionHeading from "../components/SectionHeading.jsx";
import SkillGroup from "../components/SkillGroup.jsx";
import { skillGroups } from "../data/site.js";

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Toolkit"
        title="Skills"
        description="Technologies and concepts I am using today, plus what I am currently studying."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
