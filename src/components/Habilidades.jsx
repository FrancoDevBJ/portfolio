import AnimatedSection from "./AnimatedSection"

function Habilidades({ t }) {
  const cardStyle = { background: "var(--bg-card)", border: "1px solid var(--border)" }
  const tagStyle  = { background: "var(--bg-card)", border: "1px solid var(--border)" }

  return (
    <section id="habilidades" className="py-24 relative">
      <div className="absolute inset-0 bg-zinc-950/50" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
              {t ? t.stack : "Stack"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
              {t ? t.habilidadesTitulo : "Habilidades"}
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
              {t ? t.habilidadesDesc : "Tecnologías con las que construyo proyectos reales."}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300" style={cardStyle}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg">🎨</div>
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>HTML</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>CSS</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>JavaScript</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>React</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>Tailwind CSS</span>
              </div>
            </div>

            <div className="rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300" style={cardStyle}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg">⚙️</div>
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>Node.js</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>Express</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>PHP</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>REST APIs</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>JWT</span>
              </div>
            </div>

            <div className="rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300" style={cardStyle}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg">🗄️</div>
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>
                  {t ? t.baseDatos : "Bases de datos"}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>MongoDB</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>MySQL</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>Mongoose</span>
              </div>
            </div>

            <div className="rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300" style={cardStyle}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg">🛠️</div>
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>
                  {t ? t.herramientas : "Herramientas"}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>Git</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>GitHub</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>WordPress</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>Vercel</span>
              </div>
            </div>

          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300" style={cardStyle}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg">🤖</div>
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>
                  {t ? t.inteligenciaArtificial : "Inteligencia Artificial"}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1.5 rounded-lg">Claude AI</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>
                  {t ? t.promptingAvanzado : "Prompting avanzado"}
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>Skills</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>
                  {t ? t.integracionIA : "Integración de APIs de IA"}
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>
                  {t ? t.automatizacionIA : "Automatización con IA"}
                </span>
              </div>
            </div>

            <div className="rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300" style={cardStyle}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg">📦</div>
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>
                  {t ? t.cmsPlataformas : "CMS y Plataformas"}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>WordPress</span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>
                  {t ? t.temasAMedida : "Temas a medida"}
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>
                  {t ? t.pluginsPersonalizados : "Plugins personalizados"}
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ ...tagStyle, color: "var(--text-muted)" }}>WP REST API</span>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export default Habilidades