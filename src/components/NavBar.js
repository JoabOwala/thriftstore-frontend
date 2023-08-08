import React,{useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { AuthContext } from "./AuthContext";

const Logo = styled.h2`
  color: #ffc800;
`;

const Subt = styled.h6`
  color: #333;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff6600; /* Change to the desired hover color */
    font-size: 1.5em; /* Increase the font size on hover */
  }
`;

function Navbar() {
  const location = useLocation();

  // Function to render navigation items based on the current page
  const renderNavItems = () => {
    if (location.pathname === "/") {
      // Home page
      return (
        <React.Fragment>
          {/* Render specific navigation items for the home page */}
          {/* Example: */}
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link">
              <Subt>About Us</Subt>
            </Link>
          </li>
          <li>
              <Link to="/login" className="nav-link">
                <Subt>Login</Subt>
              </Link>
            </li>
          <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <Subt>SignUp</Subt>
              </Link>
            </li>
        </React.Fragment>
      );
    } else if (location.pathname === "/login") {
      // Products list page
      return (
        <React.Fragment>
          {/* Render specific navigation items for the products list page */}
          {/* Example: */}
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                <Subt>AboutUs</Subt>
              </Link>
              </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <Subt>SignUp</Subt>
              </Link>
            </li>
          
        </React.Fragment>
      );
    } else if (location.pathname === "/signup") {
      // Products list page
      return (
        <React.Fragment>
          {/* Render specific navigation items for the products list page */}
          {/* Example: */}
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                <Subt>AboutUs</Subt>
              </Link>
              </li>
            <li>
              <Link to="/login" className="nav-link">
                <Subt>Login</Subt>
              </Link>
            </li>
          
        </React.Fragment>
      );
    } else if (location.pathname === "/logout") {
      // Products list page
      return (
        <React.Fragment>
          {/* Render specific navigation items for the products list page */}
          {/* Example: */}
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                <Subt>AboutUs</Subt>
              </Link>
              </li>

              <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <Subt>SignUp</Subt>
              </Link>
            </li>
              <li>
              <Link to="/login" className="nav-link">
                <Subt>Login</Subt>
              </Link>
            </li>
          
        </React.Fragment>
      );
    } else if (location.pathname === "/aboutus") {
      // Products list page
      return (
        <React.Fragment>
          {/* Render specific navigation items for the products list page */}
          {/* Example: */}
            <li className="nav-item">
              <Link to="/homepage" className="nav-link">
                <Subt>Home</Subt>
              </Link>
            </li>
          
        </React.Fragment>
      );
    }
    else {
      // Default navigation items for other pages
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link to="/homepage" className="nav-link">
              <Subt>Home</Subt>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/productslist" className="nav-link">
              <Subt>Products</Subt>
            </Link>
          </li>
          <li className="nav-item">
              <Link to="/addproduct" className="nav-link">
                <Subt>Add Product</Subt>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <Subt>Cart</Subt>
              </Link>
            </li>
            <li>
            <Link to="/aboutus" className="nav-link">
                <Subt>AboutUs</Subt>
              </Link>
              </li>
              <li>
              <Link to="/logout" className="nav-link">
                <Subt>LogOut</Subt>
              </Link>
            </li>
          {/* Add other default navigation items */}
        </React.Fragment>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b><Logo id="logo">ThriftStore</Logo></b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {renderNavItems()}
            {/* Other common navigation items */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
