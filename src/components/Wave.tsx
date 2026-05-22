import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const POOLS_DATA = [
  {
    name: "WCO (Single Pool)",
    icons: ["Group 162987.png"],
    multiplier: "1.0x",
    apr: "0.37%",
    tvl: "$78,656.93",
    vol: "$1,890.11",
  },
  {
    name: "WAVE/WCO",
    icons: ["Group 162989.png", "Group 162987.png"],
    multiplier: "2.5x",
    apr: "17.593%",
    tvl: "$55,205.33",
    vol: "$1,222.32",
  },
  {
    name: "USDTWCO",
    icons: ["Group 162993.png", "Group 162987.png"],
    multiplier: "2.5x",
    apr: "12.508%",
    tvl: "$19,411.89",
    vol: "$601.56",
  },
  {
    name: "USDCWCO",
    icons: ["Group 162996.png", "Group 162987.png"],
    multiplier: "1.0x",
    apr: "13.973%",
    tvl: "$4,865.41",
    vol: "$62.52",
  },
  {
    name: "SOL/WCO",
    icons: ["Group 163000.png", "Group 162987.png"],
    multiplier: "1.0x",
    apr: "25.675%",
    tvl: "$3,782.73",
    vol: "$0",
  },
  {
    name: "DOGE/WCO",
    icons: ["Group 163003.png", "Group 162987.png"],
    multiplier: "1.0x",
    apr: "27.025%",
    tvl: "$3,593.75",
    vol: "$0",
  },
  {
    name: "XRPWCO",
    icons: ["Group 163008.png", "Group 162987.png"],
    multiplier: "1.0x",
    apr: "27.97%",
    tvl: "$3,472.25",
    vol: "$3.71",
  },
  {
    name: "WHB20270831/WCO",
    icons: ["Group 162987.png", "Group 162987.png"],
    multiplier: "1.0x",
    apr: "3.304%",
    tvl: "$29,397.08",
    vol: "$0",
  },
];

