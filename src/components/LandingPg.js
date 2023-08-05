import React from "react";
import { Link } from "react-router-dom";
function LandingPg() {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active c-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            class="d-block w-100 c-img"
            alt="slide 1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Join Thrift Shop</h5>
            <Link to="Signup">
              <button type="button" class="btn btn-outline-info">
                Sign Up
              </button>
            </Link>
            </div>
          </div>
        </div>
        <div class="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            class="d-block w-100 c-img"
            alt="slide 2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="text-secondary">Join Thrift Shop</h5>
            <Link to="Signup">
              <button type="button" class="btn btn-outline-info">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div class="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            class="d-block w-100 c-img"
            alt="slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="text-secondary">Join Thrift Shop</h5>
            <Link to="Signup">
              <button type="button" class="btn btn-outline-info">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div class="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            class="d-block w-100 c-img"
            alt="slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="text-secondary">Join Thrift Shop</h5>
            <Link to="Signup">
              <button type="button" class="btn btn-outline-info">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      {/* ... (the rest of your carousel items and content) ... */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel" // Corrected ID here
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel" // Corrected ID here
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default LandingPg;


