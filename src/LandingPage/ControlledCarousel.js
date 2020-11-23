import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.css";
import "bootstrap/dist/css/bootstrap.css";

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let itemlist = props.articleList.map((item) => {
    return (
      <Carousel.Item className="carousel-item">
        <img className="carousel-image" src={item.img} alt="First News" />
        <Carousel.Caption>
          <h2>{item.title}</h2>
          <h3>{item.contents}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      className="carousel-container"
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
    >
      {itemlist}
    </Carousel>
  );
}
