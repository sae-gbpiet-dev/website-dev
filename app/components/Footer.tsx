import React from 'react'
import Logo from './Logo'
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-brand-blue/10 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            <Logo/>
          </h2>
          <p className="text-gray-400">
            
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-heading text-sm mb-3">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer text-xs">Home</li>
            <li className="hover:text-white cursor-pointer text-xs">About</li>
            <li className="hover:text-white cursor-pointer text-xs">Contact</li>
              <li className="hover:text-white cursor-pointer text-xs">ATV</li>
            <li className="hover:text-white cursor-pointer text-xs">UAV</li>
            <li className="hover:text-white cursor-pointer text-xs">News</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <span className="hover:text-white cursor-pointer">
              <FaInstagram/>
            </span>
            <span className="hover:text-white cursor-pointer">
              <FaLinkedin/>
            </span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center font-heading text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SAE GBPIET. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer