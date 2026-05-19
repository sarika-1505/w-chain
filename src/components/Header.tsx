"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full font-sans">
      <div className="w-full bg-[#0b3d7a] border-b border-blue-900/40">
        <div className="max-w-300 mx-auto px-6 h-11 flex items-center justify-start">
          <div className="flex items-center gap-4 text-[16px]">
            <span className="text-[#5AB6DE] italic">
              W Builders Cohort 2.0 is Live
            </span>

            <Link
              href="#"
              className="px-4 py-1 text-xs rounded-full bg-[#00142C] border-2 border-[#5AB6DE] font-bold text-[#5AB6DE] hover:bg-blue-500/20 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#020c1b] border-b border-blue-900/30">
        <div className="max-w-300 mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/W Chain-Transparent 1.png"
              alt="logo"
              width={120}
              height={68}
              unoptimized
              priority
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[15px] text-white/90 font-medium">
            <Link href="#" className="hover:text-white">
              Ecosystem
            </Link>

            <NavItem label="Developers" />
            <NavItem label="Bridge" />
            <NavItem label="Daf" />
            <NavItem label="Our Partners" />
          </nav>

          <Link
            href="#"
            className="
              px-6 py-2 rounded-full text-sm font-bold text-[#5AB6DE]
              bg-transparent border-2 border-[#5AB6DE]
              hover:bg-[#5AB6DE]/10 hover:shadow-[0_0_15px_rgba(90,182,222,0.4)]
              transition duration-300
            "
          >
            Get WCO
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
      <span>{label}</span>
      <svg
        className="w-3.5 h-3.5 text-white/60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
