import React, { useRef, useEffect, useState } from "react";

import { getProductById } from "home/products.api";
import { currency } from "home/utilities";
import { useParams } from "react-router-dom";
import placeAddToCart from "addtocart/placeAddToCart";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => setProduct(data));
    } else {
      setProduct(null);
    }
  }, []);

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) return <h1>No Product Found</h1>;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default Product;
