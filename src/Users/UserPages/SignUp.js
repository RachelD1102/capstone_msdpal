import React from "react";
import validate from "../validateInfo";
import useForm from "../useForm";
import "../SigninForm.css";
import Navbar from "../../LandingPage/navBar";
import { Redirect } from "react-router-dom";

const SignUp = ({ submitForm }) => {
  const {
    handleChange,
    onSubmit,
    user,
    errors,
    isVerified,
    isCodeWrong,
  } = useForm(submitForm, validate);

  if (isVerified) return <Redirect to="/user-mainpage" />;
  return (
    <>
      <Navbar />
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img2.jpg" alt="theU" />
        </div>
        <div className="form-content-right">
          <form onSubmit={onSubmit} className="form" noValidate>
            <h1>Create your MSDPal account!</h1>
            <div className="form-inputs">
              <label className="form-label">Username</label>
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={user.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Last Name</label>
              <input
                className="form-input"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={user.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">uNID</label>
              <input
                className="form-input"
                type="text"
                name="uid"
                placeholder="Enter your uNID"
                value={user.uid}
                onChange={handleChange}
              />
              {errors.uid && <p>{errors.uid}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Grad Year</label>
              <input
                className="form-input"
                type="text"
                name="gradYear"
                placeholder="Enter your grad year"
                value={user.gradYear}
                onChange={handleChange}
              />
              {errors.gradYear && <p>{errors.gradYear}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Confirm Password</label>
              <input
                className="form-input"
                type="password"
                name="password2"
                placeholder="Confirm your password"
                value={user.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Invitation Code</label>
              <input
                className="form-input"
                type="text"
                name="code"
                placeholder="Please enter your invitation code"
                value={user.code}
                onChange={handleChange}
              />
              {errors.code && <p>{errors.code}</p>}
              {<p>{isCodeWrong}</p>}
            </div>
            <button className="form-input-btn" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

//----------------------------------------------------
// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstname] = useState("");
//   const [lastName, setLastname] = useState("");
//   const [uID, setUid] = useState("");
//   const [gradyear, setGradyear] = useState("");
//   const [code, setCode] = useState("");
//   const [isVerified, setVerified] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     await axios
//       .post("/api/users/signup", {
//         email: email,
//         password: password,
//         username: username,
//         firstName: firstName,
//         lastName: lastName,
//         code: code,
//         gradYear: gradyear,
//         uid: uID,
//       })
//       .then(function (response) {
//         if(response.status === 201) {
//           setVerified(true);
//         }
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error.response.data);
//       });
//   };

//   if(isVerified) return <Redirect to="/user-mainpage" />
//   return (
//     <>
//     <Navbar />
//     <div className="form-container">
//       <span className="close-btn">x</span>
//       <div className="form-content-left">
//         <img className="form-img" src="img/img2.jpg" alt="theU" />
//       </div>
//       <div className="form-content-right">
//         <form onSubmit={onSubmit} className="form" noValidate>
//           <h1>Create your MSDPal account!</h1>
//           <div className="form-inputs">
//             <label className="form-label">Username</label>
//             <input
//               className="form-input"
//               type="text"
//               //name="username"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             {/* {errors.username && <p>{errors.username}</p>} */}
//           </div>
//           <div className="form-inputs">
//             <label className="form-label">First Name</label>
//             <input
//               className="form-input"
//               type="text"
//               //name="firstname"
//               placeholder="Enter your first name"
//               value={firstName}
//               onChange={(e) => setFirstname(e.target.value)}
//             />
//             {/* {errors.firstname && <p>{errors.firstname}</p>} */}
//           </div>
//           <div className="form-inputs">
//             <label className="form-label">Last Name</label>
//             <input
//               className="form-input"
//               type="text"
//               //name="lastname"
//               placeholder="Enter your last name"
//               value={lastName}
//               onChange={(e) => setLastname(e.target.value)}
//             />
//             {/* {errors.lastname && <p>{errors.lastname}</p>} */}
//           </div>
//           <div className="form-inputs">
//             <label className="form-label">uNID</label>
//             <input
//               className="form-input"
//               type="text"
//               //name="uNID"
//               placeholder="Enter your uNID"
//               value={uID}
//               onChange={(e) => setUid(e.target.value)}
//             />
//             {/* {errors.uNID && <p>{errors.uNID}</p>} */}
//           </div>
//           <div className="form-inputs">
//             <label className="form-label">Grad Year</label>
//             <input
//               className="form-input"
//               type="number"
//               //name="gradyear"
//               placeholder="Enter your grad year"
//               value={gradyear}
//               onChange={(e) => setGradyear(e.target.value)}
//             />
//             {/* {errors.gradyear && <p>{errors.gradyear}</p>} */}
//           </div>
//           <div className="form-inputs">
//             <label className="form-label">Email</label>
//             <input
//               className="form-input"
//               type="email"
//               //name="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {/* {errors.email && <p>{errors.email}</p>} */}
//           </div>
//           <div className="form-inputs">
//             <label className="form-label">Password</label>
//             <input
//               className="form-input"
//               type="password"
//               //name="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* {errors.password && <p>{errors.password}</p>} */}
//           </div>
//           {/* <div className="form-inputs">
//             <label className="form-label">Confirm Password</label>
//             <input
//               className="form-input"
//               type="password"
//               name="password2"
//               placeholder="Confirm your password"
//               value={values.password2}
//               onChange={handleChange}
//             />
//             {errors.password2 && <p>{errors.password2}</p>}
//           </div> */}
//           {/* have no idea about invitation code*/}
//           <div className="form-inputs">
//             <label className="form-label">Invitation Code</label>
//             <input
//               className="form-input"
//               type="text"
//               //name="invitationcode"
//               placeholder="Please enter your invitation code"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//             />
//             {/* {errors.password2 && <p>{errors.password2}</p>} */}
//           </div>
//           <button className="form-input-btn" type="submit">
//             Sign up
//           </button>
//           {/* <span className="form-input-login">
//           Already have an account? Login <a href="#">here</a>
//         </span> */}
//         </form>
//       </div>
//     </div>
//     </>
//   );
// }
