import React, { useState } from "react";
import axios from "axios";
import "../Users/SigninForm.css";
import Navbar from "../LandingPage/navBar";
import BackBtn from "./BackBtn";

export default function AdminCodePage() {
  const [uID, setUid] = useState("");
  const [responseCode, setResponseCode] = useState("");
  const [errorData, setErrordata] = useState("");

  const onGenerateCode = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/admin/new_user", {
        uid: uID,
      })
      .then(function (response) {
        console.log(response);
        setResponseCode(response.data.code);
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.status === 401) {
          setErrordata("The password is wrong!");
        }
        if (error.response.status === 400) {
          setErrordata("Uid is in use!");
        }
      });
  };

  const onCheckCode = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/admin/get_user", {
        uid: uID,
      })
      .then(function (response) {
        console.log(response);
        setResponseCode(response.data.existingUser.code);
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.status === 401) {
          setErrordata("The password is wrong!");
        }
      });
  };


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
                <label className="form-label">uID</label>
                <input
                  className="form-input"
                  type="text"
                  value={uID}
                  onChange={(e) => setUid(e.target.value)}
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
              <BackBtn />
              <h2 className="code-display">{responseCode}</h2>
              <h2 className="error-display">{errorData}</h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
