import heroImage from '../assets/hero.png'

export default function Hero() {
  return <div className="hero-grid">
    <div className="hero-copy">
      <p className="eyebrow"><span /> Créateur audio-visuel · Kinshasa</p>
      <h1>Je donne du <em>mouvement</em><br />à votre image.</h1>
      <p className="hero-lead">Laurent “Yaya2Kin” Massa crée des images fortes : photographie, danse, vidéo et montage pensés pour captiver.</p>
      <div className="hero-actions">
        <a className="button button--primary" href="#portfolio">Découvrir mon travail <span>↓</span></a>
        <a className="button button--text" href="https://wa.me/243890928437?text=Bonjour%20Laurent%2C%20j%E2%80%99aimerais%20vous%20parler%20d%E2%80%99un%20projet." target="_blank" rel="noreferrer">Parler de votre projet <span>↗</span></a>
      </div>
      <div className="hero-proof"><div><strong>Photo</strong><span>Direction & retouche</span></div><div><strong>Vidéo</strong><span>Captation & montage</span></div><div><strong>Style</strong><span>Identité visuelle</span></div></div>
    </div>
    <div className="hero-visual">
      <div className="hero-image-frame"><img src={heroImage} alt="Laurent Massa" /></div>
      <p className="vertical-label">YAYA2KIN · EST. 2024</p>
      <div className="floating-note"><span>✦</span><p>Des contenus<br /><b>qui marquent.</b></p></div>
    </div>
  </div>
}
