import React from "react";
import "../assets/styles/Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iphone from "../assets/images/iphone.png";
import redmi from "../assets/images/redmi.png";
import samsung from "../assets/images/samsung.jpeg"
import realme from "../assets/images/realme.jpeg"

function Slider() {
  return (
    <div className="slider">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        dynamicHeight={true}
        showArrows={true}
      >
        <div>
          <img src={iphone} className="slider__img" alt="" />
          <p>iphone</p>
        </div>
        <div>
          <img src={samsung} className="slider__img" alt="" />
          <p>samsung</p>
        </div>
        <div>
          <img src={redmi} className="slider__img" alt="" />
          <p>samsung</p>
        </div>
        <div>
          <img src={realme} className="slider__img" alt="" />
          <p>samsung</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
