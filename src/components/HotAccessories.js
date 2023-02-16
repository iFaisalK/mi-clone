import React from "react";
import HotItemCard from "../components/HotItemCard.js";
import "../Styles/HotAccessories.css";
// import { Link } from "react-router-dom";

const HotAccessories = ({ product, productCover }) => {
  return (
    <div className="HotAccessories">
      <div className="productCover">
        <img src={productCover} alt="Product Cover" />
      </div>

      <div className="product">
        {product.map((item, index) => (
          <HotItemCard
            key={item.image}
            index={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}

        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"  />
      </div>
    </div>
  );
};

export default HotAccessories;
