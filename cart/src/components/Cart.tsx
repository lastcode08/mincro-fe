import React, { useEffect, useState } from "react";
import { jwt, login } from "../api/cart.api";

const Cart = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    login("sally", "123");

    jwt.subscribe((value) => setToken(value ?? ""));

    return () => jwt.unsubscribe();
  }, []);

  return <div>JWT : {token}</div>;
};

export default Cart;
