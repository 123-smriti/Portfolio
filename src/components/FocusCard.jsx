function FocusCard({ title, text }) {
  return (
    <article className="focus-card">
      <h3 className="focus-card__title">{title}</h3>
      <p className="focus-card__text">{text}</p>
    </article>
  );
}

export default FocusCard;
