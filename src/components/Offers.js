import React from "react";
import Offer from "./Offer.js";
import "../Styles/Offers.css";

const Offers = ({ offer }) => {
  return (
    <div id="offerSection">
      {offer.map((item, index) => (
        <Offer
          key={item.image}
          index={index}
          link={item.url}
          src={item.image}
        />
      ))}
    </div>
  );
};

export default Offers;
