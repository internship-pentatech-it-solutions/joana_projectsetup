import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center bg-slate-900 text-xl p-6 text-white font-serif">
      <ul className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}
