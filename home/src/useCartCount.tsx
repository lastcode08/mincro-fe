import React, { useEffect, useState } from "react";

import { cart } from "cart/cart";

export const useCartCount = () => {
  const [count, setCount] = useState(cart.cartItems.length);

  useEffect(() => {
    cart.subscribe(({ cartItems }) => setCount(cartItems.length));
  }, []);

  return count;
};
