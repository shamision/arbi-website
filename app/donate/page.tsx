import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import { ArrowRight, Heart, Globe, Users } from "lucide-react";

const impactLevels = [
  {
    amount: "$50",
    impact: "Provides essential supplies for a family in need",
    icon: <Heart size={24} className="text-[#f2c94c]" />,
  },
  {
    amount: "$100",
    impact: "Supports a peace-building workshop for 10 participants",
    icon: <Users size={24} className="text-[#f2c94c]" />,
  },
  {
    amount: "$500",
    impact: "Funds a full community development project",
    icon: <Globe size={24} className="text-[#f2c94c]" />,
  },
];

export default function DonatePage() {
  return (
    <main className="pt-[67px]">
      {/* HERO */}
      <section className="py-24" style={{ backgroundColor: "#fcedc6" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Donate" />
              <h1 className="text-5xl lg:text-[56px] font-bold text-[#1d2130] leading-tight mb-6">
                Making a donation for our communities
              </h1>
              <p className="text-[#525560] text-lg leading-relaxed mb-8">
                Your donation helps us continue our mission of healing and
                rebuilding communities torn apart by conflict in the DRC.
              </p>
              <a
                href="#donate-now"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f2c94c] text-[#1d2130] font-medium rounded hover:bg-[#e0b83c] transition-colors"
              >
                Donate Now <ArrowRight size={18} />
              </a>
            </div>
            <div
              className="w-full aspect-[4/3] rounded-[20px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* YOUR IMPACT */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <SectionLabel text="Your Impact" center />
            <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight max-w-xl mx-auto">
              See how your donation makes a difference
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactLevels.map((level) => (
              <div
                key={level.amount}
                className="p-10 rounded-[20px] bg-[#fcedc6] text-center"
              >
                <div className="flex justify-center mb-4">{level.icon}</div>
                <div className="text-4xl font-bold text-[#1d2130] mb-4">
                  {level.amount}
                </div>
                <p className="text-[#525560] leading-relaxed">{level.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CONTRIBUTE */}
      <section id="donate-now" className="py-24" style={{ backgroundColor: "#fcedc6" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="How to Give" />
              <h2 className="text-4xl lg:text-[48px] font-bold text-[#1d2130] leading-tight mb-4">
                How you can contribute to our work
              </h2>
              <p className="text-[#525560] leading-relaxed">
                Every donation, large or small, goes directly toward healing
                communities, building peace, and empowering lives across
                Northern Kivu. Choose the giving method that works best for you.
              </p>
            </div>
            <div className="space-y-6">
              {/* Online Donation */}
              <div className="bg-white p-8 rounded-[20px]">
                <div className="w-8 h-1 bg-[#f2c94c] mb-4" />
                <h3 className="text-xl font-bold text-[#1d2130] mb-2">
                  Online Donation
                </h3>
                <p className="text-[#525560] text-sm leading-relaxed mb-6">
                  Make a secure online donation using your credit card or
                  PayPal account. Fast, safe, and immediate.
                </p>
                <button className="px-8 py-3 bg-[#1d2130] text-white font-medium rounded hover:bg-[#2d3347] transition-colors">
                  Donate Online
                </button>
              </div>
              {/* Bank Transfer */}
              <div className="bg-white p-8 rounded-[20px]">
                <div className="w-8 h-1 bg-[#f2c94c] mb-4" />
                <h3 className="text-xl font-bold text-[#1d2130] mb-2">
                  Bank Transfer
                </h3>
                <p className="text-[#525560] text-sm leading-relaxed mb-6">
                  Make a direct bank transfer to our account. Contact us for
                  full banking details and reference information.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1d2130] text-[#1d2130] font-medium rounded hover:bg-[#fcedc6] transition-colors"
                >
                  Get Bank Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONTHLY GIVING */}
      <section className="py-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
          <SectionLabel text="Recurring Giving" center />
          <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-2xl mx-auto mt-2 mb-6">
            Become a Monthly Donor
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Join our community of monthly donors and help us create lasting
            change in the DRC. Consistent support enables us to plan and
            deliver programs more effectively.
          </p>
          <button className="px-8 py-4 bg-[#f2c94c] text-[#1d2130] font-medium rounded hover:bg-[#e0b83c] transition-colors">
            Start Monthly Giving
          </button>
        </div>
      </section>

      {/* HOW WE USE DONATIONS */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="border-t border-[#e5e5e5] pt-16">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <SectionLabel text="Transparency" />
                <h2 className="text-3xl lg:text-[40px] font-bold text-[#1d2130] leading-tight">
                  How we use your donation
                </h2>
              </div>
              <div>
                <p className="text-[#525560] leading-relaxed">
                  The majority of funds go directly to program delivery —
                  healing workshops, peace-building sessions, leadership
                  training, and community development projects across North Kivu.
                </p>
              </div>
              <div>
                <p className="text-[#525560] leading-relaxed">
                  A small portion covers essential operational costs that
                  enable us to function effectively, maintain accountability,
                  and report transparently to our donors and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
