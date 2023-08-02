import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b>Thrift shop</b>
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
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <Link to="/homepage" className="nav-link">
                Homepage
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productslist" className="nav-link">
                Productlist
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/editproduct" className="nav-link">
                Edit product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link">
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
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

