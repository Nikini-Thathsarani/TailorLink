import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        Tailor<span>Link</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/tailors">Tailors</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/how-it-works">How it Works</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>

      {/* Buttons */}
     <div className="nav-actions">

    <Link to="/login" className="login-nav-btn">
        LOGIN
    </Link>

    <button className="create-btn">
        LET'S CREATE →
    </button>

</div>
    </header>
  );
};

export default Navbar;