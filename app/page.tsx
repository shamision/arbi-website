import Link from "next/link";
import { ArrowRight, Heart, Users, Globe, Shield, BookOpen, Leaf } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";

const programs = [
  {
    icon: <Heart size={28} className="text-[#1d2130]" />,
    title: "Healing, Peace-Building & Reconciliation",
    desc: "Facilitating genuine healing through Mental Health and Psycho-social Support projects, empowering influential leaders and community members.",
  },
  {
    icon: <Shield size={28} className="text-[#1d2130]" />,
    title: "Abundant Leadership Development",
    desc: "Equipping communities with servant leaders who promote unity, innovate economic opportunities, and fight corruption.",
  },
  {
    icon: <Leaf size={28} className="text-[#1d2130]" />,
    title: "Integral Community Development",
    desc: "Empowering community members as assets and resources of their own communities through holistic development approaches.",
  },
  {
    icon: <BookOpen size={28} className="text-[#1d2130]" />,
    title: "Promoting Resilience Among Youth",
    desc: "Preventing delinquency, addressing substance abuse, and creating reintegration pathways for vulnerable young people.",
  },
];

const stats = [
  { value: "3,950+", label: "People Empowered" },
  { value: "2M+", label: "People Impacted" },
  { value: "4+", label: "Areas Reached" },
  { value: "6+", label: "Partner Organizations" },
  { value: "2011", label: "Year Founded" },
];

const partners = ["CPA", "IICBS", "Rucher", "MICAH", "PDD"];

export default function HomePage() {
  return (
    <main className="pt-[67px]">
      {/* HERO */}
      <section
        className="relative min-h-[735px] flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-24">
          <h1 className="text-5xl lg:text-[64px] font-bold text-white leading-tight max-w-[640px] mb-6">
            Touching Hearts<br />Transforming Nations
          </h1>
          <p className="text-white/80 text-xl mb-4 max-w-xl">
            Impacting Hearts — Heads — Hands
          </p>
          <blockquote className="text-white/60 text-sm italic max-w-lg mb-8 leading-relaxed">
            "You will be called Repairer of Broken Walls, Restorer of Streets
            with Dwellings." — Isaiah 58:12
          </blockquote>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="flex items-center gap-2 px-8 py-4 bg-[#f2c94c] text-[#1d2130] font-medium rounded hover:bg-[#e0b83c] transition-colors"
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

      {/* MISSION & VISION */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Who We Are" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight mb-6 max-w-[560px]">
                Restoring bridges within and between communities
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#1d2130] mb-2">Our Vision</h3>
                  <p className="text-[#525560] leading-relaxed">
                    To see healed, reconciled, and prosperous communities living
                    in peace in the DRC and other regions of Africa affected
                    through violence.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d2130] mb-2">Our Mission</h3>
                  <p className="text-[#525560] leading-relaxed">
                    To rebuild bridges within and between affected communities
                    through integral community-based approaches fostering
                    inclusive cooperation, capacity building for sustainable
                    healing, peace building, and development.
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#f2c94c] text-[#1d2130] font-medium rounded hover:bg-[#e0b83c] transition-colors"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div
              className="w-full aspect-[4/5] rounded-[20px] overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24" style={{ backgroundColor: "#fcedc6" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <SectionLabel text="What We Do" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight mb-4">
                Four programs transforming communities
              </h2>
              <p className="text-[#525560] leading-relaxed">
                Since 2011, ARBI has run comprehensive initiatives designed to
                heal, empower, and transform communities across North Kivu, DRC.
              </p>
              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#1d2130] text-white font-medium rounded hover:bg-[#2d3347] transition-colors"
              >
                View All Programs <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              {programs.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-7 border-b border-[#1d2130]/10"
                >
                  <div className="mt-1 shrink-0 p-2 bg-white rounded-lg">{p.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1d2130] mb-1">{p.title}</h3>
                    <p className="text-[#525560] text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight mb-6">
                Our impact across North Kivu
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Since our founding in 2011, we have worked tirelessly to bring
                healing and peace to communities torn apart by violence in
                Eastern DRC.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-bold text-[#f2c94c] mb-2">{s.value}</div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK TEASER */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <SectionLabel text="Our Reach" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight max-w-xl mx-auto">
              Making a difference across Northern Kivu
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Goma", role: "Headquarters & main operational center" },
              { city: "Rutshuru", role: "Community development & peace-building" },
              { city: "Masisi", role: "Psychosocial support & advocacy" },
              { city: "Walikale", role: "Environmental protection & community health" },
              { city: "Beni", role: "Relief operations & community empowerment" },
            ].map((loc) => (
              <div
                key={loc.city}
                className="flex items-start gap-4 p-6 rounded-[20px] bg-[#fcedc6]"
              >
                <Globe size={22} className="text-[#1d2130] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1d2130] text-lg">{loc.city}</div>
                  <div className="text-[#525560] text-sm mt-1">{loc.role}</div>
                </div>
              </div>
            ))}
            <Link
              href="/where-we-work"
              className="flex items-center justify-center gap-2 p-6 rounded-[20px] border-2 border-dashed border-[#1d2130]/30 text-[#1d2130] font-medium hover:bg-[#fcedc6] transition-colors"
            >
              View All Locations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />

      {/* PARTNERS */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <span className="text-sm font-medium tracking-[2px] text-[#525560] uppercase whitespace-nowrap">
              Our Partners
            </span>
            <div className="w-full h-px bg-[#e5e5e5] hidden sm:block" />
            <div className="flex flex-wrap justify-center sm:justify-end gap-10">
              {partners.map((p) => (
                <span key={p} className="text-lg font-bold text-[#1d2130]/60 tracking-wide">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
