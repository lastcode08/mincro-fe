import React, { useEffect, useState } from "react";
import { clearCart } from "../api/cart.api";
import { cart } from "../cart";

import { currency } from "home/utilities";

const MiniCart = () => {
  const [state, setState] = useState({
    items: [],
    showCart: false,
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      items: cart.value?.cartItems,
    }));

    cart.subscribe((c) =>
      setState((prev) => ({ ...prev, items: c?.cartItems }))
    );

    return () => {
      cart.unsubscribe();
    };
  }, []);

  if (!state.items || state.items?.length < 1)
    return <h1>No Cart Item Found</h1>;

  return (
    <>
      <span
        onClick={() =>
          setState((prev) => ({ ...prev, showCart: !prev.showCart }))
        }
        id="showcart_span"
      >
        <i className="ri-shopping-cart-2-fill text-2xl" id="showCart"></i>
        {state.items.length}
      </span>

      {state.showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white"
            style={{
              width: 300,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{ gridTemplateColumns: "1fr 3fr 10fr 2fr" }}
            >
              {state.items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} className="max-h-6" />
                  <div>{item.name}</div>
                  <div className="text-right">
                    {currency.format(item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div className="font-bold text-xl">
                {currency.format(
                  state.items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <button
                  id="clearcart"
                  className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button
                  className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
                  onClick={clearCart}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MiniCart;