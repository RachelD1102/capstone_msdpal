import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./SigninForm.css";
import Navbar from "../LandingPage/navBar";
import { Redirect } from "react-router-dom";

const SignUpForm = ({ submitForm }) => {
  const {
    handleChange,
    onSubmit,
    user,
    errors,
    isVerified,
    isCodeWrong,
  } = useForm(submitForm, validate);
  //const [isVerified, setVerified] = useState(false);
  //const [errors, setErrors] = useState({});

  //   const onSubmit = async (event) => {
  //     event.preventDefault();
  //     await axios
  //       .post("/api/users/signup", {
  //         email: user.email,
  //         password: user.password,
  //         username: user.username,
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         code: user.code,
  //         gradYear: user.gradYear,
  //         uid: user.uid,
  //       })
  //       .then(function (response) {
  //         if(response.status === 201) {
  //           setVerified(true);
  //         }
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error.response.data);
  //       });

  //       setErrors(validate(user));
  //       setVerified(true);
  //   };
  if (isVerified) return <Redirect to="/user-mainpage" />;
  return (
    <>
      <Navbar />
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img2.jpg" alt="theU" />
        </div>
        <div className="form-content-right">
          <form onSubmit={onSubmit} className="form" noValidate>
            <h1>Create your MSDPal account!</h1>
            <div className="form-inputs">
              <label className="form-label">Username</label>
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={user.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Last Name</label>
              <input
                className="form-input"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={user.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">uNID</label>
              <input
                className="form-input"
                type="text"
                name="uid"
                placeholder="Enter your uNID"
                value={user.uid}
                onChange={handleChange}
              />
              {errors.uid && <p>{errors.uid}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Grad Year</label>
              <input
                className="form-input"
                type="text"
                name="gradYear"
                placeholder="Enter your grad year"
                value={user.gradYear}
                onChange={handleChange}
              />
              {errors.gradYear && <p>{errors.gradYear}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Confirm Password</label>
              <input
                className="form-input"
                type="password"
                name="password2"
                placeholder="Confirm your password"
                value={user.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Invitation Code</label>
              <input
                className="form-input"
                type="text"
                name="code"
                placeholder="Please enter your invitation code"
                value={user.code}
                onChange={handleChange}
              />
              {errors.code && <p>{errors.code}</p>}
              {<p>{isCodeWrong}</p>}
            </div>
            <button className="form-input-btn" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
