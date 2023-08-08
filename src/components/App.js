import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import LandingPg from './LandingPg';
import HomePage from './HomePage';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductsList from './ProductsList';
import SignUp from './SignUp';
import Admin from './Admin';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Login from './Login'
import Cart from './Cart'
import Footer from './Footer'
import SingleProduct from "./SingleProduct";
import Swal from "sweetalert2";
import { AuthProvider } from "./AuthContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);

    // Show success message using SweetAlert
    Swal.fire(
      'Added to cart',
      'Product has been added to your cart.',
      'success'
    );
  };
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <BrowserRouter>
     <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/HomePage" element={<HomePage addToCart={addToCart}/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ProductsList" element={<ProductsList />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route
          path="/Cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />}
        />

        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        {/* Use the component prop without curly braces */}
        <Route path="/products/:id" element={<SingleProduct addToCart={addToCart}/>} />
      </Routes>
      <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
