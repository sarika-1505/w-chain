"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-[#002F8D] relative z-40 overflow-hidden">
      <div
        className="
          w-full
          min-h-[577px]
          md:h-[577px]
          rounded-t-[40px]
          overflow-hidden
          bg-cover bg-center
          border border-white/10 border-b-0
          relative
          flex flex-col justify-between
        "
        style={{ backgroundImage: "url('/footer-bg.png')" }}
      >
        {/* Footer Content */}
        <div
          className="
            w-full
            max-w-[1440px]
            mx-auto
            px-6
            md:px-[70px]
            pt-10
            md:pt-[55px]
            pb-6
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-10
            md:gap-[70px]
            flex-1
          "
        >
          {/* Get Started */}
          <div className="flex flex-col">
            <FooterCol
              title="Get Started"
              links={[
                { label: "WCO", href: "/wco" },
                { label: "WAVE (FARM)", href: "/wave" },
                { label: "WAVE Tokenomic", href: "/wave-token" },
                { label: "W Swap", href: "/wswap" },
                {
                  label: "Multi Validator Bridge",
                  href: "/multi-validator-bridge",
                },
                { label: "W+ (Premium Accounts)", href: "#" },
                { label: "Prepaid Cards", href: "/prepaid-cards" },
              ]}
            />

            <div className="mt-8 md:mt-12">
              <Image
                src="/W Chain-Transparent 1.png"
                alt="W Chain Logo"
                width={86}
                height={48}
                className="object-contain"
              />
            </div>
          </div>

          {/* Developers */}
          <FooterCol
            title="Developers"
            links={[
              { label: "W Chain Tokenomics", href: "/w-chain" },
              { label: "W Chain Evolution", href: "/w-chain-evolution" },
              { label: "W Chain Hub (Gitbook)", href: "#" },
              { label: "W Chain (Mainnet) Explorer", href: "#" },
              { label: "W Chain (Testnet) Explorer", href: "#" },
            ]}
          />

          {/* Resources */}
          <FooterCol
            title="Resources"
            links={[
              { label: "Airdrop", href: "/airdrop" },
              { label: "Blogs", href: "/blogs" },
              { label: "Guides & Tutorials", href: "/guidelines" },
              { label: "Ecosystem & Partners", href: "#" },
              { label: "FAQ", href: "/faq" },
              { label: "Brand Book", href: "#" },
              { label: "Media", href: "/media" },
            ]}
          />

          {/* Community */}
          <FooterCol
            title="Community"
            links={[
              { label: "W Chain Community", href: "#" },
              { label: "WayFinders Program", href: "/wayfinders" },
              { label: "Events & AMA's", href: "/events-and-amas" },
              { label: "Community Forum", href: "/community" },
              { label: "Legacy Holders Benefits", href: "#" },
            ]}
          />

          {/* Legal */}
          <div className="flex flex-col">
            <FooterCol
              title="Legal"
              links={[
                { label: "Legal Disclosures", href: "/legal-disclosure" },
                { label: "Terms of Access", href: "/terms-of-access" },
                { label: "W Chain Audit Report", href: "#" },
                { label: "W Bridge Audit Report", href: "#" },
                {
                  label: "WCO Terms and Conditions",
                  href: "/terms-and-conditions",
                },
              ]}
            />

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-3 flex-nowrap">
              {/* X */}
              <SocialIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26L23 21.75h-6.844l-5.36-6.993L4.682 21.75H1.372l7.73-8.835L1 2.25h7.02l4.848 6.231L18.244 2.25z" />
                </svg>
              </SocialIcon>

              {/* Discord */}
              <SocialIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83 72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.71 56.6.54 80.21A105.73 105.73 0 0 0 32.71 96.36a77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.84-5.18c.91-.66 1.8-1.34 2.66-2.06a75.57 75.57 0 0 0 64.32 0c.87.72 1.76 1.4 2.67 2.06a68.68 68.68 0 0 1-10.86 5.19 77 77 0 0 0 6.89 11.1A105.25 105.25 0 0 0 126.6 80.22C129.24 52.84 122.09 29.11 107.7 8.07Z" />
                </svg>
              </SocialIcon>

              {/* Telegram */}
              <SocialIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M21.944 2.506a1 1 0 0 0-1.06-.156L2.884 9.35a1 1 0 0 0 .078 1.87l4.91 1.64 1.64 4.91a1 1 0 0 0 .787.676h.1a1 1 0 0 0 .74-.33l2.73-3.27 4.62 3.39a1 1 0 0 0 1.56-.61l3-14a1 1 0 0 0-.1-.77Z" />
                </svg>
              </SocialIcon>

              {/* LinkedIn */}
              <SocialIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.16h.05c.53-1 1.84-2.16 3.79-2.16 4.05 0 4.8 2.66 4.8 6.12V24h-4v-7.09c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.75V24h-4V8Z" />
                </svg>
              </SocialIcon>

              {/* YouTube */}
              <SocialIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full h-[80px] border-t border-white/10 bg-[#031226] relative flex items-center justify-center px-6 md:px-[70px]">
          {/* Copyright */}
          <div
            className="
              text-white
              font-Montserrat
              font-normal
              text-[16px]
              leading-[100%]
              tracking-[-0.03em]
              text-center
            "
          >
            © 2026 W Chain. All rights reserved.
          </div>

          {/* Audit Badge */}
          <div className="absolute right-6 md:right-[70px] flex items-center">
            <Image
              src="/bottom-bar-img.png"
              alt="Audited by QuillAudits"
              width={127}
              height={52}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Footer Column */
function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      {/* Heading */}
      <h4 className="text-[#B4E4FF] font-semibold mb-5 relative inline-block text-[17px]">
        {title}

        <span
          className="
            block
            w-[115px]
            h-[2px]
            mt-2
            rounded-r-[20px]
            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
          "
        ></span>
      </h4>

      {/* Links */}
      <ul className="space-y-3 text-[#FFFFFF] text-[14px] md:text-[15px]">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-[#FFFFFF] hover:text-[#B4E4FF] transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icon */
function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[40px] h-[40px] min-w-[40px] rounded-full  flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
      {children}
    </div>
  );
}
