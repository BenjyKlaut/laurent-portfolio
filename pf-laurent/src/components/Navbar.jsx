import { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Accueil' }, { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' }, { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const updateActive = () => {
      const position = window.scrollY + 130
      const current = [...links].reverse().find(({ id }) => document.getElementById(id)?.offsetTop <= position)
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  return <header className="nav">
    <div className="container nav-inner">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>LAURENT<span>.</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu"><i /><i /></button>
      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`} aria-label="Navigation principale">
        {links.map(({ id, label }) => <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="nav-cta" href="https://wa.me/243890928437?text=Bonjour%20Laurent%2C%20j%E2%80%99aimerais%20vous%20parler%20d%E2%80%99un%20projet." target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
    </div>
  </header>
}
