import React, { useState, useContext} from "react";
import axios from "axios";
import "../Users/SigninForm.css";
import { Redirect } from "react-router-dom";
import Navbar from "../LandingPage/navBar";

export default function AdminMainPage() {
  
  const [password, setPassword] = useState("");
  const [newsTitle, setNewstitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [isBack, setGoback] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [errorData, setErrordata] = useState("");

  const onPostNews = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/news", {
        adminPassword: password,
        title:newsTitle,
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
        if(error.response.status == 400) {
          setErrordata("Title, contents and category are required!")
        }
        if(error.response.status == 401) {
          setErrordata("Password is wrong!")
        }
      });
  };

  const onGoback = () => {
    setGoback(true);
  };

  if(isSuccess) return (
    <>
    <Navbar />
    <div className="sign-up-page">
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img2.jpg" alt="theU" />
        </div>
        <div className="form-content-right">
          <form className="form" noValidate>
            <h1>Your news has been submitted successfully!</h1>
          </form>
        </div>
      </div>
    </div>
    </>
  );
  
  if(isBack) return window.location.href = "/admin-mainpage";
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
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
              />
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
              <label className="form-label">News Category</label>
              <textarea
                className="form-input"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter the category"
              />
              <label className="form-label">News Photo URL</label>
              <textarea
                className="form-input"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter the photo Url"
              />
            </div>
            <button
              className="form-input-btn"
              type="submit"
              onClick={onPostNews}
            >
              Submit the News
            </button>
            <h2 className="error-display">{errorData}</h2>
            {/* <button
             className="form-back-btn"
             type="button"
             onClink={onGoback}
            >
             Main Page
            </button> */}
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
