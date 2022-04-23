import Footer from "home/Footer";
import Header from "home/Header";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import "./index.scss";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
