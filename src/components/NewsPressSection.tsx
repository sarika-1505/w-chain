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
    <section className="w-full bg-[#02142B] py-24 px-6 overflow-hidden">
      <div className="max-w-[1260px] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[44px] md:text-[64px] font-bold text-[#63BFFF]">
            News & Press
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center">
          {newsCards.map((card, index) => {
            const isContentFirst = index < 2;

            return (
              <div
                key={index}
                className="
                  w-full
                  max-w-[602px]
                  h-auto
                  md:h-[250px]
                  bg-[#10345D]
                  overflow-hidden
                  flex
                  flex-col
                  md:flex-row
                  rounded-[16px]
                  shadow-[0_0_20px_rgba(0,0,0,0.15)]
                "
              >
                {/* CONTENT COLUMN */}
                <div
                  className={`
                    w-full
                    md:w-[301px]
                    h-[250px]
                    relative
                    p-6
                    bg-[linear-gradient(180deg,#1B72B7_0%,#58B5E8_100%)]
                    flex
                    flex-col
                    justify-between
                    ${isContentFirst ? "order-1 md:order-1" : "order-1 md:order-2"}
                  `}
                >
                  <div>
                    {/* Date */}
                    <p className="text-white/50 text-[14px] font-semibold">
                      {card.date}
                    </p>

                    {/* Title */}
                    <h3 className="mt-4 text-white text-[15px] leading-[1.35] font-medium">
                      {card.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-end">
                    <button
                      className="
                        w-8
                        h-8
                        rounded-full
                        border
                        border-white/50
                        flex
                        items-center
                        justify-center
                        hover:bg-white
                        group
                        transition
                      "
                    >
                      <ArrowRight
                        size={16}
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
                    ${isContentFirst ? "order-2 md:order-2" : "order-2 md:order-1"}
                  `}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover pointer-events-none"
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
                transition
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
