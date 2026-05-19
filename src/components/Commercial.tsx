"use client";

import { Zap, ShieldCheck, Box } from "lucide-react";

export default function CommerceSection() {
  return (
    <section className="w-full bg-[#000D27] pt-[120px] md:pt-[130px] pb-20 px-6 relative">
      <div className="max-w-[1100px] mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="font-Montserrat text-[32px] sm:text-[40px] lg:text-[50px] font-bold leading-[1.2] lg:leading-[60px] tracking-[-0.03em] text-white lg:w-[508px] lg:h-[120px] max-w-full mx-auto">
          Built for the <br />
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">Speed of Commerce</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 font-Montserrat font-medium text-white text-[15px] sm:text-[16px] lg:text-[18px] lg:w-[785px] lg:h-[44px] max-w-full mx-auto leading-[1.3] lg:leading-[22px] tracking-[-0.03em]">
          W Chain is a payment-native hybrid blockchain — combining enterprise-grade security with the throughput required for global payments.
        </p>

        {/* Features */}
        <div className="mt-16 flex flex-col sm:flex-row items-start justify-center gap-12 sm:gap-16 lg:gap-20 w-full max-w-[850px] mx-auto">
          {/* Item */}
          <FeatureCard
            icon={<Zap width={60} height={65} strokeWidth={1.5} className="text-[#8BC9D4]" />}
            title="Speed"
            description="Up to 10,000 TPS"
          />

          <FeatureCard
            icon={<ShieldCheck width={60} height={65} strokeWidth={1.5} className="text-[#8BC9D4]" />}
            title="Security"
            description="KYC-native & audit-ready"
          />

          <FeatureCard
            icon={<Box width={60} height={65} strokeWidth={1.5} className="text-[#8BC9D4]" />}
            title="Scale"
            description="Built for millions of daily transactions"
          />
        </div>
      </div>

      {/* Centered separator line that does not touch the edges */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1100px] h-[1px] bg-white/[0.08]" />
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
    <div className="flex flex-col items-center text-center w-[169px] h-[256px] shrink-0">
      {/* Circle Icon */}
      <div
        className="w-[150px] h-[150px] rounded-full flex items-center justify-center
        bg-[linear-gradient(180deg,#0C2B4A_0%,#081C33_100%)]
        border border-[#8BC9D4]
        shadow-[0_0_30px_rgba(139,201,212,0.25)]
        hover:scale-105 hover:border-white transition-all duration-300 shrink-0"
      >
        <div className="text-white">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="mt-5 font-Montserrat font-bold text-[#3bb4ff] text-[18px] leading-[22px]">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-white/70 text-[14px] leading-[20px] font-Montserrat font-medium max-w-full">{description}</p>
    </div>
  );
}
