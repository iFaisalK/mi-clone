import React from "react";
import ProductReview from "../components/ProductReview.js";
import "../Styles/ProductReviews.css"

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="productReviews" >
      {productReviews.map((item, index) => (
        <ProductReview
          key={item.image}
          index={index}
          image={item.image}
          review={item.review}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
