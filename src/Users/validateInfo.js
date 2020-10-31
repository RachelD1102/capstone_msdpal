export default function validateInfo(user) {
    let errors = {};
  
    if (!user.username.trim()) {
      errors.username = 'Username required';
    }else if (!/^[A-Za-z]+/.test(user.username.trim())) {
      errors.username = 'Enter a valid name with only letters';
    }else if(user.username.length < 3 || user.username.length > 10){
      errors.username = 'Username must be between 3 and 10 characters';
    }

    if(!user.firstName.trim()) {
      errors.firstName = 'First name required'
    } else if (!/^[A-Za-z]+/.test(user.firstName.trim())) {
      errors.firstName = 'Enter a valid name';
    }

    if(!user.lastName.trim()) {
      errors.lastName = 'Last name required'
    } else if (!/^[A-Za-z]+/.test(user.lastName.trim())) {
      errors.lastName = 'Enter a valid name';
    }

    if(!user.uid.trim()) {
      errors.uid = 'uNID required'
    }else if (user.uid.length < 8) {
      errors.uid = 'uNID should be 8 characters';
    }
    
    let number;
    if(!user.gradYear.trim()){
      errors.gradYear = 'Grad Year is required'
    }else if (user.gradYear.length < 4) {
      errors.gradYear = 'Grad year is invalid';
    }else if(number = parseInt(user.gradYear) < 2016) {
      errors.gradYear = 'Grad year is invalid';
    }

    if (!user.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!user.password) {
      errors.password = 'Password is required';
    } else if (user.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!user.password2) {
      errors.password2 = 'Password is required';
    } else if (user.password2 !== user.password) {
      errors.password2 = 'Passwords do not match';
    }

    if (!user.code.trim()) {
      errors.code = 'Invitation Code is required';
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