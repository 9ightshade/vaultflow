"use client";
import React, { useState } from "react";
import Image from "next/image";
import codeCollabImg from "@/public/assets/codeCollab.png";
import analyticsIcon from "@/public/assets/analyticsIcon.png";
import creditTokenIcon from "@/public/assets/credittokens.png";
import codeIcon from "@/public/assets/codeIcon.png";

export default function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-[#0B0121] py-16 px-4">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Analytics Dashboard Card */}
          <div
            className="bg-gradient-to-b from-[#BB9BFF26] to-[#0B0121] border border-[#BB9BFF26] rounded-2xl p-8 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-500 cursor-pointer"
            onMouseEnter={() => setHoveredCard("analytics")}
            onMouseLeave={() => setHoveredCard(null)}>
            {/* Icon with animation */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:rotate-6 hover:shadow-md hover:shadow-purple-500/50">
              <Image
                src={analyticsIcon}
                alt="Analytics Icon"
                className={`transition-transform duration-300 ${
                  hoveredCard === "analytics" ? "scale-110" : ""
                }`}
              />
            </div>
            {/* Content */}
            <h3 className="text-white text-2xl font-medium mb-3 transition-colors duration-300 group-hover:text-purple-300">
              Analytics Dashboard
            </h3>
            <p className="text-gray-400 mb-6">
              Our analytics dashboard provides a clear and intuitive interface
              for you to easily analyze your data. From customizable graphs to
              real-time data updates, our dashboard offers everything you need
              to gain valuable insights.
            </p>
            {/* CTA Button with animated underline */}
            <button className="relative text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300 group">
              View dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Digital Credit Tokens Card */}
          <div
            className="bg-gradient-to-b from-[#BB9BFF26] to-[#0B0121] border border-[#BB9BFF26] rounded-2xl p-8 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-500 cursor-pointer"
            onMouseEnter={() => setHoveredCard("tokens")}
            onMouseLeave={() => setHoveredCard(null)}>
            {/* Icon with animation */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:rotate-6 hover:shadow-md hover:shadow-purple-500/50">
              <Image
                src={creditTokenIcon}
                alt="Credit Token Icon"
                className={`w-full transition-transform duration-300 ${
                  hoveredCard === "tokens" ? "scale-110" : ""
                }`}
              />
            </div>
            {/* Content */}
            <h3 className="text-white text-2xl font-medium mb-3 transition-colors duration-300 group-hover:text-purple-300">
              Digital Credit Tokens
            </h3>
            <p className="text-gray-400 mb-6">
              Reward your customers and incentivize engagement with our
              innovative digital credit tokens. Our tokens can be customized to
              suit your branding and are a flexible and scalable way to drive
              customer loyalty and encourage repeat business.
            </p>
            {/* CTA Button with animated underline */}
            <button className="relative text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300 group">
              View tokens
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
        </div>

        {/* Code Collaboration Card - fully responsive */}
        <div
          className="bg-gradient-to-b from-[#BB9BFF26] to-[#0B0121] border border-[#BB9BFF26] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 hover:border-purple-500 cursor-pointer"
          onMouseEnter={() => setHoveredCard("collaboration")}
          onMouseLeave={() => setHoveredCard(null)}>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              {/* Icon with animation */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:rotate-6 hover:shadow-md hover:shadow-purple-500/50">
                <Image
                  src={codeIcon}
                  alt="Code Icon"
                  className={`w-full transition-transform duration-300 ${
                    hoveredCard === "collaboration" ? "scale-110" : ""
                  }`}
                />
              </div>
              {/* Content */}
              <h3 className="text-white text-2xl font-medium mb-3 transition-colors duration-300 group-hover:text-purple-300">
                Code Collaboration
              </h3>
              <p className="text-gray-400 mb-6">
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where
                it&apos;s coming from. Whether you&apos;re integrating data from
                multiple sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and
                ensure that your data is consistent and reliable.
              </p>
              {/* CTA Button with animated underline */}
              <button className="relative text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300 group mb-6 lg:mb-0">
                Explore collaboration
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
            {/* Image with hover animation */}
            <div className="border rounded-3xl border-[#BB9BFF26] overflow-hidden transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/20">
              <div className="transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={codeCollabImg}
                  alt="Code collaboration interface"
                  className="w-full h-auto max-w-full lg:max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
