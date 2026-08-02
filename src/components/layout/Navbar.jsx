import { NavLink } from "react-router-dom";
import Button from "../ui/Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        Tailor<span>Link</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/tailors">Tailors</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>

      <div className="nav-buttons">
        <Button variant="outline">Login</Button>
        <Button variant="primary">Register</Button>
      </div>
    </header>
  );
};

export default Navbar;