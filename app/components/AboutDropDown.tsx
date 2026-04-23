import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

interface AboutDropDownProps {
  onNavigate?: () => void
  active?: boolean
}



function AboutDropDown({ onNavigate, active = false }: AboutDropDownProps) {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="group relative">
      <div
        className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 transition duration-300 ${
          active ? 'text-brand-gold' : ''
        }`}
      >
        <span className="relative cursor-pointer inline-flex items-center">
          About
          <span
            className={`pointer-events-none absolute -bottom-[6px] left-0 h-[2px] bg-brand-gold transition-all duration-300 ${
              active ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </span>

        <IoMdArrowDropdown className="transition-transform duration-300 group-hover:rotate-180" />
      </div>

      <div className="invisible absolute top-full right-0 z-10 mt-3 min-w-[240px] origin-top-right translate-y-2 rounded-tl-4xl rounded-br-4xl  bg-brand-gold opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href="/people"
          className="block px-5 py-3 text-black transition-all duration-300 hover:bg-brand-blue hover:text-white rounded-tl-4xl"
        >
          People
        </a>
        <a
          href="/teams"
          className="block px-5 py-3 text-black transition-all duration-300 hover:bg-brand-blue hover:text-white"
        >
          Teams
        </a>
        <a
          href="/info"
          className="block px-5 py-3 text-black transition-all duration-300 hover:bg-brand-blue hover:text-white rounded-br-4xl"
        >
          Info
        </a>
      </div>
    </div>
  )
}

export default AboutDropDown
