import About from "./components/About"
import Certification from "./components/Certification"
import Hero from "./components/Hero"
import ScrollTop from "./components/ScrollTop"
import  Skills from "./components/Skills"
import TerminalUI from "./components/Footer"
import SkillsDoc from "./components/SkillsDoc"
import Project from "./components/Project"

function App() {
  return (
    <main className=" font-mono">
      <Hero/>
      <About/>
      <SkillsDoc/>
      <Skills/>
      <Project/>
      <Certification/>
      <TerminalUI/>
      <ScrollTop/>

    </main>
  )
}

export default App
