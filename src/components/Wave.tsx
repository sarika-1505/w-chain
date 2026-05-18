import Image from "next/image";
import Link from "next/link";

const POOLS_DATA = [
  { name: "WCO (Single Pool)", icons: ["W"], multiplier: "1.0x", apr: "0.37%", tvl: "$78,656.93", vol: "$1,890.11" },
  { name: "WAVE/WCO", icons: ["WV", "W"], multiplier: "2.5x", apr: "17.593%", tvl: "$55,205.33", vol: "$1,222.32" },
  { name: "USDTWCO", icons: ["T", "W"], multiplier: "2.5x", apr: "12.508%", tvl: "$19,411.89", vol: "$601.56" },
  { name: "USDCWCO", icons: ["$", "W"], multiplier: "1.0x", apr: "13.973%", tvl: "$4,865.41", vol: "$62.52" },
  { name: "SOL/WCO", icons: ["S", "W"], multiplier: "1.0x", apr: "25.675%", tvl: "$3,782.73", vol: "$0" },
  { name: "DOGE/WCO", icons: ["D", "W"], multiplier: "1.0x", apr: "27.025%", tvl: "$3,593.75", vol: "$0" },
  { name: "XRPWCO", icons: ["X", "W"], multiplier: "1.0x", apr: "27.97%", tvl: "$3,472.25", vol: "$3.71" },
  { name: "WHB20270831/WCO", icons: ["W", "W"], multiplier: "1.0x", apr: "3.304%", tvl: "$29,397.08", vol: "$0" },
];

export default function Wave() {
  return (
    <div className="w-full bg-[#020B2D] flex flex-col items-center font-Montserrat pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden bg-[#020B2D]">
        {/* Background Image */}
        <Image
          src="/Group 163079.png"
          alt="Wave Background"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,45,0.9)_0%,rgba(2,11,45,0.4)_50%,rgba(2,11,45,0.1)_100%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1200px] px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start max-w-[650px]">
            <h1 className="text-[#4EA5FF] text-[40px] md:text-[56px] font-bold leading-[1.1] md:tracking-[-0.02em] mb-10">
              WAVE <span className="inline-block relative top-[4px] ml-2">🌊</span>
              <br />
              The DeFi Engine
              <br />
              Powering W Chain
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
              >
                Launch WAVE
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-transparent border border-white/40 hover:bg-white/10 transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[15px]"
              >
                Tokenomics
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-transparent border border-white/40 hover:bg-white/10 transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[15px]"
              >
                Get Started
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex-1 flex justify-end items-center relative z-10 mt-12 md:mt-0 w-full">
            <div className="relative w-[300px] h-[150px] md:w-[500px] md:h-[250px]">
              <Image
                src="/3. W Chain-Product Page-Wave.svg"
                alt="WAVE Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= LIVE ECOSYSTEM PULSE ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-[#4EA5FF] text-[36px] md:text-[48px] font-bold mb-16 text-center">
          Live Ecosystem Pulse
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-[1200px]">
          {/* Circle 1 */}
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[32px] md:text-[44px] font-bold mb-2">184M</h3>
            <p className="text-white/80 text-[13px] md:text-[14px]">Total Value Locked (M)</p>
          </div>
          {/* Circle 2 */}
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[32px] md:text-[44px] font-bold mb-2">126M</h3>
            <p className="text-white/80 text-[13px] md:text-[14px]">WAVE Staked</p>
          </div>
          {/* Circle 3 */}
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[32px] md:text-[44px] font-bold mb-2">15240</h3>
            <p className="text-white/80 text-[13px] md:text-[14px]">Active Stakers</p>
          </div>
          {/* Circle 4 */}
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[32px] md:text-[44px] font-bold mb-2">23.4%</h3>
            <p className="text-white/80 text-[13px] md:text-[14px]">APY (avg)</p>
          </div>
        </div>
      </section>

      {/* ================= STAKE LP TOKENS ================= */}
      <section className="w-full pt-10 pb-20 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[44px] font-bold mb-16 text-center leading-[1.4] max-w-[800px]">
          Stake LP tokens, Harvest yield.
          <br />
          <span className="text-[#84C2FF]">Ride the liquidity tide.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1000px]">
          {/* Card 1 */}
          <div className="flex-1 min-w-[280px] bg-[#071330] border border-[#4EA5FF]/20 rounded-[16px] py-10 px-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-2">Total Value Locked</h3>
            <p className="text-white text-[18px]">$198,385.41</p>
          </div>
          
          {/* Card 2 */}
          <div className="flex-1 min-w-[280px] bg-[#071330] border border-[#4EA5FF]/20 rounded-[16px] py-10 px-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-2">Total Staked</h3>
            <p className="text-white text-[18px]">$0.00</p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 min-w-[280px] bg-[#071330] border border-[#4EA5FF]/20 rounded-[16px] py-10 px-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-2">Pending Rewards</h3>
            <p className="text-white text-[16px] md:text-[18px]">0.000000 WAVE ($0.00)</p>
          </div>
        </div>
      </section>

      {/* ================= LIQUIDITY POOLS ================= */}
      <section className="w-full py-16 px-4 md:px-10 flex flex-col items-center relative z-10">
        <div className="w-full max-w-[1000px] overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold w-[300px]">Pools</th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">Multiplier</th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">APR</th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">TVL</th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">24h Vol</th>
              </tr>
            </thead>
            <tbody>
              {POOLS_DATA.map((pool, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-5 px-4 flex items-center gap-4">
                    <div className="flex items-center">
                      {pool.icons.map((icon, i) => (
                        <div key={i} className={`w-[32px] h-[32px] rounded-[8px] bg-white flex items-center justify-center overflow-hidden border border-[#020B2D] ${i > 0 ? '-ml-3' : ''}`}>
                          <span className="text-[12px] text-[#020B2D] font-bold">{icon}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-white/90 text-[15px] font-medium">{pool.name}</span>
                  </td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">{pool.multiplier}</td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">{pool.apr}</td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">{pool.tvl}</td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">{pool.vol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <button className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
            Add Liquidity
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>

          <button className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
            Harvest All
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* ================= CTA / QUOTE SECTION ================= */}
      <section className="w-full pt-24 pb-44 px-4 md:px-10 flex flex-col items-center justify-center text-center relative z-10 bg-[linear-gradient(180deg,#020B2D_0%,#001C54_100%)] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#001C54] -z-10 pointer-events-none" />
        <div className="mb-10">
          {/* Quote Icon */}
          <Image src="/Group 162793.png" alt="Quote Icon" width={64} height={64} className="object-contain" />
        </div>
        
        <h2 className="text-[#4EA5FF] text-[36px] md:text-[48px] font-bold leading-[1.3] max-w-[800px] mb-12">
          &quot;WAVE is not just a reward –
          <br />
          it&apos;s a movement.&quot;
        </h2>

        <button className="flex items-center gap-3 bg-transparent border border-[#4EA5FF] hover:bg-[#4EA5FF]/10 transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[16px]">
          Ride the wave
          <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </section>

    </div>
  );
}
