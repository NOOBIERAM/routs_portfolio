import Hero from "./components/Hero"
import NavBar from "./components/NavBar"

function App() {
  return (
    <main className="md:px-55">
      {/* <NavBar/> */}
      <Hero/>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-eni-500 via-eni-700 to-eni-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 flex items-center">Mission & Vision </h1>
          <p className=" text-white/90 ">Notre mission est de former une génération de professionnels de l'informatique créatifs et éthiques, prêts à exceller dans un monde numérique en constante évolution. Nous nous engageons à contribuer au développement durable de Madagascar en offrant une éducation de qualité qui transcende les frontières.
            Notre Vision est d'être reconnus comme un centre d'excellence en informatique, formant des leaders influents dans l'industrie technologique mondiale. Nous aspirons à créer un environnement d'apprentissage dynamique et inclusif, favorisant l'innovation et contribuant au progrès socio-économique de notre nation et du monde.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
