import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch all products
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  // Handle delete product
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`https://fakestoreapi.com/products/${id}`).then(() => {
        setProducts(products.filter((product) => product.id !== id));
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Management</h2>

      {/* Add New Product Button */}
      <button
        onClick={() => navigate("/admin/products/new")}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Add New Product
      </button>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
