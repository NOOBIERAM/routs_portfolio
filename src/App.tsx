import { useState, lazy, Suspense } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollTop } from "./components/layout/ScrollTop";
import { Hero } from "./components/sections/Hero";
import { CustomCursor } from "./components/ui/CustomCursor";

const SplashScreen = lazy(() =>
  import("./components/splash/SplashScreen").then((m) => ({ default: m.SplashScreen })),
);
const About = lazy(() => import("./components/sections/About").then((m) => ({ default: m.About })));
const Experience = lazy(() =>
  import("./components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Skills = lazy(() => import("./components/sections/Skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() =>
  import("./components/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Certifications = lazy(() =>
  import("./components/sections/Certifications").then((m) => ({ default: m.Certifications })),
);
const Contact = lazy(() => import("./components/sections/Contact").then((m) => ({ default: m.Contact })));

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <CustomCursor />
      <Suspense fallback={null}>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </Suspense>
      <div aria-hidden={showSplash} className={showSplash ? "pointer-events-none select-none" : ""}>
        <Header />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </>
  );
}
