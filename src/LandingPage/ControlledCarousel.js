import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  //id, title, contents, category, *img, date
  const [news1, setNews1] = useState({
    id: "",
    title: "",
    contents: "", //same
    category: "",
    img: "",
    date: "",
  });

  const [news2, setNews2] = useState({
    id: "",
    title: "",
    contents: "",
    category: "",
    img: "",
    date: "",
  });

  const [news3, setNews3] = useState({
    id: "",
    title: "",
    contents: "",
    category: "",
    img: "",
    date: "",
  });

  useEffect(() => {
    axios
      .get("/api/query/news/latest/3", {})
      .then(function (response) {
        console.log(response);
        const fetchNews = response.data[0];
        const fetchNews2 = response.data[1];
        const fetchNews3 = response.data[2];
        console.log(fetchNews);
        setNews1(fetchNews);
        setNews2(fetchNews2);
        setNews3(fetchNews3);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //       window.location.href = "/";

  return (
    <Carousel
      className="carousel-container"
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
    >
      <Carousel.Item className="carousel-item">
        <img className="carousel-image" src={news1.img} alt="First slide" />
        <Carousel.Caption>
          <h2>{news1.title}</h2>
          <h3>{news1.contents}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={news2.img} alt="Second slide" />

        <Carousel.Caption>
          <h2>{news2.title}</h2>
          <h3>{news2.contents}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={news3.img} alt="Third slide" />

        <Carousel.Caption>
          <h2>{news3.title}</h2>
          <h3>{news3.contents}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
