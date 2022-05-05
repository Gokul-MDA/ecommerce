import React from "react";
import "../assets/styles/Product.css";
import product3 from "../assets/images/product3.jpg";
import product2 from "../assets/images/product2.jpg";
import {  useEffect } from "react";
import axios from "axios"


function Product() {

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
    {
      image: product2,
      name: "oneplus Nord ",
      description: "lorem",
      price: "$999",
      offer: "10%",
      del_price: "$1100",
    }
  ];

useEffect(() => {
  
  axios.get("")


}, [])


  return (
    <div className="product">
      {products.map((product, _id) => {
        return (
          <div className="product__card">
            <div className="product__image">
              <img src={product.image} alt="iphone" />
            </div>
            <div className="product__details">
              <div className="product__title">{product.name}</div>
              <div className="product__description">{product.description}</div>
              <div>
                {" "}
                <span className="product__price">{product.price}</span>
                <span className="product__offer">  ({product.offer})</span>
              </div>
              <span className="product__delprice"><del>{product.del_price}</del></span>

            </div>
          </div>
        );
      })}

    </div>
  );
}

export default Product;
