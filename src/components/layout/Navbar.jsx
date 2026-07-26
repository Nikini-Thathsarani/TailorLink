import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        Tailor<span>Link</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Find Tailors</li>
        <li>Bookings</li>
        <li>About</li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;