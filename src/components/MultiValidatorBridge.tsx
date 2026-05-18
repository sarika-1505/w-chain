import Image from "next/image";
import Link from "next/link";

export default function MultiValidatorBridge() {
  return (
    <div className="w-full bg-[#020B2D] flex flex-col items-center font-Montserrat pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[800px] py-20 flex items-center justify-center overflow-hidden bg-[#020B2D]">
        {/* Background Image */}
        <Image
          src="/Group 162958.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,45,0.9)_0%,rgba(2,11,45,0.6)_50%,rgba(2,11,45,0.2)_100%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1200px] px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="flex flex-col items-start w-full max-w-[706px] min-h-[328px]">
            <h1 className="text-white text-[44px] md:text-[56px] font-bold leading-[1.15] md:tracking-[-0.02em] mb-10">
              Multi Validator Bridge
              <br />
              <span className="text-[#4EA5FF]">Trust-Minimized,</span> Validator-
              <br />
              Secured Cross-Chain
              <br />
              Transfers.
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-auto">
              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
              >
                Bridge Now
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center md:justify-end w-full max-w-[452px]">
            <Image 
              src="/Vector1.png" 
              alt="Bridge" 
              width={452} 
              height={323} 
              className="w-[452px] h-[323px] object-contain drop-shadow-[0_0_30px_rgba(78,165,255,0.4)]" 
            />
          </div>

        </div>
      </section>

      {/* ================= DOWNSIDE OF TRADITIONAL BRIDGES ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-20 text-center">
          The Downside of Traditional Bridges
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-[1000px]">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold leading-tight">
              Centralized<br />validator nodes
            </h3>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold leading-tight">
              Limited<br />transparency
            </h3>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                <path d="M12 16v.01"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold leading-tight">
              Fragmented<br />security models
            </h3>
          </div>

        </div>
      </section>

      {/* ================= W CHAIN TRANSFORMATION ================= */}
      <section className="w-full min-h-[610px] py-24 px-4 md:px-10 flex flex-col items-center justify-center relative z-10 bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-20 text-center relative z-10">
          W Chain Transformation across <span className="text-[#4EA5FF]">Industries</span>
        </h2>

        <div className="relative flex flex-col md:flex-row items-start justify-center gap-12 md:gap-8 w-full max-w-[1200px]">
          
          {/* Dashed Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] border-t-[2px] border-dashed border-[#4EA5FF]/30 z-0" />

          {/* Box 1 */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[350px] relative z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-[#4EA5FF]/30 bg-[linear-gradient(180deg,#0F214A_0%,#05112E_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-4">Cross-Chain DeFi Platforms</h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Link your W Chain-compatible wallet in seconds. MetaMask, WalletConnect, and Trust Wallet supported.
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[350px] relative z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-[#4EA5FF]/30 bg-[linear-gradient(180deg,#0F214A_0%,#05112E_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-4">Crypto Startups & Asset Issuers</h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Approve the transaction. Settlement happens in under 75 seconds with negligible network fees.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[350px] relative z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-[#4EA5FF]/30 bg-[linear-gradient(180deg,#0F214A_0%,#05112E_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-4">DApp Builders</h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Select the tokens you want to swap. The smart router finds the best price across all liquidity pools.
            </p>
          </div>

        </div>
      </section>

      {/* ================= POWER UNDER THE HOOD ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        
        {/* Vertical Dashed Line connecting from previous section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 border-l-[2px] border-dashed border-[#4EA5FF]/30" />

        <div className="w-full max-w-[1206px] min-h-[352px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] backdrop-blur-md flex flex-col items-center justify-center p-10 md:p-16 mt-8 relative shadow-[0_0_50px_rgba(78,165,255,0.05)]">
          
          <h2 className="text-[#4EA5FF] text-[32px] md:text-[44px] font-bold mb-12 text-center">
            Power Under the Hood — <span className="text-[#64B5FF]">Funky Specs</span>
          </h2>

          <div className="w-full max-w-[800px] flex flex-col gap-6">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-4 w-full md:w-[300px] shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#4EA5FF] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/90 text-[16px]">Supported Chains:</span>
              </div>
              <div className="text-white text-[16px] font-medium">
                Ethereum, BSC, Polygon, Solana, Avalanche (more coming)
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-4 w-full md:w-[300px] shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#4EA5FF] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/90 text-[16px]">Validators per Transaction:</span>
              </div>
              <div className="text-white text-[16px] font-medium">
                Configurable (default: 4 independent nodes)
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-4 w-full md:w-[300px] shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#4EA5FF] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/90 text-[16px]">Settlement Time:</span>
              </div>
              <div className="text-white text-[16px] font-medium">
                1-2 minutes
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full">
              <div className="flex items-center gap-4 w-full md:w-[300px] shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#4EA5FF] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/90 text-[16px]">Security:</span>
              </div>
              <div className="text-white text-[16px] font-medium">
                Audits + Bug Bounty + HackerOne
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US FUNKY & SECURE ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-16 text-center">
          What Makes Us Funky & Secure?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[804px]">
          
          {/* Card 1 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Multi-Validator Consensus</h3>
            <p className="text-white/80 text-[14px]">Every transaction verified by<br/>decentralized network.</p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Audit-Ready Architecture</h3>
            <p className="text-white/80 text-[14px]">Open-source, real-time monitoring.</p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Developer-First Integration</h3>
            <p className="text-white/80 text-[14px]">Easy API/SDK integration.</p>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Cross-Chain Interoperability</h3>
            <p className="text-white/80 text-[14px]">Ethereum, BSC, Polygon, Solana.</p>
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full pt-24 pb-44 px-4 md:px-10 flex flex-col items-center relative z-10 bg-[#020B2D] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#020B2D] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1206px] min-h-[300px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] backdrop-blur-md flex flex-col items-center justify-center p-10 md:p-16 relative shadow-[0_0_50px_rgba(78,165,255,0.05)] text-center">
          
          <h2 className="text-[36px] md:text-[48px] font-bold mb-4 tracking-tight">
            <span className="text-[#4EA5FF]">Own the network </span>
            <span className="text-[#8CC6FF]">you use</span>
          </h2>
          
          <p className="text-white/90 text-[18px] md:text-[20px] mb-10 max-w-[600px] font-medium">
            Govern, stake, and earn with WCO. Get started in minutes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#"
              className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
            >
              Get WCO
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center gap-3 bg-[#020B2D] border border-white/20 hover:bg-[#06184a] transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[15px]"
            >
              Stake Now
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
