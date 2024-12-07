import React from "react";
import "./index.css";

// Import components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Footer from "./components/Footer";

// Import pages (if you plan to use them later)
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

import "./index.css";

const App = () => {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Component */}
      <Hero />

      {/* Routes for different pages (If needed in the future) */}
      {/* 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      */}

      {/* Footer Component */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
