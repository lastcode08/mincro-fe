import { jwt } from "cart/cart";
import { addToCart } from "cart/cart.api";
import { createEffect, createSignal, Show } from "solid-js";

export default ({ id }) => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  createEffect(() => {
    jwt.subscribe((value) => {
      setIsLoggedIn(!!value);
    });

    return () => {
      jwt.unsubscribe();
    };
  });

  return (
    <Show when={isLoggedIn()}>
      <button
        onClick={() => addToCart(id)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
      >
        Add To Cart
      </button>
    </Show>
  );
};
