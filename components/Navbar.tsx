"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Where We Work", href: "/where-we-work" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex items-center justify-between h-[67px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold text-[#1d2130] tracking-tight">ARBI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-[#1d2130] ${
                pathname === link.href ? "text-[#1d2130]" : "text-[#525560]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="hidden lg:flex items-center px-8 py-3 bg-[#1d2130] text-white text-base font-medium rounded hover:bg-[#2d3347] transition-colors"
        >
          Donate
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#1d2130]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#1d2130] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-base font-medium py-2 border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-[#f2c94c] text-[#1d2130] font-medium py-3 rounded"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
