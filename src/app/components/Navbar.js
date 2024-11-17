"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-4">
          <img src={`/goquant_logo.png`} className="h-8" />
        </div>

        {/* Center: Menu Items */}
        <div className="hidden md:flex space-x-8">
          <Link href="#orderbook" className="hover:text-gray-300">OrderBook</Link>
          <Link href="#spread" className="hover:text-gray-300">Spread</Link>
          <Link href="#imbalance" className="hover:text-gray-300">Imbalance</Link>
          <Link href="#marketdepth" className="hover:text-gray-300">Market Depth</Link>
          <Link href="#candlestick" className="hover:text-gray-300">Candlestick</Link>
        </div>

        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="#orderbook" className="block py-2 hover:text-gray-300">OrderBook</Link>
          <Link href="#spread" className="block py-2 hover:text-gray-300">Spread</Link>
          <Link href="#imbalance" className="block py-2 hover:text-gray-300">Imbalance</Link>
          <Link href="#marketdepth" className="block py-2 hover:text-gray-300">Market Depth</Link>
          <Link href="#candlestick" className="block py-2 hover:text-gray-300">Candlestick</Link>
        </div>
      )}
    </nav>
  );
}
