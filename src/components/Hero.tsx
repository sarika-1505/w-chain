"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden rounded-b-[40px] md:rounded-b-[50px] border-b border-l border-r border-[#4EA5FF]/30 -mb-[40px] md:-mb-[50px] z-10">
      {/* Background Image - Covers full width */}
      <Image
        src="/Rectangle 1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Exact Figma "Rectangle 15" Overlay Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#010101_0%,rgba(0,0,0,0.85)_60%,rgba(0,64,136,0.50)_100%)]" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-16 lg:px-30">
        <div className="max-w-[650px] w-full z-10">
          {/* Title */}
          <h1 className="font-Montserrat text-[36px] sm:text-[44px] lg:text-[50px] font-bold leading-[1.2] lg:leading-[60px] tracking-[-0.03em] text-white lg:w-[546px] max-w-full">
            Blockchain Built for <br />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">Real-World Payments</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 font-Montserrat font-bold text-white text-[18px] sm:text-[22px] lg:text-[25px] lg:w-[564px] max-w-full leading-[1.2] lg:leading-[25px] tracking-[-0.03em]">
            A payments-native Layer 1 blockchain - fast, compliant, and built for global adoption.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 font-Montserrat">
            {/* Button 1 */}
            <button className="group flex items-center justify-center gap-2 w-[180px] h-[50px] rounded-full border border-[#5AB6DE] bg-[#00142C] hover:bg-[#5AB6DE]/10 hover:shadow-[0_0_15px_rgba(90,182,222,0.3)] transition-all duration-300 text-white cursor-pointer">
              <span className="text-[14px] font-bold">Start Building</span>
              <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition-colors duration-300 shrink-0">
                <svg
                  className="w-4 h-4 text-white group-hover:text-[#00142C] transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            {/* Button 2 */}
            <button className="group flex items-center justify-center gap-2 w-[210px] h-[50px] rounded-full bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-95 transition-opacity text-white cursor-pointer shadow-[0_0_15px_rgba(78,165,255,0.35)]">
              <span className="text-[14px] font-bold">
                Explore Ecosystem
              </span>
              <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition-colors duration-300 shrink-0">
                <svg
                  className="w-4 h-4 text-white group-hover:text-[#0F6CB8] transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
