import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WChainEvolution() {
  return (
    <div className="w-full bg-[#010514] flex flex-col items-center font-Montserrat pt-32 min-h-screen">
      
      <div className="w-full max-w-[993px] flex flex-col items-center relative z-10 px-4">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-[40px] md:text-[56px] font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
            The W Chain Evolution
          </h1>
          <p className="text-white/80 text-[18px] md:text-[20px]">
            Q3 2025 – Q3 2026 | Building the Future of DeFi
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Central Vertical Line */}
          <div className="absolute top-0 bottom-[-100px] left-1/2 -translate-x-1/2 w-[2px] bg-[#4EA5FF]/30 hidden md:block" />

          {/* Timeline Items */}
          <div className="flex flex-col w-full gap-16 md:gap-24 relative">
            
            {/* Item 1 - Left */}
            <div className="flex flex-col md:flex-row items-center w-full relative">
              <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-16">
                <EvolutionCard 
                  quarter="Q3 2025"
                  title="W Builders Product Showcase"
                  items={[
                    { icon: CodeIcon, text: "Three developer-built projects debut on W Chain" },
                    { icon: UsersIcon, text: "Community vote to allocate final grant funding" }
                  ]}
                />
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#010514] border-2 border-[#4EA5FF]/30 items-center justify-center z-10 shadow-[0_0_15px_rgba(78,165,255,0.4)]">
                <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

            {/* Item 2 - Right */}
            <div className="flex flex-col md:flex-row items-center w-full relative">
              <div className="w-full md:w-1/2 hidden md:block" />
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#010514] border-2 border-[#4EA5FF]/30 items-center justify-center z-10 shadow-[0_0_15px_rgba(78,165,255,0.4)]">
                <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
              </div>
              <div className="w-full md:w-1/2 flex justify-start md:pl-16">
                <EvolutionCard 
                  quarter="Q4 2025"
                  title="WCO Staking & SOL Pair Launch"
                  items={[
                    { icon: LightningIcon, text: "Direct WCO staking enabled on W Swap" },
                    { icon: LockIcon, text: "SOL/WCO farming pool goes live with incentives" }
                  ]}
                />
              </div>
            </div>

            {/* Item 3 - Left */}
            <div className="flex flex-col md:flex-row items-center w-full relative">
              <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-16">
                <EvolutionCard 
                  quarter="Q1 2026"
                  title="W+ (Premium Accounts) Phase 1"
                  items={[
                    { icon: UserIcon, text: "Initial access and testing for internal & key stakeholders" },
                    { icon: SettingsIcon, text: "Filling the gaps — infrastructure improvements" }
                  ]}
                />
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#010514] border-2 border-[#4EA5FF]/30 items-center justify-center z-10 shadow-[0_0_15px_rgba(78,165,255,0.4)]">
                <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

            {/* Item 4 - Right */}
            <div className="flex flex-col md:flex-row items-center w-full relative">
              <div className="w-full md:w-1/2 hidden md:block" />
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#010514] border-2 border-[#4EA5FF]/30 items-center justify-center z-10 shadow-[0_0_15px_rgba(78,165,255,0.4)]">
                <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
              </div>
              <div className="w-full md:w-1/2 flex justify-start md:pl-16">
                <EvolutionCard 
                  quarter="Q2 2026"
                  title="Product Rollouts Begin"
                  items={[
                    { icon: RocketIcon, text: "Expanded DeFi suite launch" },
                    { icon: HandshakeIcon, text: "Strategic partnerships announcement" }
                  ]}
                />
              </div>
            </div>

            {/* Item 5 - Left */}
            <div className="flex flex-col md:flex-row items-center w-full relative">
              <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-16">
                <EvolutionCard 
                  quarter="Q3 2026"
                  title="Expansion & Ecosystem Growth"
                  items={[
                    { icon: GlobeIcon, text: "Cross-chain expansion" },
                    { icon: NetworkIcon, text: "Community governance launch" }
                  ]}
                />
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#010514] border-2 border-[#4EA5FF]/30 items-center justify-center z-10 shadow-[0_0_15px_rgba(78,165,255,0.4)]">
                <div className="w-3 h-3 rounded-full bg-[#4EA5FF]" />
              </div>
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>

          </div>
        </div>
      </div>
      {/* Summary Card Section */}
      <section className="w-full flex flex-col items-center py-24 z-10 px-4 bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] relative">
        
        {/* Dashed lines behind the card */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] border-l-[2px] border-dashed border-[#4EA5FF]/50" />
          <div className="absolute top-[20%] right-1/2 w-[603px] h-[2px] border-t-[2px] border-dashed border-[#4EA5FF]/50" />
        </div>

        <div className="w-full max-w-[1206px] h-[750px] rounded-[20px] border border-[#8BC9D4]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(28,96,107,0.2)_100%)] backdrop-blur-md flex flex-col items-center justify-evenly p-12 md:px-20 md:py-16 relative z-10 shadow-[0_0_50px_rgba(78,165,255,0.05)] text-center">
          
          <div className="flex flex-col gap-4 w-full max-w-[900px]">
            <h2 className="text-[32px] md:text-[44px] font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#4EA5FF_100%)] tracking-tight">
              Q3 & Q4 2025 – Upgrades
            </h2>
            <p className="text-white/90 text-[18px] md:text-[22px] font-medium">
              W Builders Showcase • WCO Staking • SOL Pair • W+ Phase 1
            </p>
          </div>

          <div className="w-full max-w-[900px] h-[1px] bg-[#4EA5FF]/30" />

          <div className="flex flex-col gap-4 w-full max-w-[900px]">
            <h2 className="text-[32px] md:text-[44px] font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#4EA5FF_100%)] tracking-tight">
              Q1 2026 – Filling the Gaps
            </h2>
            <p className="text-white/90 text-[18px] md:text-[22px] font-medium">
              Infrastructure, security, and scalability enhancements
            </p>
          </div>

          <div className="w-full max-w-[900px] h-[1px] bg-[#4EA5FF]/30" />

          <div className="flex flex-col gap-4 w-full max-w-[900px]">
            <h2 className="text-[32px] md:text-[44px] font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#4EA5FF_100%)] leading-[1.2] tracking-tight">
              Q2 & Q3 2026 – Product Rollouts,<br/>Expansion & Partnerships
            </h2>
            <p className="text-white/90 text-[18px] md:text-[22px] font-medium">
              Full DeFi suite, cross-chain bridges, ecosystem partnerships
            </p>
          </div>

          <Link
            href="#"
            className="mt-4 flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
          >
            Pre Order Now
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* WCNexus Banner */}
      <section className="w-full flex flex-col items-center relative z-10 pt-10 pb-44 bg-[#010514] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#010514] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1440px] h-[774px] relative flex flex-col items-center justify-center bg-[#010514]">
          <Image
            src="/Rectangle 1.png" 
            alt="Nexus Background"
            fill
            className="object-cover opacity-30 object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010514] via-[#010514]/80 to-[#002F8D]" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-10 w-[400px] h-[200px] relative">
              <Image src="/W Chain-Transparent 1.png" alt="W Logo" fill className="object-contain drop-shadow-[0_0_50px_rgba(78,165,255,0.3)]" />
            </div>
            <h2 className="text-[40px] md:text-[56px] font-bold mb-4">
              <span className="text-[#4EA5FF]">WCNexus</span> <span className="text-white">Quarter 1 Update</span>
            </h2>
            <p className="text-white/80 text-[20px] md:text-[24px] font-medium mb-16">
              January - March 2026
            </p>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4EA5FF]" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ---------------- Components & Icons ----------------

function EvolutionCard({ quarter, title, items }: { quarter: string, title: string, items: { icon: any, text: string }[] }) {
  return (
    <div className="w-full max-w-[420px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] backdrop-blur-md p-8 shadow-[0_0_30px_rgba(78,165,255,0.05)] hover:scale-[1.02] transition-transform">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4EA5FF]/30 bg-[#0F214A]/50 mb-6">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4EA5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="text-[#4EA5FF] text-[13px] font-semibold">{quarter}</span>
      </div>
      <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-4">{title}</h3>
      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1 shrink-0">
              <item.icon />
            </div>
            <p className="text-white/70 text-[14px] leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const NetworkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
