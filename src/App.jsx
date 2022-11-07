import React from "react";
import "./App.css";
import { About } from "./pages/About";
import { BrandColors } from "./pages/BrandColors";
import { Buttons } from "./pages/Buttons";
import { Home } from "./pages/Home";
import { Inputs } from "./pages/inputs";
import { Typography } from "./pages/Typography";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <BrandColors />
      <Typography />
      <Buttons />
      <Inputs />
    </div>
  );
}

export default App;
