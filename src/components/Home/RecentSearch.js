import React from "react";
import "../../assets/styles/Home/RecentSearch.css";
import Slider from "react-slick";

import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

function RecentSearch() {
  const products = [
    {
      image: product3,
      name: "oneplus Nord 2 - Black (256GB) 8GB ram",
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
    {
      image: product2,
      name: "oneplus Nord ",
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
    {
      image: product2,
      name: "oneplus Nord ",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    },
  ];

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
    <div className="recentSearch">
      <p>Recent Search</p>
      <div className="recentProducts">
        <Slider {...multiCarousel}>
          {products.map((product, _id) => {
            return (
              <div className="recent__card">
                <div className="recent__image">
                  <img src={product.image} alt="iphone" />
                </div>
                <div className="recent__details">
                  <div className="recent__title">{product.name}</div>
                  <div className="recent__description">
                    {product.description}
                  </div>
                  <div>
                    {" "}
                    <span className="recent__price">{product.price}</span>
                    <span className="recent__offer">
                      {" "}
                      ({product.offer}) offer{" "}
                    </span>
                  </div>
                  <span className="recent__delprice">
                    <del>{product.del_price}</del>
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default RecentSearch;
