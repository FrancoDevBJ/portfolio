import AnimatedSection from "./AnimatedSection"

function Servicios({ t }) {
  const titulo1 = t ? t.servicio1Titulo : "Portales de Noticias"
  const desc1   = t ? t.servicio1Desc  : "Portales completos para radios, canales de TV y medios digitales. Con player de streaming, grilla de programación, reels y banners publicitarios."
  const titulo2 = t ? t.servicio2Titulo : "Tiendas Online"
  const desc2   = t ? t.servicio2Desc  : "E-commerce completos con carrito de compras, pagos online y panel de administración para que el cliente gestione sus productos."
  const titulo3 = t ? t.servicio3Titulo : "Plataformas Digitales"
  const desc3   = t ? t.servicio3Desc  : "Aplicaciones web a medida para negocios que necesitan más que una página estática. Sistemas con usuarios, paneles y datos en tiempo real."
  const titulo4 = t ? t.servicio4Titulo : "Sitios Web Corporativos"
  const desc4   = t ? t.servicio4Desc  : "Presencia digital profesional para empresas y emprendimientos. Diseño moderno, rápido y optimizado para Google."

  const tagStyle = { background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }
  const cardStyle = { background: "var(--bg-card)", border: "1px solid var(--border)" }

  return (
    <section id="servicios" className="py-24 relative">
      <div className="absolute inset-0 transition-colors duration-300 bg-zinc-950/50" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
              {t ? t.servicios : "Lo que hago"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
              {t ? t.serviciosTitulo : "Servicios"}
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
              {t ? t.serviciosDesc : "Desarrollo soluciones digitales completas — desde el diseño hasta el deploy."}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-xl p-6 transition-all duration-300 group hover:border-blue-500/50" style={cardStyle}>
              <div className="text-4xl mb-4">📰</div>
              <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{titulo1}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{desc1}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>WordPress</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>PHP</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>MySQL</span>
              </div>
            </div>

            <div className="rounded-xl p-6 transition-all duration-300 group hover:border-blue-500/50" style={cardStyle}>
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{titulo2}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{desc2}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>React</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>Node.js</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>MongoDB</span>
              </div>
            </div>

            <div className="rounded-xl p-6 transition-all duration-300 group hover:border-blue-500/50" style={cardStyle}>
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{titulo3}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{desc3}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>React</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>Node.js</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>APIs</span>
              </div>
            </div>

            <div className="rounded-xl p-6 transition-all duration-300 group hover:border-blue-500/50" style={cardStyle}>
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{titulo4}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{desc4}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>HTML</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>CSS</span>
                <span className="text-xs text-blue-400 px-3 py-1 rounded-full" style={tagStyle}>JavaScript</span>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export default Servicios