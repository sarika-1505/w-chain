"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full flex justify-center py-10 px-4">
      <div className="relative w-full max-w-[1440px] h-[320px] md:h-[360px] rounded-[20px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/cta-bg.png" // put your grid image in public folder
          alt="background"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Blue Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,180,255,0.25),transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#66c3ff]">
            Start Building on W Chain
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-[600px]">
            Access the docs, testnet, and W Builders program — everything you
            need to deploy.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <CTAButton label="View Docs" />
            <CTAButton label="Join W Builders" />
            <CTAButton label="Get Testnet Tokens" primary />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 CTA Button */
function CTAButton({ label, primary }: { label: string; primary?: boolean }) {
  return (
    <button
      className={`
        group flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition
        ${
          primary
            ? "bg-[#3bb4ff] hover:bg-[#2ea3e6] text-white shadow-[0_0_25px_rgba(59,180,255,0.6)]"
            : "border border-white/40 text-white bg-black/40 backdrop-blur-md hover:bg-white/10"
        }
      `}
    >
      <span>{label}</span>

      <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white group-hover:bg-white">
        <svg
          className={`w-4 h-4 ${primary ? "text-white" : "text-white group-hover:text-black"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
}
