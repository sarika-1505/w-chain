import Image from "next/image";
import Link from "next/link";

export default function PrepaidCards() {
  return (
    <div className="w-full bg-[#010514] flex flex-col items-center font-Montserrat">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden bg-[#020B2D] rounded-b-[40px] md:rounded-b-[80px]">
        {/* Background Image */}
        <Image
          src="/Prepaid-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,45,0.9)_0%,rgba(2,11,45,0.6)_50%,rgba(2,11,45,0.2)_100%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="flex flex-col items-start w-full max-w-[700px] mt-10 md:mt-0">
            <h1 className="w-full md:w-[629px] md:h-[106px] text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] mb-12 bg-clip-text text-transparent bg-[linear-gradient(180deg,#0D7FF2_0%,#B4E4FF_48%,#1F9DD8_100%)]">
              Spend Crypto Anywhere
              <br />
              with Prepaid Cards
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              
              {/* App Store Button */}
              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.3)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.23 7.08c-.02-.15-.04-.3-.04-.46 0-1.74 1.13-3.34 2.8-4.04-.84-1.22-2.22-1.95-3.69-1.95-1.93 0-3.79 1.12-4.78 1.12-.99 0-2.52-1.02-4.14-1.02-2.6 0-5 1.51-6.33 3.86-2.73 4.75-.7 11.8 1.95 15.65 1.3 1.88 2.82 3.99 4.88 3.92 1.97-.07 2.73-1.27 5.12-1.27 2.38 0 3.09 1.27 5.14 1.22 2.1-.05 3.44-1.95 4.74-3.83 1.5-2.2 2.12-4.34 2.15-4.45-.05-.02-4.16-1.6-4.2-6.38-.04-4 3.25-5.91 3.4-6.01-1.87-2.72-4.78-3.09-5.83-3.15-1.55-.12-3.31.94-4.17.94z"/>
                </svg>
                App Store
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white shrink-0 ml-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* Google Play Button */}
              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.3)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                Google Play
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white shrink-0 ml-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* Visit Winity.life Button */}
              <Link
                href="#"
                className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.3)]"
              >
                Visit Winity.life
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white shrink-0 ml-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center md:justify-end w-full max-w-[650px]">
            <Image 
              src="/card.png" 
              alt="Prepaid Cards" 
              width={650} 
              height={500} 
              className="w-full max-w-[650px] h-auto object-contain drop-shadow-[0_0_50px_rgba(78,165,255,0.3)]" 
            />
          </div>

        </div>
      </section>

      {/* ================= INNOVATIVE FEATURES ================= */}
      <section className="w-full pt-16 pb-12 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-16 text-center">
          Discover the Innovative Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[804px]">
          
          {/* Card 1 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 4 14 1 11 4" />
                <line x1="14" y1="1" x2="14" y2="15" />
                <polyline points="7 20 10 23 13 20" />
                <line x1="10" y1="23" x2="10" y2="9" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Seamless Crypto-to-Fiat</h3>
            <p className="text-white/80 text-[14px]">Spend crypto instantly as fiat — no<br/>complex exchanges.</p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Worldwide Acceptance</h3>
            <p className="text-white/80 text-[14px]">Use anywhere major debit/<br/>credit cards are accepted.</p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Instant & Secure</h3>
            <p className="text-white/80 text-[14px]">Fast, compliant, and reliable<br/>transactions.</p>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-[390px] h-[200px] rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] flex flex-col items-start justify-center p-8 backdrop-blur-md hover:scale-[1.02] transition-transform mx-auto">
            <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">Multi-Currency Support</h3>
            <p className="text-white/80 text-[14px]">Convert and spend in various fiat<br/>currencies.</p>
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full pt-12 pb-44 px-4 md:px-10 flex flex-col items-center relative z-10 bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002F8D] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1206px] min-h-[300px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] backdrop-blur-md flex flex-col items-center justify-center p-10 md:p-16 relative shadow-[0_0_50px_rgba(78,165,255,0.05)] text-center">
          
          <h2 className="text-[36px] md:text-[48px] font-bold mb-4 tracking-tight">
            <span className="text-[#228AFB]">Join the </span>
            <span className="text-[#59BAF8]">Future of Payments</span>
          </h2>
          
          <p className="text-white/90 text-[18px] md:text-[20px] mb-10 max-w-[600px] font-medium">
            Spend Crypto Anywhere, Anytime
          </p>

          <Link
            href="#"
            className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
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

    </div>
  );
}
