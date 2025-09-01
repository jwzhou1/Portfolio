import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Capabilities from "./components/Capabilities/Capabilities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"} style={{ background: 'white', minHeight: '100vh' }}>
      <Preloader load={load} />
      {!load && (
        <>
          <Navbar />
          <ScrollToTop />
          <Home />
          <Projects />
          <Capabilities />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
