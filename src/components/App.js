import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import LandingPg from './LandingPg';
import HomePage from './HomePage';
import AddProduct from './AddProduct';
import ProductsList from './ProductsList';
import EditProduct from './EditProduct';
import SignUp from './SignUp';
import ProductCart from './ProductCart';
import Admin from './Admin';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Login from './Login'
import Cart from './Cart'
import Footer from './Footer'
// import Delete from './components/Admin/Delete';



function App() {

  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <BrowserRouter>
    <NavBar />
    

    <Routes>
      <Route path="/" element={<LandingPg />} />
        <Route path="/HomePage"element={<HomePage />} />
        <Route path="/AboutUs"element={<AboutUs />} />
        <Route path="/ProductsList"element={<ProductsList />} />
        <Route path="/EditProduct"element={<EditProduct />} />
        <Route path="/AddProduct"element={<AddProduct />} />
        <Route path="/ProductCart" element={<ProductCart addToCart={addToCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/SignUp"element={<SignUp />} />
        <Route path="/Admin"element={<Admin />} />
        <Route path="/login"element={<Login />} />
        
        
      {/* <Route  path="/delete" element={<Delete/>} /> */}
        
      
      
        
      
    </Routes>
    <Footer />
    
  </BrowserRouter>
  );
}

export default App;
// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import HomePage from "./HomePage";
// import LandingPg from "./LandingPg"
// import SignUp from "./SignUp"
// import Login from "./Login"
// // Import your other components like SignUp and Login here

// // Assuming you have the SignUp and Login components imported as SignUpComponent and LoginComponent

// function App() {
//   const [buyer, setBuyer] = useState(null);

//   useEffect(() => {
//     // auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((buyer) => setBuyer(buyer));
//       }
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <>
//         <NavBar buyer={buyer} setBuyer={setBuyer} />
//         <main>
//           <Routes>
//             {buyer ? (
//               <Route path="/" element={<LandingPg />} />
//             ) : (
//               <>
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/" element={<HomePage />} />
//               </>
//             )}
//           </Routes>
//         </main>
//       </>
//     </BrowserRouter>
//   );
// }

// export default App;


