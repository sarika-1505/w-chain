"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full min-h-[571px] flex flex-col items-center relative z-40 overflow-hidden">
      <div
        className="
          w-full

          min-h-[491px]
          md:h-[491px]

          rounded-t-[40px]

          overflow-hidden

          border
          border-white/10
          border-b-0

          relative

          flex
          flex-col
          justify-between
          bg-center
          bg-no-repeat
          bg-cover
          [background-position:top]
        "
        style={{ backgroundImage: "url('/footer-bg.png')" }}
      >
        {/* ================= FOOTER CONTENT ================= */}
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
          {/* ================= GET STARTED ================= */}
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

            <div className="mt-8 md:mt-10">
              <Image
                src="/W Chain-Transparent 1.png"
                alt="W Chain Logo"
                width={86}
                height={48}
                className="object-contain"
              />
            </div>
          </div>

          {/* ================= DEVELOPERS ================= */}
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

          {/* ================= RESOURCES ================= */}
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

          {/* ================= COMMUNITY ================= */}
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

          {/* ================= LEGAL ================= */}
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

            {/* ================= SOCIAL ICONS ================= */}
            <div
              className="
                mt-10

                flex
                items-center
                flex-nowrap

                gap-2
                sm:gap-2
              "
            >
              {[
                "/social-icon/Group 162647.png",
                "/social-icon/Group 162648.png",
                "/social-icon/18.png",
                "/social-icon/20.png",
                "/social-icon/19.png",
              ].map((icon, i) => (
                <div
                  key={i}
                  className="
                    shrink-0

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
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="w-full h-[80px] bg-[#000D27] relative flex items-center justify-center px-6 md:px-[70px]">
          {/* Copyright */}
          <div
            className="
              text-white
              font-Montserrat
              font-normal

              text-[11px]
              sm:text-[13px]
              md:text-[16px]

              leading-[100%]

              tracking-[-0.03em]

              text-center
            "
          >
            © 2026 W Chain. All rights reserved.
          </div>

          {/* Audit Badge */}
          <div className="hidden md:flex absolute right-6 md:right-[70px] items-center">
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

/* ================= FOOTER COLUMN ================= */
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
            w-28.75
            h-0.5
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
