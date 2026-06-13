import AnimatedSection from "./AnimatedSection"

function Contacto({ t }) {
  const cardStyle = { background: "var(--bg-card)", border: "1px solid var(--border)" }

  return (
    <section id="contacto" className="py-24 relative">
      <div className="absolute inset-0 bg-zinc-950/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
              {t ? t.hablemos : "Hablemos"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text)" }}>
              {t ? t.contactoTitulo : "Contacto"}
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
              {t ? t.contactoDesc : "Tenés un proyecto en mente o querés saber más sobre los portales de noticias. Escribime y te respondo."}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 gap-10">

            <div className="flex flex-col gap-4">

              <div className="group rounded-2xl p-6 transition-all duration-300" style={cardStyle}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
    
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ width: 48, height: 48, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
        📧
      </div>
      <div>
        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4, color: "var(--text-dim)" }}>Email</div>
        <div style={{ fontWeight: 500, color: "var(--text)", fontSize: 14 }}>fquinteros.dev@gmail.com</div>
      </div>
    </div>

    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
      <button
        id="btnCopiarEmail"
        onClick={() => {
          navigator.clipboard.writeText("fquinteros.dev@gmail.com")
          const btn = document.getElementById("btnCopiarEmail")
          btn.innerHTML = '<i class="fa-solid fa-check"></i>'
          btn.style.background = "#16a34a"
          btn.style.borderColor = "#16a34a"
          setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>'
            btn.style.background = ""
            btn.style.borderColor = ""
          }, 2000)
        }}
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
          cursor: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          transition: "all 0.2s",
        }}
        title={t ? t.copiar : "Copiar"}
      >
        <i className="fa-regular fa-copy"></i>
      </button>
      
      <a href="https://mail.google.com/mail/?view=cm&to=fquinteros.dev@gmail.com&su=Contacto desde portfolio"
        target="_blank"
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: "var(--bg-card)",
          color: "var(--text-muted)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          flexShrink: 0,
        }}
        title={t ? t.enviar : "Enviar email"}
      >
        <i className="fa-solid fa-paper-plane"></i>
      </a>
    </div>

  </div>
</div>

              <a href="https://www.linkedin.com/in/franco-quinteros-dev" target="_blank"
                 className="group rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 no-underline"
                 style={cardStyle}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    💼
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-dim)" }}>LinkedIn</div>
                    <div className="font-medium group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>
                      franco-quinteros-dev
                    </div>
                  </div>
                </div>
              </a>
              
              <a href="https://github.com/FrancoDevBJ" target="_blank"
                 className="group rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 no-underline"
                 style={cardStyle}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    💻
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-dim)" }}>GitHub</div>
                    <div className="font-medium group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>
                      FrancoDevBJ
                    </div>
                  </div>
                </div>
              </a>

              <div className="rounded-2xl p-6" style={cardStyle}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {t ? t.disponible : "Disponible para proyectos"}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  Tucumán, Argentina · Remote OK · {t ? t.respondo : "Respondo en menos de 24hs"}
                </p>
              </div>

            </div>

            <div className="rounded-2xl p-6" style={cardStyle}>
              <h3 className="font-semibold mb-6" style={{ color: "var(--text)" }}>
                {t ? t.enviameUnMensaje : "Enviame un mensaje"}
              </h3>
              <form
                action="https://formsubmit.co/fquinteros.dev@gmail.com"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="_subject" value="Nuevo contacto desde portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://portfoliofrancoquinteros-cyan-pi-vqfcq2g7qp.vercel.app/gracias.html" />

                <div>
                  <label className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "var(--text-dim)" }}>
                    {t ? t.nombre : "Nombre"}
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder={t ? t.tuNombre : "Tu nombre"}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "var(--text-dim)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest mb-2 block" style={{ color: "var(--text-dim)" }}>
                    {t ? t.mensaje : "Mensaje"}
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows="4"
                    placeholder={t ? t.contameProyecto : "Contame sobre tu proyecto..."}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm"
                >
                  {t ? t.enviarMensaje : "Enviar mensaje"} →
                </button>

              </form>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Contacto