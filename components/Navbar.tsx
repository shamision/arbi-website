"use client";

import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo ARBI PNG.png"
            alt="ARBI Logo"
            width={120}
            height={48}
            className="object-contain h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-[#17153B] ${
                pathname === link.href ? "text-[#17153B]" : "text-[#525560]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="hidden lg:flex items-center px-8 py-3 bg-[#4845A5] text-white text-base font-medium rounded hover:bg-[#3838A0] transition-colors"
        >
          Donate
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#17153B]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#17153B] px-4 py-6 flex flex-col gap-4">
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
            className="mt-2 text-center bg-[#2D2A7A] text-white font-medium py-3 rounded"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
