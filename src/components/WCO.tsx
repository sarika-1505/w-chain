import Image from "next/image";
import Link from "next/link";

export default function WCO() {
  return (
    <div className="w-full bg-[#020B2D] flex flex-col items-center font-Montserrat">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[800px] h-auto lg:h-[800px] py-20 lg:py-0 flex items-center justify-center font-Montserrat bg-[#020B2D] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Group 162729.png"
          alt="WCO Background"
          fill
          priority
          className="object-cover opacity-80"
        />

        <div className="relative z-10 w-full max-w-[1200px] px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start max-w-[600px] w-full">
            <h1 className="font-Montserrat text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] text-[30px] sm:text-[40px] lg:text-[50px] font-bold leading-[1.2] lg:leading-[60px] tracking-[-0.03em] mb-8 max-w-[560px] w-full">
              Powering Payments &
              <br />
              DeFi with Fast, Secure
              <br />
              Transactions
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <Link
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 py-3 rounded-[30px] font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
              >
                Get on W Swap
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
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-white/40 hover:bg-white/10 transition-colors text-white px-6 py-3 rounded-[30px] font-bold text-[15px]"
              >
                Start Staking
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

            {/* Buy on section */}
            <div className="w-full flex flex-col border-t border-white/10 pt-6 border-b border-white/10 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-white/90 text-[14px] shrink-0">Buy on:</span>
                <div className="flex flex-wrap gap-2.5">
                  {["MEXC", "BitMart", "Bitrue", "W Swap"].map((exchange) => (
                    <div
                      key={exchange}
                      className="px-5 py-1.5 rounded-[20px] border border-white/30 text-white/90 text-[13px] hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {exchange}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex-1 flex justify-center lg:justify-end items-center relative z-10 w-full max-w-[450px] lg:max-w-none">
            <Image
              src="/wco-right.png"
              alt="WCO Card and Shield"
              width={500}
              height={423}
              className="object-contain h-[280px] sm:h-[360px] lg:h-[423px] w-auto relative right-0 lg:right-[-5%]"
            />
          </div>
        </div>
      </section>

      {/* ================= DECODING THE NUMBERS ================= */}
      <section className="w-full py-24 px-6 md:px-10 flex flex-col items-center bg-[#020B2D]">
        <h2 className="text-[#4EA5FF] text-[32px] sm:text-[36px] md:text-[48px] font-bold mb-16 text-center leading-tight">
          Decoding <span className="text-white">the Numbers</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-16 w-full max-w-[1200px]">
          {/* Circle 1 */}
          <div className="w-[145px] h-[145px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-1.5 sm:mb-2">$284M</h3>
            <p className="text-white/80 text-[12px] sm:text-[14px]">Market Cap</p>
          </div>
          {/* Circle 2 */}
          <div className="w-[145px] h-[145px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-1.5 sm:mb-2">1.2B</h3>
            <p className="text-white/80 text-[12px] sm:text-[14px]">Total Supply</p>
          </div>
          {/* Circle 3 */}
          <div className="w-[145px] h-[145px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-1.5 sm:mb-2">$48M</h3>
            <p className="text-white/80 text-[12px] sm:text-[14px]">Volume (24h)</p>
          </div>
          {/* Circle 4 */}
          <div className="w-[145px] h-[145px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(78,165,255,0.1)]">
            <h3 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-1.5 sm:mb-2">16.9%</h3>
            <p className="text-white/80 text-[12px] sm:text-[14px]">Volume/Mkt</p>
          </div>
        </div>

        <p className="text-white/90 text-[14px] sm:text-[15px] md:text-[16px] text-center max-w-[800px] font-light">
          The numbers speak! See W Chain&apos;s rapid growth, security, and efficiency in action.
        </p>
      </section>

      {/* ================= WCO IN ACTION ================= */}
      <section className="w-full py-20 px-6 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#001C54_100%)] border-t border-[#4EA5FF]/20">
        <h2 className="text-[#4EA5FF] text-[32px] sm:text-[36px] md:text-[48px] font-bold mb-16 flex items-center gap-4 text-center leading-tight">
          <svg width="24" height="36" viewBox="0 0 24 36" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 0L0 21H10.5L9 36L24 13.5H13.5L15 0Z"/>
          </svg>
          WCO In Action
        </h2>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[linear-gradient(180deg,#1C3666_0%,#0A1938_100%)] rounded-[20px] p-8 md:p-10 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="mb-6 h-[32px] flex items-center">
              <Image src="/trade, transaction, payment, trading.png" alt="Capital-Efficient" width={32} height={32} className="object-contain" />
            </div>
            <h3 className="text-[#4EA5FF] text-[20px] font-bold mb-3">Capital-Efficient</h3>
            <p className="text-white/80 text-[15px] font-light leading-relaxed">
              Staked security — no waste,<br />aligned incentives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[linear-gradient(180deg,#1C3666_0%,#0A1938_100%)] rounded-[20px] p-8 md:p-10 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="mb-6 h-[32px] flex items-center">
              <Image src="/Group 162756.png" alt="Sustainable" width={32} height={32} className="object-contain" />
            </div>
            <h3 className="text-[#4EA5FF] text-[20px] font-bold mb-3">Sustainable</h3>
            <p className="text-white/80 text-[15px] font-light leading-relaxed">
              99% less energy vs PoW.<br />ESG-ready.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[linear-gradient(180deg,#1C3666_0%,#0A1938_100%)] rounded-[20px] p-8 md:p-10 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="mb-6 h-[32px] flex items-center">
              <Image src="/Group.png" alt="Economic Participation" width={32} height={32} className="object-contain" />
            </div>
            <h3 className="text-[#4EA5FF] text-[20px] font-bold mb-3">Economic Participation</h3>
            <p className="text-white/80 text-[15px] font-light leading-relaxed">
              Stake & delegate earn rewards<br />strengthening decentralization.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ECOSYSTEM / LISTINGS ================= */}
      <section className="w-full py-24 px-6 md:px-10 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 bg-[#020B2D]">
        
        {/* Left Side: Phone Mockup */}
        <div className="flex-1 w-full max-w-[500px] flex justify-center items-center">
          <Image 
            src="/image 28.png" 
            alt="W Chain App Mockup" 
            width={500} 
            height={500} 
            className="w-full h-auto object-contain rounded-[24px]"
          />
        </div>

        {/* Right Side: Exchange Links */}
        <div className="w-full max-w-[705px] h-auto flex flex-col gap-6">
          
          {/* CoinMarketCap Card */}
          <div className="flex-1 w-full bg-[linear-gradient(90deg,#0A1E4A_0%,#153373_100%)] border border-[#4EA5FF]/30 rounded-[24px] px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <Image src="/image 29.png" alt="CoinMarketCap" width={220} height={40} className="object-contain h-[40px] w-auto sm:ml-2" />
            
            <Link href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-[15px] sm:text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)] sm:mr-2">
              Explore Coin Market
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* CoinGecko Card */}
          <div className="flex-1 w-full bg-[linear-gradient(90deg,#0A1E4A_0%,#153373_100%)] border border-[#4EA5FF]/30 rounded-[24px] px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <Image src="/image 30.png" alt="CoinGecko" width={200} height={40} className="object-contain h-[40px] w-auto sm:ml-2" />
            
            <Link href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-[15px] sm:text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)] sm:mr-2">
              Explore Coin Gecko
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full pt-24 pb-44 px-6 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#002B7F_100%)] border-t border-white/5 relative z-10 -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002B7F] -z-10 pointer-events-none" />

        <div className="w-full max-w-[1000px] bg-[linear-gradient(180deg,#0A1B4A_0%,#050F2C_100%)] rounded-[24px] py-16 px-6 md:px-16 border border-[#4EA5FF]/20 shadow-[0_0_30px_rgba(78,165,255,0.1)] flex flex-col items-center text-center">
          <h2 className="text-[#4EA5FF] text-[30px] sm:text-[36px] md:text-[48px] font-bold mb-4 leading-tight">
            Own the network you use.
          </h2>
          <p className="text-white/90 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[600px] mb-10 font-light">
            Govern, stake, and earn with WCO. Get started in minutes.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
              Get WCO
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-white/40 hover:bg-white/10 transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[16px]">
              Stake Now
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
