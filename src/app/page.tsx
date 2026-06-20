import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/shared/Footer";
import { About, Skills, Experience, Achievements, Services, Testimonials, Blog } from "@/components/sections/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
