'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import NavbarClient from './NavbarClient'; // Assuming NavbarClient is a component you are importing
import { ModeToggle } from "../Theme/ModeToggle";

export default function Navbar() {
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHomeDropdown = () => setShowHomeDropdown(!showHomeDropdown);
  const closeHomeDropdown = () => setShowHomeDropdown(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { href: "/", label: "Home", dropdown: true },
    { href: "/pages", label: "Pages" },
    { href: "/pages/shopList", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/pages/shopLeft", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-[#0F0F0F] dark:text-[#EAEAEA] shadow-md xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="flex justify-between items-center h-16 max-w-[1177px] mx-auto w-full">
        {/* Logo Section */}
        <div className="flex justify-start">
          <Link href="/" className="font-bold text-xl tracking-tight">
            <h1 className="text-[#0D0E43] dark:text-[#EAEAEA] text-2xl font-bold">HEKTO</h1>
          </Link>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden lg:flex items-center space-x-3 ml-auto">
          {links.map((link, index) =>
            link.dropdown ? (
              <div key={index} className="relative">
                <button
                  className="text-[#0D0E43] dark:text-[#EAEAEA] hover:text-[#fb2e86] dark:hover:text-[#fb2e86] px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                  onClick={toggleHomeDropdown}
                >
                  {link.label}
                  <FiChevronDown
                    className={`transition-transform ${showHomeDropdown ? "rotate-180" : ""}`}
                  />
                </button>
                {showHomeDropdown && (
                  <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#e0e0e2] dark:bg-[#121212] ring-1 ring-black ring-opacity-5">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-[#0D0E43] dark:text-[#EAEAEA] hover:bg-gray-100 dark:hover:bg-gray-900"
                      onClick={closeHomeDropdown}
                    >
                      Home Page
                    </Link>
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-[#0D0E43] dark:text-[#EAEAEA] hover:bg-gray-100 dark:hover:bg-gray-900"
                      onClick={closeHomeDropdown}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/pages/sign-up"
                      className="block px-4 py-2 text-sm text-[#0D0E43] dark:text-[#EAEAEA] hover:bg-gray-100 dark:hover:bg-gray-900"
                      onClick={closeHomeDropdown}
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/pages/sign-in"
                      className="block px-4 py-2 text-sm text-[#0D0E43] dark:text-[#EAEAEA] hover:bg-gray-100 dark:hover:bg-gray-900"
                      onClick={closeHomeDropdown}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/pages/faq"
                      className="block px-4 py-2 text-sm text-[#0D0E43] dark:text-[#EAEAEA] hover:bg-gray-100 dark:hover:bg-gray-900"
                      onClick={closeHomeDropdown}
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/pages/shop-grid-default"
                      className="block px-4 py-2 text-sm text-[#0D0E43] dark:text-[#EAEAEA] hover:bg-gray-100 dark:hover:bg-gray-900"
                      onClick={closeHomeDropdown}
                    >
                      Shop Grid Default
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={link.href}
                className="text-gray-500 dark:text-[#EAEAEA] hover:text-[#fb2e86] px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Search and Hamburger Menu */}
        <div className="flex items-center gap-8 ml-auto">
          {/* Search Bar for Larger Screens */}
          <div className="hidden lg:flex relative">
            <input
              type="text"
              className="px-6 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb2e86] text-[#0D0E43] text-base"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-[#fb2e86] text-white px-3 rounded-r-md hover:bg-[#e90b6b] cursor-pointer">
              <FiSearch />
            </div>
          </div>

          {/* Hamburger Menu for Small Screens */}
<ModeToggle />
          <div className="lg:hidden">
            <NavbarClient /> 
          </div>
        </div>
      </div>
    </nav>
  );
}
