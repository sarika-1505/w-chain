"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SUPPLY_CARDS = [
  {
    id: 1,
    icon: "/Group 163353.png",
    title: "Annual Reward Budget",
    description: "$400,000 Equivalent In WAVE Tokens Per Year (Based On A Target Price Of $0.10 Per WAVE).",
  },
  {
    id: 2,
    icon: "/Group 163361.png",
    title: "Base Annual Emission (for Stakers)",
    description: "4,000,000 WAVE Tokens Per Year, Specifically Allocated To LP Stakers And WAVE/WCO Stakers.",
  },
  {
    id: 3,
    icon: "/Group 163362.png",
    title: "Treasury Emission",
    description: "An Additional 10% Of The Base Annual Emission (I.E. 400,000 WAVE) Is Automatically Minted Directly To The Protocol Treasury On Pool Sync, Outside Of The Normal Emission Dedicated To Stakers.",
  },
  {
    id: 4,
    icon: "/Group 163364.png",
    title: "Total Annual WAVE Minted",
    description: "4,000,000 WAVE (For Stakers) + 400,000 WAVE (For Treasury) = 4,400,000 WAVE Per Year",
  },
  {
    id: 5,
    icon: "/Group 163365.png",
    title: "Supply Model",
    description: "Continuously Emitted, With The Emission Rate Designed To Align With The Annual Budget. The Total Circulating Supply Will Grow Over Time, Offset By Potential Burning Mechanisms.",
  }
];

