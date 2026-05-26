"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-[#002F8D] relative z-40 overflow-hidden">
      <div
        className="
          w-full
          min-h-144.25
          md:h-144.25
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
            relative
            z-10

            w-full
            max-w-[1440px]

            mx-auto

            px-6
            md:px-[70px]

            pt-12
            md:pt-13

            pb-8

            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5

            gap-y-10
            gap-x-10
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
            <div
              className="
    mt-10

    flex
    items-center
    flex-nowrap

    gap-1
    sm:gap-2
  "
            >
              {[
                "/social-icon/Group 162647.png", // X
                "/social-icon/Group 162648.png", // Discord
                "/social-icon/18.png", // Telegram
                "/social-icon/20.png", // Linkedin
                "/social-icon/19.png", // Youtube
              ].map((icon, i) => (
                <div
                  key={i}
                  className="
        w-[30px]
        h-[30px]

        sm:w-[36px]
        sm:h-[36px]

        lg:w-[40px]
        lg:h-[40px]

        rounded-full

        p-[1px]

        bg-[radial-gradient(circle,#8BC9D4_0%,#FFFFFF_50%,#8BC9D4_100%)]

        shadow-[0_0_10px_rgba(139,201,212,0.18)]

        shrink-0
      "
                >
                  {/* INNER CIRCLE */}
                  <div
                    className="
          w-full
          h-full

          rounded-full

          bg-[linear-gradient(180deg,#536A96_0%,#31548D_50%,#10367D_100%)]

          flex
          items-center
          justify-center

          transition-all
          duration-300

          hover:scale-105
        "
                  >
                    <Image
                      src={icon}
                      alt="social-icon"
                      width={40}
                      height={40}
                      className="
            object-contain

            w-[14px]
            h-[14px]

            sm:w-[16px]
            sm:h-[16px]

            lg:w-[18px]
            lg:h-[18px]
          "
                    />
                  </div>
                </div>
              ))}
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
