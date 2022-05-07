import React from "react";
import "../../assets/styles/Home/Slider.css";
import iphone from "../../assets/images/iphone.png";
import redmi from "../../assets/images/redmi.png";
import samsung from "../../assets/images/samsung.jpeg";
import realme from "../../assets/images/realme.jpeg";

import Slider from "react-slick";

import product2 from "../../assets/images/product2.jpg";

import home from "../../assets/images/home.jpg";
import laptop from "../../assets/images/laptop.jpg";
import beauty from "../../assets/images/beauty.jpg";
import electronics from "../../assets/images/electronics.jpg";
import mobiles from "../../assets/images/mobiles.jpg";

function Carousel() {
  const products = [
    {
      image: laptop,
      name: "Laptops",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    },

    {
      image: mobiles,
      name: "Mobiles ",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    },
    {
      image: home,
      name: "Home Appliances ",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    },
    {
      image: beauty,
      name: "Beauty Products",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    },
    {
      image: electronics,
      name: "Electronics ",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    },
    {
      image: product2,
      name: "oneplus Nord ",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    },
  ];
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const multiCarousel = {
    dots: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider__img">
          <img src={iphone} className="slider__img" alt="" />
        </div>
        <div className="slider__img">
          <img src={samsung} className="slider__img" alt="" />
        </div>
        <div className="slider__img">
          <img src={redmi} className="slider__img" alt="" />
        </div>
        <div className="slider__img">
          <img src={realme} className="slider__img" alt="" />
        </div>
      </Slider>

      <p className="today-deals-title">Today's Deals</p>

      <Slider {...multiCarousel}>
        {products.map((product, _id) => {
          return (
            <div>
              <div className="carousel__card">
                <div className="carousel__image">
                  <img src={product.image} alt="iphone" />
                </div>
                <div className="carousel__details">
                  <div className="carousel__title">{product.name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
