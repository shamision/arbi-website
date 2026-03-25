import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

const partners = [
  {
    name: "CPA",
    fullName: "Community Partners Alliance",
    desc: "Supporting community development and peace-building across North Kivu.",
  },
  {
    name: "IICBS",
    fullName: "International Institute for Community-Based Support",
    desc: "Providing expertise in psychosocial support and conflict transformation.",
  },
  {
    name: "Rucher",
    fullName: "Rucher Organization",
    desc: "Collaborating on economic empowerment and livelihoods programs.",
  },
  {
    name: "MICAH",
    fullName: "MICAH Global Network",
    desc: "Faith-based partner advancing integral mission and holistic development.",
  },
  {
    name: "PDD",
    fullName: "Program for Durable Development",
    desc: "Working together on sustainable development and environmental initiatives.",
  },
];

export default function PartnersPage() {
  return (
    <main className="pt-[67px]">
      {/* HERO */}
      <section
        className="relative min-h-[400px] flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20">
          <SectionLabel text="Collaboration" />
          <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
            Touching Hearts Transforming Nations
          </h1>
          <p className="text-white/75 text-xl max-w-xl">
            Alone, we go faster. Together, we go further.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Our Partners" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight mb-6">
                Building a network of change-makers
              </h2>
              <p className="text-[#525560] leading-relaxed mb-4">
                ARBI works with a diverse network of local and international
                partner organizations who share our vision for healed,
                reconciled, and prosperous communities.
              </p>
              <p className="text-[#525560] leading-relaxed">
                Our partnerships strengthen our capacity to reach more
                communities and deliver more effective programs across Northern
                Kivu.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {partners.slice(0, 4).map((p) => (
                <div
                  key={p.name}
                  className="aspect-square flex items-center justify-center bg-[#fcedc6] rounded-[20px]"
                >
                  <span className="text-2xl font-bold text-[#1d2130]/70 tracking-widest">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER CARDS */}
      <section className="py-24" style={{ backgroundColor: "#fcedc6" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <SectionLabel text="All Partners" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight max-w-xl mx-auto">
              Our partner organizations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white p-8 rounded-[20px] hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#fcedc6] rounded-lg">
                    <Handshake size={20} className="text-[#1d2130]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#1d2130]">{p.name}</div>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#f2c94c] mb-3">{p.fullName}</p>
                <p className="text-[#525560] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BECOME A PARTNER */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
          <SectionLabel text="Join Us" center />
          <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight max-w-xl mx-auto mt-2 mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-[#525560] text-lg max-w-xl mx-auto mb-10">
            Join us in our mission to transform communities in the DRC. Whether
            you are an NGO, faith organization, or institution, we welcome
            collaboration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1d2130] text-white font-medium rounded hover:bg-[#2d3347] transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
