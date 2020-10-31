import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignIn from "./Users/UserPages/SignIn";
import SignUp from "./Users/UserPages/SignUp";
import ContactUs from "./ContactUsPage/ContactUs";
import AboutUs from "./AboutUsPage/AboutUs";
import AdminSignin from "./Admin/AdminSignin";
import UserMainPage from "./Users/UserPages/UserMainPage";
import AdminMainpage from "./Admin/AdminMainpage";
import AdminNewsPage from "./Admin/AdminNewsPage";
import AdminManage from "./Admin/AdminManage";
import MyProfile from "./Users/UserPages/MyProfile";
import CreatePost from "./Users/UserPages/CreatePost";
import MyPosts from "./Users/UserPages/MyPosts";
import GetAllUser from "./Users/UserPages/GetAllUser";

function App() {
  return (
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
        <Route exat path="/user-getallusers" exact component={GetAllUser} />
      </Switch>
    </Router>
  );
}

export default App;
