import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />

      {/* All Sections on the Same Page */}
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
