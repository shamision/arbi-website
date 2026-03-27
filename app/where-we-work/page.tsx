import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import DRCMapClient from "@/components/DRCMapClient";

const locations = [
  {
    city: "Goma",
    role: "Headquarters & main operational center",
    desc: "The heart of our operations, where we coordinate all programs and maintain our administrative offices in Avenue Jacarandas, Q. Les Volcans.",
  },
  {
    city: "Rutshuru",
    role: "Community Development & Peace-Building",
    desc: "Running active community development and peace-building programs to address ethnic tensions and strengthen social cohesion.",
  },
  {
    city: "Masisi",
    role: "Psychosocial Support & Advocacy",
    desc: "Providing mental health, psychosocial support, and advocacy for vulnerable populations affected by ongoing conflict.",
  },
  {
    city: "Walikale",
    role: "Environmental Protection & Community Health",
    desc: "Environmental prevention and protection projects alongside community health initiatives for sustainable livelihoods.",
  },
  {
    city: "Beni",
    role: "Relief Operations & Community Empowerment",
    desc: "Relief operations paired with long-term empowerment strategies for communities impacted by humanitarian crises.",
  },
];

const targetGroups = [
  { group: "Influential community leaders", desc: "Local leaders trained to be catalysts for peace and development" },
  { group: "Youth & University students", desc: "Young people equipped with resilience and leadership skills" },
  { group: "Women victims of violence", desc: "Survivors empowered through healing and livelihood programs" },
  { group: "IDPs & Refugees", desc: "Displaced persons supported with psychosocial care and reintegration" },
  { group: "Children born out of rape / orphans", desc: "Vulnerable children given dignity, care and opportunity" },
  { group: "Ex-Combatants", desc: "Former fighters supported in their journey toward peaceful reintegration" },
];

export default function WhereWeWorkPage() {
  return (
    <main className="pt-[67px]">
      {/* HERO */}
      <section
        className="relative min-h-[400px] flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('/8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20">
          <SectionLabel text="Our Presence" />
          <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
            Touching Hearts Transforming Nations
          </h1>
          <p className="text-white/75 text-xl max-w-xl">
            Making a difference across Northern Kivu Province, Democratic
            Republic of Congo.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <SectionLabel text="Operational Areas" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight max-w-xl mx-auto">
              Five areas of active operations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="p-8 rounded-[20px] border border-[#e5e5e5] hover:border-[#4845A5] hover:shadow-md transition-all"
              >
                <div className="mb-4">
                  <div className="font-bold text-[#17153B] text-lg">{loc.city}</div>
                  <div className="text-[#4845A5] text-xs font-bold uppercase tracking-wide mt-0.5">{loc.role}</div>
                </div>
                <p className="text-[#525560] text-sm leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET GROUPS */}
      <section className="py-24" style={{ backgroundColor: "#C4B5D9" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Who We Serve" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#17153B] leading-tight mb-6">
                Reaching the most vulnerable communities
              </h2>
              <p className="text-[#525560] leading-relaxed">
                Our programs are designed to serve those most affected by
                conflict and violence across Northern Kivu, with a particular
                focus on those who are often overlooked or marginalized.
              </p>
            </div>
            <div className="space-y-4">
              {targetGroups.map((tg, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-[16px]"
                >
                  <div>
                    <div className="font-bold text-[#17153B] text-base">{tg.group}</div>
                    <div className="text-[#525560] text-sm mt-0.5">{tg.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <SectionLabel text="Our Locations" center />
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#17153B] leading-tight">
              Find us across Northern Kivu
            </h2>
            <p className="text-[#525560] mt-3 text-sm">Click a marker to see details about each location.</p>
          </div>
          <div className="rounded-[20px] overflow-hidden border border-[#e5e5e5] shadow-sm">
            <DRCMapClient />
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
