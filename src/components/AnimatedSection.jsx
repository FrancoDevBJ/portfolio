import { useScrollAnimation } from "../hooks/useScrollAnimation"

function AnimatedSection({ children, delay = 0, className = "" }) {
  const { ref, visible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection