function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {description ? (
        <p className="section-heading__text">{description}</p>
      ) : null}
    </header>
  );
}

export default SectionHeading;
