/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

// COMPONENTS
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
  return (
    <>
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
    </>
  );
};

export default App;
