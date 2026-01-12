import About from "./components/About"
import Hero from "./components/Hero"
import ScrollTop from "./components/ScrollTop"
import  Skills from "./components/Skills"
import TerminalUI from "./components/TerminalUI"

function App() {
  return (
    <main className=" font-mono">
      {/* <NavBar/> */}
      <Hero/>
      <About/>
      <Skills/>
      <ScrollTop/>
      <TerminalUI/>
    </main>
  )
}

export default App
