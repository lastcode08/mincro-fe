import React from "react";
import Footer from "home/Footer";
import Header from "home/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "pdp/Product";
import Home from "home/Home";
import Cart from "cart/Cart";

const MainLayout = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default MainLayout;
