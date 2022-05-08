import React from "react";
import "../../assets/styles/ProductList/ProductList.css";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

function ProductList() {
  const products = [
    {
      image: product3,
      name: "Oneplus Nord 2 - Black (256GB) 8GB ram",
      description: "lorem",
      price: "$999",
      bank_offer: "Additional INR 1000 Off on ICICI cc",
      delivery_date: "Tommorrow, May 9",
      delivery_amount: "FREE Delivery by Hello",
      offer: "10%",
      del_price: "$1100",
    },

    {
      image: product2,
      name: "Oneplus Nord 2 - Black (256GB) 8GB ram",
      description: "lorem",
      price: "$999",
      bank_offer: "Additional INR 1000 Off on ICICI cc",
      delivery_date: "Tommorrow, May 9",
      delivery_amount: "FREE Delivery by Hello",
      offer: "10%",
      del_price: "$1100",
    },
    {
      image: product3,
      name: "Oneplus Nord 2 - Black (256GB) 8GB ram",
      description: "lorem",
      price: "$999",
      bank_offer: "Additional INR 1000 Off on ICICI cc",
      delivery_date: "Tommorrow, May 9",
      delivery_amount: "FREE Delivery by Hello",
      offer: "10%",
      del_price: "$1100",
    },
  ];
  return (
    <div className="productList">
      {products.map((product, key) => {
        return (
          <div className="productList__card">
            <div className="productList__image">
              <img src={product.image} alt="" />
            </div>
            <div className="productList__details">
              <p className="productList__name">{product.name}</p>
              <div className="productList__priceList">
                <p className="productList__price">
                  {product.price}{" "}
                  <span className="productList__offerPrice">
                    <del> {product.del_price}</del>({product.offer})
                  </span>{" "}
                </p>
                <p className="productList__bankOffer">{product.bank_offer}</p>
              </div>

              <div className="productList__delivery">
                <p className="productList__deliveryDate">
                  Get it by <b>{product.delivery_date}</b>
                </p>
                <p className="productList__deliveryAmount">
                  {product.delivery_amount}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
