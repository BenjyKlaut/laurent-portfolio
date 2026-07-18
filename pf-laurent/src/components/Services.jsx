const services = [
  [
    "01",
    "Photographie",
    "Portraits, éditorial et image de marque avec une direction artistique claire.",
  ],
  [
    "02",
    "Vidéo & captation",
    "Des images vivantes pour raconter un moment, un produit ou une énergie.",
  ],
  [
    "03",
    "Montage CapCut",
    "Reels, clips et formats verticaux rythmés, prêts à être publiés.",
  ],
  [
    "04",
    "Retouche mobile",
    "Une finition propre et artistique : couleur, contraste et lumière.",
  ],
];
export default function Services() {
  return (
    <>
      <div className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">Ce que je fais</p>
          <h2>
            De l’idée à<br />
            <em>l’impact.</em>
          </h2>
        </div>
        <a className="button button--dark" href="#contact">
          Demander un devis <span>→</span>
        </a>
      </div>
      <div className="services-grid">
        {services.map(([number, title, desc]) => (
          <article className="service-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <i>↗</i>
          </article>
        ))}
      </div>
    </>
  );
}
