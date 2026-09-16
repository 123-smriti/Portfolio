function SkillGroup({ title, items }) {
  return (
    <article className="skill-group">
      <h3 className="skill-group__title">{title}</h3>
      <ul className="skill-group__list">
        {items.map((item) => (
          <li key={item} className="skill-group__item">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillGroup;
