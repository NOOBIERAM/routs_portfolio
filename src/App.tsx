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
        const res = await fetch("https://project-idea-back-1.onrender.com/health");
        const data = await res.json();
        console.log("Fetching:", data);
      } catch (error) {
        console.error("Erreur lors du fetch:", error);
      }
    };

    fetchProjects();
  }, []);

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
