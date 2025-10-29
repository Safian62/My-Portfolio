import Navbar from "@/components/Navbar";
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Contact from "@/components/Contact";
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}
