import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Logo = styled.h2`
  color: #ffc800;
`;
const Subt =styled.h6`
  color: #333;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff6600; /* Change to the desired hover color */
  }
`;
function Navbar() {
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
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <Subt>SignUp</Subt>
              </Link>
            </li>
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
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <Subt>Admin</Subt>
              </Link>
            </li>
            {/* <li className="nav-item">
              <button
                className="nav-link btn btn-danger text-white"
                onClick={logout}
              >
                Sign out
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


