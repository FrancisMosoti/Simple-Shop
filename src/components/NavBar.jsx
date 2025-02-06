import { useState } from "react";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 w-full bg-blue-500 text-white flex justify-between items-center ">
      <div className="p-4">Logo</div>
      <div className="mr-10">
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>Login</li>
          <div className="relative">
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
