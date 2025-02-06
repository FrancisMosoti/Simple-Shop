import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
