import React, { useEffect, useState } from "react";
import { login } from "../api/cart.api";
import { jwt } from "../cart";
import Login from "./Login";

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
      <Login />
    </div>
  );
};

export default Cart;
