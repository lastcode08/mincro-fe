import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products.api";
import { currency } from "../../utilities";
import { useLoggedIn } from "cart/useLoggedIn";
import { addToCart } from "cart/cart.api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const isLoggedIn = useLoggedIn();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a href="">{product.name}</a>
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

export default Products;
