"use client";
import React, { useState } from "react";

export default function AnalyticsCTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#0B0121] py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div
          className="bg-gradient-to-b from-[#BB9BFF26] to-[#0B0121] border border-[#BB9BFF26] rounded-3xl p-10 md:p-16 text-center transition-all duration-500 transform hover:shadow-xl hover:shadow-purple-900/20 hover:border-purple-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <h2
            className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-transform duration-500 ${
              isHovered ? "transform translate-y-[-5px]" : ""
            }`}>
            Our powerful analytics
            <br className="hidden md:block" />
            <span className="text-white bg-clip-text">
              {" "}
              provides invaluable insights.
            </span>
          </h2>

          <p
            className={`text-gray-400 text-sm md:text-base font-normal mb-10 max-w-2xl mx-auto transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-80"
            }`}>
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.
          </p>

          <div className="flex justify-center">
            <button className="relative overflow-hidden bg-transparent border border-white text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 group hover:bg-white hover:text-gray-900 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Download the app
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "transform translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div
              className={`absolute w-40 h-40 rounded-full bg-purple-600/5 top-0 left-0 blur-2xl transition-all duration-1000 ${
                isHovered ? "scale-150 opacity-100" : "scale-100 opacity-50"
              }`}></div>
            <div
              className={`absolute w-40 h-40 rounded-full bg-purple-600/5 bottom-0 right-0 blur-2xl transition-all duration-1000 ${
                isHovered ? "scale-150 opacity-100" : "scale-100 opacity-50"
              }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
