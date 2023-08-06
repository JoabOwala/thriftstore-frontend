import React from "react";
import { Link } from "react-router-dom";

function Navbar({ buyer, setBuyer }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setBuyer(null);
      }
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b>ThriftShop</b>
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
        <div>
          {buyer ? (
            <>
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
                  <Link to="/" className="nav-link" onClick={handleLogoutClick}>
                    Logout
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link nav-item">
                    AboutUs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    LogIn
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
