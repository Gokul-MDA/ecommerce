import React from "react";
import "../../assets/styles/Home/Offer.css";

import offer1 from "../../assets/images/offer1.jpg";
import offer2 from "../../assets/images/offer2.jpg";
import offer3 from "../../assets/images/offer3.jpg";

function Offer() {
  return (
    <div className="offerSection">
      <p className="offer__title">Top Offers</p>
      <div className="offers">
        <div className="offer__card">
          <img src={offer1} alt="" />
          <p>Best Offers For Fashions</p>
          <h6>
            Celebrate Women's Health Month with health & wellness products
          </h6>
          <button>See More</button>
        </div>
        <div className="offer__card">
          <img src={offer2} alt="" />
          <p>Best Offers For Fashions</p>
          <h6>
            Celebrate Women's Health Month with health & wellness products
          </h6>
          <button>See More</button>
        </div>
        <div className="offer__card">
          <img src={offer3} alt="" />
          <p>Best Offers For Fashions</p>
          <h6>
            Celebrate Women's Health Month with health & wellness products
          </h6>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
