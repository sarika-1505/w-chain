"use client";

import Image from "next/image";

export default function CommunityCTA() {
  return (
    <section className="w-full pt-10 pb-44 px-4 md:px-10 flex justify-center bg-gradient-to-br from-[#000D27] to-[#002F8D] relative z-10 -mb-[80px] lg:-mb-[100px]">
      {/* Deep blue background extension to cover the overlapping footer corners */}
      <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002F8D] -z-10 pointer-events-none" />
      {/* Container with Border Gradient Effect */}
      <div className="relative group w-full max-w-[1206px] h-auto md:h-[376px] rounded-[30px] p-[1.5px] overflow-hidden">
        {/* The Border Gradient (Using a pseudo-element logic with absolute div) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8BC9D4_0%,#FFFFFF_50%,#8BC9D4_100%)] opacity-40" />
        
        {/* The Inner Card Content */}
        <div className="relative w-full h-full rounded-[30px] bg-[#0A1633]/60 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-8 md:p-12">
          
          <div className="relative z-10 max-w-[900px]">
            <h2 className="text-[#2196F3] text-[36px] md:text-[56px] font-bold mb-6 leading-tight">
              Connect, Collaborate and Thrive
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px] font-light leading-relaxed mb-10 max-w-[850px] mx-auto">
              Ready to be part of something big? The W Chain community is waiting for you! 
              Connect with fellow enthusiasts, contribute to exciting projects, and help 
              shape the future of finance. Join us today and let&apos;s build the decentralized world together!
            </p>

            <button 
              className="
                inline-flex items-center gap-3 
                bg-gradient-to-r from-[#1C606B] to-[#2196F3] 
                text-white text-[16px] font-medium 
                px-8 py-3 
                rounded-full 
                hover:opacity-90 transition-opacity
                shadow-[0_0_20px_rgba(33,150,243,0.3)]
              "
            >
              Join the Revolution
              <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
