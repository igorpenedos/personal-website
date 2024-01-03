import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./views/Intro/Intro";
import { Experiences } from "./views/Experiences/Experiences";
import { Projects } from "./views/Projects/Projects";
import { Footer } from "./views/Footer/Footer";
import { Skills } from "./views/Skills/Skills";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center">
        <div className="w-80 md:w-1/2">
          <Intro />
          <Experiences />
          <Projects />
          <Skills/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
