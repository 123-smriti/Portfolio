import { useState } from "react";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import { site } from "../data/site.js";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`,
    );

    // Opens the visitor's email app. Replace later with a form service if you prefer.
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <SectionHeading
        id="contact-heading"
        eyebrow="Connect"
        title="Contact"
        description="Send a note or find me on GitHub and LinkedIn. I am open to learning conversations and beginner-friendly opportunities."
      />

      <div className="contact">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="field" htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="field" htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="field" htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <Button type="submit">Send Message</Button>
          {status ? (
            <p className="contact__status" role="status">
              {status}
            </p>
          ) : null}
        </form>

        <aside className="contact__aside">
          <p className="contact__name">{site.name}</p>
          <p className="contact__role">{site.role}</p>
          <a className="contact__email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <SocialLinks github={site.github} linkedin={site.linkedin} />
        </aside>
      </div>
    </section>
  );
}

export default Contact;
