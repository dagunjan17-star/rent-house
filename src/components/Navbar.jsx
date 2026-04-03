"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* LOGO */}
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className="text-xl sm:text-2xl font-bold tracking-wide text-[#78C841] hover:text-[#5fae2e] transition"
            >
              DA
            </Link>

            {/* ================= DESKTOP LINKS ================= */}
            <div className="hidden md:flex items-center gap-8">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="px-3 py-2 rounded-lg text-gray-700 font-medium transition hover:bg-[#78C841] hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#78C841]"
            >
              {isOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed top-[72px] left-0 w-full z-40 md:hidden bg-white shadow-xl border-t border-gray-200">
          <div className="flex flex-col gap-5 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-[#78C841]"
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;