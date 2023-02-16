import React from "react";
import "../Styles/ProductReview.css";

const ProductReview = ({ index, image, review, name, price }) => {
  return (
    <div className="productReviewCard">
      <img src={image} alt={`${index} review`} />
      <h5 className="review">{review}</h5>
      <span className="name">{name}</span>
      <b className="price">{price}</b>
    </div>
  );
};

export default ProductReview;
