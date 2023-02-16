import React from "react";
import "../Styles/HotItemCard.css";

const HotItemCard = ({ index, name, price, image }) => {
  return (
    <div className="hotItemCard">
      <img src={image} alt={`${index} product`}/>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
