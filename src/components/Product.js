import React from "react";
import "../assets/styles/Product.css";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";

function Product() {
  return (
    <div className="product">
      <div className="product__card">
        <div className="product__image">
          <img src={product1} alt="iphone" />
        </div>
        <div className="product__details">
          <div className="product__title">Apple iPhone 13 (256GB) -Purple</div>
          <div className="product__price"> Price $1200</div>
          <div className="product__delPrice">
            Old Price <del>$1300</del>
          </div>
        </div>
      </div>
      <div className="product__card">
        <div className="product__image">
          <img src={product2} alt="iphone" />
        </div>
        <div className="product__details">
          <div className="product__title">OnePlus Nord 2 (256GB) -Black</div>
          <div className="product__price"> Price $999</div>
          <div className="product__delPrice">
            Old Price <del>$1100</del>
          </div>
        </div>
      </div>
      <div className="product__card">
        <div className="product__image">
          <img src={product3} alt="iphone" />
        </div>
        <div className="product__details">
          <div className="product__title">OnePlus Nord 2 (256GB) -Black</div>
          <div className="product__price"> Price $999</div>
          <div className="product__delPrice">
            Old Price <del>$1100</del>
          </div>
        </div>
      </div>
      <div className="product__card">
        <div className="product__image">
          <img src={product3} alt="iphone" />
        </div>
        <div className="product__details">
          <div className="product__title">OnePlus Nord 2 (256GB) -Black</div>
          <div className="product__price"> Price $999</div>
          <div className="product__delPrice">
            Old Price <del>$1100</del>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