export default function WaveTokenomics() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Calculate scroll amount dynamically based on the first card width + gap
        const scrollAmount = scrollRef.current.children[0] ? scrollRef.current.children[0].clientWidth + 24 : 340;
        
        let newIndex = activeIndex + 1;

        if (scrollLeft + clientWidth >= scrollWidth - 10 || newIndex >= SUPPLY_CARDS.length) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setActiveIndex(0);
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          setActiveIndex(newIndex);
        }
      }
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="w-full bg-[#020B2D] min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px] overflow-hidden rounded-b-[50px]">
        
        {/* Background Image */}
        <Image
          src="/wavetoken.png"
          alt="Wave Tokenomics Background"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(1,1,1,0.8)_0%,rgba(0,0,0,0.6)_50%,rgba(0,64,136,0.85)_100%)]
          "
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mt-8">
          
          <h2 className="text-white text-[16px] md:text-[18px] font-medium mb-4">
            Wave Tokenomics
          </h2>
          
          <h1
            className="
              text-[42px]
              md:text-[64px]
              font-bold
              text-[#4EA5FF]
              leading-tight
            "
          >
            Fuelling W-Swap Incentives
          </h1>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full py-16 px-4 md:px-10 flex flex-col items-center">
        
        {/* Intro Text */}
        <p className="text-white text-[16px] md:text-[20px] font-light leading-relaxed text-center max-w-[1000px] mb-16">
          This page details the tokenomics of WAVE, the native reward and incentive token
          designed to drive liquidity, user engagement, and ecosystem growth for the W-Swap
          decentralized exchange (DEX) on the W-Chain blockchain
        </p>

        {/* Token Overview Card */}
        <div className="relative w-full max-w-[1205px] rounded-[20px] p-[1px] overflow-hidden">
          {/* Border Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8BC9D4_0%,#FFFFFF_50%,#8BC9D4_100%)] opacity-50" />
          
          {/* Inner Card content */}
          <div className="relative w-full h-full rounded-[20px] bg-gradient-to-b from-[#FFFFFF]/5 to-[#1C606B]/40 backdrop-blur-xl p-8 md:p-12 lg:p-16 flex flex-col">
            
            <h3 className="text-[#4EA5FF] text-[24px] font-bold mb-10">
              Token Overview
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
              
              {/* Left Column */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="text-white text-[16px] md:text-[18px]">
                    <strong className="font-semibold">Token Name:</strong> <span className="font-light">WAVE</span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="text-white text-[16px] md:text-[18px]">
                    <strong className="font-semibold">Token Symbol:</strong> <span className="font-light">$WAVE</span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="text-white text-[16px] md:text-[18px]">
                    <strong className="font-semibold">Blockchain:</strong> <span className="font-light">W Chain (Layer 1)</span>
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="text-white text-[16px] md:text-[18px]">
                    <strong className="font-semibold">Token Standard:</strong> <span className="font-light">WRC-20 (W Chain equivalent of ERC-20)</span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="text-white text-[16px] md:text-[18px] leading-relaxed">
                    <strong className="font-semibold">Purpose:</strong> <span className="font-light">To incentivize liquidity provision on W-Swap,
                    reward long-term commitment through staking, and serve as a future governance token, creating a
                    robust tokenomic flywheel for the W Chain ecosystem.</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Coins Image */}
            <div className="w-full flex justify-center mt-12 mb-0 relative h-[350px]">
              <Image 
                src="/wco-coin.png" 
                alt="Wave Tokens" 
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= TOTAL SUPPLY SECTION ================= */}
      <section className="w-full py-20 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#002B7F_100%)] border-t border-white/5 overflow-hidden">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-12 px-4">
          Total Supply & Emission Structure
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[1440px] mx-auto">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pt-4 px-4 md:px-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SUPPLY_CARDS.map((card) => (
              <div 
                key={card.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] min-h-[340px] rounded-[22px] p-[1.5px] relative bg-gradient-to-b from-[#4EA5FF]/80 via-[#4EA5FF]/20 to-[#4EA5FF]/5 shadow-[0_0_20px_rgba(78,165,255,0.15)] transition-transform duration-300"
              >
                {/* Card inner */}
                <div className="w-full h-full bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[20px] p-6 md:p-8 flex flex-col">
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/50 flex items-center justify-center mb-6 relative">
                    <Image src={card.icon} alt={card.title} width={24} height={24} className="object-contain" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-4 leading-snug">
                    {card.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-4 mb-12">
            {SUPPLY_CARDS.map((_, i) => (
              <div 
                key={i} 
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${activeIndex === i ? 'bg-[#4EA5FF]' : 'bg-[#1A3B66]'}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ================= EMISSION ALLOCATION SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] border-t border-white/5">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-6">
          Emission Allocation Strategy (Per Block)
        </h2>
        
        <div className="text-center text-white text-[16px] md:text-[18px] leading-relaxed max-w-[800px] mb-12">
          Based on a 2-second block time (15,768,000 blocks per year):<br />
          Total Base Emission (for LP and WAVE/WCO Stakers) per block: ≈<br />
          <strong className="font-bold">0.254 WAVE/block (4,000,000 WAVE / 15,768,000 blocks)</strong>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block w-full max-w-[1200px] overflow-x-auto">
          <table className="w-full text-left text-white border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 text-[#4EA5FF] text-[16px] md:text-[18px] font-bold">
                <th className="py-6 px-4 md:px-8 border-r border-white/10">Category</th>
                <th className="py-6 px-4 md:px-8 border-r border-white/10 w-[200px]">% Allocation<br />(of 4M base)</th>
                <th className="py-6 px-4 md:px-8 border-r border-white/10">WAVE/Block Emissions</th>
                <th className="py-6 px-4 md:px-8">Annual WAVE Emissions (Approx.)</th>
              </tr>
            </thead>
            <tbody className="text-[15px] md:text-[16px]">
              <tr className="border-b border-white/10">
                <td className="py-6 px-4 md:px-8 border-r border-white/10 font-bold text-[#4EA5FF]">LP Stakers</td>
                <td className="py-6 px-4 md:px-8 border-r border-white/10">40%</td>
                <td className="py-6 px-4 md:px-8 border-r border-white/10">≈ 0.102 WAVE</td>
                <td className="py-6 px-4 md:px-8">1,600,000 WAVE</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 px-4 md:px-8 border-r border-white/10 font-bold text-[#4EA5FF]">WAVE/WCO Stakers</td>
                <td className="py-6 px-4 md:px-8 border-r border-white/10">60%</td>
                <td className="py-6 px-4 md:px-8 border-r border-white/10">≈ 0.152 WAVE</td>
                <td className="py-6 px-4 md:px-8">2,400,000 WAVE</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-6 px-4 md:px-8 border-r border-white/10 font-bold text-[#4EA5FF] uppercase">TOTAL MINTED per Block</td>
                <td className="py-6 px-4 md:px-8 border-r border-white/10">100%</td>
                <td className="py-6 px-4 md:px-8 border-r border-white/10">≈ 0.254 WAVE</td>
                <td className="py-6 px-4 md:px-8">4,000,000 WAVE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="flex lg:hidden flex-col gap-4 w-full max-w-[1200px]">
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-6 border border-white/10 flex flex-col gap-4 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-[#4EA5FF] font-bold text-[16px]">LP Stakers</span>
              <span className="text-white font-bold text-[15px]">40%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">WAVE/Block Emissions</span>
              <span className="text-white/80 text-[14px]">≈ 0.102 WAVE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">Annual WAVE Emissions</span>
              <span className="text-white/80 text-[14px]">1,600,000 WAVE</span>
            </div>
          </div>

          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-6 border border-white/10 flex flex-col gap-4 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-[#4EA5FF] font-bold text-[16px]">WAVE/WCO Stakers</span>
              <span className="text-white font-bold text-[15px]">60%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">WAVE/Block Emissions</span>
              <span className="text-white/80 text-[14px]">≈ 0.152 WAVE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">Annual WAVE Emissions</span>
              <span className="text-white/80 text-[14px]">2,400,000 WAVE</span>
            </div>
          </div>

          <div className="bg-[#4EA5FF]/10 backdrop-blur-sm rounded-[16px] p-6 border border-[#4EA5FF]/30 flex flex-col gap-4 shadow-[0_0_15px_rgba(78,165,255,0.15)]">
            <div className="flex justify-between items-center border-b border-[#4EA5FF]/20 pb-3">
              <span className="text-[#4EA5FF] font-bold text-[16px] uppercase">TOTAL MINTED per Block</span>
              <span className="text-white font-bold text-[15px]">100%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">WAVE/Block Emissions</span>
              <span className="text-white/80 text-[14px]">≈ 0.254 WAVE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">Annual WAVE Emissions</span>
              <span className="text-white/80 text-[14px]">4,000,000 WAVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= UTILITY OF WAVE SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#002055_100%)] border-t border-white/5">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-6">
          Utility of WAVE
        </h2>
        
        <p className="text-center text-white text-[16px] md:text-[20px] leading-relaxed max-w-[1000px] mb-20">
          WAVE tokens are designed with multi-faceted utility to drive engagement and value
          within the W-Swap and broader W-Chain ecosystem:
        </p>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 w-24 h-24 rounded-full border border-[#4EA5FF]/30 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)]">
              <Image src="/Group 163377.png" alt="Liquidity" width={40} height={40} className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-3">Liquidity Mining Rewards</h3>
              <p className="text-white/80 text-[15px] leading-relaxed font-light">
                WAVE is primarily earned by users who stake their WLP (WSWAP Liquidity Provider) tokens, incentivizing them to provide crucial liquidity to W-Swap trading pairs.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 w-24 h-24 rounded-full border border-[#4EA5FF]/30 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)]">
              <Image src="/Group 163382.png" alt="Staking" width={40} height={40} className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-3">Staking Rewards</h3>
              <p className="text-white/80 text-[15px] leading-relaxed font-light">
                Users can stake their WAVE tokens in a single-asset staking pool to earn additional WAVE, promoting long-term holding and reducing selling pressure. This aims for an attractive APY (e.g., ~120% target, dynamic based on TVL).
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 w-24 h-24 rounded-full border border-[#4EA5FF]/30 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)]">
              <Image src="/Group 163386.png" alt="Trading Pair" width={40} height={40} className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-3">Trading Pair</h3>
              <p className="text-white/80 text-[15px] leading-relaxed font-light">
                WAVE will be tradable against WCO (the native W-Chain token) and other assets on W-Swap, increasing trading volume and utility
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 w-24 h-24 rounded-full border border-[#4EA5FF]/30 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)]">
              <Image src="/Group 163387.png" alt="Future Governance" width={40} height={40} className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-3">Future Governance</h3>
              <p className="text-white/80 text-[15px] leading-relaxed font-light">
                As the ecosystem matures, WAVE holders will gain decentralized autonomous organization (DAO) governance rights, allowing them to vote on key protocol parameters, emission adjustments, treasury usage, and new feature implementations
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="shrink-0 w-24 h-24 rounded-full border border-[#4EA5FF]/30 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)]">
              <Image src="/Group 163390.png" alt="Ecosystem Integration" width={40} height={40} className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-3">Ecosystem Integration</h3>
              <p className="text-white/80 text-[15px] leading-relaxed font-light">
                Potential for WAVE to be used as collateral in future lending protocols (e.g., L-WAVE), or integrated into other dApps on W-Chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE ACCRUAL MECHANISMS ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] border-t border-white/5">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-4">
          Value Accrual Mechanisms
        </h2>
        <p className="text-center text-white text-[16px] md:text-[18px] leading-relaxed max-w-[800px] mb-12">
          The value of WAVE is designed to accrue through several interconnected mechanisms:
        </p>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0D1E3F] rounded-[20px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/30 flex items-center justify-center mb-6">
              <Image src="/Group 163303.png" alt="Liquidity Demand" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Demand from Liquidity<br />Providers</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              LPs are incentivized to earn WAVE, creating constant demand.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#0D1E3F] rounded-[20px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/30 flex items-center justify-center mb-6">
              <Image src="/Group 163361.png" alt="Staking Demand" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Staking Demand</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              A high target APY for WAVE staking encourages users to hold and stake their tokens, reducing circulating supply.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#0D1E3F] rounded-[20px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/30 flex items-center justify-center mb-6">
              <Image src="/Group 163386.png" alt="Trading Volume" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Trading Volume</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Increased trading activity on W-Swap, particularly in WAVE pairs, contributes to its perceived value and liquidity.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#0D1E3F] rounded-[20px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/30 flex items-center justify-center mb-6">
              <Image src="/Group 163362.png" alt="Treasury Accumulation" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Treasury Accumulation</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              The protocol treasury accumulates 10% of all WAVE emissions, which can be used to lock WCO liquidity or for strategic investments, strengthening the ecosystem&apos;s backbone.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-[#0D1E3F] rounded-[20px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/30 flex items-center justify-center mb-6">
              <Image src="/Group 163387.png" alt="Governance Influence" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Governance Influence</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              The power to shape the future of W-Swap and the broader W-Chain ecosystem provides intrinsic value to WAVE
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-[#0D1E3F] rounded-[20px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/30 flex items-center justify-center mb-6">
              <Image src="/Group 163390.png" alt="Ecosystem Growth" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Ecosystem Growth</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              As W-Chain and W-Swap grow in adoption and TVL, the utility and demand for WAVE are expected to rise.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DEFLATIONARY MECHANISMS ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] border-t border-white/5">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-4">
          Deflationary Mechanisms (Future Possibilities)
        </h2>
        <p className="text-center text-white text-[16px] md:text-[18px] leading-relaxed max-w-[900px] mb-12">
          To counter potential inflation from continuous emissions and create long-term scarcity,<br className="hidden md:block" />
          future deflationary mechanisms could be introduced via DAO governance:
        </p>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[20px] p-8 border border-[#4EA5FF]/40 shadow-[0_0_15px_rgba(78,165,255,0.1)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/40 flex items-center justify-center mb-6">
              <Image src="/Group 163364.png" alt="Buyback and Burn" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Buyback and Burn</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              A portion of W-Swap trading fees or protocol revenue could be used to buy back WAVE tokens from the market and permanently remove them from circulation.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[20px] p-8 border border-[#4EA5FF]/40 shadow-[0_0_15px_rgba(78,165,255,0.1)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/40 flex items-center justify-center mb-6">
              <Image src="/Group 163365.png" alt="Fee Burns" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Fee Burns</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              A small percentage of transaction fees (e.g., from swaps or bridge transfers involving WAVE) could be directly burned.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[20px] p-8 border border-[#4EA5FF]/40 shadow-[0_0_15px_rgba(78,165,255,0.1)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/40 flex items-center justify-center mb-6">
              <Image src="/Group 163353.png" alt="Exclusive Access Burns" width={24} height={24} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3 leading-snug">Exclusive Access Burns</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Requiring a small amount of WAVE to be burned for access to premium features or exclusive NFTs.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC IMPORTANCE ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] border-t border-white/5 pb-24">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-4">
          Strategic Importance for W Chain and WCO
        </h2>
        <p className="text-center text-white text-[16px] md:text-[18px] leading-relaxed mb-16">
          The WAVE tokenomics model is strategically designed to:
        </p>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Block 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[120px] h-[120px] rounded-full border border-white/10 flex items-center justify-center mb-6 bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <Image src="/Group 163419.png" alt="Deepen WCO Liquidity" width={50} height={50} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[20px] font-bold mb-3 leading-snug">Deepen WCO Liquidity</h4>
            <p className="text-white/80 text-[15px] leading-relaxed font-light px-4">
              By incentivizing WAVE/WCO liquidity pools and through treasury operations locking WCO, WAVE directly supports the W Chain native token.
            </p>
          </div>
          {/* Block 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[120px] h-[120px] rounded-full border border-white/10 flex items-center justify-center mb-6 bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <Image src="/Group 163420.png" alt="Drive On-Chain Activity" width={50} height={50} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[20px] font-bold mb-3 leading-snug">Drive On-Chain Activity</h4>
            <p className="text-white/80 text-[15px] leading-relaxed font-light px-4">
              Staking, rebalancing, and swapping of WAVE generate continuous transactions on W Chain.
            </p>
          </div>
          {/* Block 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[120px] h-[120px] rounded-full border border-white/10 flex items-center justify-center mb-6 bg-[radial-gradient(circle_at_center,rgba(78,165,255,0.1)_0%,transparent_100%)] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <Image src="/Group 162908.png" alt="Foster Community Loyalty" width={50} height={50} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[20px] font-bold mb-3 leading-snug">Foster Community Loyalty</h4>
            <p className="text-white/80 text-[15px] leading-relaxed font-light px-4">
              The gamified yield model and transparent governance build a strong, committed user base for the W Chain ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full pt-24 pb-44 px-4 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#002B7F_100%)] border-t border-white/5 relative z-10 -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002B7F] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1000px] bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[24px] p-10 md:p-16 border border-[#4EA5FF]/30 shadow-[0_0_30px_rgba(78,165,255,0.1)] flex flex-col items-center text-center">
          <h2 className="text-[#4EA5FF] text-[32px] md:text-[44px] font-bold mb-6">
            Connect, Collaborate and Thrive
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed max-w-[800px] mb-10">
            Ready to be part of something big? The W Chain community is waiting for you! 
            Connect with fellow enthusiasts, contribute to exciting projects, and help shape the future 
            of finance. Join us today and let&apos;s build the decentralized world together!
          </p>
          <button className="flex items-center gap-3 bg-[linear-gradient(90deg,#2196F3_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
            Join the Revolution
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16l4-4-4-4" />
              <path d="M8 12h8" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

/* Check Icon Component */
function CheckIcon() {
  return (
    <div className="min-w-[20px] mt-1">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#2196F3" />
        <path d="M7 12L10.5 15.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
