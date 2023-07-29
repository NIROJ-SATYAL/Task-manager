"use client"
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-black flex items-center sticky top-0 overflow-hidden">
      <div className="w-full md:w-[90%] mx-auto my-auto flex justify-between items-center">
        <div className="brand">
          <h1 className="text-bold text-white text-3xl">
            <Link href="/" target="_blank" rel="noopener noreferrer">
              work manager
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4 cursor-pointer text-white">
            <li>

            <Link href="/">Home</Link >
            </li>
            <li>

            <Link href="/task" >Task</Link >
            </li>
            <li>

            <Link href="/add_task"  >Add Task</Link >
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4 cursor-pointer text-white">
            <li>

            <Link href="/login" >Login</Link >
            </li>
            <li>

            <Link  href="/signup">Sign Up</Link >
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
          data-collapse-toggle="navbar-default"
            type="button"
            className="text-white text-xl px-3 py-2"
            // You can implement a function to handle the mobile menu toggle
            // For simplicity, I'll just display a simple text when the button is clicked
            onClick={() => alert("Mobile Menu Clicked")}
          >
            &#9776;
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
