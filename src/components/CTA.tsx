"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full h-auto pt-12 pb-[120px] md:h-[524px] md:py-0 flex flex-col items-center justify-center bg-[#00040a] -mb-[80px] lg:-mb-[100px] z-10">
      {/* Deep blue background extension to cover the overlapping footer corners */}
      <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#021227] -z-10 pointer-events-none" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Cta-bg.png')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#021227]/80" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="font-Montserrat font-bold text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[50px] lg:leading-[60px] tracking-[-0.03em] bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] lg:w-[808px] lg:h-[60px] max-w-full mx-auto">
          Start Building on W Chain
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-[600px]">
          Access the docs, testnet, and W Builders program — everything you need to deploy.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link href="#" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-[#5AB6DE] bg-black/40 backdrop-blur-sm hover:bg-[#5AB6DE]/10 transition text-white">
            <span className="text-[15px] font-semibold">View Docs</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition-colors">
              <svg className="w-4 h-4 text-white group-hover:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </Link>
          
          <Link href="#" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-[#5AB6DE] bg-black/40 backdrop-blur-sm hover:bg-[#5AB6DE]/10 transition text-white">
            <span className="text-[15px] font-semibold">Join W Builders</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition-colors">
              <svg className="w-4 h-4 text-white group-hover:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </Link>

          <Link href="#" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#3bb4ff] hover:bg-[#2ea3e6] transition text-white shadow-[0_0_25px_rgba(59,180,255,0.4)]">
            <span className="text-[15px] font-semibold">Get Testnet Tokens</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white/70 group-hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
