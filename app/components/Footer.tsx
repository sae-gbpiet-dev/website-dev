import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-brand-blue/10 px-6 py-12 text-white sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-12">

        {/* Section 1 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold">
            <Logo/>
          </h2>
          <p className="text-gray-400">
            
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="mb-4 font-heading text-base text-white sm:text-lg">Links</h3>
          <ul className="space-y-2.5 text-sm text-gray-300 sm:text-base">
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/">Home</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/info">About</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/people">People</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/teams">Teams</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/teams/atv">ATV</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/teams/uav">UAV</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/teams/media">Media</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/news">News</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/sponsors">Sponsors</Link>
            </li>
            <li className="transition-colors hover:text-brand-gold">
              <Link href="/fundraising">Fundraisers</Link>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="mb-4 font-heading text-base text-white sm:text-lg">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a
              href="https://www.instagram.com/saegbpiet?igsi=OHBhcXpzaDFwcHZn"
              target="_blank"
              rel="noreferrer"
              aria-label="SAE GBPIET on Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sae-gbpiet-506a86296?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="SAE GBPIET on LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center font-heading text-sm text-gray-400">
        © {new Date().getFullYear()} SAE GBPIET. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer