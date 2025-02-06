import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">
        Fake Store
      </Link>
      <div>
        <Link to="/cart" className="mr-4">
          Cart ({cart.length})
        </Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
