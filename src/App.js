import React from "react";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import AdminSignin from "./components/pages/AdminSignin";
import AdminPage from "./components/pages/AdminPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navBar.js';
import UserMainPage from "./components/pages/UserMainPage";

function App() {
  return (
    //<LandingPage />
    // <Router>
    //   <NavBar />
    //   <Switch>
    //     <Route path='/sign-in' exact component={SignIn} />
    //     <Route path='/sign-up' exact component={SignUp} />
    //     <Route path='/contact-us' exact component={ContactUs} />
    //     <Route path='/about-us' exact component={AboutUs} />
    //   </Switch>
    // </Router>

    <Router>
      <NavBar />
      <Switch>
        <Route exat path="/" exact component={LandingPage} />
        <Route exat path="/sign-in" exact component={SignIn} />
        <Route exat path="/sign-up" exact component={SignUp} />
        <Route exat path="/contact-us" exact component={ContactUs} />
        <Route exat path="/about-us" exact component={AboutUs} />
        <Route exat path="/admin-signin" exact component={AdminSignin} />
        <Route exat path="/admin-mainpage" exact component={AdminPage} />
        <Route exat path="/user-mainpage" exact component={UserMainPage} />
      </Switch>
    </Router>
  );
}

export default App;
