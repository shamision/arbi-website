"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  "/7.jpg",
  "/1.jpg",
  "/3.jpg",
  "/6.jpg",
  "/11.jpg",
  "/13.jpg",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent((c) => (c + 1) % slides.length);
      setTimeout(() => {
        setPrev(null);
        setFading(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative min-h-[735px] flex flex-col justify-center overflow-hidden">
      {/* Previous slide (fading out) */}
      {prev !== null && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${slides[prev]}')`,
            opacity: fading ? 0 : 1,
          }}
        />
      )}
      {/* Current slide */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${slides[current]}')`,
          opacity: fading ? 1 : 1,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-24 z-10">
        <h1 className="text-5xl lg:text-[64px] font-bold text-white leading-tight max-w-[640px] mb-6">
          Touching Hearts<br />Transforming Nations
        </h1>
        <p className="text-white/80 text-xl mb-4 max-w-xl">
          Impacting Hearts — Heads — Hands
        </p>
        <blockquote className="text-white/60 text-sm italic max-w-lg mb-8 leading-relaxed">
          &ldquo;You will be called Repairer of Broken Walls, Restorer of Streets
          with Dwellings.&rdquo; — Isaiah 58:12
        </blockquote>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/programs"
            className="flex items-center gap-2 px-8 py-4 bg-[#2D2A7A] text-white font-medium rounded hover:bg-[#1E1B5C] transition-colors"
          >
            Our Programs <ArrowRight size={18} />
          </Link>
          <Link
            href="/donate"
            className="flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-medium rounded hover:bg-white/30 transition-colors border border-white/30"
          >
            Donate Now
          </Link>
        </div>
        <div className="mt-16 flex flex-wrap gap-8 border-t border-white/20 pt-8">
          <span className="text-white font-medium">3,950+ People Empowered</span>
          <span className="text-white/40 hidden sm:block">|</span>
          <span className="text-white font-medium">4+ Regions in North Kivu</span>
          <span className="text-white/40 hidden sm:block">|</span>
          <span className="text-white font-medium">6+ Partner Organizations</span>
        </div>
      </div>
    </section>
  );
}
