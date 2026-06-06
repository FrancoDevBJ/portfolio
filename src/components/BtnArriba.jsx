import { useState, useEffect } from "react"

function BtnArriba() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const volver = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <button
      onClick={volver}
      style={{
        position: "fixed",
        bottom: 32,
        right: 24,
        width: 44,
        height: 44,
        background: "#2563eb",
        border: "none",
        borderRadius: "50%",
        color: "white",
        fontSize: 20,
        cursor: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(37,99,235,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s, transform 0.3s",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 998,
      }}
    >
      ↑
    </button>
  )
}

export default BtnArriba