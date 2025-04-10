"use client";
import Image from "next/image";
import logo from "@/public/assets/vault_flow_icon.png";

import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0B0121] text-[#ECECEC] px-[24px] py-4  ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 ">
          <Image src={logo} alt="Vault Logo" className="h-6 w-6" />
          <span className="font-bold text-2xl">Vaultflow</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="space-x-8">
            <a
              href="#features"
              className="hover:text-gray-300 hover:underline transition delay-150 duration-800 ">
              Features
            </a>
            <a href="#pricing" className="hover:text-gray-300 hover:underline">
              Pricing
            </a>
            <a href="#about" className="hover:text-gray-300 hover:underline">
              About us
            </a>
          </div>
          <div className="ml-6 space-x-4">
            <button className="bg-white text-[#0B0121] cursor-pointer px-4 py-2 rounded-full hover:bg-gray-200 transition">
              Download the app
            </button>
            <button className="border border-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-[#0B0121] transition">
              Talk to an expert
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="hover:text-gray-300 px-4">
              Features
            </a>
            <a href="#pricing" className="hover:text-gray-300 px-4">
              Pricing
            </a>
            <a href="#about" className="hover:text-gray-300 px-4">
              About us
            </a>
            <div className="flex flex-col space-y-3 px-4 pt-2">
              <button className="bg-white text-[#0B081C] font-normal px-4 py-2 rounded-full hover:bg-gray-200 transition w-full">
                Download the app
              </button>
              <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 transition w-full">
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
