import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero-section"><div className="container"><Hero /></div></section>
        <section id="portfolio" className="section"><div className="container"><Portfolio /></div></section>
        <section id="services" className="section section--tinted"><div className="container"><Services /></div></section>
        <section id="process" className="section"><div className="container"><Process /></div></section>
        <section id="contact" className="section contact-section"><div className="container"><Contact /></div></section>
      </main>
      <footer className="footer"><div className="container">© {new Date().getFullYear()} Laurent Massa · Créateur audio-visuel à Kinshasa</div></footer>
    </>
  )
}
