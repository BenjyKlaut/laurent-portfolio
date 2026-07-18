import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Style & pose",
    category: "Photographie",
    desc: "Des portraits expressifs où chaque pose raconte une attitude.",
    tone: "gold",
  },
  {
    number: "02",
    title: "Danse & reel",
    category: "Vidéo · Montage",
    desc: "Du mouvement, de l’énergie et un rythme fait pour les réseaux.",
    tone: "violet",
  },
  {
    number: "03",
    title: "La bonne finition",
    category: "Retouche photo",
    desc: "Couleurs, lumière et détails ajustés pour un rendu singulier.",
    tone: "orange",
  },
];

export default function Portfolio() {
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Sélection de travaux</p>
          <h2>
            Mon univers,
            <br />
            <em>en images.</em>
          </h2>
        </div>
        <p>
          Une approche visuelle sensible et actuelle, conçue pour laisser une
          impression durable.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
      <a
        className="inline-link"
        href="https://vm.tiktok.com/ZS9rdBjqgMfDN-0TcJK"
        target="_blank"
        rel="noreferrer"
      >
        Voir plus sur TikTok <span>↗</span>
      </a>
    </>
  );
}
