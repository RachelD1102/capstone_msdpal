import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignIn from "./Users/UserPages/SignIn";
import SignUp from "./Users/UserPages/SignUp";
import ContactUs from "./ContactUsPage/ContactUs";
import AboutUs from "./AboutUsPage/AboutUs";
import AdminSignin from "./Admin/AdminSignin";
import AdminCodePage from "./Admin/AdminCodePage";
import UserMainPage from "./Users/UserPages/UserMainPage";
import AdminMainPage from "./Admin/AdminMainPage";
import AdminNewsPage from "./Admin/AdminNewsPage";
import AdminManage from "./Admin/AdminManage";
import MyProfile from "./Users/UserPages/MyProfile";
import CreatePost from "./Users/UserPages/CreatePost";
import MyPostsPage from "./Users/UserPages/MyPostsPage";
import GetAllUser from "./Users/UserPages/GetAllUser";
import RecruitmentPage from "./Users/UserPages/RecruitmentPage";
import InternshipPage from "./Users/UserPages/InternshipPage";
import DailyPage from "./Users/UserPages/DailyPage";
import TechPage from "./Users/UserPages/TechPage";
import MSDActivityPage from "./Users/UserPages/MSDActivityPage";
import UserManagePage from "./Users/UserPages/UserManagePage";

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
        <Route exat path="/admin-codepage" exact component={AdminCodePage} />
        <Route exat path="/user-mainpage" exact component={UserMainPage} />
        <Route exat path="/admin-newspage" exact component={AdminNewsPage} />
        <Route exat path="/admin-managenews" exact component={AdminManage} />
        <Route exat path="/user-myprofile" exact component={MyProfile} />
        <Route exat path="/user-myposts" exact component={MyPostsPage} />
        <Route exat path="/user-myposts-manage" exact component={UserManagePage} />
        <Route exat path="/user-createposts" exact component={CreatePost} />
        <Route exat path="/admin-mainpage" exact component={AdminMainPage} />
        <Route exat path="/user-getallusers" exact component={GetAllUser} />
        <Route exat path="/user-mainpage-recruitment" exact component={RecruitmentPage} />
        <Route exat path="/user-mainpage-internship" exact component={InternshipPage} />
        <Route exat path="/user-mainpage-dailylife" exact component={DailyPage} />
        <Route exat path="/user-mainpage-msdActivity" exact component={MSDActivityPage} />
        <Route exat path="/user-mainpage-technicalresources" exact component={TechPage} />
      </Switch>
    </Router>
  );
}

export default App;
