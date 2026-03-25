import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import { MapPin, Phone, Mail, User } from "lucide-react";

const keyContacts = [
  {
    name: "Sewimfura Theophile",
    role: "Founder and Director",
    email: "sewimfuratheo@gmail.com",
    tel: ["+243-971 944 496", "+250-788 684 958"],
  },
  {
    name: "Bahati Kazingufu Grace",
    role: "National Coordinator",
    email: "gracebahatik@gmail.com",
    tel: ["+243-998877937"],
  },
];

export default function ContactPage() {
  return (
    <main className="pt-[67px]">
      {/* HERO */}
      <section className="py-24" style={{ backgroundColor: "#fcedc6" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel text="Contact Us" />
              <h1 className="text-5xl lg:text-[56px] font-bold text-[#1d2130] leading-tight mb-6">
                We&rsquo;d love to hear from you
              </h1>
              <p className="text-[#525560] text-lg leading-relaxed">
                Get in touch with us to learn more about our work or how you can
                help transform communities in the DRC.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-10 space-y-6">
              <div>
                <p className="text-xl font-bold text-[#1d2130] mb-4">Let&rsquo;s talk!</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#525560]">
                    <Phone size={18} className="text-[#f2c94c] shrink-0" />
                    <span>+243-971 944 496</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#525560]">
                    <Mail size={18} className="text-[#f2c94c] shrink-0" />
                    <span>sewimfuratheo@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#e5e5e5] pt-6">
                <p className="text-sm font-bold text-[#1d2130] uppercase tracking-wider mb-3">
                  Headquarters
                </p>
                <div className="flex items-start gap-3 text-[#525560] text-sm">
                  <MapPin size={16} className="text-[#f2c94c] shrink-0 mt-0.5" />
                  <span>
                    Avenue Jacarandas, 32 D, Q. Les Volcans,<br />
                    Goma, Northern Kivu Province,<br />
                    Democratic Republic of Congo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Key Contacts */}
            <div>
              <SectionLabel text="Key Contacts" />
              <h2 className="text-3xl lg:text-[40px] font-bold text-[#1d2130] leading-tight mb-8">
                Reach the right person
              </h2>
              <div className="space-y-6">
                {keyContacts.map((c) => (
                  <div
                    key={c.name}
                    className="p-8 rounded-[20px] border border-[#e5e5e5]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#fcedc6] rounded-full">
                        <User size={20} className="text-[#1d2130]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1d2130]">{c.name}</div>
                        <div className="text-sm text-[#f2c94c] font-medium">{c.role}</div>
                      </div>
                    </div>
                    <div className="space-y-2 ml-11">
                      <div className="flex items-center gap-2 text-[#525560] text-sm">
                        <Mail size={14} className="shrink-0" />
                        <a
                          href={`mailto:${c.email}`}
                          className="hover:text-[#1d2130] transition-colors"
                        >
                          {c.email}
                        </a>
                      </div>
                      {c.tel.map((t) => (
                        <div key={t} className="flex items-center gap-2 text-[#525560] text-sm">
                          <Phone size={14} className="shrink-0" />
                          <a
                            href={`tel:${t.replace(/\s/g, "")}`}
                            className="hover:text-[#1d2130] transition-colors"
                          >
                            {t}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionLabel text="Send a Message" />
              <h2 className="text-3xl lg:text-[40px] font-bold text-[#1d2130] leading-tight mb-8">
                Write to us directly
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#1d2130]/60 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full border-b border-[#1d2130] bg-transparent py-3 text-[#1d2130] placeholder:text-[#525560]/50 focus:outline-none focus:border-[#f2c94c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1d2130]/60 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border-b border-[#1d2130] bg-transparent py-3 text-[#1d2130] placeholder:text-[#525560]/50 focus:outline-none focus:border-[#f2c94c] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1d2130]/60 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full border-b border-[#1d2130] bg-transparent py-3 text-[#1d2130] placeholder:text-[#525560]/50 focus:outline-none focus:border-[#f2c94c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1d2130]/60 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    className="w-full border border-[#1d2130] rounded bg-transparent px-4 py-3 text-[#1d2130] placeholder:text-[#525560]/50 focus:outline-none focus:border-[#f2c94c] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#f2c94c] text-[#1d2130] font-medium rounded hover:bg-[#e0b83c] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
