import React, { useEffect, useState } from "react";
import { login } from "../api/cart.api";
import { jwt } from "../cart";
import Login from "./Login";
import MiniCart from "./MiniCart";

const Cart = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    jwt.subscribe((value) => setToken(value));

    return () => {
      jwt.unsubscribe();
    };
  }, []);

  return (
    <div>
      <div>JWT : {token}</div>
      {!token && <Login />}
      <MiniCart />
    </div>
  );
};

export default Cart;
