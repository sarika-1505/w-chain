import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WChainEvolution() {
  return (
    <div className="w-full bg-[#010514] flex flex-col items-center font-Montserrat overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] pt-28 pb-32 px-4 relative">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
          {/* HEADING */}
          <h1 className="text-[38px] md:text-[56px] font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
            The W Chain Evolution
          </h1>

          <p className="text-white/80 text-[18px] md:text-[20px] mb-24">
            Q3 2025 – Q3 2026 | Building the Future of DeFi
          </p>

          {/* TIMELINE */}
          <div className="relative w-full">
            {/* CENTER LINE */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-[#4EA5FF]/40" />

            <div className="flex flex-col gap-20 relative z-10">
              {/* ITEM 1 */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-16">
                  <EvolutionCard
                    quarter="Q3 2025"
                    title="W Builders Product Showcase"
                    items={[
                      {
                        icon: CodeIcon,
                        text: "Three developer-built projects debut on W Chain",
                      },
                      {
                        icon: UsersIcon,
                        text: "Community vote to allocate final grant funding",
                      },
                    ]}
                  />
                </div>

                {/* CENTER DOT */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07142E] border border-[#4EA5FF]/40 items-center justify-center shadow-[0_0_20px_rgba(78,165,255,0.45)]">
                  <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
                </div>

                <div className="hidden md:block w-1/2" />
              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="hidden md:block w-1/2" />

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07142E] border border-[#4EA5FF]/40 items-center justify-center shadow-[0_0_20px_rgba(78,165,255,0.45)]">
                  <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-16">
                  <EvolutionCard
                    quarter="Q4 2025"
                    title="WCO Staking & SOL Pair Launch"
                    items={[
                      {
                        icon: LightningIcon,
                        text: "Direct WCO staking enabled on W Swap",
                      },
                      {
                        icon: LockIcon,
                        text: "SOL/WCO farming pool goes live with incentives",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-16">
                  <EvolutionCard
                    quarter="Q1 2026"
                    title="W+ (Premium Accounts) Phase 1"
                    items={[
                      {
                        icon: UserIcon,
                        text: "Initial access and testing for internal & key stakeholders",
                      },
                      {
                        icon: SettingsIcon,
                        text: "Filling the gaps — infrastructure improvements",
                      },
                    ]}
                  />
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07142E] border border-[#4EA5FF]/40 items-center justify-center shadow-[0_0_20px_rgba(78,165,255,0.45)]">
                  <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
                </div>

                <div className="hidden md:block w-1/2" />
              </div>

              {/* ITEM 4 */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="hidden md:block w-1/2" />

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07142E] border border-[#4EA5FF]/40 items-center justify-center shadow-[0_0_20px_rgba(78,165,255,0.45)]">
                  <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-16">
                  <EvolutionCard
                    quarter="Q2 2026"
                    title="Product Rollouts Begin"
                    items={[
                      {
                        icon: RocketIcon,
                        text: "Expanded DeFi suite launch",
                      },
                      {
                        icon: HandshakeIcon,
                        text: "Strategic partnerships announcement",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* ITEM 5 */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-16">
                  <EvolutionCard
                    quarter="Q3 2026"
                    title="Expansion & Ecosystem Growth"
                    items={[
                      {
                        icon: GlobeIcon,
                        text: "Cross-chain expansion",
                      },
                      {
                        icon: NetworkIcon,
                        text: "Community governance launch",
                      },
                    ]}
                  />
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07142E] border border-[#4EA5FF]/40 items-center justify-center shadow-[0_0_20px_rgba(78,165,255,0.45)]">
                  <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUMMARY SECTION ================= */}
      <section className="w-full bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] py-28 px-4 relative">
        <div className="w-full max-w-[1206px] mx-auto relative z-10">
          {/* CARD */}
          <div
            className="
              rounded-[20px]
              p-[2px]
              overflow-hidden
            "
            style={{
              background:
                "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 45%, #8BC9D4 100%)",
            }}
          >
            {/* INNER */}
            <div className="rounded-[18px] bg-[linear-gradient(180deg,#4B5677_0%,#1C606B_100%)] px-8 md:px-20 py-16 flex flex-col items-center text-center">
              {/* BLOCK 1 */}
              <div className="max-w-[900px]">
                <h2 className="text-[34px] md:text-[48px] font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
                  Q3 & Q4 2025 – Upgrades
                </h2>

                <p className="text-white/85 text-[18px] md:text-[22px]">
                  W Builders Showcase • WCO Staking • SOL Pair • W+ Phase 1
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#4EA5FF]/30 my-12" />

              {/* BLOCK 2 */}
              <div className="max-w-[900px]">
                <h2 className="text-[34px] md:text-[48px] font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
                  Q1 2026 – Filling the Gaps
                </h2>

                <p className="text-white/85 text-[18px] md:text-[22px]">
                  Infrastructure, security, and scalability enhancements
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#4EA5FF]/30 my-12" />

              {/* BLOCK 3 */}
              <div className="max-w-[900px]">
                <h2 className="text-[34px] md:text-[48px] leading-[1.2] font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
                  Q2 & Q3 2026 – Product Rollouts,
                  <br />
                  Expansion & Partnerships
                </h2>

                <p className="text-white/85 text-[18px] md:text-[22px]">
                  Full DeFi suite, cross-chain bridges, ecosystem partnerships
                </p>
              </div>

              {/* BUTTON */}
              <Link
                href="#"
                className="
                  mt-12

                  h-[54px]
                  px-8

                  rounded-full

                  bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

                  flex
                  items-center
                  gap-4

                  text-white
                  font-bold

                  shadow-[0_0_25px_rgba(78,165,255,0.3)]

                  hover:opacity-90
                  transition
                "
              >
                Pre Order Now
                <span className="w-7 h-7 rounded-full border border-white flex items-center justify-center">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WCNEXUS SECTION ================= */}
      <section className="w-full bg-[#010514] relative py-24 overflow-hidden">
        <Image
          src="/Rectangle 1.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#002F8D_0%,#010514_50%,#010514_100%)]" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center px-4">
          <div className="relative w-[260px] md:w-[400px] h-[140px] md:h-[220px] mb-10">
            <Image
              src="/W Chain-Transparent 1.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-[36px] md:text-[60px] font-bold mb-4">
            <span className="text-[#4EA5FF]">WCNexus</span>{" "}
            <span className="text-white">Quarter 1 Update</span>
          </h2>

          <p className="text-white/80 text-[18px] md:text-[24px] mb-12">
            January - March 2026
          </p>

          {/* DOTS */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4EA5FF]" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= CARD COMPONENT ================= */

function EvolutionCard({
  quarter,
  title,
  items,
}: {
  quarter: string;
  title: string;
  items: { icon: any; text: string }[];
}) {
  return (
    <div
      className="
        relative

        w-full
        max-w-[450px]

        min-h-[200px]

        rounded-[20px]

        p-[2px]

        overflow-hidden

        shadow-[0_0_30px_rgba(78,165,255,0.08)]

        hover:scale-[1.02]
        transition-all
        duration-300
      "
      style={{
        background:
          "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 45%, #8BC9D4 100%)",
      }}
    >
      {/* INNER CARD */}
      <div
        className="
          w-full
          h-full

          rounded-[18px]

          px-7
          py-6

          backdrop-blur-md

          bg-[linear-gradient(180deg,#4B5677_0%,#1C606B_100%)]

          flex
          flex-col
        "
      >
        {/* QUARTER */}
        <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-[#8BC9D4]/40 bg-[#07142E]/60 mb-5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4EA5FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>

          <span className="text-[#4EA5FF] text-[13px] font-semibold">
            {quarter}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-[20px] font-bold mb-5 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
          {title}
        </h3>

        {/* ITEMS */}
        <div className="flex flex-col gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1 shrink-0 text-white/70">
                <item.icon />
              </div>

              <p className="text-white/75 text-[14px] leading-[160%]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= ICONS ================= */

const CodeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const LightningIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82" />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5" />
    <path d="m12 15-3-3" />
  </svg>
);

const HandshakeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const NetworkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 16V8" />
  </svg>
);
