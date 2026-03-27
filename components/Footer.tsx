import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#17153B" }} className="text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">ARBI</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Africa Restoring Bridges Initiative — Working towards healed,
              reconciled, and prosperous communities in the DRC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Programs", href: "/programs" },
                { label: "Where We Work", href: "/where-we-work" },
                { label: "Partners", href: "/partners" },
                { label: "Contact", href: "/contact" },
                { label: "Donate", href: "/donate" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/75">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#4845A5]" />
                Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, North Kivu, DRC
              </li>
              <li className="flex items-center gap-3 text-sm text-white/75">
                <Phone size={16} className="shrink-0 text-[#4845A5]" />
                +243-971 944 496
              </li>
              <li className="flex items-center gap-3 text-sm text-white/75">
                <Mail size={16} className="shrink-0 text-[#4845A5]" />
                sewimfuratheo@gmail.com
              </li>
            </ul>
          </div>

          {/* Values */}
          <div>
            <h4 className="text-base font-bold mb-4">Our Values</h4>
            <ul className="space-y-2">
              {[
                "Dedication with excellence",
                "Humanity and compassion",
                "Equality",
                "Unity in diversity",
                "Transparency",
                "Stewardship",
              ].map((v) => (
                <li key={v} className="text-sm text-white/75">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Africa Restoring Bridges Initiative. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
