"use client";

import { Shield, Users, Network } from "lucide-react";

export default function PoSSection() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#041a33_0%,#0b2f66_100%)] py-20 px-6 text-white">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#66c3ff]">
          Proof-of-Stake for W Chain
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-white/70 text-sm sm:text-base max-w-[700px] mx-auto">
          W Chain’s PoS model is not just a consensus layer. It is a financial
          coordination system designed for real-world utility, high-frequency
          commerce, and compliant digital asset flows.
        </p>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Feature
            icon={<Shield size={28} />}
            title="Capital-Efficient"
            desc="Network security via staked assets - no computational waste. Aligned incentives."
          />

          <Feature
            icon={<Users size={28} />}
            title="Sustainable"
            desc="99% less energy vs PoW. ESG-aligned for institutions & governments."
          />

          <Feature
            icon={<Network size={28} />}
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
            <h3 className="text-4xl sm:text-5xl font-bold text-[#66c3ff]">
              99.9%
            </h3>
            <p className="mt-2 text-white/70 text-sm">% less energy vs PoW</p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-[#66c3ff]">
              124.5 M+
            </h3>
            <p className="mt-2 text-white/70 text-sm">M+ WCO staked</p>
          </div>
        </div>
      </div>
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
    <div className="flex flex-col items-center text-center">
      {/* Icon Circle */}
      <div className="w-[90px] h-[90px] rounded-full border border-[#66c3ff]/40 flex items-center justify-center bg-white/5 shadow-[0_0_30px_rgba(102,195,255,0.15)]">
        {icon}
      </div>

      <h4 className="mt-5 text-[#66c3ff] font-semibold text-lg">{title}</h4>

      <p className="mt-2 text-white/70 text-sm max-w-[260px]">{desc}</p>
    </div>
  );
}

/* 🔹 Pill Button */
function Pill({ text }: { text: string }) {
  return (
    <button className="px-5 py-2 rounded-full border border-[#66c3ff]/40 text-white text-sm hover:bg-[#66c3ff]/20 transition">
      {text}
    </button>
  );
}
