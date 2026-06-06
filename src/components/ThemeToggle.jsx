import { useTheme } from "../hooks/useTheme"

function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      style={{
        position: "fixed",
        bottom: 32,
        left: 24,
        width: 44,
        height: 44,
        background: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        border: dark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.15)",
        borderRadius: "50%",
        color: dark ? "white" : "#0a0a0a",
        fontSize: 18,
        cursor: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 998,
        transition: "all 0.3s",
      }}
      title={dark ? "Modo claro" : "Modo oscuro"}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle