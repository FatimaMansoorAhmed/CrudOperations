import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { EditProduct } from "../components/EditProduct";
import { AddProduct } from "../components/AddProduct";
import Header from "../components/Header"; // Import Header
import MainPage from "../components/MainPage";

export const AppRoutes = () => {
  return (
    <Router>
      <Header /> {/* Always render the Header on all pages */}
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
