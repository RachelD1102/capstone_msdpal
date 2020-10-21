export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }else if (!/^[A-Za-z]+/.test(values.name.trim())) {
      errors.username = 'Enter a valid name with only letters';
    }else if(!values.username.length < 3 || !values.username.length > 10){
      errors.username = 'Username must be between 3 and 10 characters';
    }

    if(!values.firstname.trim()) {
      errors.firstname = 'First name required'
    } else if (!/^[A-Za-z]+/.test(values.firstname.trim())) {
      errors.firstname = 'Enter a valid name';
    }

    if(!values.lastname.trim()) {
      errors.lastname = 'Last name required'
    } else if (!/^[A-Za-z]+/.test(values.lastname.trim())) {
      errors.lastname = 'Enter a valid name';
    }

    if(!values.uNID.trim()) {
      errors.uNID = 'uNID required'
    }else if (values.uNID.length < 8) {
      errors.uNID = 'uNID should be 8 characters';
    }

    if(!values.gradyear.trim()){
      errors.lastname = 'Grad Year is required'
    }else if (values.gradyear.length < 4) {
      errors.gradyear = 'Grad year is invalid';
    }

    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }

  // function yearValidation(year) {
  //   var text = /^[0-9]+$/;
  //   if (year != 0) {
  //       if ((year != "") && (!text.test(year))) {

  //           alert("Please Enter Numeric Values Only");
  //           return false;
  //       }

  //       if (year.length != 4) {
  //           alert("Year is not proper. Please check");
  //           return false;
  //       }
  //       var current_year=new Date().getFullYear();
  //       if((year < 1920) || (year > current_year))
  //           {
  //           alert("Year should be in range 1920 to current year");
  //           return false;
  //           }
  //       return true;
  //   }
  // }