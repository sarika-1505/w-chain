import React from "react";
import Link from "next/link";
import Image from "next/image";
import { guidelinesData } from "@/data/guidelines";

export default function Guidelines() {
  return (
    <div className="w-full bg-[#010514] flex flex-col items-center font-Montserrat pb-32">
      
      {/* Hero Section */}
      <section className="w-full relative h-[400px] flex flex-col items-center justify-center bg-[#010514] rounded-b-[40px] md:rounded-b-[60px] overflow-hidden shadow-[0_10px_50px_rgba(13,127,242,0.1)]">
        {/* Background Image */}
        <Image
          src="/guidline/Group 163467.png"
          alt="Guidelines Hero Background"
          fill
          className="object-cover opacity-80 z-0"
        />
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[900px] mt-10">
          <p className="text-white/90 text-[18px] mb-6 font-medium">Guidelines & Tutorial</p>
          <h1 className="text-[40px] md:text-[56px] font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] tracking-tight">
            W Chain Ecosystem Guidelines
          </h1>
          <p className="text-white/90 text-[18px] md:text-[20px] leading-relaxed max-w-[800px] font-medium">
            Building Together, the Right Way
          </p>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="w-full max-w-[1440px] px-4 md:px-10 flex flex-col items-center z-10 relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px]">
          {guidelinesData.map((guideline) => (
            <div 
              key={guideline.id}
              className="w-full max-w-[390px] mx-auto h-[550px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,69,115,0.2)_0%,rgba(11,27,61,0.5)_100%)] backdrop-blur-md p-[15px] flex flex-col hover:border-[#4EA5FF]/50 transition-colors shadow-[0_0_30px_rgba(78,165,255,0.02)]"
            >
              {/* Card Image */}
              <div className="w-full h-[243px] relative rounded-[16px] overflow-hidden mb-6 bg-[#020B2D] flex-shrink-0">
                <Image 
                  src={guideline.image} 
                  alt={guideline.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 px-2">
                <p className="text-[#4EA5FF] font-bold text-[15px] mb-4">
                  {guideline.date}
                </p>
                
                <h3 className="text-white font-bold text-[20px] leading-snug mb-4 line-clamp-2">
                  {guideline.title}
                </h3>
                
                <p className="text-white/70 text-[15px] leading-relaxed mb-6 line-clamp-3">
                  {guideline.excerpt}
                </p>

                {/* Read More pushes to the bottom */}
                <div className="mt-auto">
                  <Link 
                    href={`/guidelines/${guideline.id}`}
                    className="text-[#4EA5FF] font-bold italic text-[15px] hover:text-white transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorial Links Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-10 flex flex-col items-center mt-24 relative z-10">
        <h2 className="text-[#4EA5FF] text-[40px] font-bold mb-12">Tutorial Links</h2>
        <div className="w-full max-w-[1000px] flex flex-wrap justify-between gap-y-4 gap-x-8 text-white text-[16px] md:text-[18px]">
          <Link href="https://www.youtube.com/watch?v=hRQ_nH3Rh98" target="_blank" rel="noopener noreferrer" className="hover:text-[#4EA5FF] transition-colors w-full md:w-[48%] break-all">
            https://www.youtube.com/watch?v=hRQ_nH3Rh98
          </Link>
          <Link href="https://www.youtube.com/watch?v=R7z0-IY5U64" target="_blank" rel="noopener noreferrer" className="hover:text-[#4EA5FF] transition-colors w-full md:w-[48%] break-all">
            https://www.youtube.com/watch?v=R7z0-lY5U64
          </Link>
          <Link href="https://www.youtube.com/watch?v=vUgNF6aVpkk" target="_blank" rel="noopener noreferrer" className="hover:text-[#4EA5FF] transition-colors w-full md:w-[48%] break-all">
            https://www.youtube.com/watch?v=vUgNF6aVpkk
          </Link>
        </div>
      </section>

    </div>
  );
}
