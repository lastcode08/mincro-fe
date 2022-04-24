import { jwt } from "cart/cart";
import { addToCart } from "cart/cart.api";
import { createEffect, createSignal, Show } from "solid-js";

export default ({ id }) => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  createEffect(() => {
    jwt.subscribe((value) => setIsLoggedIn(!!jwt));

    return () => {
      jwt.unsubscribe();
    };
  });

  return (
    <Show
      when={isLoggedIn()}
      children={
        <button
          onClick={() => addToCart(id)}
          className="bg-red-900 text-white py-2 rounded-md text-small"
        >
          Add To Cart
        </button>
      }
    />
  );
};
