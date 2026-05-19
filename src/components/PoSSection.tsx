"use client";

import Image from "next/image";

export default function PoSSection() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] py-20 px-6 text-white">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Heading */}
        <h2 className="font-Montserrat text-3xl sm:text-4xl lg:text-[45px] font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] leading-tight">
          Proof-of-Stake for W Chain
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-white/70 text-sm sm:text-base max-w-[700px] mx-auto">
          W Chain’s PoS model is not just a consensus layer. It is a financial
          coordination system designed for real-world utility, high-frequency
          commerce, and compliant digital asset flows.
        </p>

        {/* Features */}
        <div className="mt-14 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-[1000px] mx-auto">
          <Feature
            icon={<Image src="/15.png" alt="Capital-Efficient" width={80} height={80} className="object-contain" />}
            title="Capital-Efficient"
            desc="Network security via staked assets - no computational waste. Aligned incentives."
          />

          <Feature
            icon={<Image src="/Group 162709.png" alt="Sustainable" width={80} height={80} className="object-contain" />}
            title="Sustainable"
            desc="99% less energy vs PoW. ESG-aligned for institutions & governments."
          />

          <Feature
            icon={<Image src="/Group 162708.png" alt="Economic Participation" width={80} height={80} className="object-contain" />}
            title="Economic Participation"
            desc="Stake & delegate to earn rewards while strengthening decentralization."
          />
        </div>

        {/* APR Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Pill text="Validator APR 12%" />
          <Pill text="Validator APR 11.5%" />
          <Pill text="Validator APR 13%" />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
          <div>
            <h3 className="font-Montserrat text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
              99.9%
            </h3>
            <p className="mt-2 font-Montserrat font-medium text-white/70 text-sm">% less energy vs PoW</p>
          </div>

          <div>
            <h3 className="font-Montserrat text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
              124.5 M+
            </h3>
            <p className="mt-2 font-Montserrat font-medium text-white/70 text-sm">M+ WCO staked</p>
          </div>
        </div>
      </div>

      {/* Centered separator line that does not touch the edges */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1100px] h-[1px] bg-white/[0.08]" />
    </section>
  );
}

/* 🔹 Feature Item */
function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center w-[302px] h-[163px] shrink-0">
      {/* Direct Image Container (no manual CSS circle wrapper, as the image asset itself is the circular icon!) */}
      <div className="w-[80px] h-[80px] flex items-center justify-center hover:scale-105 transition-transform duration-300 shrink-0">
        {icon}
      </div>

      <h4 className="mt-4 font-Montserrat font-bold text-[#66c3ff] text-[18px] leading-[22px]">{title}</h4>

      <p className="mt-2 font-Montserrat font-medium text-white/70 text-[14px] leading-[20px] max-w-full">{desc}</p>
    </div>
  );
}

/* 🔹 Pill Button */
function Pill({ text }: { text: string }) {
  return (
    <button className="h-[50px] px-8 rounded-full border border-1-[#5AB6DE] bg-[#002F8D] hover:bg-[#001E5C] text-white text-sm font-Montserrat font-bold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(90,182,222,0.15)] hover:shadow-[0_0_20px_rgba(90,182,222,0.3)]">
      {text}
    </button>
  );
}
