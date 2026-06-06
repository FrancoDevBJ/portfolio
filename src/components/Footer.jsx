function Footer({ t }) {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>

      <div style={{ borderTop: "1px solid var(--border)" }} className="py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">

          <span className="font-bold" style={{ color: "var(--text)" }}>
            Franco<span className="text-blue-500">.</span>
          </span>

          <span className="text-sm" style={{ color: "var(--text-dim)" }}>
            2026 © {t ? t.footerDerechos : "Todos los derechos reservados"}
          </span>

          <div className="flex items-center gap-6">
            <a href="https://github.com/FrancoDevBJ" target="_blank"
               className="text-sm no-underline hover:text-blue-400 transition-colors"
               style={{ color: "var(--text-dim)" }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/franco-quinteros-dev" target="_blank"
               className="text-sm no-underline hover:text-blue-400 transition-colors"
               style={{ color: "var(--text-dim)" }}>
              LinkedIn
            </a>
            <a href="mailto:fquinteros.dev@gmail.com"
               className="text-sm no-underline hover:text-blue-400 transition-colors"
               style={{ color: "var(--text-dim)" }}>
              Email
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer