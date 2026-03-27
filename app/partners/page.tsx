import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "CPA",
    fullName: "Community Partners Alliance",
    logo: "/cpa.jpeg",
    desc: "Supporting community development and peace-building across North Kivu.",
  },
  {
    name: "IICBS",
    fullName: "International Institute for Community-Based Support",
    logo: "/LogoDiapositive.svg",
    desc: "Providing expertise in psychosocial support and conflict transformation.",
  },
  {
    name: "Rucher",
    fullName: "Rucher Organization",
    logo: "/rucher.png",
    desc: "Collaborating on economic empowerment and livelihoods programs.",
  },
  {
    name: "MICAH",
    fullName: "MICAH Global Network",
    logo: "/micah.jpg",
    desc: "Faith-based partner advancing integral mission and holistic development.",
  },
  {
    name: "PDD",
    fullName: "Program for Durable Development",
    logo: "/pdd.jpeg",
    desc: "Working together on sustainable development and environmental initiatives.",
  },
  {
    name: "Prison Fellowship",
    fullName: "Prison Fellowship",
    logo: "/prisonfellowship.png",
    desc: "Partnering on reconciliation and reintegration programs for ex-combatants.",
  },
  {
    name: "Way of Peace",
    fullName: "Way of Peace",
    logo: "/wayofpeace.webp",
    desc: "Collaborating on peace education and community healing initiatives.",
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
            "url('/3.jpg')",
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
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight mb-6">
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
                  className="aspect-square flex items-center justify-center bg-white rounded-[20px] border border-[#e5e5e5] p-6"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER CARDS */}
      <section className="py-24" style={{ backgroundColor: "#C4B5D9" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <SectionLabel text="All Partners" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight max-w-xl mx-auto">
              Our partner organizations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white p-8 rounded-[20px] hover:shadow-md transition-shadow"
              >
                <div className="h-20 flex items-center justify-center mb-4 bg-[#C4B5D9] rounded-xl p-3">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#4845A5] mb-1">{p.fullName}</p>
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
          <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight max-w-xl mx-auto mt-2 mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-[#525560] text-lg max-w-xl mx-auto mb-10">
            Join us in our mission to transform communities in the DRC. Whether
            you are an NGO, faith organization, or institution, we welcome
            collaboration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#17153B] text-white font-medium rounded hover:bg-[#2d3347] transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
