import React, { useState, useEffect } from "react";
import ControlledCarousel from "./ControlledCarousel";
import Navbar from "./navBar";
import axios from "axios";

function LandingPage() {
  //local variable to receive news data from backend
  const [news, setNews] = useState([]);

  //fetch data from backend with 3 latest news
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
  //use [] as the second parameter, if it is changed, trigger to reload the window

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
