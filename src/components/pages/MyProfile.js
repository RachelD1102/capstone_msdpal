import React, { useEffect, useState } from "react";
import UserNavbar from "../UserNavbar";
import "../SigninForm.css";
import axios from "axios";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

axios.defaults.withCredentials = true;

export default function MyProfile() {
  //id, email, username, firstName, lastName, code, gradYear, *placement, *intro, *avatar, uid
  const [disabled, setDisabled] = useState(true);
  const [isSubmited, setSubmited] = useState(false);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    id:"",
    username: "",
    email: "", //same
    firstName: "",
    lastName: "",
    uid: "",
    gradYear: "",
    placement: "",
    intro: "",
    code: "",
    //password:"",
  });

  useEffect(() => {
    //const onCurrentUser = async () => {
    axios
      .get("/api/users/me", {})
      .then(function (response) {
        console.log(response);
        //console.log(response.data.username);
        const currentuser = response.data;
        console.log(currentuser);
        //console.log(currentuser.id);
        setUser(currentuser);
        //console.log(user.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //console.log(user.id);
  //console.log(user);

  //TODO: implement the edit function
  const onSave = async (event) => {
    event.preventDefault();
    await axios.put(`/api/users/update/${user.id}`, {
        user,
        password:password
    })
      .then(function (response) {
        // if(response.status === 201) {
        //   setVerified(true);
        // }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
  
  const onEdit = () => {
    setDisabled(false);
  };

  // const onSave = () => {
  //   setSubmited(true);
  // };

  // const onCurrentUser = async (event) => {
  //   event.preventDefault();
  //   await axios
  //     .get(`/api/users/getme`, {})
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
        {/* <p>user: {user.code}</p> */}
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
                value={user.username}
                onChange={(e) => setUser({ username: e.target.value })}
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
                value={user.firstName}
                onChange={(e) => setUser({ firstName: e.target.value })}
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
                value={user.lastName}
                onChange={(e) => setUser({ lastName: e.target.value })}
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
                value={user.uid}
                onChange={(e) => setUser({ uid: e.target.value })}
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
                value={user.gradYear}
                onChange={(e) => setUser({ gradYear: e.target.value })}
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
                value={user.email}
                onChange={(e) => setUser({ email: e.target.value })}
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                disabled={disabled}
                className="form-input"
                type="password"
                //name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
            <div className="form-inputs">
              <label className="form-label">Placement</label>
              <input
                disabled={disabled}
                className="form-input"
                type="text"
                //name="password"
                placeholder="Enter your placement"
                value={user.placement}
                onChange={(e) => setUser({ placement: e.target.value })}
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
                value={user.intro}
                onChange={(e) => setUser({ intro: e.target.value })}
              />
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
            {/* have no idea about invitation code*/}
            <div className="form-inputs">
              <label className="form-label">Invitation Code</label>
              <input
                disabled={disabled}
                className="form-input"
                type="text"
                //name="invitationcode"
                placeholder="Please enter your invitation code"
                value={user.code}
                onChange={(e) => setUser({ code: e.target.value })}
              />
              {/* {errors.password2 && <p>{errors.password2}</p>} */}
            </div>
           
            <ButtonGroup className="btn-group">
              <Button onClick={onEdit} className="edit-btn" type="button">
                Edit
              </Button>
              <Button onChange={onSave} className="save-btn" type="submit">
                Save
              </Button>
            </ButtonGroup>
            {/* <button onClick={onEdit} className="edit-btn" type="button">
              Edit
            </button>
            <button onChange={onSave} className="edit-btn" type="submit">
              Save
            </button> */}
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
