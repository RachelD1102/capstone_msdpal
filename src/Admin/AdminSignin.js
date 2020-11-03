import React, { useState } from "react";
import axios from "axios";
import "../Users/SigninForm.css";
import { Redirect } from "react-router-dom";
import Navbar from "../LandingPage/navBar";

export default function AdminSignIn() {

  const [password, setPassword] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const [errorData, setErrordata] = useState("");

  const onSignin = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/admin/login", {
        adminPassword: password,
      })
      .then(function (response) {
        console.log(response);
        setSubmit(true);
      })
      .catch(function (error) {
        console.log(error.response.data);
        setErrordata("Password is wrong!");
      });
  };

  if(isSubmit) return <Redirect to="/admin-mainpage" />;
  return (
    <div>
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
              </div>
              <button
              onClick={onSignin}
              className="form-input-btn" 
              type="submit">
              Sign in
            </button>
            <h2 className="error-display">{errorData}</h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
