import React, { useState, useEffect } from "react";
import ControlledCarousel from "./ControlledCarousel";
import Navbar from "./navBar";
import "./LandingPage.css";
import axios from "axios";

function LandingPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("/api/query/news/latest/3", {})
      .then(function (response) {
        console.log(response);
        setNews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <ControlledCarousel articleList={news} />
      </div>
    </div>
  );
}

export default LandingPage;
