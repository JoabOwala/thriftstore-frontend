import React,{useContext } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { AuthContext } from "./AuthContext";

const Logo = styled.h2`
  color: #ffc800;
`;
function Navbar() {
  const { current_user, logout } = useContext(AuthContext);

  console.log("current user in navbar", current_user);
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
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productslist" className="nav-link">
                <b>Products</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link">
                <b>Add Product</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <b>Cart</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <b>SignUp</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                <b>AboutUs</b>
              </Link>
              </li>
              <li>
              <Link to="/login" className="nav-link">
                <b>Login</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <b>Admin</b>
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-danger text-white"
                onClick={logout}
              >
                Sign out
              </button>
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


