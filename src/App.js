import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./style.css";

function App() {
  return (
    <>
      <Header />
        <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
      <Footer />
    </>
  );
}

export default App;
