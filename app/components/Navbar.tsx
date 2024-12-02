"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gradient-to-r from-red-600 via-black to-black shadow-xl sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.1 }}
          >
            <Link href="/">
              <Image
                src="/Images/marvel-logo.png"
                alt="Marvel Saga Chronicles Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                width={48}
                height={48}
              />
            </Link>
            <Link href="/">
              <span className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider hidden sm:block">
                Saga Chronicles
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 text-white font-semibold text-lg">
            <Link
              href="#characters"
              className="hover:text-red-400 transition duration-300"
            >
              Characters
            </Link>
            <Link
              href="#comics"
              className="hover:text-red-400 transition duration-300"
            >
              Comics
            </Link>
            <Link
              href="#movies"
              className="hover:text-red-400 transition duration-300"
            >
              Movies
            </Link>
            <Link
              href="#about"
              className="hover:text-red-400 transition duration-300"
            >
              About
            </Link>
          </div>

          {/* Search and Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-44 sm:w-56 rounded-full bg-gray-800 text-white border-none focus:ring-2 focus:ring-red-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                Search
              </button>
            </div>
            {/* Login/Signup Buttons */}
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                Login
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                Signup
              </button>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black text-white space-y-6 px-6 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#characters"
            className="block hover:text-red-400 transition duration-300"
          >
            Characters
          </Link>
          <Link
            href="#comics"
            className="block hover:text-red-400 transition duration-300"
          >
            Comics
          </Link>
          <Link
            href="#movies"
            className="block hover:text-red-400 transition duration-300"
          >
            Movies
          </Link>
          <Link
            href="#about"
            className="block hover:text-red-400 transition duration-300"
          >
            About
          </Link>
          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Signup
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
