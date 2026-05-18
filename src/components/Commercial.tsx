"use client";

import { Zap, ShieldCheck, Box } from "lucide-react";

export default function CommerceSection() {
  return (
    <section className="w-full bg-[#041a33] py-20 px-6">
      <div className="max-w-[1100px] mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Built for the <br />
          <span className="text-[#3bb4ff]">Speed of Commerce</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-white/70 text-sm sm:text-base max-w-[700px] mx-auto">
          W Chain is a payment-native hybrid blockchain — combining
          enterprise-grade security with the throughput required for global
          payments.
        </p>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Item */}
          <FeatureCard
            icon={<Zap size={28} />}
            title="Speed"
            description="Up to 10,000 TPS"
          />

          <FeatureCard
            icon={<ShieldCheck size={28} />}
            title="Security"
            description="KYC-native & audit-ready"
          />

          <FeatureCard
            icon={<Box size={28} />}
            title="Scale"
            description="Built for millions of daily transactions"
          />
        </div>
      </div>
    </section>
  );
}

/* 🔹 Feature Card */
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circle Icon */}
      <div
        className="w-[110px] h-[110px] rounded-full flex items-center justify-center
        bg-gradient-to-b from-[#0c2b4a] to-[#081c33]
        border border-[#3bb4ff]/30
        shadow-[0_0_40px_rgba(59,180,255,0.15)]"
      >
        <div className="text-white">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[#3bb4ff] font-semibold text-lg">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-white/70 text-sm max-w-[200px]">{description}</p>
    </div>
  );
}
