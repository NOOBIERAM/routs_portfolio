import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ScrollTop from "./components/ScrollTop"
import  Skills from "./components/Skills"

function App() {
  return (
    <main className="md:px-55 font-mono">
      {/* <NavBar/> */}
      <Hero/>
      <Skills/>
      <ScrollTop/>
    </main>
  )
}

export default App
