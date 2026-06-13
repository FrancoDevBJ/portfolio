import { useState, useEffect } from "react"

function Navbar({ t, lang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [activa, setActiva] = useState("inicio")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const secciones = ["inicio","servicios","proyectos","habilidades","sobre-mi","contacto"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiva(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    secciones.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const linkActivo = "text-sm text-blue-500 transition-colors no-underline font-medium"
  const linkNormal = "text-sm text-white/60 hover:text-white transition-colors no-underline"

  const labels = {
    inicio:      lang === "es" ? "Inicio"      : "Home",
    servicios:   lang === "es" ? "Servicios"   : "Services",
    proyectos:   lang === "es" ? "Proyectos"   : "Projects",
    habilidades: lang === "es" ? "Habilidades" : "Skills",
    sobremi:     lang === "es" ? "Sobre mí"    : "About me",
    contacto:    lang === "es" ? "Contacto"    : "Contact",
    hablemos:    lang === "es" ? "Hablemos"    : "Let's talk",
  }

  return (
    <nav className={[
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3"
        : "bg-transparent py-5"
    ].join(" ")}>

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        <img src="/logo-dev.png" alt="logo" className="size-10 brightness-75 saturate-200 hue-rotate-60"/>

        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio"      className={activa === "inicio"      ? linkActivo : linkNormal}>{labels.inicio}</a>
          <a href="#servicios"   className={activa === "servicios"   ? linkActivo : linkNormal}>{labels.servicios}</a>
          <a href="#proyectos"   className={activa === "proyectos"   ? linkActivo : linkNormal}>{labels.proyectos}</a>
          <a href="#habilidades" className={activa === "habilidades" ? linkActivo : linkNormal}>{labels.habilidades}</a>
          <a href="#sobre-mi"    className={activa === "sobre-mi"    ? linkActivo : linkNormal}>{labels.sobremi}</a>
          <a href="#contacto"    className={activa === "contacto"    ? linkActivo : linkNormal}>{labels.contacto}</a>
        </div>

        <div className="flex items-center gap-3">
          <button
  onClick={toggleLang}
  style={{
    display: "flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid var(--border)",
    borderRadius: 99,
    padding: "3px",
    cursor: "none",
    position: "relative",
    width: 68,
    height: 30,
    transition: "background 0.3s",
  }}
  title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
>
  {/* Bandera activa — desliza */}
  <span style={{
    position: "absolute",
    left: lang === "es" ? 3 : 38,
    width: 24,
    height: 24,
    borderRadius: "50%",
    overflow: "hidden",
    transition: "left 0.3s ease",
    flexShrink: 0,
  }}>
    <img
      src={lang === "es"
        ? "https://flagcdn.com/w40/es.png"
        : "https://flagcdn.com/w40/us.png"
      }
      alt={lang}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </span>
  {/* Bandera del otro idioma */}
  <span style={{
    position: "absolute",
    left: lang === "es" ? 38 : 3,
    width: 24,
    height: 24,
    borderRadius: "50%",
    overflow: "hidden",
    opacity: 0.4,
  }}>
    <img
      src={lang === "es"
        ? "https://flagcdn.com/w40/us.png"
        : "https://flagcdn.com/w40/es.png"
      }
      alt={lang === "es" ? "en" : "es"}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </span>
</button>

          <a href="#contacto"
             className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors no-underline">
            {labels.hablemos}
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar