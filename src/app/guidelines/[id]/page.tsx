import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guidelinesData } from "@/data/guidelines";


export default async function GuidelineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const guideline = guidelinesData.find((g) => g.id === resolvedParams.id);

  if (!guideline) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#010514] flex flex-col items-center overflow-hidden font-Montserrat">
      
      
      <div className="w-full max-w-[1000px] px-4 md:px-10 py-32 flex flex-col items-center relative z-10 min-h-screen">
        
        <Link href="/guidelines" className="self-start text-[#4EA5FF] font-medium mb-10 hover:text-white transition-colors flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Guidelines
        </Link>

        <p className="text-[#4EA5FF] font-bold text-[16px] mb-6 self-start">
          {guideline.date}
        </p>

        <h1 className="text-white font-bold text-[36px] md:text-[48px] leading-tight mb-10 self-start text-left">
          {guideline.title}
        </h1>

        <div className="w-full h-[400px] md:h-[500px] relative rounded-[24px] overflow-hidden mb-16 bg-[#020B2D] border border-white/10 shadow-[0_0_50px_rgba(78,165,255,0.05)]">
          <Image 
            src={guideline.image} 
            alt={guideline.title} 
            fill 
            className="object-cover"
          />
        </div>

        <div className="w-full text-white/80 text-[18px] md:text-[20px] leading-relaxed flex flex-col gap-6">
          <p className="text-white font-medium text-[22px] mb-4">
            {guideline.excerpt}
          </p>
          <p>
            {guideline.content}
          </p>
        </div>

      </div>

    </main>
  );
}
