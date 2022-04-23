import "./index.scss";
import "remixicon/fonts/remixicon.css";
import React from "react";
import ReactDOM from "react-dom";

import Cart from "./components/Cart";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <Cart />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
