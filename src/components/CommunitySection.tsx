"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    label: "Twitter",
    stat: "3,534 Followers",
    icon: "/Twitter.png",
  },
  {
    label: "Linkedin",
    stat: "427 Followers",
    icon: "/linkdin.png",
  },
  {
    label: "Telegram",
    stat: "7,179 Members",
    icon: "/Telegram.png",
  },
];

const communityPosts = [
  {
    text: "wiz is killing it! that 24/7 ai boost for w chain is awesome. $wco's is strong, let's go higher!",
    img: "/image 42.png",
    name: "initial a",
    user: "@anif_1908",
  },
  {
    text: "this is the kind of upgrade that changes the game. real time ai support on chain? let's goooo",
    img: "/image 42 (1).png",
    name: "Oxsilenthunt",
    user: "@jef_nisel",
  },
  {
    text: "hey, love the excitement about wchain's growth, sounds like amazing things are coming with prepaid cards and wave, super cool to see this energy!",
    img: "/image 42 (2).png",
    name: "livia roze",
    user: "@liviaroze",
  },
  {
    text: "when it comes to real utility, $wco stands out. it's not hype, it's powering secure, scalable solutions through the @wchainnetwork hybrid blockchain. perfect for devs, enterprises, and anyone who wants more than just speculation",
    img: "/image 42 (1).png",
    name: "crypto_maverick",
    user: "@crypto_maverick",
  },
];

const socials = [
  { icon: "/Twitter.png", alt: "Twitter", href: "#" },
  { icon: "/linkdin.png", alt: "LinkedIn", href: "#" },
  { icon: "/Telegram.png", alt: "Telegram", href: "#" },
];

