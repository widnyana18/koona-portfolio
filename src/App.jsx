/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

// COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Education from "./components/Education";
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
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
