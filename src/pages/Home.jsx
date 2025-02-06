import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    // Fetch all products
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data); // Initialize filtered products
    });

    // Fetch featured products (e.g., first 3 products)
    axios.get("https://fakestoreapi.com/products?limit=3").then((response) => {
      setFeaturedProducts(response.data);
    });

    // Mock offers/deals
    setOffers([
      {
        id: 1,
        title: "Summer Sale",
        description: "Get up to 50% off on selected items!",
        image: "https://placehold.co/600x200/FF5733/FFF?text=Summer+Sale",
      },
      {
        id: 2,
        title: "Free Shipping",
        description: "Enjoy free shipping on orders over $50!",
        image: "https://placehold.co/600x200/33FF57/000?text=Free+Shipping",
      },
    ]);
  }, []);

  // Handle sorting
  const handleSort = (option) => {
    setSortOption(option);
    let sortedProducts = [...filteredProducts];

    if (option === "priceLowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "priceHighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  // Handle filtering by category
  const handleFilter = (category) => {
    setFilterCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // Get unique categories for the filter dropdown
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="p-6">
      {/* Promotional Banner Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Offers/Deals Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Current Offers & Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="border p-4 rounded-lg shadow-md relative"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold">{offer.title}</h3>
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Listing Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">All Products</h2>

        {/* Sorting and Filtering Options */}
        <div className="flex flex-wrap gap-4 mb-4">
          {/* Sorting Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="default">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>

          {/* Filtering Dropdown */}
          <select
            value={filterCategory}
            onChange={(e) => handleFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
