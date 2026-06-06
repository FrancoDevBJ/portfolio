import { useLang } from "./hooks/useLang"

import BtnArriba from "./components/BtnArriba"
import Contacto from "./components/Contacto"
import Cursor from "./components/Cursor"
import Footer from "./components/Footer"
import Habilidades from "./components/Habilidades"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Proyectos from "./components/Proyectos"
import Servicios from "./components/Servicios"
import SobreMi from "./components/SobreMi"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const { lang, toggle, t} = useLang()

  return (
    <div className="bg-black text-white min-h-screen">
      <Cursor />
      <BtnArriba />
      <ThemeToggle />
      <Navbar t={t} lang={lang} toggleLang={toggle} />
      <Hero t={t} />
      <Servicios t={t} />
      <Proyectos t={t} />
      <Habilidades t={t} />
      <SobreMi t={t} />
      <Contacto t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App