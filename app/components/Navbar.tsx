"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Logo from "./Logo";
import AboutDropDown from "./AboutDropDown";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const aboutPaths = ["/about", "/people", "/teams", "/info"];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Fundraising", href: "/fundraising" },
  ];

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isAboutActive = aboutPaths.some((href) => isActivePath(href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3 text-white sm:px-5 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-bl-3xl rounded-br-3xl px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? "border-white/10 bg-black/65 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="shrink-0">
            <Logo />
          </div>

          <div className="hidden items-center justify-self-center lg:flex">
            <ul className="flex items-center gap-2  px-3 py-2 text-sm font-heading">
              <li>
                <a
                  href="/"
                  className={`relative inline-flex rounded-full px-4 py-2 transition duration-300 ${
                    isActivePath("/") ? "text-brand-gold" : ""
                  }`}
                >
                  Home
                  <span
                    className={`pointer-events-none absolute -bottom-px left-4 h-0.5 bg-brand-gold transition-all duration-300 ${
                      isActivePath("/") ? "w-[calc(100%-2rem)] opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
              <li>
                <AboutDropDown active={isAboutActive} />
              </li>
              {navItems.slice(1).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative inline-flex rounded-full px-4 py-2 transition duration-300 ${
                      isActivePath(item.href) ? "text-brand-gold" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`pointer-events-none absolute -bottom-[1px] left-4 h-[2px] bg-brand-gold transition-all duration-300 ${
                        isActivePath(item.href) ? "w-[calc(100%-2rem)] opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block lg:justify-self-end">
            <button className="cursor-pointer font-heading  rounded-tl-3xl rounded-br-3xl border border-brand-gold bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-dark transition duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white">
              Contribute
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:border-brand-gold hover:text-brand-gold lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "" : <HiBars3 size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-screen w-[min(22rem,88vw)] flex-col border-l border-white/10 bg-[#111111]/95 p-5 text-white shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <Logo />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full  text-white transition hover:border-brand-gold hover:text-brand-gold"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <HiXMark size={22} />
          </button>
        </div>

        <div className="mt-6 flex-1 overflow-y-auto font-heading">
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="/"
                className={`block rounded-tl-2xl rounded-br-2xl px-4 py-3 transition duration-300 hover:bg-brand-blue hover:text-white ${
                  isActivePath("/") ? "bg-white/8 text-brand-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`block rounded-tl-2xl rounded-br-2xl px-4 py-3 transition duration-300 hover:bg-brand-blue hover:text-white ${
                  isActivePath("/about") ? "bg-white/8 text-brand-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/teams"
                className={`block rounded-tl-2xl rounded-br-2xl px-4 py-3 transition duration-300 hover:bg-brand-blue hover:text-white ${
                  isActivePath("/teams") ? "bg-white/8 text-brand-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="/people"
                className={`block rounded-tl-2xl rounded-br-2xl px-4 py-3 transition duration-300 hover:bg-brand-blue hover:text-white ${
                  isActivePath("/people") ? "bg-white/8 text-brand-gold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                People
              </a>
            </li>
            {navItems.slice(1).map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block rounded-tl-2xl rounded-br-2xl px-4 py-3 transition duration-300 hover:bg-brand-blue hover:text-white ${
                    isActivePath(item.href) ? "bg-brand-blue text-white" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button className="mt-6 w-full cursor-pointer rounded-tl-2xl rounded-br-2xl border border-brand-blue bg-brand-blue px-6 py-3 font-heading font-semibold text-white transition duration-300 hover:bg-transparent hover:text-brand-gold">
          Contribute
        </button>
      </aside>
    </nav>
  );
}

export default Navbar;
