import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  // Fetch product details if editing
  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
        setProduct(response.data);
      });
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Update product
      axios
        .put(`https://fakestoreapi.com/products/${id}`, product)
        .then(() => navigate("/admin/products"));
    } else {
      // Add new product
      axios
        .post("https://fakestoreapi.com/products", product)
        .then(() => navigate("/admin/products"));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Edit Product" : "Add New Product"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {id ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
