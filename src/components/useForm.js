import { useState } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    firstname: '',
    lastname: '',
    uNID: '',
    gradyear: '',
    email: '',
    password: '',
    password2: '',
    invitationCode: '',
  });
  const [errors, setErrors] = useState({});
  //const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setErrors(validate(values));
  //   await axios
  //     .post("https://uofumsdpal.dev//api/users/signup", {
  //       email: signupvalues.email,
  //       password: signupvalues.password,
  //       username: signupvalues.username,
  //       firstName: signupvalues.firstname,
  //       lastName: signupvalues.lastname,
  //       code: signupvalues.invitationCode,
  //       gradYear: signupvalues.gradyear,
  //       uid: signupvalues.uNID,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });
    //need to modify


  // const handleSubmit = e => {
  //   e.preventDefault();

  //   setErrors(validate(signupvalues));
  //   setIsSubmitting(true);
  // };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );

  return { handleChange, values, errors };
};

export default useForm;