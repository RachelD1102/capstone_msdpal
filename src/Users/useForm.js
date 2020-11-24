import { useState, useEffect } from 'react';
import axios from "axios";

const useForm = (callback, validate) => {

  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    uid: '',
    gradYear: '',
    email: '',
    password: '',
    password2: '',
    code: '', 
  });
  
  const [errors, setErrors] = useState({});
  const [isVerified, setVerified] = useState(false);
  const [isCodeWrong, setCodewrong] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/users/signup", {
        email: user.email,
        password: user.password,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        code: user.code,
        gradYear: user.gradYear,
        uid: user.uid,
      })
      .then(function (response) {
        if(response.status === 201) {
          setVerified(true);
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
        if(error.response.status === 400){
          setCodewrong("Please check your invitation code and uid!");
        }
      });
      setErrors(validate(user));
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isVerified) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, onSubmit, user, errors, isVerified, isCodeWrong};
};

export default useForm;