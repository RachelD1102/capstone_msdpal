import React, { useState } from "react";
import axios from "axios";
import "../SigninForm.css";
import {Redirect} from "react-router-dom";
import Navbar from '../../LandingPage/navBar'

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorData, setErrordata] = useState("");
  const [isSignin, setSignin] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/users/signin", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        sessionStorage.setItem("userId", response.data.id);
        sessionStorage.setItem("username", response.data.username);
        sessionStorage.setItem("avatar", response.data.avatar);
        console.log(response.data.status);
        if(response.status === 200){
          setSignin(true);
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
        if(error.response.status === 400){
          setErrordata("Your email or password is invalid!")
        }
      });
    
  };

  if(isSignin) return <Redirect to="/user-mainpage" />;
  return (
    <>
    <Navbar />
    <div className="sign-up-page">
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src="img/img2.jpg" alt="theU" />
        </div>
        <div className="form-content-right">
          <form onSubmit={onSubmit} className="form" noValidate>
            <h1>Welcome Back!</h1>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={ e => setEmail(e.target.value) }
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                // name="password"
                placeholder="Enter your password"
                value={password}
                onChange = { e => setPassword(e.target.value) }
              />
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
            <button className="form-input-btn" type="submit">
              Sign in
            </button>
            {/* <span className="form-input-forgetpw">
              Forget your password? Click <a href="#">here</a>
            </span> */}
            <h2 className="error-display">{errorData}</h2>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
