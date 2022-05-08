import React from "react";
import Carousel from "./Slider";
import Product from "./Product";
import Offer from "./Offer";
import RecentSearch from "./RecentSearch";

function Home() {
  return (
    <div>
      <Carousel />
      <Offer />
      <Product />
      <RecentSearch />
    </div>
  );
}

export default Home;
