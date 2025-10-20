"use client"
import React, { useState } from "react";
import MessageButton from "./MessageButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff0c] backdrop-blur-md text-white p-4 rounded-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <svg
            className="h-8 w-8 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="font-semibold text-xl">SAYM ISLAM</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#skills" className="hover:text-gray-300 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>

        {/* Message Button (always visible) */}
        <div className="hidden md:block">
          <MessageButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close icon
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-black/50 backdrop-blur-md rounded-lg p-4 space-y-3 text-center">
          <a
            href="#about"
            className="block hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* Show MessageButton in mobile menu */}
          <div className="flex justify-center">
            <MessageButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
