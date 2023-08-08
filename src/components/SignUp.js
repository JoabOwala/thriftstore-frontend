import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2"
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80vh; /* Set the container height to 80% of the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px; /* Add margin to the top of the entire container */
`;

const Header = styled.header`
  color: #333;
  font-size: 28px; /* Increase the font size for emphasis */
  margin-bottom: 30px; /* Add margin below the header */
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const MyRightCtn = styled.div`
  background-color: #1e90ff; /* Use a solid blue color */
  border-radius: 25px;
  padding: 40px;
  color: #fff; /* Set text color to white */
  font-size: 16px;
  display: flex;
  flex-direction: column; /* Align content vertically */
  justify-content: space-between; /* Distribute content evenly */
  align-items: center; /* Align content horizontally */
  flex: 1; /* Take up 50% of the container width */
`;

const MyLeftCtn = styled.div`
  background: #fff;
  border-radius: 25px;
  padding: 40px;
  padding-left: 80px;
  flex: 1; /* Take up 50% of the container width */
`;

const MyInput = styled.input`
  width: 70%;
  border-radius: 25px;
  padding: 15px;
  padding-left: 60px;
  margin-bottom: 20px; /* Add margin at the bottom of each input */
  border: none;
  box-shadow: 0px 10px 49px -14px rgba(0, 0, 0, 0.7);
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.input`
  background-color: #1e90ff; /* Use the same blue color for the button */
  color: #fff;
  width: 50%;
  border: none;
  border-radius: 25px;
  padding: 15px;
  box-shadow: 0px 10px 41px -11px rgba(0, 0, 0, 0.7);
  font-size: 16px;
  transition: background-color 0.3s; /* Add a smooth transition effect */

  &:hover {
    background-color: #00bfff; /* Darker blue color on hover */
  }

  &:focus {
    outline: none;
  }
`;

const ButtOut = styled.input`
  background: transparent;
  color: #fff;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 25px;
  padding: 15px;
  box-shadow: 0px 10px 49px -14px rgba(0, 0, 0, 0.7);
  font-size: 16px;

  &:hover {
    border: 2px solid #eecbff;
  }

  &:focus {
    outline: none;
  }
`;


function SignUp() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userType, setUserType] = useState(""); // Set the default user type to "buyer"
  const [buyerLocation, setBuyerLocation] = useState("");
  const [buyerContact, setBuyerContact] = useState("");
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "buyerLocation") {
      setBuyerLocation(value);
    } else if (name === "buyerContact") {
      setBuyerContact(value);
    }
  };
    // Function to handle form submission
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   try {
    //     const response = await fetch("http://127.0.0.1:3001/buyers", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });
        
    //     const data = await response.json();
    //     console.log("", data);
    
    //     // Show SweetAlert success popup
    //     Swal.fire({
    //       icon: "success",
    //       title: "Sign Up Successful",
    //       text: "You have signed up successfully!",
    //     });
    //   } catch (error) {
    //     console.error("Error creating buyer:", error);
    
    //     // Show SweetAlert error popup
    //     Swal.fire({
    //       icon: "error",
    //       title: "Sign Up Failed",
    //       text: "An error occurred during signup.",
    //     });
    //   }
    // };
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        let endpoint = "";
        if (userType === "buyer") {
          endpoint = "http://127.0.0.1:3001/buyers";
        } else if (userType === "seller") {
          endpoint = "http://127.0.0.1:3001/sellers";
        }
  
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        console.log("New user created:", data);
  
        // Show SweetAlert success popup
        Swal.fire({
          icon: "success",
          title: "Sign Up Successful",
          text: "You have signed up successfully!",
        });
      } catch (error) {
        console.error("Error creating user:", error);
  
        // Show SweetAlert error popup
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: "An error occurred during signup.",
        });
      }
    };
  return (
    <MainContainer>
      <Container className="myCard">
        <MyLeftCtn>
          <form className="myForm text-center" onSubmit={handleSubmit}>
            <Header>Create Account</Header>
            <div className="form-group">
              <i className="fas fa-user"></i>
              <MyInput
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <i className="fas fa-envelope"></i>
              <MyInput
                placeholder="Email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <i className="fas fa-lock"></i>
              <MyInput
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Conditionally render buyer-specific fields if userType is "buyer" */}
            {userType === "buyer" && (
              <>
                <div className="form-group">
                  <i className="fas fa-map-marker-alt"></i>
                  <MyInput
                    type="text"
                    name="buyerLocation"
                    placeholder="Buyer Location"
                    value={buyerLocation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <i className="fas fa-phone-alt"></i>
                  <MyInput
                    type="text"
                    name="buyerContact"
                    placeholder="Buyer Contact"
                    value={buyerContact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="buyer"
                  required
                  checked={userType === "buyer"}
                  onChange={() => setUserType("buyer")}
                />
                <span>Buyer</span>
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="seller"
                  required
                  checked={userType === "seller"}
                  onChange={() => setUserType("seller")}
                />
                <span>Seller</span>
              </label>
            </div>
            

            <div className="form-group">
              <label>
                <input
                  id="check_1"
                  name="check_1"
                  type="checkbox"
                  required
                />
                <small>I read and agree to Terms & Conditions</small>
                <div className="invalid-feedback">You must check the box.</div>
              </label>
            </div>

            <Button type="submit" className="button" value="CREATE ACCOUNT" />
            <div className="row">
                    <small>Already have an account? <Link to="/login">Log in</Link></small>
                    </div> 
          </form>
        </MyLeftCtn>  
        <MyRightCtn>
          <div className="box">
            <Header>ThriftShop, Welcomes You</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <ButtOut type="button" value="Learn More" />
          </div>
        </MyRightCtn>
      </Container>
    </MainContainer>
  );
}

export default SignUp;
