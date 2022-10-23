// import "../App.css"
import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from "react";
import React from "react"

const Layout = () => {
  const { user } = useAuth0();
  const checkbox = useRef(null);

  const handleClick = () => {
    checkbox.current.checked = false;
  }

  return (
    <>
      <nav class="navbar">
          <div class="container nav-container">
              <Link to="/profile" className="profile_link"><img src={user.picture} alt="profile image" className="profile_img"/></Link>
              <input ref={checkbox} class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>  
            <div class="menu-items">
              <Link onClick={() => handleClick()} to="/" className="menu_link">Home</Link>
              <Link onClick={() => handleClick()} to="/likedmovies" className="menu_link">My Movies</Link>
              <Link onClick={() => handleClick()} to="/match" className="menu_link">Match</Link>
            </div>
          </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;