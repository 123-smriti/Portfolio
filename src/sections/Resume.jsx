import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { site } from "../data/site.js";

function Resume() {
  return (
    <section className="section section--resume" id="resume" aria-labelledby="resume-heading">
      <div className="resume">
        <SectionHeading
          id="resume-heading"
          eyebrow="Resume"
          title="Download my resume"
          description="A one-page overview of my skills and projects."
        />
        <Button href={site.resume.pdf} download>
          Download Resume
        </Button>
      </div>
    </section>
  );
}

export default Resume;
