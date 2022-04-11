import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "../contact-us/ContactUs";
import Ref from "../hooks/ref/Ref";
import Product from "../products/Product";
import Products from "../products/Products";
import Pagination from "../users/pagination/Pagination";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h2>Home Page is working</h2>} />
      <Route path="/Home" element={<Ref />} />
      <Route path="/Users" element={<Pagination />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  );
};
export default Router;
