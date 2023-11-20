import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Hero from "./sections/Hero"
import KegiatanKami from "./sections/KegiatanKami"
import MapSection from "./sections/MapSection"
import Prestasi from "./sections/Prestasi"

export default function App() {
  return (
    <main className="relative w-full">
      <Navbar />

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding my-10">
        <About />
      </section>

      <section className="padding my-14">
        <KegiatanKami />
      </section>

      <section className="padding my-10">
        <Prestasi />
      </section>

      <section className="padding my-14">
        <MapSection />
      </section>

      <section className="bg-blue-950 padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  )
}