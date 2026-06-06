import { useEffect, useState } from "react"

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  useEffect(() => {
    let frame
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  if (!visible) return null

  return (
    <>
      {/* Punto pequeño — sigue exacto al mouse */}
      <div style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 6,
        height: 6,
        background: "#3b82f6",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "opacity 0.2s",
      }} />

      {/* Círculo grande — sigue con retraso */}
      <div style={{
        position: "fixed",
        left: trail.x,
        top: trail.y,
        width: 36,
        height: 36,
        border: "1.5px solid rgba(59, 130, 246, 0.5)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9998,
        transition: "opacity 0.2s",
      }} />
    </>
  )
}

export default Cursor