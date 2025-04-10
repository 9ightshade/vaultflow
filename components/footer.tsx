import React from "react";
import logo from "@/public/assets/vault_flow_icon.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#0B0121] text-gray-400 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                Work inquiries:{" "}
                <a
                  href="mailto:work@vaultflow.com"
                  className="hover:text-white transition">
                  work@vaultflow.com
                </a>
              </li>
              <li>
                PR and speaking:{" "}
                <a
                  href="mailto:press@vaultflow.com"
                  className="hover:text-white transition">
                  press@vaultflow.com
                </a>
              </li>
              <li>
                New business:{" "}
                <a
                  href="mailto:newbusiness@vaultflow.com"
                  className="hover:text-white transition">
                  newbusiness@vaultflow.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Address</h3>
            <p>398 11th Street, Floor 2</p>
            <p>San Francisco, CA 94103</p>

            <h3 className="text-white text-lg font-medium mt-8 mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Careers Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Careers</h3>
            <a
              href="mailto:careers@vaultflow.com"
              className="hover:text-white transition">
              Careers@vaultflow.com
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-sm mb-4 md:mb-0">
            © 2024 Vaultflow. All Rights Reserved.
          </p>

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt=""
              className="inline-block h-5 w-5 bg-white rounded mr-2"
            />
            <span className="text-white font-medium">Vaultflow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
