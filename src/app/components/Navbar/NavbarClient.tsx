"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";

export default function NavbarClient() {
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHomeDropdown = () => setShowHomeDropdown(!showHomeDropdown);
  const closeHomeDropdown = () => setShowHomeDropdown(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (showHomeDropdown || isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showHomeDropdown, isMenuOpen]);

  const links = [
    { href: "/", label: "Home", dropdown: true },
    { href: "/pages", label: "Pages" },
    { href: "/pages/shopList", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/pages/shopLeft", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="ml-4 text-gray-800 hover:text-[#fb2e86]">
              <FiMenu size={24} /> {/* Always show the hamburger icon */}
            </button>
          </SheetTrigger>

          <SheetContent className="pt-16 text-center bg-[#e0e0e2]">
            <SheetTitle className="text-3xl font-bold text-[#0D0E43]">Menu</SheetTitle>
            <SheetDescription>
              <div className="px-4 pb-2 pt-16 text-center space-y-3">
                {links.map((link, index) =>
                  link.dropdown ? (
                    <div key={index} className="relative">
                      <button
                        className="text-gray-500  hover:text-[#fb2e86] hover:scale-110 transition-all duration-300 w-full text-left px-3 py-2 rounded-md text-2xl font-medium flex items-center justify-center gap-1"
                        onClick={toggleHomeDropdown}
                      >
                        {link.label}
                        <FiChevronDown
                          className={`transition-transform ${showHomeDropdown ? "rotate-180" : ""}`}
                        />
                      </button>
                      {showHomeDropdown && (
                        <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#e0e0e2]  text-2xl">
                          <Link
                            href="/"
                            className="block px-4 py-2 text-sm text-[#0D0E43] hover:bg-gray-100 hover:text-[#fb2e86] transition-all duration-300"
                            onClick={() => { closeHomeDropdown(); setIsMenuOpen(false); }} // Close menu and dropdown on click
                          >
                            Home Page
                          </Link>
                          <Link
                            href="/about"
                            className="block px-4 py-2 text-sm text-[#0D0E43] hover:bg-gray-100 hover:text-[#fb2e86] transition-all duration-300"
                            onClick={() => { closeHomeDropdown(); setIsMenuOpen(false); }} // Close menu and dropdown on click
                          >
                            About Us
                          </Link>
                          <Link
                            href="/pages/sign-up"
                            className="block px-4 py-2 text-sm text-[#0D0E43] hover:bg-gray-100 hover:text-[#fb2e86] transition-all duration-300"
                            onClick={() => { closeHomeDropdown(); setIsMenuOpen(false); }} // Close menu and dropdown on click
                          >
                            Sign Up
                          </Link>
                          <Link
                            href="/pages/sign-in"
                            className="block px-4 py-2 text-sm text-[#0D0E43] hover:bg-gray-100 hover:text-[#fb2e86] transition-all duration-300"
                            onClick={() => { closeHomeDropdown(); setIsMenuOpen(false); }} // Close menu and dropdown on click
                          >
                            Sign In
                          </Link>
                          <Link
                            href="/pages/faq"
                            className="block px-4 py-2 text-sm text-[#0D0E43] hover:bg-gray-100 hover:text-[#fb2e86] transition-all duration-300"
                            onClick={() => { closeHomeDropdown(); setIsMenuOpen(false); }} // Close menu and dropdown on click
                          >
                            FAQ
                          </Link>
                          <Link
                            href="/pages/shop-grid-default"
                            className="block px-4 py-2 text-sm text-[#0D0E43] hover:bg-gray-100 hover:text-[#fb2e86] transition-all duration-300"
                            onClick={() => { closeHomeDropdown(); setIsMenuOpen(false); }} // Close menu and dropdown on click
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
                      className="block text-gray-500 hover:text-[#fb2e86] hover:scale-110 transition-all duration-300 px-3 py-2 rounded-md text-2xl font-medium"
                      onClick={() => setIsMenuOpen(false)} // Close menu when any link is clicked
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </SheetDescription>
            <SheetClose asChild>
              <button className="pt-16 text-sm">Close</button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
