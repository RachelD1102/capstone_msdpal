import React, { useState } from "react";
import axios from "axios";
import "../SigninForm.css";
import { Redirect } from "react-router-dom";
import Navbar from "../navBar";

export default function AdminSignIn() {
  const [password, setPassword] = useState("");
  const [isSubmit, setSubmit] = useState(false);

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
      });
  };

  if(isSubmit) return <Redirect to="/admin-mainpage" />;
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
