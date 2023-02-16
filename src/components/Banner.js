import Carousel from "react-bootstrap/Carousel";
import React from "react";

function Banner({ end }) {
  return (
    <Carousel>
      {end.map((item, index) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`${index} slide`}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h5>{item.source}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
