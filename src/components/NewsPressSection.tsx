"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newsCards = [
  {
    date: "March 11, 2026",
    title:
      "W Chain Partners with Funton.ai to Supercharge Ecosystem Growth with Gamified User Acquisition",
    image: "/Rectangle 1110.png",
  },
  {
    date: "March 03, 2026",
    title:
      "W Chain Forges New Path with LF Wallet: A Partnership Focused on Accessibility and Community",
    image: "/Rectangle 1110.png",
  },
  {
    date: "March 11, 2026",
    title:
      "W Chain Partners with Funton.ai to Supercharge Ecosystem Growth with Gamified User Acquisition",
    image: "/Rectangle 1110.png",
  },
  {
    date: "March 03, 2026",
    title:
      "W Chain Forges New Path with LF Wallet: A Partnership Focused on Accessibility and Community",
    image: "/Rectangle 1110.png",
  },
];

export default function NewsPressSection() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] py-24 px-6 overflow-hidden">
      <div className="max-w-[1220px] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-Montserrat font-bold text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[50px] lg:leading-[60px] tracking-[-0.03em] bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
            News & Press
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-[8px]">
          {newsCards.map((card, index) => {
            const isContentFirst = index < 2;

            return (
              <div
                key={index}
                className="
                  w-full
                  xl:w-[602px]
                  h-auto
                  md:h-[250px]
                  bg-[#10345D]
                  overflow-hidden
                  flex
                  flex-col
                  md:flex-row
                  rounded-none
                "
              >
                {/* CONTENT COLUMN */}
                <div
                  className={`
                    w-full
                    md:w-[301px]
                    h-[250px]
                    relative
                    p-7
                    bg-[linear-gradient(180deg,#1B72B7_0%,#58B5E8_100%)]
                    flex
                    flex-col
                    justify-between
                    ${
                      isContentFirst
                        ? "order-1 md:order-1"
                        : "order-1 md:order-2"
                    }
                  `}
                >
                  <div>
                    {/* Date */}
                    <p className="text-white/50 text-[14px] font-semibold">
                      {card.date}
                    </p>

                    {/* Title */}
                    <h3 className="mt-5 text-white text-[16px] leading-[1.4] font-semibold max-w-[240px]">
                      {card.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-end">
                    <button
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/50
                        flex
                        items-center
                        justify-center
                        hover:bg-white
                        group
                        transition-all
                        duration-300
                      "
                    >
                      <ArrowRight
                        size={18}
                        className="text-white group-hover:text-black transition"
                      />
                    </button>
                  </div>
                </div>

                {/* IMAGE COLUMN */}
                <div
                  className={`
                    w-full
                    md:w-[301px]
                    h-[250px]
                    relative
                    overflow-hidden
                    ${
                      isContentFirst
                        ? "order-2 md:order-2"
                        : "order-2 md:order-1"
                    }
                  `}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="mt-14 flex justify-center gap-3">
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className={`
                rounded-full
                transition-all
                duration-300
                ${
                  index === 0
                    ? "w-3 h-3 bg-[#8DCBFF]"
                    : "w-2.5 h-2.5 bg-[#5B84A6]/50"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}