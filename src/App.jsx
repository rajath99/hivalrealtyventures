import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import InteriorEstimator from "./components/InteriorEstimator";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  return (

    <div className="bg-[#F8F6F2] text-[#1A1A1A] overflow-x-hidden">

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Services />

      <Gallery />

      <InteriorEstimator />

      <Process />

      <Testimonials />

      <Contact />

      <Footer />

    </div>

  );
}