import { useState } from "react";

const Home = ({ setCartCount, cartCount, setShowAnimation }) => {
  const [sortOption, setSortOption] = useState("price");
  const [cart, setCart] = useState([]); // Cart state

  // Dummy data for products and testimonials
  const products = [
    {
      id: 1,
      name: "Maize",
      price: "20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Banana",
      price: "30",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Flowers",
      price: "25",
      image: "https://via.placeholder.com/150",
    },
  ];

  const testimonials = [
    { id: 1, name: "John Doe", review: "Great products!", rating: 5 },
    { id: 2, name: "Jane Smith", review: "Excellent service!", rating: 4 },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price; // Sort by price (ascending)
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name); // Sort by name (alphabetical)
    }
    return 0;
  });

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
    setCartCount(cartCount + 1); // Update cart count
    setShowAnimation(true); // Trigger animation
    setTimeout(() => setShowAnimation(false), 500); // Reset animation after 500ms
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId); // Remove product from cart
    setCart(updatedCart);
    setCartCount(cartCount - 1); // Update cart count
  };

  return (
    <>
      {/* Promotional Banner */}
      <section className="bg-gray-100 p-16 text-center">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="text-gray-600">Check out our latest offers!</p>
        <div className="mt-4 flex justify-center space-x-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 1"
              className="mx-auto"
            />
            <p className="font-bold">Product 1</p>
            <p className="text-blue-600">$20</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 2"
              className="mx-auto"
            />
            <p className="font-bold">Product 2</p>
            <p className="text-blue-600">$30</p>
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Products</h2>
          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <p className="font-bold mt-2">{product.name}</p>
              <p className="text-blue-600">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
              >
                Add to Cart
              </button>
              {cart.some((item) => item.id === product.id) && (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-2 bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-700"
                >
                  Remove from Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <p className="text-gray-600">{testimonial.review}</p>
              <p className="font-bold mt-2">{testimonial.name}</p>
              <div className="flex mt-1">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
