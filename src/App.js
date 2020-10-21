import React from "react";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import AdminSignin from "./components/pages/AdminSignin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserMainPage from "./components/pages/UserMainPage";
import AdminMainpage from "./components/pages/AdminMainpage";
import AdminNewsPage from "./components/pages/AdminNewsPage";
import AdminManage from "./components/pages/AdminManage";
import MyProfile from "./components/pages/MyProfile";
import CreatePost from "./components/pages/CreatePost";
import MyPosts from "./components/pages/MyPosts";

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
      <Switch>
        <Route exat path="/" exact component={LandingPage} />
        <Route exat path="/sign-in" exact component={SignIn} />
        <Route exat path="/sign-up" exact component={SignUp} />
        <Route exat path="/contact-us" exact component={ContactUs} />
        <Route exat path="/about-us" exact component={AboutUs} />
        <Route exat path="/admin-signin" exact component={AdminSignin} />
        <Route exat path="/user-mainpage" exact component={UserMainPage} />
        <Route exat path="/admin-newspage" exact component={AdminNewsPage} />
        <Route exat path="/admin-managenews" exact component={AdminManage} />
        <Route exat path="/user-myprofile" exact component={MyProfile} />
        <Route exat path="/user-myposts" exact component={MyPosts} /> 
        <Route exat path="/user-createposts" exact component={CreatePost} />
        <Route exat path="/admin-mainpage" exact component={AdminMainpage} />
      </Switch>
    </Router>
  );
}

export default App;
