import React from "react";
import signinValidate from "./validateInfo";
import useSigninForm from "./useForm";
import "./Form.css";

const FormSignin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useSigninForm(
    submitForm,
    signinValidate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Welcome Back!
        </h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
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
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign in
        </button>
        <span className="form-input-forgetpw">
          Forget your password? Click <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignin;
