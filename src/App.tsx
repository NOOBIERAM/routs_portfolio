import About from "./components/About"
import Certification from "./components/Certification"
import Hero from "./components/Hero"
import ScrollTop from "./components/ScrollTop"
import  Skills from "./components/Skills"
import TerminalUI from "./components/Footer"

function App() {
  return (
    <main className=" font-mono">
      {/* <NavBar/> */}
      <Hero/>
      <About/>
      <Skills/>
      <Certification/>
      <TerminalUI/>
      <ScrollTop/>

    </main>
  )
}

export default App
