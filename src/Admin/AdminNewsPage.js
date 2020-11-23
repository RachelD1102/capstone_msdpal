import React, { useState } from "react";
import axios from "axios";
import "../Users/SigninForm.css";
import Navbar from "../LandingPage/navBar";
import BackBtn from "./BackBtn";

export default function AdminMainPage() {
  const [newsTitle, setNewstitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [errorData, setErrordata] = useState("");

  const onPostNews = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/news", {
        title: newsTitle,
        contents: content,
        category: category,
        img: url,
      })
      .then(function (response) {
        console.log(response);
        setSuccess(true);
        // window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.status == 400) {
          setErrordata("Title, contents, and category are required!");
        }
        if (error.response.status == 401) {
          setErrordata("Password is wrong!");
        }
      });
  };

  if (isSuccess)
    return (
      <>
        <Navbar />
        <div className="sign-up-page">
          <div className="form-container">
            <div className="form-content-left">
              <img className="form-img" src="img/img2.jpg" alt="theU" />
            </div>
            <div className="form-content-right">
              <form className="form" noValidate>
                <h1>Your news has been submitted successfully!</h1>
                <BackBtn />
              </form>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Navbar />
      <div className="sign-up-page">
        <div className="form-container">
          <div className="form-content-left">
            <img className="form-img" src="img/img2.jpg" alt="theU" />
          </div>
          <div className="form-content-right">
            <form className="form" noValidate>
              <h1>Welcome Back!</h1>
              <div className="form-inputs">
                <label className="form-label">News Title</label>
                <input
                  className="form-input"
                  type="text"
                  value={newsTitle}
                  onChange={(e) => setNewstitle(e.target.value)}
                  placeholder="Enter the news title"
                />
                <label className="form-label">News Content</label>
                <textarea
                  className="news-content-input"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter the content"
                />
                {/* <label className="form-label">News Category</label>
                <textarea
                  className="form-input"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter the category"
                /> */}
                {/* <label className="form-label">News Category</label>
                <div>
                  <select
                    className="select-option"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Choose a categroy</option>
                    <option value="Internship">Internship</option>
                    <option value="Recruitment">Recruitment</option>
                    <option value="DailyLife">Daily Life</option>
                    <option value="TechnicalResources">
                      Technical Resources
                    </option>
                    <option value="MSDActivity">MSD Activity</option>
                  </select>
                </div> */}
                <label className="form-label">News Photo URL</label>
                <textarea
                  className="form-input"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter the photo Url"
                />
                <label className="form-label">News Category</label>
                <div>
                  <select
                    className="select-option-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Choose a categroy</option>
                    <option value="MSDEvents">MSD Event</option>
                    <option value="MSDNews">MSD News</option>
                    <option value="MSDLife">MSD Life</option>
                    <option value="OtherNews">
                      Other News
                    </option>
                  </select>
                </div>
              </div>
              
              <button
                className="form-input-btn"
                type="submit"
                onClick={onPostNews}
              >
                Submit the News
              </button>
              <BackBtn />
              <h2 className="error-display">{errorData}</h2>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
