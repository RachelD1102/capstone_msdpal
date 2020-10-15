import React from 'react'
import Form3 from '../Form3'


export default function SignIn(){
    
    return(
        <div className="sign-up-page">
            <Form3/>
        </div>

    )
}
// import React, { useState } from 'react';
// import './Form.css';
// import FormAdmin from './FormAdmin';
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import AdminPage from './pages/AdminPage';
// import adminRequest from './adminRequest';


// const adminSignin = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitForm() {
//     setIsSubmitted(true);
//   }

//   return (
//     <>
//       <div className='form-container'>
//         <span className='close-btn'>×</span>
//         <div className='form-content-left'>
//           <img className='form-img' src='img/img-2.jpg' alt='theU' />
//         </div>
//         {isSubmitted ? (<AdminPage/>) : (<FormAdmin submitForm={submitForm} />)}
//       </div>
//     </>
//   );
// };

// export default adminSignin;


