export default function ProjectCard({ number, title, category, desc, tone }) {
  return <article className={`project-card project-card--${tone}`}>
    <div className="project-art"><span className="project-number">{number}</span><div className="project-shape" /><span className="project-type">{category}</span></div>
    <div className="project-content"><p>{category}</p><h3>{title}</h3><span className="project-description">{desc}</span><span className="project-arrow">↗</span></div>
  </article>
}
