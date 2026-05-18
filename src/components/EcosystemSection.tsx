"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ecosystemCards = [
  {
    title: "Layer 1",
    description:
      "A high-performance payments blockchain scalable, EVM-compatible, and enterprise-ready.",
    image: "/Ecosystem/Rectangle 1083.png",
    logo: "/Group 162908.png",
  },
  {
    title: "WCO",
    description:
      "W Chain's native utility and governance token — powering gas, staking, and ecosystem rewards.",
    image: "/Ecosystem/Rectangle 1084.png",
    logo: "/White Logo 1.png",
    badge: "IN PROGRESS",
  },
  {
    title: "W Swap",
    description:
      "A decentralised exchange built natively on W Chain — fast swaps, low fees.",
    image: "/Ecosystem/Rectangle 1085.png",
    logo: "/W Swap 1.png",
  },
  {
    title: "MultiValidator Bridge",
    description:
      "Secure cross-chain bridge move assets across networks with multi-validator verification.",
    image: "/Ecosystem/Rectangle 1085 (1).png",
    logo: "/Group 162909.png",
  },
  {
    title: "WAVE (Farm)",
    description:
      "Dual-layer yield farming earn WCO rewards through liquidity mining and staking.",
    image: "/Ecosystem/Rectangle 1090.png",
    logo: "/Wave 1.png",
  },
  {
    title: "W+",
    description:
      "Designed to foster user loyalty, trust restoration, and long-term engagement within the W Chain ecosystem.",
    image: "/Ecosystem/Rectangle 1092.png",
    logo: "/W Plus 1.png",
  },
  {
    title: "Wup Token Launchpad",
    description: "50% Completed",
    image: "/Ecosystem/Rectangle 1094.png",
  },
  {
    title: "Layer 2",
    description: "Planned",
    image: "/Ecosystem/Rectangle 1096.png",
  },
];

export default function EcosystemSection() {
  const VISIBLE = 3;
  const CARD_WIDTH = 390; // px
  const GAP = 32; // px (gap-8)

  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i >= ecosystemCards.length - 1 ? 0 : i + 1));
    }, 10000); // Scroll every 10 seconds continuously

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    const maxIndex = Math.max(0, ecosystemCards.length - VISIBLE);
    const displayIndex = Math.min(index, maxIndex);
    const translate = -(displayIndex * (CARD_WIDTH + GAP));
    trackRef.current.style.transform = `translateX(${translate}px)`;
  }, [index]);

  return (
    <section
      className="w-full py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#02142B 0%, #083a7a 45%, #0B79C8 100%)",
      }}
    >
      {/* Heading */}
      <div className="text-center px-6">
        <h2 className="text-[42px] md:text-[64px] font-bold text-[#5CB8FF]">
          The W Chain Ecosystem
        </h2>

        <p className="mt-4 text-white/75 text-[18px] max-w-[820px] mx-auto">
          Built for seamless, high-volume transactions — secure, transparent,
          and production-ready.
        </p>
      </div>

      {/* Cards Slider */}
      <div className="relative mt-20 overflow-hidden">
        {/* Gradient Fade Left */}
        <div
          className="absolute left-0 top-0 z-20 h-full w-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,20,43,1), rgba(2,20,43,0))",
          }}
        />

        {/* Gradient Fade Right */}
        <div
          className="absolute right-0 top-0 z-20 h-full w-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(-90deg, rgba(2,20,43,1), rgba(2,20,43,0))",
          }}
        />

        {/* Slider Viewport */}
        <div className="w-full overflow-hidden px-6 flex flex-col items-center">
          <div className="w-full max-w-[1234px] overflow-hidden">
            {/* Track */}
            <div
              ref={trackRef}
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{ width: `${ecosystemCards.length * (CARD_WIDTH + GAP)}px` }}
            >
              {ecosystemCards.map((card, i) => (
                <div
                  key={i}
                  className="w-[390px] h-[400px] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col shrink-0"
                  style={{ width: `${CARD_WIDTH}px` }}
                >
                  <div className="relative h-[250px] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {card.logo && (
                      <div className="absolute top-5 left-5 z-10">
                        <Image
                          src={card.logo}
                          alt="logo"
                          width={70}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    )}

                    {card.badge && (
                      <div className="absolute top-5 right-5 bg-[#0B1020] text-white text-[12px] font-semibold px-4 py-2 rounded-full">
                        {card.badge}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom styled like the Figma screenshot */}
                  <div className="flex-1 bg-[#4EA5FF] px-6 py-6 flex flex-col justify-center">
                    <h3 className="text-[#020B2D] text-[20px] font-bold">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-white text-[14px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8 Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {ecosystemCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === i
                    ? "bg-white scale-110"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
