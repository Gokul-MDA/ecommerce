import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Home/NavBar";
import Carousel from "./components/Home/Slider";
import Dropdown from "./components/Home/Dropdown";
import Product from "./components/Home/Product";
import Footer from "./components/Home/Footer";
import Offer from "./components/Home/Offer";
import RecentSearch from "./components/Home/RecentSearch";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Carousel />
      <Offer />
      <Product />
      <RecentSearch />
      <Footer />
    </>
  );
}

export default App;
