"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NativeCoinSection() {
  return (
    <section className="relative w-full h-auto lg:h-[601px] flex flex-col justify-center bg-[#000D27] py-16 lg:py-0 px-6 overflow-hidden">
      <div className="max-w-[1100px] w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="font-Montserrat font-bold text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[50px] lg:leading-[60px] tracking-[-0.03em] bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] lg:w-[1099px] lg:h-[60px] max-w-full mx-auto">
          The Native Coin for the Eco System
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-white/75 text-[17px] max-w-[760px] mx-auto">
          The native utility coin powering gas, governance, and ecosystem
          rewards on W Chain
        </p>

        {/* Responsive Center Illustration from Figma */}
        <div className="mt-16 w-full max-w-[428px] mx-auto">
          <Image
            src="/Group 162692.png"
            alt="Native Coin Supply Flow"
            width={428}
            height={182}
            className="w-full h-auto object-contain pointer-events-none"
            priority
          />
        </div>

        {/* Buttons */}
        <div className="mt-20 flex flex-wrap justify-center gap-5">
          {/* Button 1 */}
          <button
            className="
              group
              flex
              items-center
              gap-4
              px-8
              py-4
              rounded-full
              border
              border-[#56B8FF]/40
              bg-[#06182F]
              text-white
              text-[16px]
              font-semibold
              hover:bg-[#0A2345]
              transition
            "
          >
            <span>Get WCO</span>

            <span
              className="
                w-9
                h-9
                rounded-full
                border
                border-white/50
                flex
                items-center
                justify-center
                group-hover:bg-white
                transition
              "
            >
              <ArrowRight
                size={18}
                className="group-hover:text-black transition"
              />
            </span>
          </button>

          {/* Button 2 */}
          <button
            className="
              group
              flex
              items-center
              gap-4
              px-8
              py-4
              rounded-full
              bg-[linear-gradient(180deg,#5CC2FF_0%,#2D8FE3_100%)]
              text-white
              text-[16px]
              font-semibold
              shadow-[0_0_25px_rgba(92,194,255,0.35)]
              hover:opacity-90
              transition
            "
          >
            <span>View Audit Report</span>

            <span
              className="
                w-9
                h-9
                rounded-full
                border
                border-white/50
                flex
                items-center
                justify-center
                group-hover:bg-white/20
                transition
              "
            >
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>

      {/* Centered separator line that does not touch the edges */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1100px] h-[1px] bg-white/[0.08]" />
    </section>
  );
}
