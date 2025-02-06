import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
