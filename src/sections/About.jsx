import SectionHeading from "../components/SectionHeading.jsx";
import { site } from "../data/site.js";

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title="About me"
        description={`${site.name} is building a foundation in web development through focused practice and personal projects.`}
      />
      <div className="about">
        <p>
          I am an aspiring frontend and full-stack developer, currently learning
          how modern websites are structured, styled, and connected to data. My
          focus is on writing clear HTML, CSS, and JavaScript, then bringing
          those skills into React.
        </p>
        <p>
          I do not have professional work experience yet. I am learning by
          building projects — from travel and music interfaces to search, weather,
          and expense tools — so I can understand how real features come together.
        </p>
        <p>
          I care about readable code, thoughtful layout, and interfaces that feel
          calm and easy to use. Next, I am studying Next.js and continuing to
          practice API integration, debugging, and responsive design.
        </p>
      </div>
    </section>
  );
}

export default About;
