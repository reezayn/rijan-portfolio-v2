import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Hackathons />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <SocialLinks />
    </>
  );
}

export default App;
