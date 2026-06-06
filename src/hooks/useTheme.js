import { useState, useEffect } from "react"

export function useTheme() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "light") {
      setDark(false)
      document.documentElement.classList.add("light")
    }
  }, [])

  const toggle = () => {
    setDark(prev => {
      const next = !prev
      if (next) {
        document.documentElement.classList.remove("light")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.add("light")
        localStorage.setItem("theme", "light")
      }
      return next
    })
  }

  return { dark, toggle }
}