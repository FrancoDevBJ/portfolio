import { useState, useEffect } from "react"

function Hero({ t }) {
  const textos = t ? t.subtitulo : [
    "Desarrollador Web Full-Stack",
    "Especialista en Portales de Noticias",
    "Integrador de IA en proyectos web",
  ]
  const [textoActual, setTextoActual] = useState(0)
  const [escrito, setEscrito] = useState("")
  const [borrando, setBorrando] = useState(false)

  useEffect(() => {
    setEscrito("")
    setBorrando(false)
  }, [textoActual, t])

  useEffect(() => {
    const texto = textos[textoActual]
    let timeout
    if (!borrando && escrito.length < texto.length) {
      timeout = setTimeout(() => setEscrito(texto.slice(0, escrito.length + 1)), 60)
    } else if (!borrando && escrito.length === texto.length) {
      timeout = setTimeout(() => setBorrando(true), 2000)
    } else if (borrando && escrito.length > 0) {
      timeout = setTimeout(() => setEscrito(escrito.slice(0, -1)), 35)
    } else if (borrando && escrito.length === 0) {
      setBorrando(false)
      setTextoActual((prev) => (prev + 1) % textos.length)
    }
    return () => clearTimeout(timeout)
  }, [escrito, borrando, textoActual, textos])

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 transition-colors duration-300" style={{ background: "var(--bg)" }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
           style={{ background: "rgba(59,130,246,0.08)" }} />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              background: "rgba(59,130,246,0.25)",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 8}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
             style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm" style={{ color: "var(--text-dim)" }}>
            {t ? t.disponible : "Disponible para proyectos"}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--text)" }}>
          {t ? (t.saludo || "Hola, soy") : "Hola, soy"}{" "}
          <span className="texto-gradiente">Franco</span>
          <br />
          Quinteros
        </h1>

        <p className="text-xl md:text-2xl mb-4 font-light h-8" style={{ color: "var(--text-muted)" }}>
          {escrito}
          <span className="animate-pulse text-blue-500">|</span>
        </p>

        <p className="text-base max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {t ? t.descripcion : "Creo portales de noticias, tiendas online y plataformas digitales para radios, canales de TV y negocios que quieren crecer en internet."}
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors no-underline">
            {t ? t.verProyectos : "Ver proyectos"}
          </a>
          <a href="#contacto" className="font-medium px-6 py-3 rounded-md transition-colors no-underline"
             style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
            {t ? t.contactame : "Contactame"}
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/FrancoDevBJ" target="_blank"
             className="transition-colors no-underline hover:text-blue-400 text-2xl"
             style={{ color: "var(--text-dim)" }}
             title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/franco-quinteros-dev" target="_blank"
             className="transition-colors no-underline hover:text-blue-400 text-2xl"
             style={{ color: "var(--text-dim)" }}
             title="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:fquinteros.dev@gmail.com"
             className="transition-colors no-underline hover:text-blue-400 text-2xl"
             style={{ color: "var(--text-dim)" }}
             title="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-1"
             style={{ border: "2px solid var(--border)" }}>
          <div className="w-1 h-2 rounded-full" style={{ background: "var(--text-dim)" }} />
        </div>
      </div>

    </section>
  )
}

export default Hero