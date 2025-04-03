import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import { FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/ProductList" className="nav-link">Products</Link>
        
        
        <Link to="/Alerts" className="nav-link">Alerts</Link>
      </div>
      <div className="nav-center">
        <input type="text" placeholder="Search Products/URL..." />
      </div>
      <div className="nav-right">
        <Link to="/login" className="logout">
          <FaSignOutAlt style={{ marginRight: "5px" }} />
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
