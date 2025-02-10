import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { EditProduct } from "../components/EditProduct";
import { AddProduct } from "../components/AddProduct";
import Header from "../components/Header"; 
import MainPage from "../components/MainPage";
import { SignUp } from "../Firebase/SignUp";
import { Login } from "../Firebase/Login";



export const AppRoutes = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/Signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
