import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Dedication with excellence",
    desc: "Committed to delivering the highest quality in all our initiatives and programs.",
  },
  {
    title: "Humanity and compassion",
    desc: "Treating everyone with dignity, understanding, and empathy.",
  },
  {
    title: "Equality",
    desc: "Ensuring fair treatment and opportunities for all community members.",
  },
  {
    title: "Unity in diversity",
    desc: "Celebrating our differences while working together for common goals.",
  },
  {
    title: "Transparency",
    desc: "Maintaining open and honest communication in all our operations.",
  },
  {
    title: "Stewardship",
    desc: "Responsibly managing resources for maximum community impact.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-[67px]">
      {/* HERO */}
      <section className="py-24" style={{ backgroundColor: "#fcedc6" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Know About Us" />
              <h1 className="text-5xl lg:text-[56px] font-bold text-[#1d2130] leading-tight mb-6">
                We are a Christian NGO dedicated to healing communities
              </h1>
              <p className="text-[#525560] text-lg leading-relaxed">
                Since 2011, ARBI has been one of the leading NGOs dedicated to
                integral conflict transformation and community-based development
                in North Kivu, DRC.
              </p>
            </div>
            <div
              className="w-full aspect-video rounded-[20px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="w-full aspect-[4/3] rounded-[20px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div>
              <SectionLabel text="Our Background" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight mb-6">
                Founded in response to violence in Eastern DRC
              </h2>
              <p className="text-[#525560] leading-relaxed mb-4">
                ARBI is a Christian Non-Government Organization shaped by people
                motivated and passionate for healing, peace building and
                development for affected communities in Northern Kivu province
                of DRC and the Regions of Africa.
              </p>
              <p className="text-[#525560] leading-relaxed mb-4">
                Founded in 2011 in response to successive violent ethnic-based
                wars in Eastern DRC, we are guided by a vision of a Holistic
                Community Living Peace. Our aim is to empower community members
                to become active citizens in shaping their destiny.
              </p>
              <p className="text-[#525560] leading-relaxed">
                Since 2012, ARBI has been one of the leading NGOs dedicated to
                integral conflict transformation and community-based development
                in North Kivu-DRC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24" style={{ backgroundColor: "#fcedc6" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <SectionLabel text="Our Purpose" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight max-w-2xl mx-auto">
              Guided by vision, driven by mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[20px]">
              <div className="w-12 h-1 bg-[#f2c94c] mb-6" />
              <h3 className="text-2xl font-bold text-[#1d2130] mb-4">Our Vision</h3>
              <p className="text-[#525560] leading-relaxed">
                To see healed, reconciled, and prosperous communities living in
                peace in the DRC and other regions of Africa affected through
                violence.
              </p>
            </div>
            <div className="bg-[#1d2130] p-10 rounded-[20px]">
              <div className="w-12 h-1 bg-[#f2c94c] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To rebuild bridges within and between affected communities
                through integral community-based approaches fostering inclusive
                cooperation, capacity building for sustainable healing, peace
                building, and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <SectionLabel text="What We Stand For" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight max-w-xl mx-auto">
              Our core values guide everything we do
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-[20px] border border-[#e5e5e5] hover:border-[#f2c94c] hover:bg-[#fcedc6]/30 transition-colors"
              >
                <div className="w-8 h-1 bg-[#f2c94c] mb-5" />
                <h3 className="text-xl font-bold text-[#1d2130] mb-3">{v.title}</h3>
                <p className="text-[#525560] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTTO */}
      <section className="py-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
          <p className="text-[#f2c94c] text-sm font-bold tracking-[4px] uppercase mb-6">
            Our Motto
          </p>
          <h2 className="text-4xl lg:text-[56px] font-bold text-white leading-tight max-w-3xl mx-auto">
            Impacting Hearts, Heads, and Hands
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
            We believe transformation happens at every level — emotional,
            intellectual, and practical.
          </p>
          <Link
            href="/programs"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-[#f2c94c] text-[#1d2130] font-medium rounded hover:bg-[#e0b83c] transition-colors"
          >
            Explore Our Programs <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
