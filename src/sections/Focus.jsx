import FocusCard from "../components/FocusCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { focusAreas } from "../data/site.js";

function Focus() {
  return (
    <section className="section" id="focus" aria-labelledby="focus-heading">
      <SectionHeading
        id="focus-heading"
        eyebrow="Practice"
        title="What I'm learning"
        description="The areas I am actively practicing through coursework and personal projects."
      />
      <div className="focus-grid">
        {focusAreas.map((item) => (
          <FocusCard key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
}

export default Focus;