export default function Wave() {
  return (
    <div className="w-full bg-[#002F8D] flex flex-col items-center font-Montserrat pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[800px] overflow-hidden rounded-b-[40px] md:rounded-b-[50px] border-b border-l border-r border-[#4EA5FF]/30 -mb-[40px] md:-mb-[50px] z-10 flex items-center justify-center bg-[#020B2D]">
        {/* Background Image */}
        <Image
          src="/Group 163079.png"
          alt="Wave Background"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,45,0.92)_0%,rgba(2,11,45,0.55)_45%,rgba(2,11,45,0.15)_100%)] pointer-events-none" />

        {/* Main Container */}
        <div className="relative z-10 w-full max-w-[1200px] px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex-1 flex flex-col items-start max-w-[650px]">
            {/* HEADING */}
            <h1
              className="
    font-Montserrat
    text-[34px]
    sm:text-[42px]
    lg:text-[58px]
    font-bold
    leading-[0.95]
    lg:leading-[58px]
    tracking-[-0.04em]
    mb-10
    w-full
    max-w-[560px]
  "
            >
              {/* First Line */}
              <div className="flex items-center gap-2">
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]">
                  WAVE
                </span>

                <span className="text-[36px] lg:text-[44px] relative top-[-2px]">
                  🌊
                </span>
              </div>

              {/* Second Line */}
              <div className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] mt-1">
                The DeFi Engine
              </div>

              {/* Third Line */}
              <div className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] mt-1">
                Powering W Chain
              </div>
            </h1>

            {/* ================= BUTTON GROUP ================= */}
            <div
              className="
    flex
    flex-wrap
    items-center

    gap-[12px]

    w-full
    max-w-[639px]

    md:flex-nowrap
  "
            >
              {/* ================= Launch WAVE ================= */}
              <Link
                href="#"
                className="
      group

      w-full
      sm:w-auto
      sm:min-w-[167px]

      h-[51px]

      pl-[18px]
      pr-[10px]

      rounded-full

      border
      border-[#5AB6DE]

      bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

      flex
      items-center
      justify-between

      hover:opacity-90

      transition-all
      duration-300
    "
              >
                <span
                  className="
        font-Montserrat
        font-bold
        text-[16px]
        leading-[100%]
        tracking-[-0.03em]
        text-white
        whitespace-nowrap
      "
                >
                  Launch WAVE
                </span>

                <span
                  className="
        ml-[18px]

        w-[30px]
        h-[30px]

        rounded-full
        border
        border-white

        flex
        items-center
        justify-center

        shrink-0
      "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* ================= Tokenomics ================= */}
              <Link
                href="#"
                className="
      group

      w-full
      sm:w-auto
      sm:min-w-[167px]

      h-[51px]

      pl-[18px]
      pr-[10px]

      rounded-full

      border
      border-[#5AB6DE]

      bg-[#00142C]

      hover:bg-[#071A3D]
      hover:border-[#06152F]

      transition-all
      duration-300

      flex
      items-center
      justify-between
    "
              >
                <span
                  className="
        font-Montserrat
        font-bold
        text-[16px]
        leading-[100%]
        tracking-[-0.03em]
        text-white
        whitespace-nowrap
      "
                >
                  Tokenomics
                </span>

                <span
                  className="
        ml-[18px]

        w-[30px]
        h-[30px]

        rounded-full
        border
        border-white

        flex
        items-center
        justify-center

        shrink-0
      "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* ================= Get Started ================= */}
              <Link
                href="#"
                className="
      group

      w-full
      sm:w-auto
      sm:min-w-[167px]

      h-[51px]

      pl-[18px]
      pr-[10px]

      rounded-full

      border
      border-[#5AB6DE]

      bg-[#00142C]

      hover:bg-[#071A3D]
      hover:border-[#06152F]

      transition-all
      duration-300

      flex
      items-center
      justify-between
    "
              >
                <span
                  className="
        font-Montserrat
        font-bold
        text-[16px]
        leading-[100%]
        tracking-[-0.03em]
        text-white
        whitespace-nowrap
      "
                >
                  Get Started
                </span>

                <span
                  className="
        ml-[18px]

        w-[30px]
        h-[30px]

        rounded-full
        border
        border-white

        flex
        items-center
        justify-center

        shrink-0
      "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex-1 flex justify-end items-center relative z-10 mt-12 md:mt-0 w-full">
            <div className="relative w-[300px] h-[150px] md:w-[395px] md:h-[190px]">
              <Image
                src="/3. W Chain-Product Page-Wave.svg"
                alt="WAVE Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="
    relative
    w-full

    overflow-hidden

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    pt-[90px]
    sm:pt-[110px]
    lg:pt-[120px]

    pb-[90px]
    sm:pb-[110px]
    lg:pb-[130px]

    px-4
    sm:px-6
    lg:px-8
  "
      >
        {/* ================= CONTENT ================= */}
        <div
          className="
      max-w-[1440px]
      mx-auto

      flex
      flex-col
      items-center
    "
        >
          {/* ================= HEADING ================= */}
          <h2
            className="
        text-center

        font-Montserrat
        font-bold

        text-[32px]
        sm:text-[40px]
        lg:text-[50px]

        leading-[1.1]
        lg:leading-[60px]

        tracking-[-0.03em]

        text-transparent
        bg-clip-text

        bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

        mb-[50px]
        sm:mb-[65px]
      "
          >
            Live Ecosystem Pulse
          </h2>

          {/* ================= STATS ================= */}
          <div
            className="
        w-full

        flex
        flex-wrap

        items-center
        justify-center

        gap-6
        sm:gap-8
        lg:gap-10
      "
          >
            {/* ================= ITEM ================= */}
            {[
              {
                value: "184M",
                label: "Total Value Locked (M)",
              },
              {
                value: "126M",
                label: "WAVE Staked",
              },
              {
                value: "15240",
                label: "Active Stakers",
              },
              {
                value: "23.4%",
                label: "APY (avg)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            relative

            w-[160px]
            h-[160px]

            sm:w-[190px]
            sm:h-[190px]

            md:w-[220px]
            md:h-[220px]

            lg:w-[263px]
            lg:h-[263px]

            rounded-full

            border-[10px]

            border-[#1482F2]/40

            flex
            flex-col

            items-center
            justify-center

            text-center

            bg-transparent
          "
              >
                {/* INNER GLOW */}
                <div
                  className="
              absolute
              inset-0

              rounded-full

              border-[2px]
              border-[#ABE0FF]/20

              shadow-[0_0_40px_rgba(20,130,242,0.12)]

              pointer-events-none
            "
                />

                {/* VALUE */}
                <h3
                  className="
              relative
              z-10

              text-white

              font-Montserrat
              font-bold

              text-[30px]
              sm:text-[38px]
              lg:text-[52px]

              leading-none
            "
                >
                  {item.value}
                </h3>

                {/* LABEL */}
                <p
                  className="
              relative
              z-10

              mt-3

              text-white/90

              text-[10px]
              sm:text-[11px]
              lg:text-[13px]

              leading-[1.4]

              font-Montserrat
              font-medium

              max-w-[80%]
            "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STAKE LP TOKENS ================= */}
      <section className="w-full pt-20 pb-20 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[44px] font-bold mb-16 text-center leading-[1.4] max-w-[800px]">
          Stake LP tokens, Harvest yield.
          <br />
          <span className="text-[#84C2FF]">Ride the liquidity tide.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1000px]">
          {/* Card 1 */}
          <div className="flex-1 min-w-[280px] bg-[#071330] border border-[#4EA5FF]/20 rounded-[16px] py-10 px-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-2">
              Total Value Locked
            </h3>
            <p className="text-white text-[18px]">$198,385.41</p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 min-w-[280px] bg-[#071330] border border-[#4EA5FF]/20 rounded-[16px] py-10 px-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-2">
              Total Staked
            </h3>
            <p className="text-white text-[18px]">$0.00</p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 min-w-[280px] bg-[#071330] border border-[#4EA5FF]/20 rounded-[16px] py-10 px-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            <h3 className="text-[#4EA5FF] text-[18px] md:text-[20px] font-bold mb-2">
              Pending Rewards
            </h3>
            <p className="text-white text-[16px] md:text-[18px]">
              0.000000 WAVE ($0.00)
            </p>
          </div>
        </div>
      </section>

      {/* ================= LIQUIDITY POOLS ================= */}
      <section className="w-full py-16 px-4 md:px-10 flex flex-col items-center relative z-10">
        <div className="w-full max-w-[1000px] overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold w-[300px]">
                  Pools
                </th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">
                  Multiplier
                </th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">
                  APR
                </th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">
                  TVL
                </th>
                <th className="py-6 px-4 text-[#4EA5FF] text-[18px] font-bold">
                  24h Vol
                </th>
              </tr>
            </thead>
            <tbody>
              {POOLS_DATA.map((pool, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-5 px-4 flex items-center gap-4">
                    <div className="flex items-center">
                      {pool.icons.map((icon, i) => (
                        <div
                          key={i}
                          className={`w-[32px] h-[32px] rounded-[8px] overflow-hidden ${i > 0 ? "ml-2" : ""}`}
                        >
                          <Image
                            src={`/logo-img/${icon}`}
                            alt={icon.replace(/\.[^.]+$/, "")}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-white/90 text-[15px] font-medium">
                      {pool.name}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">
                    {pool.multiplier}
                  </td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">
                    {pool.apr}
                  </td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">
                    {pool.tvl}
                  </td>
                  <td className="py-5 px-4 text-white/90 text-[15px] font-light">
                    {pool.vol}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-7">
          {/* Add Liquidity */}
          <button
            className="
      group

      w-[200px]
      h-[50px]

      rounded-full

      bg-[linear-gradient(90deg,#0B6FC2_0%,#6BC5EA_100%)]

      px-[8px]
      pl-[22px]

      flex
      items-center
      justify-between

      shadow-[0_4px_20px_rgba(91,182,222,0.18)]

      transition-all
      duration-300

      hover:brightness-110
    "
          >
            <span
              className="
        text-white

        font-Montserrat
        font-bold

        text-[16px]
        leading-[100%]
        tracking-[-0.03em]
      "
            >
              Add Liquidity
            </span>

            <span
              className="
        w-[32px]
        h-[32px]

        rounded-full

        border
        border-white

        flex
        items-center
        justify-center

        bg-white/10
        backdrop-blur-sm
      "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>

          {/* Harvest All */}
          <button
            className="
      group

      w-[200px]
      h-[50px]

      rounded-full

      bg-[linear-gradient(90deg,#0B6FC2_0%,#6BC5EA_100%)]

      px-[8px]
      pl-[22px]

      flex
      items-center
      justify-between

      shadow-[0_4px_20px_rgba(91,182,222,0.18)]

      transition-all
      duration-300

      hover:brightness-110
    "
          >
            <span
              className="
        text-white

        font-Montserrat
        font-bold

        text-[16px]
        leading-[100%]
        tracking-[-0.03em]
      "
            >
              Harvest All
            </span>

            <span
              className="
        w-[32px]
        h-[32px]

        rounded-full

        border
        border-white

        flex
        items-center
        justify-center

        bg-white/10
        backdrop-blur-sm
      "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* ================= CTA / QUOTE SECTION ================= */}
      <section
        className="
    w-full

    pt-[90px]
    pb-[170px]

    px-4
    md:px-10

    flex
    flex-col
    items-center
    justify-center

    text-center

    relative
    z-10

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    -mb-[80px]
    lg:-mb-[100px]

    overflow-hidden
  "
      >
        {/* ================= TOP DIVIDER ================= */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[90%]
      max-w-[1205px]

      h-[1px]

      bg-white/10
    "
        />

        {/* ================= BG EXTENSION ================= */}
        <div
          className="
      absolute
      left-0
      right-0
      bottom-[-120px]

      h-[120px]

      bg-[#002F8D]

      -z-10
      pointer-events-none
    "
        />

        {/* ================= QUOTE ICON ================= */}
        <div className="mb-8">
          <Image
            src="/Group 162793.png"
            alt="Quote Icon"
            width={72}
            height={72}
            className="object-contain"
          />
        </div>

        {/* ================= HEADING ================= */}
        <h2
          className="
      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[42px]
      lg:text-[50px]

      leading-[1.15]
      lg:leading-[60px]

      tracking-[-0.03em]

      max-w-[699px]

      mb-12

      text-transparent
      bg-clip-text

      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
    "
        >
          &quot;WAVE is not just a reward –
          <br />
          it&apos;s a movement.&quot;
        </h2>

        {/* ================= BUTTON ================= */}
        <button
          className="
      group

      w-[200px]
      h-[50px]

      rounded-full

      border
      border-[#5AB6DE]

      bg-[#00142C]

      px-[8px]
      pl-[22px]

      flex
      items-center
      justify-between

      transition-all
      duration-300

      hover:bg-[#071A3D]
      hover:border-[#7DD3FC]
    "
        >
          <span
            className="
        text-white

        font-Montserrat
        font-bold

        text-[16px]
        leading-[100%]
        tracking-[-0.03em]
      "
          >
            Ride the wave
          </span>

          <span
            className="
        w-[32px]
        h-[32px]

        rounded-full

        border
        border-white

        flex
        items-center
        justify-center

        bg-white/5
      "
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </section>
    </div>
  );
}
