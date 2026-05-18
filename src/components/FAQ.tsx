"use client";

import { useState } from "react";
import Image from "next/image";

// Icons
const ChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
  </svg>
);
const StackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-8-4.5v-9L12 3l8 4.5v9L12 21z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-8-4.5M12 12l8-4.5M12 12v9" />
  </svg>
);
const WIcon = () => (
  <span className="font-bold text-[12px]">W</span>
);
const PeopleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
  </svg>
);
const MonitorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4" />
  </svg>
);
const DiamondIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 12l10 10 10-10L12 2z" />
  </svg>
);
const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const categories = [
  { id: "all", label: "All" },
  { id: "tokenomics", label: "Tokenomics", icon: <ChartIcon /> },
  { id: "staking", label: "WAVE Staking", icon: <StackIcon /> },
  { id: "swap", label: "W Swap", icon: <WIcon /> },
  { id: "wayfinders", label: "Wayfinders", icon: <PeopleIcon /> },
  { id: "grants1", label: "Builders Grants", icon: <MonitorIcon /> },
  { id: "grants2", label: "Builders Grants", icon: <DiamondIcon /> },
];

const faqs = [
  {
    id: 1,
    category: "tokenomics",
    question: "What is the total supply of WCO token?",
    answer: "WCO has a fixed total supply of 1,000,000,000 tokens. 40% allocated to ecosystem growth, 20% to core team & early backers (vested), 15% public sale, 15% community rewards, and 10% liquidity provision."
  },
  {
    id: 2,
    category: "tokenomics",
    question: "How does WCO burning mechanism work?",
    answer: "WCO incorporates a deflationary burning mechanism where a portion of network transaction fees are systematically burned, permanently reducing the total supply over time."
  },
  {
    id: 3,
    category: "tokenomics",
    question: "Is there a lock-up for team tokens?",
    answer: "Yes, team and early backer tokens are subject to a strict vesting schedule to align long-term incentives with the project's success and community goals."
  },
  {
    id: 4,
    category: "staking",
    question: "How do I stake WAVE on W Swap?",
    answer: "To stake WAVE on W Swap, connect your wallet to the platform, navigate to the Staking section, select the WAVE pool, enter the desired amount, and confirm the transaction."
  },
  {
    id: 5,
    category: "staking",
    question: "What are the APY rates for WAVE?",
    answer: "APY rates for WAVE staking are dynamic and vary based on total network participation and current reward emissions. Please check the staking dashboard for real-time rates."
  },
  {
    id: 6,
    category: "staking",
    question: "Is slashing applied?",
    answer: "Yes, slashing may be applied to validators who act maliciously or experience prolonged downtime, to ensure network security and reliability."
  },
  {
    id: 7,
    category: "swap",
    question: "Which pairs are available on W Swap?",
    answer: "W Swap supports a wide range of pairs, primarily centered around WCO and WAVE, as well as major stablecoins and bridged assets from other networks."
  },
  {
    id: 8,
    category: "swap",
    question: "What are the trading fees on W Swap?",
    answer: "Trading fees on W Swap are highly competitive, with a standard fee of 0.3% per swap, a portion of which is distributed to liquidity providers."
  },
  {
    id: 9,
    category: "swap",
    question: "Does W Swap support limit orders?",
    answer: "Currently, W Swap operates as an Automated Market Maker (AMM) using market orders. Limit order functionality is planned for future platform upgrades."
  },
  {
    id: 10,
    category: "wayfinders",
    question: "What is the Wayfinders Program?",
    answer: "The Wayfinders Program is our community ambassador initiative, designed to reward active members who help grow, educate, and support the W Chain ecosystem."
  },
  {
    id: 11,
    category: "wayfinders",
    question: "How can I become a Wayfinder?",
    answer: "You can apply to become a Wayfinder through our community portal by demonstrating your active contribution to the W Chain ecosystem."
  },
  {
    id: 12,
    category: "grants1",
    question: "W Builders Grants Program details?",
    answer: "The W Builders Grants Program provides financial support and resources to developers and teams building innovative dApps and infrastructure on W Chain."
  },
  {
    id: 13,
    category: "grants1",
    question: "What's the evaluation criteria for grants?",
    answer: "Grants are evaluated based on project feasibility, technical merit, potential impact on the W Chain ecosystem, and the team's track record."
  },
  {
    id: 14,
    category: "grants2",
    question: "What benefits does W Plus membership offer?",
    answer: "W Plus membership provides exclusive benefits including reduced fees, priority support, early access to new features, and enhanced staking rewards."
  },
  {
    id: 15,
    category: "grants2",
    question: "How to subscribe to W Plus?",
    answer: "You can subscribe to W Plus through the W Chain dashboard using WCO tokens to unlock your premium account status."
  },
  {
    id: 16,
    category: "all",
    question: "Can I bridge WCO to other chains?",
    answer: "Yes, WCO can be bridged to several supported networks using the official Multi Validator Bridge, enabling seamless cross-chain interoperability."
  },
  {
    id: 17,
    category: "staking",
    question: "What is the minimal stake amount?",
    answer: "The minimal stake amount for WAVE varies by pool. Please refer to the specific staking pool details on the W Swap interface for exact requirements."
  },
  {
    id: 18,
    category: "wayfinders",
    question: "Are there Wayfinder regional hubs?",
    answer: "Yes, the Wayfinders Program operates through multiple regional hubs worldwide to facilitate localized events, support, and community growth."
  },
  {
    id: 19,
    category: "grants1",
    question: "How fast is grant distribution?",
    answer: "Grant distribution timelines vary based on project milestones, but initial funding is typically disbursed within 2-4 weeks after final approval."
  },
  {
    id: 20,
    category: "grants2",
    question: "Can I pay W Plus subscription with other assets?",
    answer: "Currently, W Plus subscriptions are exclusively payable using WCO tokens to drive utility and value within the native ecosystem."
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="w-full bg-[#020B2D]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px] overflow-hidden rounded-b-[50px]">
        {/* Background Image */}
        <Image
          src="/terms-bg.png"
          alt="FAQ Background"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.55)_35%,rgba(0,64,136,0.85)_100%)]
          "
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1
            className="
              text-[42px]
              md:text-[64px]
              font-bold
              text-[#4EA5FF]
              leading-tight
            "
          >
            Frequently Asked Questions
          </h1>

          <p
            className="
              mt-4
              text-white
              text-[16px]
              md:text-[24px]
              font-medium
              max-w-[950px]
              leading-relaxed
            "
          >
            Everything about tokenomics, W Swap, staking, Wayfinders, and
            next-gen DeFi on W Chain.
          </p>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="w-full max-w-[1206px] mx-auto mt-12 px-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-5 h-[35px] rounded-full text-[14px] font-semibold transition-all duration-300 border
                  ${isActive 
                    ? "bg-gradient-to-r from-[#2196F3] to-[#4EA5FF] text-white border-transparent" 
                    : "bg-transparent text-white border-[#4EA5FF]/40 hover:border-[#4EA5FF] hover:bg-white/5"
                  }
                `}
              >
                {cat.icon && (
                  <span className="text-white">
                    {cat.icon}
                  </span>
                )}
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= ACCORDION SECTION ================= */}
      <section className="w-full max-w-[900px] mx-auto mt-10 mb-20 px-4 space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div 
              key={faq.id} 
              className={`
                w-full rounded-[16px] border border-[#2A3A58] bg-[linear-gradient(180deg,#152342_0%,#0D172E_100%)] 
                overflow-hidden transition-all duration-300
              `}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white"
              >
                <span className="text-[16px] md:text-[18px] font-semibold">{faq.question}</span>
                <span className="text-white/60 ml-4"><ChevronDownIcon isOpen={isOpen} /></span>
              </button>
              
              <div 
                className={`
                  grid transition-all duration-300 ease-in-out
                  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2">
                    <div className="w-full h-[1px] bg-white/10 mb-4"></div>
                    <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {filteredFaqs.length === 0 && (
          <div className="text-center text-white/50 py-10">
            No questions available for this category yet.
          </div>
        )}
      </section>

      {/* ================= STATS & CTA SECTION ================= */}
      <section className="w-full h-[558px] mt-20 border-t border-[#4EA5FF]/30 bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] flex flex-col items-center justify-center relative z-10 pb-44 -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002F8D] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1440px] px-4 md:px-10 flex flex-col items-center">
          
          {/* Stats Container */}
          <div 
            className="
              w-full max-w-[1000px] rounded-[24px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-xl
              py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4
            "
          >
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#4EA5FF] text-[36px] md:text-[42px] font-bold leading-none">$212M+</h3>
              <p className="text-white text-[16px] md:text-[18px] mt-2">Total Value Locked</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#4EA5FF] text-[36px] md:text-[42px] font-bold leading-none">1.2M+</h3>
              <p className="text-white text-[16px] md:text-[18px] mt-2">Active Wallets</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#4EA5FF] text-[36px] md:text-[42px] font-bold leading-none">0.001s</h3>
              <p className="text-white text-[16px] md:text-[18px] mt-2">Block Finality</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#4EA5FF] text-[36px] md:text-[42px] font-bold leading-none">12+</h3>
              <p className="text-white text-[16px] md:text-[18px] mt-2">Ecosystem Partners</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              className="
                flex items-center gap-3 px-6 py-3 rounded-full text-white font-medium text-[15px]
                bg-[#2196F3]
                hover:opacity-90 transition-opacity
              "
            >
              Join the W DAO
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l4 4-4 4" />
              </svg>
            </button>
            <button 
              className="
                flex items-center gap-3 px-6 py-3 rounded-full text-white font-medium text-[15px]
                border border-[#4EA5FF]/30 bg-[#000D27]
                hover:bg-[#002F8D] transition-colors
              "
            >
              Docs
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
