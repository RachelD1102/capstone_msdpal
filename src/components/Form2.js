import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Form.css';
import FormSignin from './FormSignin';

const Form2 = () => {
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
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : (<Redirect to='/user-mainpage' />)}
      </div>
  );
};

export default Form2;
