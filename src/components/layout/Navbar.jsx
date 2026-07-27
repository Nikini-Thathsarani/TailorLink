import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        TAILOR<span>LINK</span>
      </div>


      {/* Navigation Links */}
      <ul className="nav-links">

        <li>HOME</li>
        <li>TAILORS</li>
        <li>SERVICES</li>
        <li>HOW IT WORKS</li>
        <li>ABOUT</li>

      </ul>


      {/* Buttons */}
      <div className="nav-actions">

        <button className="login-btn">
          LOGIN
        </button>


        <button className="create-btn">
          LET'S CREATE →
        </button>

      </div>


    </nav>
  );
};


export default Navbar;