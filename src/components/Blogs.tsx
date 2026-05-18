import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogsData } from "@/data/blogs";

export default function Blogs() {
  return (
    <div className="w-full bg-[#010514] flex flex-col items-center font-Montserrat pt-0 pb-44 -mb-[80px] lg:-mb-[100px] relative z-10">
      
      {/* Hero Section */}
      <section className="w-full relative h-[400px] flex flex-col items-center justify-center bg-[#010514] rounded-b-[40px] md:rounded-b-[60px] overflow-hidden shadow-[0_10px_50px_rgba(13,127,242,0.1)]">
        {/* Background Image */}
        <Image
          src="/blog/Group 163111.png"
          alt="Blog Hero Background"
          fill
          className="object-cover opacity-80 z-0"
        />

        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[900px] mt-10">
          <p className="text-white/90 text-[18px] mb-6 font-medium">Blogs</p>
          <h1 className="text-[40px] md:text-[56px] font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] tracking-tight">
            W Chain Insights
          </h1>
          <p className="text-white/90 text-[18px] md:text-[20px] leading-relaxed max-w-[800px] font-medium">
            Stay ahead of the curve with cutting-edge perspectives on: Hybrid blockchain breakthroughs, Web3's evolving landscape, and W Chain ecosystem developments
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="w-full max-w-[1440px] px-4 md:px-10 flex justify-center z-10 relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px]">
          {blogsData.map((blog) => (
            <div 
              key={blog.id}
              className="w-full max-w-[390px] mx-auto h-[650px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,69,115,0.2)_0%,rgba(11,27,61,0.5)_100%)] backdrop-blur-md p-[15px] flex flex-col hover:border-[#4EA5FF]/50 transition-colors shadow-[0_0_30px_rgba(78,165,255,0.02)]"
            >
              {/* Card Image */}
              <div className="w-full h-[243px] relative rounded-[16px] overflow-hidden mb-6 bg-[#020B2D] flex-shrink-0">
                {/* Fallback image style in case actual image is missing */}
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <span className="text-white/20 font-bold">Image</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 px-2">
                <p className="text-[#4EA5FF] font-bold text-[15px] mb-4">
                  {blog.date}
                </p>
                
                <h3 className="text-white font-bold text-[20px] leading-snug mb-4 line-clamp-3">
                  {blog.title}
                </h3>
                
                <p className="text-white/70 text-[15px] leading-relaxed mb-6 line-clamp-4">
                  {blog.excerpt}
                </p>

                {/* Read More pushes to the bottom */}
                <div className="mt-auto">
                  <Link 
                    href={`/blogs/${blog.id}`}
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

      {/* Deep blue background extension to cover the overlapping footer corners */}
      <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#010514] -z-10 pointer-events-none" />
    </div>
  );
}
