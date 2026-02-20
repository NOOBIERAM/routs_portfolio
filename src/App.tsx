import About from "./components/About"
import Certification from "./components/Certification"
import Hero from "./components/Hero"
import ScrollTop from "./components/ScrollTop"
import Skills from "./components/Skills"
import TerminalUI from "./components/Footer"
import SkillsDoc from "./components/SkillsDoc"
import Project from "./components/Project"
import { useEffect, useState } from "react"
import SplashScreen from "./components/SplashScreen"

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://project-idea-back-1.onrender.com/health"); // ton endpoint backend
        if (!res.ok) throw new Error("Erreur lors du fetch des projets");
        console.log(res.json()); // Affiche la réponse du backend
      } catch (err: any) {
      } finally {
      }
    };

    fetchProjects();
  }, [])

  return (
    <main className=" font-mono">
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Hero />
          <About />
          <SkillsDoc />
          <Skills />
          <Project />
          <Certification />
          <TerminalUI />
          <ScrollTop />
        </>
      )}

    </main>
  )
}

export default App
