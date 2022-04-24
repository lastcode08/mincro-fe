import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

function Header() {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">
          <Link to="/">Fidget Spinners World</Link> |{" "}
          <Link to="/cart">Cart</Link>
        </div>
        <div className="flex-end relative">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
