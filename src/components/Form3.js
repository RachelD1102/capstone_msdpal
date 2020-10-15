import React, { useState } from 'react';
import './Form.css';
import FormAdmin from './FormAdmin';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";



const Form3 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.jpg' alt='theU' />
        </div>
        {!isSubmitted ? (<FormAdmin submitForm={submitForm} />) : (<Redirect to='/admin-mainpage'/>)}
      </div>
  );
};

export default Form3;
