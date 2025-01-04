'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import ShoppingCartButton from './shoppingCartButton';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/shop1.webp"
            width={40}
            height={40}
            alt="Logo"
            className="object-contain"
          />
          
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            Contact
          </Link>

          {/* Cart Icon */}
          <ShoppingCartButton />
        </nav>

        {/* Cart Button and Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Cart Button */}
          <ShoppingCartButton />

          {/* Mobile Menu Button */}
          <button
            className="text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 h-screen w-3/4 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="text-gray-700 mb-6"
            aria-label="Close Menu"
          >
            <HiOutlineX size={28} />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