export default function CommunitySection() {
  return (
    <section className="w-full bg-[#082cae] overflow-hidden">
      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section
        className="
          relative
          w-full

          h-[320px]
          sm:h-[360px]
          md:h-[400px]

          overflow-hidden

          rounded-b-[40px]
          md:rounded-b-[60px]
        "
      >
        {/* ================= BG IMAGE ================= */}
        <Image
          src="/community-bg.png"
          alt="Community Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* ================= OVERLAY ================= */}
        <div
          className="
            absolute
            inset-0
            z-[1]
          "
          style={{
            background: `
              linear-gradient(
                180deg,
                #010101 0%,
                #000000 45%,
                #004088 100%
              )
            `,
            opacity: 0.82,
          }}
        />

        {/* ================= BOTTOM BLUE GLOW ================= */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[140px]
            z-[2]

            bg-[linear-gradient(180deg,rgba(0,64,136,0)_0%,rgba(0,64,136,0.95)_100%)]
          "
        />

        {/* ================= CONTENT ================= */}
        <div
          className="
            relative
            z-10

            h-full
            w-full

            flex
            flex-col
            items-center
            justify-center

            text-center

            px-5
            md:px-10
          "
        >
          {/* HEADING */}
          <h1
            className="
              font-Montserrat
              font-bold

              text-transparent
              bg-clip-text

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)]

              text-[32px]
              sm:text-[42px]
              lg:text-[58px]

              leading-[1.1]
              lg:leading-[68px]

              tracking-[-0.03em]

              max-w-[1100px]

              mb-5
            "
          >
            Together, We Build the Future of Web3
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-white

              font-Montserrat
              font-medium

              text-[15px]
              sm:text-[18px]
              lg:text-[28px]

              leading-[1.4]

              max-w-[760px]
            "
          >
            Discover a vibrant, global network of creators, developers, and
            enthusiasts on W Chain.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* COMMUNITY POWERED SECTION */}
      {/* ===================================================== */}

      <section
        className="
    w-full

    bg-[linear-gradient(180deg,#000000_0%,#004088_100%)]

    px-4
    md:px-10

    py-16
    md:py-24

    flex
    flex-col
    items-center
  "
      >
        {/* ================= BUTTONS ================= */}
        <div
          className="
      flex
      flex-wrap

      items-center
      justify-center

      gap-4
      md:gap-5

      mb-10
    "
        >
          {/* BUTTON 1 */}
          <Link
            href="#"
            className="
        flex
        items-center
        gap-3

        bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

        text-white

        px-6
        md:px-7

        py-3

        rounded-full

        font-Montserrat
        font-bold

        text-[13px]
        md:text-[15px]

        shadow-[0_0_18px_rgba(78,165,255,0.35)]

        hover:opacity-90
        transition-opacity
      "
          >
            Join Telegram
            <span
              className="
          w-6
          h-6

          rounded-full

          border
          border-white

          flex
          items-center
          justify-center
        "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* BUTTON 2 */}
          <Link
            href="#"
            className="
        flex
        items-center
        gap-3

        bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

        text-white

        px-6
        md:px-7

        py-3

        rounded-full

        font-Montserrat
        font-bold

        text-[13px]
        md:text-[15px]

        shadow-[0_0_18px_rgba(78,165,255,0.35)]

        hover:opacity-90
        transition-opacity
      "
          >
            Apply to be a WayFinder
            <span
              className="
          w-6
          h-6

          rounded-full

          border
          border-white

          flex
          items-center
          justify-center
        "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* BUTTON 3 */}
          <Link
            href="#"
            className="
        flex
        items-center
        gap-3

        bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

        text-white

        px-6
        md:px-7

        py-3

        rounded-full

        font-Montserrat
        font-bold

        text-[13px]
        md:text-[15px]

        shadow-[0_0_18px_rgba(78,165,255,0.35)]

        hover:opacity-90
        transition-opacity
      "
          >
            Follow us on X
            <span
              className="
          w-6
          h-6

          rounded-full

          border
          border-white

          flex
          items-center
          justify-center
        "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* ================= HEADING ================= */}
        <h2
          className="
      font-Montserrat
      font-bold

      text-white

      text-[34px]
      sm:text-[46px]
      lg:text-[60px]

      leading-[1.1]

      tracking-[-0.03em]

      text-center

      mb-10
      md:mb-14
    "
        >
          Community-Powered
        </h2>

        {/* ================= IMAGE ================= */}
        <div
          className="
      w-full
      max-w-[1207px]

      overflow-hidden

      rounded-[10px]

      border
      border-[#4EA5FF]/20

      shadow-[0_0_30px_rgba(78,165,255,0.12)]
    "
        >
          <Image
            src="/community-img.png"
            alt="Community Powered"
            width={1207}
            height={1328}
            className="
        w-full
        h-auto
        object-cover
      "
          />
        </div>
      </section>

      {/* ===================================================== */}
      {/* JOIN OUR VIBRANT COMMUNITY */}
      {/* ===================================================== */}

      <section
        className="relative h-[488px] flex flex-col items-center justify-center gap-12 px-6 py-14 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #081540 0%, #0d2680 45%, #1a4fa8 100%)",
        }}
      >
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(26,79,168,0.45) 0%, transparent 70%)",
          }}
        />

        {/* Heading */}
        <h1 className="relative z-10 text-white font-Montserrat font-bold text-3xl md:text-[50px] text-center tracking-tight">
          Join our Vibrant Community
        </h1>

        {/* Cards Grid */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-10">
          {cards.map((card, i) => (
            <div
              key={card.label}
              className="group flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "20px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(28,96,107,0.60) 100%)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid #8BC9D4",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.10), 0 0 18px 2px rgba(139,201,212,0.18), 0 6px 32px rgba(0,0,0,0.30)",
                animationDelay: `${i * 0.13}s`,
              }}
            >
              {/* Icon Box */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "14px",
                  background: "rgba(0,0,0,0.38)",
                  border: "1px solid rgba(139,201,212,0.35)",
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.label}
                  width={78}
                  height={78}
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Label */}
              <p
                className="text-[20px] font-bold tracking-wide"
                style={{ color: "#4fc3d4" }}
              >
                {card.label}
              </p>

              {/* Stat */}
              <p className="text-[18px] font-normal text-white/80 tracking-wide">
                {card.stat}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================== */}
      {/* COMMUNITY DIALOGUE */}
      {/* ===================================================== */}
      <section
        className="relative w-full py-20 md:py-28 px-4 md:px-10 flex flex-col items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #00050F 0%, #000A28 35%, #000E3A 60%, #001158 100%)",
        }}
      >
        {/* Radial dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,5,20,0.7) 0%, transparent 60%)",
          }}
        />

        {/* ── Heading ── */}
        <h2
          className="relative z-10 font-Montserrat font-bold text-center mb-14
                   text-[36px] sm:text-[44px] lg:text-[56px]
                   leading-[1.1] tracking-[-0.03em]
                   text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0D7FF2 0%, #B4E4FF 52%, #1F9DD8 100%)",
          }}
        >
          Community Dialogue
        </h2>

        {/* ── Cards ── */}
        <div className="relative z-10 w-full max-w-[1260px] flex flex-wrap justify-center gap-5 lg:gap-6">
          {communityPosts.map((card, i) => (
            <div
              key={i}
              /* Outer wrapper = radial gradient border */
              className="flex-shrink-0 p-[2px] rounded-[22px]"
              style={{
                width: "280px",
                height: "400px",
                background:
                  "radial-gradient(ellipse at top left, #8BC9D4 0%, #FFFFFF 50%, #8BC9D4 100%)",
                boxShadow:
                  "0 0 30px rgba(139,201,212,0.18), 0 0 8px rgba(139,201,212,0.10)",
              }}
            >
              {/* Inner card */}
              <div
                className="w-full h-full rounded-[20px] flex flex-col"
                style={{
                  background:
                    "linear-gradient(180deg, #1A2E4A 0%, #0F2040 45%, #081530 75%, #040D20 100%)",
                  padding: "28px 24px 24px 24px",
                }}
              >
                {/* Bracket image */}
                <div className="relative w-10 h-8 flex-shrink-0">
                  <Image
                    src="/Vector-bracet.png"
                    alt="quote"
                    fill
                    className="object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(185deg) brightness(105%)",
                    }}
                  />
                </div>

                {/* Space between bracket and text */}
                <p className="font-Montserrat font-medium text-white text-[15px] leading-[1.75] mt-6 flex-1">
                  {card.text}
                </p>

                {/* User info — no border line */}
                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src={card.img}
                    alt={card.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover flex-shrink-0 ring-2 ring-[#4EA5FF]/25"
                  />
                  <div>
                    <h4
                      className="font-Montserrat font-semibold text-[14px] leading-none mb-1"
                      style={{ color: "#4EA5FF" }}
                    >
                      {card.name}
                    </h4>
                    <p
                      className="font-Montserrat text-[12px]"
                      style={{ color: "#4EA5FF" }}
                    >
                      {card.user}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dots ── */}
        <div className="flex items-center gap-2.5 mt-12 relative z-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
              style={{ background: i === 0 ? "#58B8FF" : "#1A2E55" }}
            />
          ))}
        </div>

        {/* ── Bottom divider ── */}
        <div
          className="w-full max-w-[1260px] h-px mt-14 relative z-10"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />
      </section>

      <section
        className="relative w-full overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(180deg, #00050F 0%, #000A28 35%, #000E3A 60%, #001158 100%)",
        }}
      >
        {/* Radial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,5,20,0.6) 0%, transparent 60%)",
          }}
        />

        {/* ── Inner wrapper — centered, equal padding both sides ── */}
        <div className="relative z-10 w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-[1400px]">
          {/* ── Heading ── */}
          <h2
            className="font-Montserrat font-bold text-transparent bg-clip-text mb-10
                     text-[28px] sm:text-[36px] lg:text-[50px]
                     leading-[1.15] tracking-[-0.02em]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0D7FF2 0%, #B4E4FF 52%, #1F9DD8 100%)",
            }}
          >
            Wayfinders in the Wild: Real Stories, Real Impact
          </h2>

          {/* ── Avatar ── */}
          <div className="mb-8">
            <Image
              src="/logo-left.png"
              alt="Gino"
              width={100}
              height={100}
              className="rounded-full object-cover ring-2 ring-[#4EA5FF]/30"
            />
          </div>

          {/* ── Body text ── */}
          <p
            className="font-Montserrat font-medium text-white mb-10 w-full px-8"
            style={{
              fontSize: "18px",
              lineHeight: "1.60",
              letterSpacing: "-0.03em",
            }}
          >
            Being a Wayfinder means staying close to the action, testing new
            features, sharing feedback, and helping others make sense of what's
            happening across W Chain. It's all about building together, staying
            curious, and making sure the community grows stronger every day.
            Sergio Premium WayFinder Sergio "Being an Elite WayFinder for W
            Chain has been an incredible journey! From Day 1, this program has
            truly valued my contributions, offering genuine recognition and a
            platform to make a real impact. If you're passionate about Web3 and
            want to shape the future alongside an amazing community, the
            WayFinders program is where you belong. It's more than just a role;
            it's a chance to shine and grow. Highly recommend for any Web3
            expert or aspiring contributor!" Danny Elite WayFinder Danny I've
            witnessed firsthand the power of a community-driven vision to
            revolutionize digital payments. Being a WayFinder has given me a
            front-row seat to shaping this innovative platform, from sharing
            ideas to collaborating with a passionate global community. W Chain
            empowers its members to have a voice, and I'm excited to be part of
            a movement that's redefining how we transact in the Web3 era. Join
            us and help build the future of finance!! Steeve Premium WayFinder
            Steeve Being a WayFinder for W Chain has been an amazing opportunity
            to build a strong connection between the community and the W Chain
            team. I truly believe that close collaboration benefits everyone
            involved. By being so close to the action, I have the chance to test
            new features early and stay at the forefront of W Chain's
            development. It's rewarding to contribute and help shape the
            project's future while ensuring the community's voice is heard.
            Everyone must win. Animalinvestor
          </p>

          {/* ── User name & role ── */}
          <div>
            <p
              className="font-Montserrat font-semibold text-[18px] leading-none mb-1"
              style={{ color: "#4EA5FF" }}
            >
              Gino
            </p>
            <p
              className="font-Montserrat font-medium text-[15px]"
              style={{ color: "#4EA5FF" }}
            >
              Premium WayFinder
            </p>
          </div>

          {/* ── Bottom divider ── */}
          <div
            className="w-full mt-16 h-px"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />
        </div>
      </section>

      <section
        className="relative w-full flex items-center justify-center overflow-hidden py-16 px-4"
        style={{
          background:
            "linear-gradient(180deg, #00050F 0%, #000A28 35%, #000E3A 60%, #001158 100%)",
        }}
      >
        {/* Radial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,5,20,0.5) 0%, transparent 65%)",
          }}
        />

        {/* ── Outer border wrapper ── */}
        <div
          className="relative z-10 p-[1.5px] rounded-[20px] w-full"
          style={{
            maxWidth: "1206px",
            /* Linear gradient border top-light → bottom-dark matching the card */
            background:
              "linear-gradient(160deg, rgba(78,165,255,0.55) 0%, rgba(30,80,160,0.25) 50%, rgba(78,165,255,0.45) 100%)",
            boxShadow:
              "0 0 40px rgba(78,165,255,0.10), 0 0 12px rgba(78,165,255,0.08)",
          }}
        >
          {/* ── Inner card ── */}
          <div
            className="w-full rounded-[19px] flex flex-col items-center justify-center text-center gap-6 py-16 px-6 md:px-20"
            style={{
              minHeight: "478px",
              background:
                "linear-gradient(160deg, #1E3254 0%, #162848 30%, #0D1E3A 60%, #080F25 100%)",
            }}
          >
            {/* Heading */}
            <h2
              className="font-Montserrat font-bold text-transparent bg-clip-text
                       text-[32px] sm:text-[40px] lg:text-[50px]
                       leading-[1.2] tracking-[-0.02em] max-w-[700px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0D7FF2 0%, #B4E4FF 52%, #1F9DD8 100%)",
              }}
            >
              Ready to Help Shape the Future of Blockchain?
            </h2>

            {/* Subtitle */}
            <p className="font-Montserrat font-normal text-white/75 text-[16px] sm:text-[18px] leading-[1.6] max-w-[600px]">
              A chain is only as strong as its links. A project, only as strong
              as its community.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              {socials.map((s) => (
                <a
                  key={s.alt}
                  href={s.href}
                  aria-label={s.alt}
                  className="flex items-center justify-center rounded-[10px] transition-all duration-200 hover:scale-105 hover:brightness-125"
                  style={{
                    width: "64px",
                    height: "64px",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(20,50,100,0.60) 100%)",
                    border: "1px solid rgba(78,165,255,0.30)",
                    boxShadow: "0 0 12px rgba(78,165,255,0.10)",
                  }}
                >
                  <Image
                    src={s.icon}
                    alt={s.alt}
                    width={78}
                    height={78}
                    className="object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full flex items-center justify-center overflow-hidden py-16 px-4"
        style={{
          background:
            "linear-gradient(180deg, #000A28 0%, #001060 50%, #001F7A 100%)",
        }}
      >
        {/* ── Outer gradient border wrapper ── */}
        <div
          className="relative z-10 p-[1px] rounded-[20px] w-full"
          style={{
            maxWidth: "1206px",
            background:
              "radial-gradient(ellipse at top left, #8BC9D4 0%, #FFFFFF 50%, #8BC9D4 100%)",
            boxShadow:
              "0 0 32px rgba(139,201,212,0.20), 0 0 10px rgba(139,201,212,0.10)",
          }}
        >
          {/* ── Inner card ── */}
          <div
            className="w-full rounded-[19px] flex flex-col items-center justify-center text-center gap-6 px-6 md:px-20"
            style={{
              minHeight: "376px",
              background:
                "linear-gradient(160deg, #1E3254 0%, #162848 30%, #0D1E3A 60%, #080F25 100%)",
            }}
          >
            {/* Heading */}
            <h2
              className="font-Montserrat font-bold text-transparent bg-clip-text
                       text-[32px] sm:text-[42px] lg:text-[50px]
                       leading-[1.15] tracking-[-0.02em]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0D7FF2 0%, #B4E4FF 52%, #1F9DD8 100%)",
              }}
            >
              Connect, Collaborate and Thrive
            </h2>

            {/* Subtitle */}
            <p className="font-Montserrat font-normal text-white/80 text-[16px] sm:text-[18px] leading-[1.7] max-w-[720px]">
              Ready to be part of something big? The W Chain community is
              waiting for you! Connect with fellow enthusiasts, contribute to
              exciting projects, and help shape the future of finance. Join us
              today and let's build the decentralized world together!
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 font-Montserrat font-semibold text-white text-[16px] px-7 py-3 rounded-full transition-all duration-200 hover:brightness-110 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #0D7FF2 0%, #1F9DD8 100%)",
                boxShadow: "0 0 20px rgba(13,127,242,0.35)",
              }}
            >
              Join the Revolution
              {/* Arrow circle */}
              <span
                className="flex items-center justify-center rounded-full bg-white/20"
                style={{ width: "28px", height: "28px" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
