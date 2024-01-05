import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./views/Intro/Intro";
import { Experiences } from "./views/Experiences/Experiences";
import { Projects } from "./views/Projects/Projects";
import { Footer } from "./views/Footer/Footer";
import { Skills } from "./views/Skills/Skills";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`relative ${open ? "h-screen overflow-hidden" : "overflow-x-hidden"}`}>
      <Navbar open={open} setOpen={setOpen} />
      <div className="flex justify-center">
        <div className="w-80 md:w-1/2">
          <Intro />
          <Experiences />
          <Projects />
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
