import React from "react";
import "../../assets/styles/Home/Offer.css";

import offer1 from "../../assets/images/offer1.jpg";
import offer2 from "../../assets/images/offer2.jpg";
import offer3 from "../../assets/images/offer3.jpg";
import offer4 from "../../assets/images/offer4.jpg";
import offer5 from "../../assets/images/offer5.jpg";
import offer6 from "../../assets/images/offer6.jpg";

function Offer() {
  return (
    <div className="offerSection">
      <p className="offer__title">Top Offers</p>
      <div className="offers">
        <div className="offer__card">
          <img src={offer1} alt="" />
          <button>See More</button>
        </div>
        <div className="offer__card">
          <img src={offer2} alt="" />
          <button>See More</button>
        </div>
        <div className="offer__card">
          <img src={offer3} alt="" />
          <button>See More</button>
        </div>
        <div className="offer__card">
          <img src={offer4} alt="" />
          <button>See More</button>
        </div>
        <div className="offer__card">
          <img src={offer5} alt="" />
          <button>See More</button>
        </div>
        <div className="offer__card">
          <img src={offer6} alt="" />
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
