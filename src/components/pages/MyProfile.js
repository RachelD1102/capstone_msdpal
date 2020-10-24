import React, { useEffect, useState }from "react";
import UserNavbar from "../UserNavbar";
import "../SigninForm.css";
import axios from "axios";

axios.defaults.withCredentials = true

export default function MyProfile() {
  // const [username, setUsername] = useState("");
  // const [firstName, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [uid, setUid] = useState("");
  // const [gradyear, setGrayear] = useState("");
  // const [email, setEmail] = useState("");
  // const [place, setPlace] = useState("");
  // const [intro, setIntro] = useState("");
  // const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    uid: "",
    gradyear: "",
    email: "",
    place: "",
    intro: "",
    code: ""
  })

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios
  //     .post("/api/users/signup", {
  //       email: email,
  //       password: password,
  //       username: username,
  //       firstName: firstName,
  //       lastName: lastName,
  //       code: code,
  //       gradYear: gradyear,
  //       uid: uID,
  //     })
  //     .then(function (response) {
  //       if(response.status === 201) {
  //         setVerified(true);
  //       }
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });

  // };

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setDisabled(status.disabled);
  //   };
  const onEdit = () => {
    setDisabled(true);
  };
  

  // useEffect( () => {
  //   axios.get("/api/users/currentuser", {})
  //     .then(function (response) {
  //       console.log(response);
  //       id = response.id;
  //       axios.get("/api/users/currentuser", {
  //         id: id
  //       })
  //       .then(function (response) {
  //         console.log(response);
  //         const currentuser = JSON.parse(response.data);
  //         setUser(currentuser);
  //       })
  //       .catch(function (error) {
  //         console.log(error.response.data);
  //       });
  //       // const currentuser = JSON.parse(response.data);
  //       // setUser(currentuser);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });
  // });

  
  // const onCurrentUser = async (event) => {
  //   event.preventDefault();
  //   await axios
  //     .get(`/api/users/${id}`, {
  //       id: id
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       const currentuser = JSON.parse(response.data);
  //       setUser(currentuser);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });
  // };

  return (
    <>
    <UserNavbar />
    <div className="profile-container">
      <div className="form-profile-content-left">
        <form className="form" noValidate>
          <h1>My Profile</h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              disabled={disabled}
              className="form-input"
              type="text"
              //name="username"
              placeholder="Enter your username"
              //value={username}
              //onChange={(e) => setUsername(e.target.value)}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <div className="form-inputs">
            <label className="form-label">First Name</label>
            <input
              disabled={disabled}
              className="form-input"
              type="text"
              //name="firstname"
              placeholder="Enter your first name"
              //value={firstName}
              //onChange={(e) => setFirstname(e.target.value)}
            />
            {/* {errors.firstname && <p>{errors.firstname}</p>} */}
          </div>
          <div className="form-inputs">
            <label className="form-label">Last Name</label>
            <input
              disabled={disabled}
              className="form-input"
              type="text"
              //name="lastname"
              placeholder="Enter your last name"
              //value={lastName}
              //onChange={(e) => setLastname(e.target.value)}
            />
            {/* {errors.lastname && <p>{errors.lastname}</p>} */}
          </div>
          <div className="form-inputs">
            <label className="form-label">uNID</label>
            <input
              disabled={disabled}
              className="form-input"
              type="text"
              //name="uNID"
              placeholder="Enter your uNID"
              //value={uID}
              //onChange={(e) => setUid(e.target.value)}
            />
            {/* {errors.uNID && <p>{errors.uNID}</p>} */}
          </div>
          <div className="form-inputs">
            <label className="form-label">Grad Year</label>
            <input
              disabled={disabled}
              className="form-input"
              type="number"
              //name="gradyear"
              placeholder="Enter your grad year"
              //value={gradyear}
              //onChange={(e) => setGradyear(e.target.value)}
            />
            {/* {errors.gradyear && <p>{errors.gradyear}</p>} */}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              disabled={disabled}
              className="form-input"
              type="email"
              //name="email"
              placeholder="Enter your email"
              //alue={email}
              //onChange={(e) => setEmail(e.target.value)}
            />
            {/* {errors.email && <p>{errors.email}</p>} */}
          </div>
          {/* <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              //name="password"
              placeholder="Enter your password"
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
            /> */}
            {/* {errors.password && <p>{errors.password}</p>} */}
          {/* </div> */}
          <div className="form-inputs">
            <label className="form-label">Placement</label>
            <input
              disabled={disabled}
              className="form-input"
              type="text"
              //name="password"
              placeholder="Enter your placement"
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}
          </div>
          <div className="form-inputs">
            <label className="form-label">Introduction</label>
            <textarea
              disabled={disabled}
              className="form-input"
              type="text"
              //name="password"
              placeholder="Enter your introduction"
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}
          </div>
          {/* <div className="form-inputs">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div> */}
          {/* have no idea about invitation code*/}
          <div className="form-inputs">
            <label className="form-label">Invitation Code</label>
            <input
              disabled={disabled}
              className="form-input"
              type="text"
              //name="invitationcode"
              placeholder="Please enter your invitation code"
              //value={code}
              //onChange={(e) => setCode(e.target.value)}
            />
            {/* {errors.password2 && <p>{errors.password2}</p>} */}
          </div>
          <button 
          onClick={onEdit}
          className="edit-btn" 
          type="submit">
            Edit
          </button>
          {/* <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span> */}
        </form>
      </div>
      <div className="form-content-right">
        <img className="form-img" src="img/img3.jpeg" alt="theU" />
      </div>
    </div>
    </>
  );
  
      }
