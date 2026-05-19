"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function OurEcoSystem() {
  // Use the actual images uploaded to the public folder
  // Row 1 uses images 3 through 13
  const logosRow1 = Array.from({ length: 11 }).map((_, i) => `/image ${i + 3}.png`);
  // Row 2 uses images 14 through 24
  const logosRow2 = Array.from({ length: 11 }).map((_, i) => `/image ${i + 14}.png`);

  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Interval to trigger the scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle the seamless infinite snap
  useEffect(() => {
    if (offset === 11) {
      // Wait for the slide transition (1s) to finish, then snap instantly back to 0
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setOffset(0);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (offset === 0 && !isTransitioning) {
      // Re-enable transitions slightly after the snap happens
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [offset, isTransitioning]);

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center overflow-hidden">
      
      {/* Logos Marquee Container */}
      <div className="w-full max-w-[1217px] mx-auto flex flex-col gap-8 overflow-hidden px-4">
        
        {/* Row 1 (Scrolling Left Step-by-Step) */}
        <div className="w-full overflow-hidden mask-edges py-2">
          <div 
            className="flex items-center gap-12 sm:gap-16 w-max [--gap-size:3rem] sm:[--gap-size:4rem]"
            style={{ 
              transform: `translateX(calc(-1 * ${offset} * (140px + var(--gap-size))))`,
              transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
            }}
          >
            {[...logosRow1, ...logosRow1].map((src, idx) => (
              <div key={idx} className="relative w-[140px] h-[50px] shrink-0 flex items-center justify-center transition duration-300">
                <Image 
                  src={src}
                  alt={`Partner ${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right Step-by-Step) */}
        <div className="w-full overflow-hidden mask-edges py-2">
          <div 
            className="flex items-center gap-12 sm:gap-16 w-max [--gap-size:3rem] sm:[--gap-size:4rem]"
            style={{ 
              transform: `translateX(calc(-1 * ${11 - offset} * (140px + var(--gap-size))))`,
              transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
            }}
          >
            {[...logosRow2, ...logosRow2].map((src, idx) => (
              <div key={idx} className="relative w-[140px] h-[50px] shrink-0 flex items-center justify-center transition duration-300">
                <Image 
                  src={src}
                  alt={`Partner ${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop Image Section */}
      <div className="w-full max-w-[1309px] mx-auto mt-20 px-4">
        <div className="relative w-full aspect-[1309/676] overflow-hidden flex items-center justify-center">
          <Image 
            src="/11.png" 
            alt="Our Ecosystem Partners Laptop" 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Optional edge fading for marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}} />
    </section>
  );
}
