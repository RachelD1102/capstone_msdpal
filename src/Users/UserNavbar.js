import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../LandingPage/navBar.css";

export default function UserNavbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          MSDPal
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/user-mainpage"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/user-myprofile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/user-myposts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/user-createposts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Create New Post
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/user-getallusers"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Get All Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Sign out
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
