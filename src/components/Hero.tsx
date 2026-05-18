"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Background Image - Covers full width */}
      <Image
        src="/Rectangle 1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#010101_0%,rgba(0,0,0,0.85)_60%,rgba(0,64,136,0.50)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000]/80 via-[#000]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,136,255,0.4),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-16 lg:px-24">
        <div className="max-w-[650px] w-full z-10">
          {/* Title */}
          <h1 className="font-Montserrat text-[36px] sm:text-[44px] lg:text-[50px] font-bold leading-[1.2] lg:leading-[60px] tracking-[-0.03em] text-white">
            Blockchain Built for <br />
            <span className="text-[#2196F3]">Real-World Payments</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-white/85 text-base sm:text-lg lg:text-[20px] max-w-[520px] leading-relaxed">
            A payments-native Layer 1 blockchain - fast, compliant, and built
            for global adoption.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Button 1 */}
            <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/40 bg-black/40 backdrop-blur-md hover:bg-white/10 transition text-white">
              <span className="text-[14px] font-semibold">Start Building</span>
              <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white group-hover:bg-white">
                <svg
                  className="w-4 h-4 text-white group-hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            {/* Button 2 */}
            <button className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#3bb4ff] hover:bg-[#2ea3e6] transition text-white shadow-[0_0_25px_rgba(59,180,255,0.5)]">
              <span className="text-[14px] font-semibold">
                Explore Ecosystem
              </span>
              <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white/70 group-hover:bg-white/20">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:flex relative shrink-0 items-center justify-center z-10">
          <Image
            src="/hero-right.png"
            alt="Hero Graphic"
            width={415}
            height={386}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
