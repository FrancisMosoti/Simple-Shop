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
    image: null, // Store the file object
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(""); // For image preview

  // Fetch product details if editing
  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
        setProduct({
          ...response.data,
          image: null, // Reset image file when editing
        });
        setPreviewImage(response.data.image); // Set preview image from URL
      });
    }
  }, [id]);

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setPreviewImage(URL.createObjectURL(file)); // Set preview image
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!product.title.trim()) {
      newErrors.title = "Title is required.";
    }

    // Price validation
    if (!product.price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(product.price) || product.price <= 0) {
      newErrors.price = "Price must be a positive number.";
    }

    // Description validation
    if (!product.description.trim()) {
      newErrors.description = "Description is required.";
    }

    // Image validation
    if (!product.image && !previewImage) {
      newErrors.image = "Image is required.";
    }

    // Category validation
    if (!product.category.trim()) {
      newErrors.category = "Category is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("category", product.category);
      if (product.image) {
        formData.append("image", product.image); // Append the image file
      }

      if (id) {
        // Update product
        axios
          .put(`https://fakestoreapi.com/products/${id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => navigate("/admin/products"));
      } else {
        // Add new product
        axios
          .post("https://fakestoreapi.com/products", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => navigate("/admin/products"));
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Edit Product" : "Add New Product"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className={`w-full px-4 py-2 border rounded ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Price Field */}
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className={`w-full px-4 py-2 border rounded ${
              errors.price ? "border-red-500" : ""
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded ${
              errors.description ? "border-red-500" : ""
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Image Field */}
        <div>
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.image ? "border-red-500" : ""
            }`}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
          {/* Image Preview */}
          {previewImage && (
            <div className="mt-4">
              <img
                src={previewImage}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>

        {/* Category Field */}
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded ${
              errors.category ? "border-red-500" : ""
            }`}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        {/* Submit Button */}
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
