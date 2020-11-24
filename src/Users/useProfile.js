import { useState, useEffect } from 'react';
import axios from "axios";

const useProfile = (callback, validate) => {

  let user_Id = sessionStorage.getItem("userId")

  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    uid: "",
    gradYear: "",
    placement: "",
    intro: "",
    code: "",
    password: "",
    avatar: "", 
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSave = async (event) => {
    event.preventDefault();
    //console.log(user); 
    //console.log(user.email);
    await axios
      .put(`/api/users/update/${user_Id}`, {
        email: user.email,
        password: user.password,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        code: user.code,
        gradYear: user.gradYear,
        uid: user.uid,
        intro: user.intro,
        placement: user.placement,
        avatar: user.avatar,
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
      setErrors(validate(user));
  };

  useEffect(() => {
    axios
    .get("/api/users/me", {})
    .then(function (response) {
      console.log(response);
      const currentuser = response.data;
      console.log(currentuser);
      setUser(currentuser);
    }).catch(function (error) {
      console.log(error);
    });
}, [errors]);

  return { handleChange, onSave, user, errors};
};

export default useProfile;