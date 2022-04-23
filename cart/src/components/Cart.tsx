import React, { useEffect, useState } from "react";
import { jwt } from "../cart";
import { useLoggedIn } from "../hooks/useLoggedIn";

import Login from "./Login";
import MiniCart from "./MiniCart";

const Cart = () => {
  const isLoggedIn = useLoggedIn();

  const [token, setToken] = useState("");

  useEffect(() => {
    jwt.subscribe((value) => setToken(value));

    return () => {
      jwt.unsubscribe();
    };
  }, []);

  return (
    <div>
      <div>JWT : {isLoggedIn ? "False" : "True"}</div>
    </div>
  );
};

export default Cart;
