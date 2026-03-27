import CTABanner from "@/components/CTABanner";
import SectionLabel from "@/components/SectionLabel";
import { ChevronRight } from "lucide-react";

const programs = [
  {
    title: "Healing, Peace-Building & Reconciliation",
    desc: "We facilitate genuine healing and reconciliation through empowering and working with influential leaders and community members through running Mental Health and Psycho-social Support projects and other related initiatives.",
    projects: [
      "Healing the Wounds of Ethnic Conflicts (HWEC)",
      "Community Based Socio-therapy (CBS) — Niponye Nikuponye",
      "Active Bystandership Development — Sindebera",
      "Prevention of the ideology of hate, genocide and hate crimes in Africa",
      "Cultural Festival of songs and dances for peace",
      "Self-Care and Debriefing",
    ],
    image:
      "/6.jpg",
  },
  {
    title: "Abundant Leadership Development",
    desc: "Having witnessed what toxic leaders are capable of — destruction, corruption, exploitation and violence — providing communities with servant leaders having a heart for serving their fellows, promoting unity and innovating economic opportunities remains the most vital path to community transformation.",
    projects: [
      "Active Bystandership Development for positive changes",
      "Servant leadership training",
      "Corruption fighting initiatives",
    ],
    image:
      "/12.jpg",
  },
  {
    title: "Integral Community Development",
    desc: "We empower and strengthen community members as the assets, resources and strengths of their own communities, enabling them to take ownership of their development.",
    projects: [
      "BAHO for Development (10-day school: ABCD, Gift that Releases)",
      "Environmental prevention, promotion and protection",
      "Community Based Tourism",
      "Pathway for generosity",
      "Women and Children's rights (advocacy)",
    ],
    image:
      "/5.jpg",
  },
  {
    title: "Promoting Resilience Among Youth (PRAY)",
    desc: "The risk factors related to delinquency among youth are compounded by drug abuse, poverty, political instability, urbanization, and dysfunctional family situations. Young people are at risk not just because they may turn to substance abuse or street living, but also because they are ambitious and in danger of being exploited.",
    projects: [
      "Establish sustainable measures to prevent the incidence of delinquency",
      "Define and implement appropriate measures to respond to cases of delinquency",
      "Develop and implement a sustainable mechanism for reintegration and follow-up of former delinquents",
    ],
    image:
      "/2.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <main className="pt-[67px]">
      {/* HERO */}
      <section
        className="relative min-h-[400px] flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('/14.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20">
          <SectionLabel text="Our Work" />
          <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
            Touching Hearts Transforming Nations
          </h1>
          <p className="text-white/75 text-xl max-w-xl">
            Comprehensive initiatives designed to heal, empower, and transform
            communities in the DRC.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-32">
          {programs.map((prog, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="mb-6">
                  <span className="text-sm font-bold tracking-[2px] text-[#525560] uppercase">
                    Program {i + 1}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-[40px] font-bold text-[#17153B] leading-tight mb-4">
                  {prog.title}
                </h2>
                <p className="text-[#525560] leading-relaxed mb-6">{prog.desc}</p>
                <div>
                  <p className="text-sm font-bold text-[#17153B] uppercase tracking-[1px] mb-4">
                    Key Projects
                  </p>
                  <ul className="space-y-2">
                    {prog.projects.map((p, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-3 text-[#525560] text-sm"
                      >
                        <ChevronRight
                          size={16}
                          className="text-[#4845A5] shrink-0 mt-0.5"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="w-full aspect-[4/3]"
                style={{
                  backgroundImage: `url('${prog.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
