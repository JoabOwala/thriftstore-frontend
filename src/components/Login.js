import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom"; // Import useHistory from React Router

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("buyer");

  // Get the history object using the useHistory hook
  const history = useHistory();

  // Moved the handleLogin function outside of the component
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3001/auth/buyer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Show SweetAlert with the logged-in buyer details
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have logged in successfully!",
          html: `<p>Welcome, ${data.buyer.username}!</p><p>Email: ${data.buyer.email}</p>`,
        }).then(() => {
          // Redirect to the homepage after the SweetAlert is closed
          history.push("/homepage"); // Replace '/homepage' with the actual path to your homepage route
        });
      } else {
        // Handle login error for non-200 status codes
        throw new Error("Login failed");
      }
    } catch (error) {
      // Handle login error
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    }
  };

  // Get the history object using the useHistory hook

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
          <div className="featured-image mb-3">
            <img src="images/1.png" className="img-fluid" style={{ width: "250px" }} alt="Logo" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: "Courier New, Courier, monospace", fontWeight: 600 }}>
            Be Verified
          </p>
          <small className="text-white text-wrap text-center" style={{ width: "17rem", fontFamily: "Courier New, Courier, monospace" }}>
            Welcome to Our ThriftShop platform.
          </small>
        </div>

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Hello, Again</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-check mb-3">
               <input
                 type="radio"
                 className="form-check-input"
                 name="userType"
                 value="buyer"
                 checked
                  // The "checked" attribute above means the default selected value is "buyer"
                 onChange={() => {}}
                />
               <label className="form-check-label">Buyer</label>
                            </div>
              <div className="form-check mb-3">
                <input
                  type="radio"
                  className="form-check-input"
                                name="userType"
                  value="seller"
                  onChange={() => {}}
                />
                <label className="form-check-label">Seller</label>
              </div>
              
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary">
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                <Link to="/homepage">
                  Login
                  </Link>
                  
                </button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img src="images/google.png" style={{ width: "20px" }} className="me-2" alt="Google" />
                  <small>Sign In with Google</small>
                </button>
              </div>
             <div className="row">
                    <small>Don't have an account? <Link to="/signup">Sign Up</Link></small>      
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
