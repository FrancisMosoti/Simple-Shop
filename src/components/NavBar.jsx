import { useState } from "react";

// const NavBar = ({ cartCount, showAnimation }) => {
//   return (
//     <nav className="fixed top-0 w-full bg-blue-500 text-white flex justify-between items-center ">
//       <div className="p-4">Logo</div>
//       <div className="mr-10">
//         <ul className="flex gap-8">
//           <li>Home</li>
//           <li>Products</li>
//           <li>Cart</li>
//           <li>Login</li>
//           <div className="relative">
//             <span className="text-xl">🛒</span>
//             {cartCount > 0 && (
//               <span
//                 className={`absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 ${
//                   showAnimation ? "animate-bounce" : ""
//                 }`}
//               >
//                 {cartCount}
//               </span>
//             )}
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// };
// Navbar Component
const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Fake Store</h1>
      <div>
        <a href="/cart" className="mr-4">
          Cart
        </a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
