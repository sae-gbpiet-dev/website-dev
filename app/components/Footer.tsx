import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-brand-blue/10 px-6 py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-16">

        {/* Section 1 */}
        <div>
          <h2 className="mb-4 scale-125 origin-left text-2xl font-semibold sm:text-3xl">
            <Logo/>
          </h2>
          <p className="text-gray-400">
            
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-3xl text-white sm:text-4xl">Links</h3>
          <ul className="flex flex-col gap-4 text-2xl text-gray-200 sm:text-3xl">
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
          <h3 className="mb-7 font-heading text-3xl text-white sm:text-4xl">Follow Us</h3>
          <div className="flex gap-6 text-white">
            <a
              href="https://www.instagram.com/saegbpiet?igsi=OHBhcXpzaDFwcHZn"
              target="_blank"
              rel="noreferrer"
              aria-label="SAE GBPIET on Instagram"
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/35 bg-white/10 text-5xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sae-gbpiet-506a86296?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="SAE GBPIET on LinkedIn"
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/35 bg-white/10 text-5xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>

      <div className="h-32" aria-hidden="true" />

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-7 text-center font-heading text-xl text-gray-300 sm:text-2xl">
        © {new Date().getFullYear()} SAE GBPIET. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer