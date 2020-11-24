import React, { useEffect, useState } from "react";
import UserNavbar from "../UserNavbar";
import "../SigninForm.css";
import axios from "axios";
import useProfile from "../useProfile";
import validate from "../validateInfo";
import ButtonGroup from "react-bootstrap/ButtonGroup";

axios.defaults.withCredentials = true;

  const MyProfile = ( {submitForm} ) =>{
    const {
      handleChange,
      onSave, 
      user, 
      errors
    } = useProfile(submitForm, validate);

    const [disabled, setDisabled] = useState(true);

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setUser({
    //     ...user,
    //     [name]: value,
    //   });
    // };

    // useEffect(() => {
    //   //const onCurrentUser = async () => {
    //   axios
    //     .get("/api/users/me", {})
    //     .then(function (response) {
    //       console.log(response);
    //       const currentuser = response.data;
    //       console.log(currentuser);
  
    //       setUser(currentuser);
    //       //setUserid(currentuser.id);
    //       //console.log(currentuser.id);
    //       //console.log(currentuser);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, []);

    const onEdit = () => {
      setDisabled(false);
    };

    return (
      <>
        <UserNavbar />
        <div className="profile-container">
          <div className="form-profile-content-left">
            <form className="form" noValidate>
              <h1 className="profile-myprofile">My Profile</h1>
              <div>
                <img className="avatar-img" src={user.avatar} />
              </div>
  
              <div className="form-inputs">
                <label className="form-label">Username</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={user.username}
                  onChange={handleChange}
                />
                {errors.username && <span className="error-display">{errors.username}</span>}
              </div>
              <div className="form-inputs">
                <label className="form-label">First Name</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={user.firstName}
                  onChange={handleChange}
                />
                {errors.firstname && <span className="error-display">{errors.firstname}</span>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Last Name</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={user.lastName}
                  onChange={handleChange}
                />
                {errors.lastname && <span className="error-display">{errors.lastname}</span>}
              </div>
              <div className="form-inputs">
                <label className="form-label">uNID</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="uid"
                  placeholder="Enter your uNID"
                  value={user.uid}
                  onChange={handleChange}
                />
                {errors.uNID && <span className="error-display">{errors.uNID}</span>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Grad Year</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="number"
                  name="gradYear"
                  placeholder="Enter your grad year"
                  value={user.gradYear}
                  onChange={handleChange}
                />
                {errors.gradyear && <span className="error-display">{errors.gradyear}</span>}
              </div>
              <div className="form-inputs">
                <label className="form-label">Email</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleChange}
                />
                {/* {errors.email && <p>{errors.email}</p>} */}
              </div>
              {/* <div className="form-inputs">
                <label className="form-label">Password</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div> */}
              <div className="form-inputs">
                <label className="form-label">Placement</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="placement"
                  placeholder="Enter your placement"
                  value={user.placement}
                  onChange={handleChange}
                />
                {/* {errors.password && <p>{errors.password}</p>} */}
              </div>
              <div className="form-inputs">
                <label className="form-label">Introduction</label>
                <textarea
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="intro"
                  placeholder="Enter your introduction"
                  value={user.intro}
                  onChange={handleChange}
                />
                {/* {errors.password && <span>{errors.password}</span>} */}
              </div>
              {/* have no idea about invitation code*/}
              <div className="form-inputs">
                <label className="form-label">Invitation Code</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="code"
                  placeholder="Please enter your invitation code"
                  value={user.code}
                  onChange={handleChange}
                />
                {/* {errors.password2 && <span className="error-display">{errors.password2}</span>} */}
              </div>
              <div className="form-inputs">
                <label className="form-label">Avartar</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="text"
                  name="avatar"
                  placeholder="Please enter your photo url"
                  value={user.avatar}
                  onChange={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label className="form-label">Password</label>
                <input
                  disabled={disabled}
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Please enter your password"
                  value={user.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="error-display">{errors.password}</span>}
              </div>
  
              <ButtonGroup className="btn-group">
                <button onClick={onEdit} className="edit-btn" type="button">
                  Edit
                </button>
                <button onClick={onSave} className="save-btn" type="submit">
                  Save
                </button>
              </ButtonGroup>
              <p>
                Tips: If you want to change your password, just submit your new
                password! Otherwise, enter your original password.
              </p>
            </form>
          </div>
          <div className="form-content-right">
            <img className="form-img" src="img/img7.jpeg" alt="theU" />
          </div>
        </div>
      </>
    );
  }

  export default MyProfile
  //id, email, username, firstName, lastName, code, gradYear, *placement, *intro, *avatar, uid
  //const [disabled, setDisabled] = useState(true);
  //const [isSubmited, setSubmited] = useState(false);
  //const [userId, setUserid] = useState("");
  // const [user, setUser] = useState({
  //   id: "",
  //   username: "",
  //   email: "", //same
  //   firstName: "",
  //   lastName: "",
  //   uid: "",
  //   gradYear: "",
  //   placement: "",
  //   intro: "",
  //   code: "",
  //   password: "",
  //   avatar: "", 
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // useEffect(() => {
  //   //const onCurrentUser = async () => {
  //   axios
  //     .get("/api/users/me", {})
  //     .then(function (response) {
  //       console.log(response);
  //       const currentuser = response.data;
  //       console.log(currentuser);

  //       setUser(currentuser);
  //       setUserid(currentuser.id);
  //       console.log(currentuser.id);
  //       console.log(currentuser);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  //TODO: implement the edit function
  // const onSave = async (event) => {
  //   event.preventDefault();
  //   console.log(user); //
  //   console.log(user.email);
  //   await axios
  //     .put(`/api/users/update/${userId}`, {
  //       email: user.email,
  //       password: user.password,
  //       username: user.username,
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       code: user.code,
  //       gradYear: user.gradYear,
  //       uid: user.uid,
  //       intro: user.intro,
  //       placement: user.placement,
  //       avatar: user.avatar,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       window.location.reload();
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });
  // };

//   const onEdit = () => {
//     setDisabled(false);
//   };

//   return (
//     <>
//       <UserNavbar />
//       <div className="profile-container">
//         <div className="form-profile-content-left">
//           <form className="form" noValidate>
//             <h1 className="profile-myprofile">My Profile</h1>
//             <div>
//               <img className="avatar-img" src={user.avatar} />
//             </div>

//             <div className="form-inputs">
//               <label className="form-label">Username</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 name="username"
//                 type="text"
//                 placeholder="Enter your username"
//                 value={user.username}
//                 onChange={handleChange}
//               />
//               {/* {errors.username && <p>{errors.username}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">First Name</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter your first name"
//                 value={user.firstName}
//                 onChange={handleChange}
//               />
//               {/* {errors.firstname && <p>{errors.firstname}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">Last Name</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter your last name"
//                 value={user.lastName}
//                 onChange={handleChange}
//               />
//               {/* {errors.lastname && <p>{errors.lastname}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">uNID</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="uid"
//                 placeholder="Enter your uNID"
//                 value={user.uid}
//                 onChange={handleChange}
//               />
//               {/* {errors.uNID && <p>{errors.uNID}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">Grad Year</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="number"
//                 name="gradYear"
//                 placeholder="Enter your grad year"
//                 value={user.gradYear}
//                 onChange={handleChange}
//               />
//               {/* {errors.gradyear && <p>{errors.gradyear}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">Email</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={user.email}
//                 onChange={handleChange}
//               />
//               {/* {errors.email && <p>{errors.email}</p>} */}
//             </div>
//             {/* <div className="form-inputs">
//               <label className="form-label">Password</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={user.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <p>{errors.password}</p>}
//             </div> */}
//             <div className="form-inputs">
//               <label className="form-label">Placement</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="placement"
//                 placeholder="Enter your placement"
//                 value={user.placement}
//                 onChange={handleChange}
//               />
//               {/* {errors.password && <p>{errors.password}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">Introduction</label>
//               <textarea
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="intro"
//                 placeholder="Enter your introduction"
//                 value={user.intro}
//                 onChange={handleChange}
//               />
//               {/* {errors.password && <p>{errors.password}</p>} */}
//             </div>
//             {/* have no idea about invitation code*/}
//             <div className="form-inputs">
//               <label className="form-label">Invitation Code</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="code"
//                 placeholder="Please enter your invitation code"
//                 value={user.code}
//                 onChange={handleChange}
//               />
//               {/* {errors.password2 && <p>{errors.password2}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">Avartar</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="avatar"
//                 placeholder="Please enter your photo url"
//                 value={user.avatar}
//                 onChange={handleChange}
//               />
//               {/* {errors.password2 && <p>{errors.password2}</p>} */}
//             </div>
//             <div className="form-inputs">
//               <label className="form-label">Password</label>
//               <input
//                 disabled={disabled}
//                 className="form-input"
//                 type="text"
//                 name="password"
//                 placeholder="Please enter your password"
//                 value={user.password}
//                 onChange={handleChange}
//               />
//               {/* {errors.password && <p>{errors.password}</p>} */}
//             </div>

//             <ButtonGroup className="btn-group">
//               <button onClick={onEdit} className="edit-btn" type="button">
//                 Edit
//               </button>
//               <button onClick={onSave} className="save-btn" type="submit">
//                 Save
//               </button>
//             </ButtonGroup>
//             <p>
//               Tips: If you want to change your password, just submit your new
//               password! Otherwise, enter your original password.
//             </p>
//           </form>
//         </div>
//         <div className="form-content-right">
//           <img className="form-img" src="img/img7.jpeg" alt="theU" />
//         </div>
//       </div>
//     </>
//   );
// }
