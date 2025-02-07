import React from "react";
import { AnimationProvider } from "./context/AnimationContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import "./index.css";

const App = () => {
  return (
    <AnimationProvider>
      {" "}
      {/* Wrap everything inside AnimationProvider */}
      <div className="App">
        {/* Navbar Component */}
        <Navbar />

        {/* All Sections on the Same Page */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />

        {/* Social Icons on the right side */}
        <SocialIcons />
      </div>
    </AnimationProvider>
  );
};

export default App;
