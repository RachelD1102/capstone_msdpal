import React, { useState } from "react";
import axios from "axios";
import "../SigninForm.css";
import { Redirect } from "react-router-dom";
import Navbar from "../navBar";

export default function AdminMainpage() {
  const [password, setPassword] = useState("");
  const [uID, setUid] = useState("");
  const [responseCode, setResponseCode] = useState("");
  const [errorData, setErrordata] = useState("");
  const [isCode, setCode] = useState(false);
  const [isNews, setNews] = useState(false);
  const [isManage, setManage] = useState(false);
  //const [isBack, setGoback] = useState(false);

  const onCodeSection = () => {
    setCode(true);
  };

  const onNewsSection = () => {
    setNews(true);
  };

  const onManageSection = () => {
    setManage(true);
  }

  const onGenerateCode = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/admin/new_user", {
        adminPassword: password,
        uid: uID,
      })
      .then(function (response) {
        console.log(response);
        setResponseCode(response.data.code);
      })
      .catch(function (error) {
        console.log(error.response.data);
        if(error.response.status === 401){
          setErrordata("The password is wrong!");
        }
        if(error.response.status === 400){
          setErrordata("Uid is in use!");
        }
      });
  };

  const onCheckCode = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/admin/get_user", {
        adminPassword: password,
        uid: uID,
      })
      .then(function (response) {
        console.log(response);
        setResponseCode(response.data.existingUser.code);
      })
      .catch(function (error) {
        console.log(error.response.data);
        if(error.response.status === 401){
          setErrordata("The password is wrong!");
        }
      });
  };


  if(isCode) {
    return (
      <div>
      <Navbar />
      <div className="sign-up-page">
      <div className="form-container">
        <span className="close-btn">×</span>
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
                value = {password} 
                onChange = { e => setPassword(e.target.value) }
                placeholder="Enter admin password"
              />
              <label className="form-label">uID</label>
              <input
                className="form-input"
                type="text"
                value = {uID} 
                onChange = { e => setUid(e.target.value) }
                placeholder="Enter the uID"
              />
            </div>
            <button
              onClick={onGenerateCode}
              className="form-input-btn"
              type="submit"
            >
              Generate Invitation Code
            </button>
            <button
              onClick={onCheckCode}
              className="form-input-btn"
              type="submit"
            >
              Check Invitation Code
            </button>
            {/* <button
              onClick={onCheckCode}
              className="form-back-btn"
              type="button"
            >
              Main Page
            </button> */}
            <h2 className="code-display">{responseCode}</h2>
            <h2 className="error-display">{errorData}</h2>
          </form>
        </div>
      </div>
    </div>
    </div>
    );
  }
  
  if(isNews) return <Redirect to="admin-newspage" />
  if(isManage) return  <Redirect to="admin-managenews" />

  return (
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