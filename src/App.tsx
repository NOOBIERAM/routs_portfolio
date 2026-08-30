import { useState } from "react";
import { SplashScreen } from "./components/splash/SplashScreen";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollTop } from "./components/layout/ScrollTop";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { theme, toggle } = useTheme();

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div aria-hidden={showSplash} className={showSplash ? "pointer-events-none select-none" : ""}>
        <Header theme={theme} toggleTheme={toggle} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </>
  );
}
