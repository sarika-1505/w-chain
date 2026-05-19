import Image from "next/image";
import Link from "next/link";

export default function WSwap() {
  return (
    <div className="w-full bg-[#020B2D] flex flex-col items-center font-Montserrat pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[800px] py-20 flex items-center justify-center overflow-hidden bg-[#020B2D]">
        {/* Background Image */}
        <Image
          src="/Group 162958.png"
          alt="WSwap Background"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,45,0.9)_0%,rgba(2,11,45,0.6)_50%,rgba(2,11,45,0.2)_100%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1200px] px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start max-w-[600px]">
            <h1 className="text-white text-[44px] md:text-[56px] font-bold leading-[1.15] md:tracking-[-0.02em] mb-10">
              W Swap Seamless Swaps,
              <br />
              <span className="text-[#4EA5FF]">Unified</span> Liquidity.
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
              >
                Launch App
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-transparent border border-white/40 hover:bg-white/10 transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[15px]"
              >
                View Documentation
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-start gap-12 md:gap-16">
              <div>
                <h3 className="text-[#4EA5FF] text-[28px] md:text-[32px] font-bold mb-1">
                  $148M+
                </h3>
                <p className="text-white/90 text-[15px] font-medium">
                  Total Volume
                </p>
              </div>
              <div>
                <h3 className="text-[#4EA5FF] text-[28px] md:text-[32px] font-bold mb-1">
                  32K+
                </h3>
                <p className="text-white/90 text-[15px] font-medium">
                  Active Wallets
                </p>
              </div>
              <div>
                <h3 className="text-[#4EA5FF] text-[28px] md:text-[32px] font-bold mb-1">
                  75<span className="text-white">s</span>
                </h3>
                <p className="text-white/90 text-[15px] font-medium">
                  Finality
                </p>
              </div>
            </div>
          </div>

          {/* Right Content (Swap Widget) */}
          <div className="flex-1 w-full max-w-[480px]">
            {/* Widget Container */}
            <div className="w-full bg-[#0A1B4A]/40 backdrop-blur-md border border-[#4EA5FF]/30 rounded-[24px] p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              {/* Tabs */}
              <div className="flex items-center justify-between bg-[#040D29] rounded-[20px] p-1 mb-6 border border-white/5">
                <button className="flex-1 bg-[linear-gradient(90deg,#1978C8_0%,#4EA5FF_100%)] text-white font-semibold py-2.5 rounded-[16px] text-center text-[15px] shadow-[0_0_10px_rgba(78,165,255,0.3)]">
                  Swap
                </button>
                <button className="flex-1 text-white/80 hover:text-white font-medium py-2.5 rounded-[16px] text-center text-[15px] transition-colors">
                  Pool
                </button>
                <button className="flex-1 text-white/80 hover:text-white font-medium py-2.5 rounded-[16px] text-center text-[15px] transition-colors">
                  Bridge
                </button>
              </div>

              {/* Swap Form */}
              <div className="flex flex-col relative">
                {/* From Box */}
                <div className="bg-[#020B2D] border border-white/10 rounded-[16px] p-4 flex flex-col gap-2">
                  <span className="text-white/70 text-[13px] font-medium">
                    From
                  </span>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value="100"
                      readOnly
                      className="bg-transparent text-white text-[24px] font-bold outline-none w-1/2"
                    />
                    <button className="flex items-center gap-2 bg-[#1A2C5B] hover:bg-[#1A2C5B]/80 transition-colors px-3 py-1.5 rounded-full border border-white/5">
                      <Image
                        src="/Group 162819.png"
                        alt="Doge"
                        width={24}
                        height={24}
                        className="rounded-full object-cover"
                      />
                      <span className="text-white font-medium">Doge</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Swap Icon Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <button className="w-[36px] h-[36px] bg-[#020B2D] border border-white/20 rounded-[10px] flex items-center justify-center hover:bg-[#0A1B4A] transition-colors group">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:rotate-180 transition-transform duration-300"
                    >
                      <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16" />
                    </svg>
                  </button>
                </div>

                {/* To Box */}
                <div className="bg-[#020B2D] border border-white/10 rounded-[16px] p-4 flex flex-col gap-2 mt-2">
                  <span className="text-white/70 text-[13px] font-medium">
                    To (estimated)
                  </span>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value="0.000"
                      readOnly
                      className="bg-transparent text-white text-[24px] font-bold outline-none w-1/2"
                    />
                    <button className="flex items-center gap-2 bg-[#1A2C5B] hover:bg-[#1A2C5B]/80 transition-colors px-3 py-1.5 rounded-full border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-[#1C51C1] flex items-center justify-center text-white text-[10px] font-bold">
                        $
                      </div>
                      <span className="text-white font-medium">Busdc</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Info */}
              <div className="flex items-center justify-between mt-4 mb-6 px-2">
                <span className="text-white/70 text-[13px]">Price</span>
                <div className="flex items-center gap-3">
                  <span className="text-white text-[13px] font-medium">
                    625000000{" "}
                    <span className="text-white/70 ml-1">DOGE per bUSDC</span>
                  </span>
                  <button className="text-white/50 hover:text-white transition-colors border border-white/20 rounded-[4px] p-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white py-4 rounded-[16px] font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
                Get Started
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NETWORK COMPARISON (Image 1) ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-2 text-center">
          Built for <span className="text-[#4EA5FF]">utility</span>, priced for
          everyone
        </h2>
        <p className="text-white/80 text-[16px] md:text-[18px] mb-16 text-center max-w-[800px]">
          W Swap rides on W Chain's high-throughput L1 — outperforming
          <br className="hidden md:block" />
          legacy networks on every metric that matters.
        </p>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
          {/* Card 1: W Chain */}
          <div className="flex-1 min-w-[250px] bg-[#0A183D] border border-[#4EA5FF]/30 rounded-[16px] p-8 shadow-[0_0_20px_rgba(78,165,255,0.1)] hover:border-[#4EA5FF]/60 transition-colors">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center text-[#020B2D] font-bold text-[14px]">
                W
              </div>
              <span className="text-white font-bold text-[18px]">W Chain</span>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  THROUGHPUT
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">
                  Up to 7,000 TPS
                </p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  AVG FEE
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">
                  ~$0.000169
                </p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  FINALITY
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">75 sec</p>
              </div>
            </div>
          </div>

          {/* Card 2: Ethereum */}
          <div className="flex-1 min-w-[250px] bg-[#141C33] border border-white/10 rounded-[16px] p-8 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center text-[#020B2D] font-bold text-[14px]">
                ETH
              </div>
              <span className="text-white font-bold text-[18px]">Ethereum</span>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  THROUGHPUT
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">
                  ~15-30 TPS
                </p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  AVG FEE
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">~$6.00</p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  FINALITY
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">
                  6 mins (32 blocks)
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Solana */}
          <div className="flex-1 min-w-[250px] bg-[#141C33] border border-white/10 rounded-[16px] p-8 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center text-[#020B2D] font-bold text-[14px]">
                SOL
              </div>
              <span className="text-white font-bold text-[18px]">Solana</span>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  THROUGHPUT
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">
                  Up to 4,000 TPS
                </p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  AVG FEE
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">
                  ~$0.00025
                </p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  FINALITY
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">30 mins+</p>
              </div>
            </div>
          </div>

          {/* Card 4: Polygon */}
          <div className="flex-1 min-w-[250px] bg-[#141C33] border border-white/10 rounded-[16px] p-8 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-[8px] flex items-center justify-center text-[#020B2D] font-bold text-[14px]">
                POLY
              </div>
              <span className="text-white font-bold text-[18px]">Polygon</span>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  THROUGHPUT
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">~160 TPS</p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  AVG FEE
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">~$0.15</p>
              </div>
              <div>
                <p className="text-white/60 text-[13px] font-medium tracking-wider mb-1">
                  FINALITY
                </p>
                <p className="text-[#4EA5FF] text-[16px] font-bold">75 sec</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID (Image 2) ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-16 text-center">
          A DEX engineered for
          <br />
          <span className="text-[#4EA5FF]">payments-grade</span> performance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px]">
          {/* Box 1 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">📚</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Unified Liquidity
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Aggregated pools across the W Chain ecosystem deliver the best
              price on every swap, with zero fragmentation.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">⚡</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Sub-Second Routing
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Smart routing engine finds optimal paths in milliseconds — settle
              your trade in under 75 seconds.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">🌉</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Multi-Validator Bridge
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Move assets natively from Ethereum, BNB Chain, Polygon and beyond
              into W Swap with audited security.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">🛡️</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Audited & Non-Custodial
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Independently audited smart contracts. Your keys, your tokens —
              always. No custodian, no intermediaries.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SWAP IN THREE STEPS (Image 3) ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-20 text-center">
          Swap in <span className="text-[#4EA5FF]">three steps</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1000px] gap-12 md:gap-4 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-full max-w-[240px] z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6 hover:scale-105 transition-transform duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                <path d="M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">
              Connect Wallet
            </h3>
            <p className="text-white/80 text-[14px] leading-relaxed">
              MetaMask, WalletConnect, Trust Wallet - one click.
            </p>
          </div>

          {/* Arrow 1 (Left Pointing) */}
          <div className="hidden md:flex items-center justify-center flex-1 h-[120px] max-w-[150px] relative mx-2">
            {/* Dashed line background */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-[#4EA5FF]/40" />
            {/* Arrow Image */}
            <div className="relative z-10 w-[120px] h-[24px]">
              <Image
                src="/arrow-left.png"
                alt="Arrow Left"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-full max-w-[240px] z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6 hover:scale-105 transition-transform duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">
              Confirm & Trade
            </h3>
            <p className="text-white/80 text-[14px] leading-relaxed">
              Smart router finds best price across pools.
            </p>
          </div>

          {/* Arrow 2 (Right Pointing) */}
          <div className="hidden md:flex items-center justify-center flex-1 h-[120px] max-w-[150px] relative mx-2">
            {/* Dashed line background */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-[#4EA5FF]/40" />
            {/* Arrow Image */}
            <div className="relative z-10 w-[120px] h-[24px]">
              <Image
                src="/arrow-right.png"
                alt="Arrow Right"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-full max-w-[240px] z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6 hover:scale-105 transition-transform duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Clicking hand icon */}
                <path d="M12 3a1 1 0 011 1v6.5a1.5 1.5 0 003 0v-2a1.5 1.5 0 013 0v2a1.5 1.5 0 013 0v3.5A7.5 7.5 0 0114.5 21h-2A7.5 7.5 0 015 13.5v-1a1.5 1.5 0 013 0v1" />
                <path d="M8 8.5V4a1.5 1.5 0 013 0v4.5" />
                <path d="M10 2a1 1 0 011 1" />
                <path d="M14 2a1 1 0 011 1" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">
              Choose Tokens
            </h3>
            <p className="text-white/80 text-[14px] leading-relaxed">
              Settles in ~75 sec with near-zero fees.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY REVIEWS (Image 4) ================= */}
      <section className="w-full py-24 pl-4 pr-0 md:pl-10 flex flex-col relative z-10 overflow-hidden">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-16 text-center md:text-left w-full max-w-[1200px] mx-auto">
          Community <span className="text-[#4EA5FF]">Reviews</span>
        </h2>

        <div className="w-full max-w-[1200px] mx-auto relative">
          <div
            className="flex overflow-x-auto gap-6 pb-10 hide-scrollbar md:overflow-visible md:flex-wrap md:justify-between"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Review 1 */}
            <div className="w-[320px] max-w-[400px] flex-shrink-0 md:flex-1 md:min-w-0 md:max-w-[32%] bg-[linear-gradient(180deg,#193674_0%,#0B1B3D_100%)] border border-white/20 rounded-[20px] p-8 relative">
              <div className="absolute top-6 left-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
              <p className="text-white/80 text-[14px] leading-relaxed mt-6 mb-8 italic relative z-10">
                W Swap is more than a DEX- it's a gateway to financial
                empowerment. With low-cost transactions, high APRS, and a focus
                on user-driven innovation, W Swap delivers unparalleled value to
                DeFi enthusiasts worldwide.
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-[#4EA5FF] font-bold">X</span>
                <span className="text-[#4EA5FF] font-bold text-[15px]">
                  @cryptoperrix
                </span>
              </div>
              <div className="absolute bottom-6 right-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="w-[320px] max-w-[400px] flex-shrink-0 md:flex-1 md:min-w-0 md:max-w-[32%] bg-[linear-gradient(180deg,#193674_0%,#0B1B3D_100%)] border border-white/20 rounded-[20px] p-8 relative">
              <div className="absolute top-6 left-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
              <p className="text-white/80 text-[14px] leading-relaxed mt-6 mb-8 italic relative z-10">
                W Swap has launched seamlessly and delivers a smooth experience
                on both mobile and desktop. It's a well-executed addition to the
                chain. Intuitive, reliable, and user-friendly. This marks a
                promising step forward and hopefully the beginning of something
                impactful, innovative, and built to last in the ecosystem.
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-[#4EA5FF] font-bold">X</span>
                <span className="text-[#4EA5FF] font-bold text-[15px]">
                  TheDavey92
                </span>
              </div>
              <div className="absolute bottom-6 right-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="w-[320px] max-w-[400px] flex-shrink-0 md:flex-1 md:min-w-0 md:max-w-[32%] bg-[linear-gradient(180deg,#193674_0%,#0B1B3D_100%)] border border-white/20 rounded-[20px] p-8 relative">
              <div className="absolute top-6 left-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
              <p className="text-white/80 text-[14px] leading-relaxed mt-6 mb-8 italic relative z-10">
                The launch of W Swap is more than just another DEX; it's the
                gateway to real yield, governance, and growth on W Chain. With
                WAVE at its core, and WCO fueling it, this is the start of a new
                era where the community can finally build, earn, and take
                control of their DeFi journey
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-[#4EA5FF] font-bold">X</span>
                <span className="text-[#4EA5FF] font-bold text-[15px]">
                  OxSerx
                </span>
              </div>
              <div className="absolute bottom-6 right-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center md:justify-start gap-2 mt-4 md:ml-4">
            <div className="w-2 h-2 rounded-full bg-[#4EA5FF]"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>
      </section>

      {/* ================= CTA (Image 5) ================= */}
      <section className="w-full pt-24 pb-44 px-4 md:px-10 flex flex-col items-center justify-center relative z-10 bg-[#020B2D] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#020B2D] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1000px] bg-[linear-gradient(180deg,#152E5E_0%,#0A1B4A_100%)] border border-white/20 rounded-[30px] p-12 md:p-20 flex flex-col items-center text-center shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-white text-[32px] md:text-[48px] font-bold mb-6">
            Start trading on <span className="text-[#4EA5FF]">W Swap</span>
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] mb-12 max-w-[600px] leading-relaxed">
            Join thousands of traders moving value at the speed of payments —
            not the speed of blocks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
              Launch W Swap
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button className="flex items-center justify-center gap-3 bg-transparent border border-white/40 hover:bg-white/10 transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[16px]">
              Read the docs
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
