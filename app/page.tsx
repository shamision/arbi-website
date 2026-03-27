import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import HeroSlideshow from "@/components/HeroSlideshow";


const programs = [
  {
    title: "Healing, Peace-Building & Reconciliation",
    desc: "Facilitating genuine healing through Mental Health and Psycho-social Support projects, empowering influential leaders and community members.",
  },
  {
    title: "Abundant Leadership Development",
    desc: "Equipping communities with servant leaders who promote unity, innovate economic opportunities, and fight corruption.",
  },
  {
    title: "Integral Community Development",
    desc: "Empowering community members as assets and resources of their own communities through holistic development approaches.",
  },
  {
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
      {/* HERO SLIDESHOW */}
      <HeroSlideshow />

      {/* MISSION & VISION */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Who We Are" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight mb-6 max-w-[560px]">
                Restoring bridges within and between communities
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#17153B] mb-2">Our Vision</h3>
                  <p className="text-[#525560] leading-relaxed">
                    To see healed, reconciled, and prosperous communities living
                    in peace in the DRC and other regions of Africa affected
                    through violence.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#17153B] mb-2">Our Mission</h3>
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
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#2D2A7A] text-white font-medium rounded hover:bg-[#1E1B5C] transition-colors"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div
              className="w-full aspect-[4/5] overflow-hidden"
              style={{
                backgroundImage:
                  "url('/5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24" style={{ backgroundColor: "#C4B5D9" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <SectionLabel text="What We Do" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight mb-4">
                Four programs transforming communities
              </h2>
              <p className="text-[#525560] leading-relaxed">
                Since 2011, ARBI has run comprehensive initiatives designed to
                heal, empower, and transform communities across North Kivu, DRC.
              </p>
              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#17153B] text-white font-medium rounded hover:bg-[#2d3347] transition-colors"
              >
                View All Programs <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              {programs.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-7 border-b border-[#17153B]/10"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#17153B] mb-1">{p.title}</h3>
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
                  <div className="text-4xl font-bold text-[#4845A5] mb-2">{s.value}</div>
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
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight max-w-xl mx-auto">
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
                className="p-6 rounded-[20px] bg-[#C4B5D9]"
              >
                <div>
                  <div className="font-bold text-[#17153B] text-lg">{loc.city}</div>
                  <div className="text-[#525560] text-sm mt-1">{loc.role}</div>
                </div>
              </div>
            ))}
            <Link
              href="/where-we-work"
              className="flex items-center justify-center gap-2 p-6 rounded-[20px] border-2 border-dashed border-[#17153B]/30 text-[#17153B] font-medium hover:bg-[#C4B5D9] transition-colors"
            >
              View All Locations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-24 bg-[#17153B]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <SectionLabel text="Our Story" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-2xl mx-auto mt-2">
              See our work in action
            </h2>
          </div>
          <div className="relative w-full aspect-video rounded-[20px] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/z80TfW6Uq9g"
              title="ARBI — See our work in action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

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
                <span key={p} className="text-lg font-bold text-[#17153B]/60 tracking-wide">
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
