import AnimatedSection from "./AnimatedSection"

function SobreMi({ t }) {
  const cardStyle = { background: "var(--bg-card)", border: "1px solid var(--border)" }

  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
              {t ? t.quienSoy : "Quién soy"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
              {t ? t.sobreMiTitulo : "Sobre mí"}
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                {t ? t.sobreMiP1 : "Soy Franco Quinteros, desarrollador web Full-Stack de Tucumán, Argentina. Me formé en Rolling Code School donde aprendí desde HTML hasta arquitecturas completas con React y Node.js."}
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                {t ? t.sobreMiP2 : "Me especializo en portales de noticias para radios y canales de TV — es un producto que armé porque vi que los medios locales necesitaban presencia digital más profesional y completa. También desarrollo tiendas online, plataformas de streaming y aplicaciones web a medida. Si un negocio necesita crecer en internet, puedo construirlo."}
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                {t ? t.sobreMiP3 : "Trabajo con inteligencia artificial — uso Claude AI para potenciar mis proyectos y ayudar a mis clientes a automatizar procesos y sacarle más valor a sus plataformas digitales."}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={cardStyle}>
                  <div className="text-2xl font-bold text-blue-500 mb-1">2+</div>
                  <div className="text-sm" style={{ color: "var(--text-dim)" }}>
                    {t ? t.proyectosCompletados : "Proyectos completados"}
                  </div>
                </div>
                <div className="rounded-xl p-4" style={cardStyle}>
                  <div className="text-2xl font-bold text-blue-500 mb-1">1 {t ? t.anio : "año"}</div>
                  <div className="text-sm" style={{ color: "var(--text-dim)" }}>
                    {t ? t.formacionIntensiva : "Formación intensiva"}
                  </div>
                </div>
                <div className="rounded-xl p-4" style={cardStyle}>
                  <div className="text-2xl font-bold text-blue-500 mb-1">Full-Stack</div>
                  <div className="text-sm" style={{ color: "var(--text-dim)" }}>
                    {t ? t.frontendBackend : "Frontend y Backend"}
                  </div>
                </div>
                <div className="rounded-xl p-4" style={cardStyle}>
                  <div className="text-2xl font-bold text-blue-500 mb-1">Tucumán</div>
                  <div className="text-sm" style={{ color: "var(--text-dim)" }}>Argentina · Remote OK</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">

              <div className="rounded-2xl p-6" style={cardStyle}>
                <div className="text-3xl mb-3">📰</div>
                <h4 className="font-semibold mb-2" style={{ color: "var(--text)" }}>
                  {t ? t.portalesNoticias : "Portales de noticias"}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {t ? t.portalesNoticiasDesc : "Desarrollé un producto completo para medios de comunicación — portales profesionales listos para vender a radios y canales de TV."}
                </p>
              </div>

              <div className="rounded-2xl p-6" style={cardStyle}>
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="font-semibold mb-2" style={{ color: "var(--text)" }}>
                  {t ? t.iaDesarrollo : "IA aplicada al desarrollo"}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {t ? t.iaDesarrolloDesc : "Integro inteligencia artificial en mis flujos de trabajo y proyectos, usando Claude AI para potenciar resultados y automatizar procesos."}
                </p>
              </div>

              <div className="rounded-2xl p-6" style={cardStyle}>
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2" style={{ color: "var(--text)" }}>
                  {t ? t.disponibleProyectos : "Disponible para proyectos"}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {t ? t.disponibleProyectosDesc : "Abierto a proyectos freelance, colaboraciones y oportunidades de trabajo remoto desde Tucumán."}
                </p>
              </div>

            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default SobreMi