import React, { useState } from "react"
import "../Users/SigninForm.css"
import { Redirect } from "react-router-dom"
import Navbar from "../LandingPage/navBar"

export default function AdminMainPage() {

  const [isCode, setCode] = useState(false);
  const [isNews, setNews] = useState(false);
  const [isManage, setManage] = useState(false);

  const onCodeSection = () => {
    setCode(true);
  };

  const onNewsSection = () => {
    setNews(true);
  };

  const onManageSection = () => {
    setManage(true);
  };

  if(isCode) return <Redirect to="admin-codepage" />
  if(isNews) return <Redirect to="admin-newspage" />
  if(isManage) return  <Redirect to="admin-managenews" />

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
              <button
                onClick={onCodeSection}
                className="admin-section-btn"
                type="submit"
              >
                Invitation Code
              </button>
              <button
                onClick={onNewsSection}
                className="admin-section-btn"
                type="submit"
              >
                Create News
              </button>
              <button
                onClick={onManageSection}
                className="admin-section-btn"
                type="submit"
              >
                Manage News
              </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}