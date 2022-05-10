import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Home/NavBar";
import Dropdown from "./components/Home/Dropdown";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
// import ProductList from "./components/ProductList/ProductList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Home />
      {/* <ProductList /> */}
      <Footer />
    </>
  );
}

export default App;
