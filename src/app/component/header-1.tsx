"use client"
 import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <main>
      <div className="nav bg-[#003049] w-full">
        {/* Navbar container */}
        <div className="flex justify-center items-center h-[5rem] text-slate-200 font-serif p-4">

          {/* Logo */}
          <Link href="./login">
            <img
              src="https://cdn3.f-cdn.com//files/download/34414730/3D_Logo.png?width=780&height=438&fit=crop"
              alt="Logo"
              className="h-[4rem] w-[10rem] rounded-[2rem] hover:translate-x-4 md:mr-[49rem] mr-[12rem]"
            />
          </Link>

          {/* Hamburger Icon (only visible on small screens) */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-white text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-white text-3xl cursor-pointer" />
            )}
          </div>

          {/* Desktop Navigation Links */}
          <ul className={`flex gap-[2rem] items-center md:flex-row ${isMenuOpen ? 'flex-row absolute bg-[#003049] top-[5rem] left-0 w-full  md:w-auto md:static' : 'hidden md:flex'}`}>
            <Link href="/">
              <li className="hover:underline hover:text-[#d5bdaf] hover:cursor-pointer hover:font-semibold">Home</li>
            </Link>
            <Link href="/about">
              <li className="hover:underline hover:text-[#d5bdaf] hover:cursor-pointer hover:font-semibold">About</li>
            </Link>
            <Link href="/Blog">
              <li className="hover:underline hover:text-[#d5bdaf] hover:cursor-pointer hover:font-semibold">Blog</li>
            </Link>
            <Link href="/contact">
              <li className="hover:underline hover:text-[#d5bdaf] hover:cursor-pointer hover:font-semibold">Contact</li>
            </Link>

            
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Header;
