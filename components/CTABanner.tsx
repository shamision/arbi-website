import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div
          className="relative rounded-[20px] overflow-hidden min-h-[384px] flex items-center justify-center text-center px-8 py-16"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-[805px] mx-auto mb-8">
              You can help us rebuild bridges and restore hope in the DRC
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="flex items-center gap-2 px-8 py-4 bg-[#f2c94c] text-[#1d2130] font-medium rounded hover:bg-[#e0b83c] transition-colors"
              >
                Donate Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#1d2130] font-medium rounded hover:bg-white/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
