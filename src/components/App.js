import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import LandingPg from './components/LandingPg';
import Delete from './components/Admin/Delete';



function App() {
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
        <Route path="/Cart"element={<Cart />} />
        <Route path="/SignUp"element={<SignUp />} />
        <Route path="/Admin"element={<Admin />} />
        
        
      {/* <Route  path="/delete" element={<Delete/>} /> */}
    

    <Routes>
      <Route path="/" element={<LandingPg />}>
      <Route  path="/delete" element={<Delete/>} />
        
      
      
        
      </Route>
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
