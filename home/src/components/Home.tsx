import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products.api";
import { currency } from "../utilities";
import { useLoggedIn } from "cart/useLoggedIn";
import { addToCart } from "cart/cart.api";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const isLoggedIn = useLoggedIn();
  const abortController = new AbortController();

  useEffect(() => {
    getProducts(abortController.signal).then(setProducts);

    return () => abortController.abort();
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`product/${product.id}`}>{product.name}</Link>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {isLoggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add To Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
