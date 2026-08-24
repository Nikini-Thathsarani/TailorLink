import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button/Button";
import "./Navbar.css";

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
  <Button variant="outline">Login</Button>

  <Button variant="primary">Register</Button>
</div>
    </header>
  );
};

export default Navbar;