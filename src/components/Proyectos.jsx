import AnimatedSection from "./AnimatedSection"

function Proyectos({ t }) {
  const tagStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }

  return (
    <section id="proyectos" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
              {t ? t.miTrabajo : "Mi trabajo"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
              {t ? t.proyectosTitulo : "Proyectos"}
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
              {t ? t.proyectosDesc : "Proyectos reales que muestran lo que puedo construir."}
            </p>
          </div>
        </AnimatedSection>

        {/* PROYECTO 1 */}
        <AnimatedSection delay={200}>
          <div className="group relative rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 overflow-hidden mb-8"
               style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span className="absolute top-6 right-8 text-7xl font-bold select-none" style={{ color: "var(--border)" }}>01</span>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
                  ⭐ {t ? t.destacado : "Proyecto destacado"}
                </span>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>
                  {t ? t.proyecto1Titulo : "Portal de Noticias"}
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>
                  {t ? t.proyecto1Sub : "Para radios, canales de TV y streaming"}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                  {t ? t.proyecto1Desc : "Portal completo con player de streaming en vivo, grilla de programación administrable, sección de reels de Instagram, banners publicitarios y sistema de widgets. Desarrollado como producto vendible para medios de comunicación."}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>WordPress</span>
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>PHP</span>
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>CSS</span>
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>JavaScript</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-medium px-5 py-2 rounded-md" style={{ background: "var(--bg-card)", color: "var(--text-dim)", border: "1px solid var(--border)" }}>
                    {t ? t.demoProximo : "Demo próximamente"}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="text-xs ml-2" style={{ color: "var(--text-dim)" }}>canalnorte.com</span>
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img src="src/public/portal.png" alt="Portal de Noticias" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* PROYECTO 2 */}
        <AnimatedSection delay={300}>
          <div className="group relative rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
               style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span className="absolute top-6 right-8 text-7xl font-bold select-none" style={{ color: "var(--border)" }}>02</span>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>
                  Rolling Music
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>
                  {t ? t.proyecto2Sub : "Plataforma de música digital"}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                  {t ? t.proyecto2Desc : "Plataforma de streaming de música con reproductor, catálogo de artistas y álbumes, sistema de usuarios y panel de administración. Desarrollado como proyecto final del curso con mejoras propias posteriores."}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>React</span>
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>Node.js</span>
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>MongoDB</span>
                  <span className="text-xs text-white/50 px-3 py-1 rounded-full" style={tagStyle}>Express</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://rolling-music-frontend.vercel.app" target="_blank"
                     className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors no-underline">
                    {t ? t.verDemo : "Ver demo"}
                  </a>
                  <a href="https://github.com/FrancoDevBJ" target="_blank"
                     className="text-sm font-medium px-5 py-2 rounded-md transition-colors no-underline"
                     style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                    GitHub
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="text-xs ml-2" style={{ color: "var(--text-dim)" }}>rolling-music.vercel.app</span>
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img src="src/public/rolling.png" alt="Rolling Music" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export default Proyectos