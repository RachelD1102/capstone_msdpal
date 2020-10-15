import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Form.css';
import FormSignup from './FormSignup';
import UserMainPage from './pages/UserMainPage';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.jpg' alt='theU' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Redirect to='user-mainpage' />
        )}
      </div>
    </>
  );
};

export default Form;
