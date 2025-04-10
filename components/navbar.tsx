"use client";
import Image from "next/image";
import logo from "@/public/assets/vault_flow_icon.png";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`sticky top-0 z-50 bg-[#0B0121] text-[#ECECEC] px-4 sm:px-6 py-4 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-purple-900/10 backdrop-blur-md bg-[#0B0121]/90' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-lg transition-all duration-300 transform group-hover:scale-110">
            <Image 
              src={logo} 
              alt="Vault Logo" 
              className="h-6 w-6 transition-transform duration-500 transform group-hover:rotate-12" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold text-2xl transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300">
            Vaultflow
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="space-x-8">
            {['features', 'pricing', 'about'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative py-2 group"
                onMouseEnter={() => setActiveItem(item)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                  activeItem === item ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>
          <div className="ml-6 space-x-4">
            <button className="relative overflow-hidden bg-white text-[#0B0121] cursor-pointer px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md hover:shadow-purple-500/30 transform hover:scale-105">
              <span className="relative z-10">Download the app</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="relative overflow-hidden border border-white px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 transform hover:scale-105 group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0B0121]">Talk to an expert</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu button with animation */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex items-center justify-center focus:outline-none text-white rounded-lg overflow-hidden"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-white/0 transition-colors duration-300 hover:bg-white/10 rounded-lg"></div>
            <div className="relative">
              <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation with animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4 pt-4 pb-6">
          {['features', 'pricing', 'about'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className={`px-4 py-2 hover:bg-white/5 rounded-lg transition-all duration-300 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <div className="flex flex-col space-y-3 px-4 pt-2">
            <button 
              className={`bg-white text-[#0B081C] font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 w-full transform hover:scale-105 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Download the app
            </button>
            <button 
              className={`border border-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 w-full transform hover:scale-105 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}