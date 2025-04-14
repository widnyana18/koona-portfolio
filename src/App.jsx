/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

/**
 * NODE MODULES
 */
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * REGISTER GSAP
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to

/**
 * COMPONENTS
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  }); // register the hook to

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skill />
        <Experience />
        <Service />
        <Project />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
