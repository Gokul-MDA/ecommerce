import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Dropdown from "./components/Dropdown";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Slider />
      <Product />
      <Footer />
    </>
  );
}

export default App;
