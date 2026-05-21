import Image from "next/image";
import Link from "next/link";

export default function WSwap() {
  return (
    <div className="w-full bg-[#020B2D] flex flex-col items-center font-Montserrat pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[800px] overflow-hidden rounded-b-[40px] md:rounded-b-[50px] bg-[#020B2D] flex items-center justify-center">
        {/* ================= BG IMAGE ================= */}
        <Image
          src="/Group 162958.png"
          alt="WSwap Background"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* ================= CONTENT ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1280px]

      px-6
      md:px-8
      lg:px-8

      py-20

      flex
      flex-col
      lg:flex-row

      items-center
      justify-between

      gap-12
    "
        >
          {/* ================= LEFT SIDE ================= */}
          <div
            className="
        w-full
        max-w-[643px]
      "
          >
            {/* ================= HEADING ================= */}
            <h1
              className="
          font-Montserrat
          font-bold

          text-white

          text-[36px]
          sm:text-[42px]
          lg:text-[50px]

          leading-[105%]
          tracking-[-0.03em]

          w-full
          max-w-[643px]

          mb-12
        "
            >
              W Swap Seamless Swaps,
              <br />
              <span
                className="
            text-transparent
            bg-clip-text
            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
          "
              >
                Unified
              </span>{" "}
              Liquidity.
            </h1>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-wrap items-center gap-4 mb-24">
              {/* Launch App */}
              <Link
                href="#"
                className="
            group

            h-[51px]
            min-w-[200px]

            rounded-full

            pl-[20px]
            pr-[8px]

            bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

            flex
            items-center
            justify-between

            text-white

            font-Montserrat
            font-bold
            text-[16px]
            leading-[100%]

            shadow-[0_0_20px_rgba(78,165,255,0.35)]

            hover:opacity-90

            transition-all
            duration-300
          "
              >
                <span className="font-Montserrat font-bold text-[16px]">
                  Launch App
                </span>

                <span
                  className="
              w-8
              h-8

              rounded-full
              border
              border-white

              flex
              items-center
              justify-center

              bg-white/10
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
              </Link>

              {/* View Documentation */}
              <Link
                href="#"
                className="
            group

            h-12.75
            min-w-63.75

            rounded-full

            border
            border-[#5AB6DE]

            bg-[#00142C]

            pl-5.5
            pr-2

            flex
            items-center
            justify-between

            text-white

            hover:bg-[#071A3D]
            hover:border-[#7DD3FC]

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
            "
                >
                  View Documentation
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
              </Link>
            </div>

            {/* ================= STATS ================= */}
            <div className="flex flex-wrap items-start gap-10 md:gap-14">
              {/* Stat 1 */}
              <div>
                <h3
                  className="
              font-Montserrat
              font-black

              text-[34px]
              leading-[100%]

              tracking-[-0.03em]

              text-transparent
              bg-clip-text
              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              mb-2
            "
                >
                  $148M+
                </h3>

                <p
                  className="
              text-white

              font-Montserrat
              font-medium

              text-[15px]
              leading-[100%]
            "
                >
                  Total Volume
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3
                  className="
              font-Montserrat
              font-black

              text-[34px]
              leading-[100%]

              tracking-[-0.03em]

              text-transparent
              bg-clip-text
              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              mb-2
            "
                >
                  32K+
                </h3>

                <p
                  className="
              text-white

              font-Montserrat
              font-medium

              text-[15px]
              leading-[100%]
            "
                >
                  Active Wallets
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3
                  className="
              font-Montserrat
              font-black

              text-[34px]
              leading-[100%]

              tracking-[-0.03em]

              text-transparent
              bg-clip-text
              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              mb-2
            "
                >
                  75s
                </h3>

                <p
                  className="
              text-white

              font-Montserrat
              font-medium

              text-[15px]
              leading-[100%]
            "
                >
                  Finality
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE IMAGE ================= */}
          <div
            className="
        relative

        w-full
        max-w-[520px]

        flex
        items-center
        justify-center
      "
          >
            <Image
              src="/wswap-right.png"
              alt="WSwap Widget"
              width={520}
              height={560}
              priority
              className="
          w-full
          h-auto
          object-contain
        "
            />
          </div>
        </div>
      </section>

      <section
        className="
    w-full
    pt-[110px]
    pb-[120px]
    px-4
    md:px-10

    flex
    flex-col
    items-center

    relative
    z-10

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    overflow-hidden
  "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
      font-Montserrat
      font-bold

      text-center

      text-[34px]
      md:text-[50px]

      leading-[1.08]
      tracking-[-0.03em]

      text-white

      mb-5
    "
        >
          Built for{" "}
          <span
            className="
        text-transparent
        bg-clip-text
        bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
      "
          >
            utility,
          </span>{" "}
          priced for everyone
        </h2>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
      w-full
      max-w-[786px]
      text-center
      text-white
      font-Montserrat
      font-medium
      text-[25px]
      leading-[100%]
      tracking-[-0.03em]
      mb-20
    "
        >
          W Swap rides on W Chain&apos;s high-throughput L1 — outperforming
          legacy networks on every metric that matters.
        </p>

        {/* ================= CARDS ================= */}
        <div
          className="
      w-full
      max-w-[1280px]

      flex
      flex-wrap
      justify-center

      gap-8
    "
        >
          {[
            {
              title: "W Chain",
              icon: "/Group 162830.png",
              throughput: "Up to 7,000 TPS",
              fee: "~$0.000169",
              finality: "75 sec",
              active: true,
            },
            {
              title: "Ethereum",
              icon: "/Group 162875.png",
              throughput: "~15-30 TPS",
              fee: "~$6.00",
              finality: "6 mins (32 blocks)",
            },
            {
              title: "Solana",
              icon: "/Group 162830 (1).png",
              throughput: "Up to 4,000 TPS",
              fee: "~$0.00025",
              finality: "30 mins+",
            },
            {
              title: "Polygon",
              icon: "/Group 162838.png",
              throughput: "~160 TPS",
              fee: "~$0.15",
              finality: "75 sec",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`
          relative

          w-[280px]
          h-[400px]

          rounded-[24px]

          px-[24px]
          pt-[20px]
          pb-[20px]

          overflow-hidden

          border-2
          border-transparent

          ${
            card.active
              ? "shadow-[0_4px_12.3px_rgba(105,185,255,0.2)]"
              : ""
          }

          transition-all
          duration-300

          hover:shadow-[0_4px_12.3px_rgba(105,185,255,0.2)]
        `}
              style={{
                background: "linear-gradient(180deg, #4A556F 0%, #041C45 100%) padding-box, radial-gradient(circle at center, #8BC9D4 0%, #FFFFFF 50%, #8BC9D4 100%) border-box",
              }}
            >
              {/* ================= INNER TOP LIGHT ================= */}
              <div
                className="
            absolute
            inset-0

            rounded-[24px]

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_45%)]

            pointer-events-none
          "
              />

              {/* ================= TOP ROW ================= */}
              <div className="relative z-10 flex items-center gap-4 mb-5">
                {/* ICON */}
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-contain shrink-0"
                />

                {/* TITLE */}
                <h3
                  className="
              font-Montserrat
              font-bold

              text-white

              text-[18px]
              leading-[100%]
            "
                >
                  {card.title}
                </h3>
              </div>

              {/* ================= DIVIDER ================= */}
              <div className="w-full h-[1px] bg-white/10 mb-6" />

              {/* ================= CONTENT ================= */}
              <div className="relative z-10 flex flex-col">
                {/* THROUGHPUT */}
                <div className="pb-4">
                  <p className="text-white font-Montserrat font-medium text-[13px] uppercase mb-1">
                    THROUGHPUT
                  </p>
                  <h4 className="font-Montserrat font-bold text-[16px] leading-[100%] text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#4EA5FF_50%,#38B6FF_100%)]">
                    {card.throughput}
                  </h4>
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-4" />

                {/* AVG FEE */}
                <div className="pb-4">
                  <p className="text-white font-Montserrat font-medium text-[13px] uppercase mb-1">
                    AVG FEE
                  </p>
                  <h4 className="font-Montserrat font-bold text-[16px] leading-[100%] text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#4EA5FF_50%,#38B6FF_100%)]">
                    {card.fee}
                  </h4>
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-4" />

                {/* FINALITY */}
                <div>
                  <p className="text-white font-Montserrat font-medium text-[13px] uppercase mb-1">
                    FINALITY
                  </p>
                  <h4 className="font-Montserrat font-bold text-[16px] leading-[100%] text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#4EA5FF_50%,#38B6FF_100%)]">
                    {card.finality}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES GRID (Image 2) ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-16 text-center">
          A DEX engineered for
          <br />
          <span className="text-[#4EA5FF]">payments-grade</span> performance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px]">
          {/* Box 1 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">📚</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Unified Liquidity
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Aggregated pools across the W Chain ecosystem deliver the best
              price on every swap, with zero fragmentation.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">⚡</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Sub-Second Routing
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Smart routing engine finds optimal paths in milliseconds — settle
              your trade in under 75 seconds.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">🌉</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Multi-Validator Bridge
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Move assets natively from Ethereum, BNB Chain, Polygon and beyond
              into W Swap with audited security.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-[linear-gradient(180deg,#1D366B_0%,#0B1B3D_100%)] border border-white/10 rounded-[20px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <span className="text-white text-[20px]">🛡️</span>
            </div>
            <h3 className="text-white text-[20px] font-bold mb-3">
              Audited & Non-Custodial
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Independently audited smart contracts. Your keys, your tokens —
              always. No custodian, no intermediaries.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SWAP IN THREE STEPS (Image 3) ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-20 text-center">
          Swap in <span className="text-[#4EA5FF]">three steps</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1000px] gap-12 md:gap-4 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-full max-w-[240px] z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6 hover:scale-105 transition-transform duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                <path d="M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">
              Connect Wallet
            </h3>
            <p className="text-white/80 text-[14px] leading-relaxed">
              MetaMask, WalletConnect, Trust Wallet - one click.
            </p>
          </div>

          {/* Arrow 1 (Left Pointing) */}
          <div className="hidden md:flex items-center justify-center flex-1 h-[120px] max-w-[150px] relative mx-2">
            {/* Dashed line background */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-[#4EA5FF]/40" />
            {/* Arrow Image */}
            <div className="relative z-10 w-[120px] h-[24px]">
              <Image
                src="/arrow-left.png"
                alt="Arrow Left"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-full max-w-[240px] z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6 hover:scale-105 transition-transform duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">
              Confirm & Trade
            </h3>
            <p className="text-white/80 text-[14px] leading-relaxed">
              Smart router finds best price across pools.
            </p>
          </div>

          {/* Arrow 2 (Right Pointing) */}
          <div className="hidden md:flex items-center justify-center flex-1 h-[120px] max-w-[150px] relative mx-2">
            {/* Dashed line background */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-[#4EA5FF]/40" />
            {/* Arrow Image */}
            <div className="relative z-10 w-[120px] h-[24px]">
              <Image
                src="/arrow-right.png"
                alt="Arrow Right"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-full max-w-[240px] z-10">
            <div className="w-[120px] h-[120px] rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.4)_100%)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(78,165,255,0.1)] mb-6 hover:scale-105 transition-transform duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Clicking hand icon */}
                <path d="M12 3a1 1 0 011 1v6.5a1.5 1.5 0 003 0v-2a1.5 1.5 0 013 0v2a1.5 1.5 0 013 0v3.5A7.5 7.5 0 0114.5 21h-2A7.5 7.5 0 015 13.5v-1a1.5 1.5 0 013 0v1" />
                <path d="M8 8.5V4a1.5 1.5 0 013 0v4.5" />
                <path d="M10 2a1 1 0 011 1" />
                <path d="M14 2a1 1 0 011 1" />
              </svg>
            </div>
            <h3 className="text-[#4EA5FF] text-[18px] font-bold mb-2">
              Choose Tokens
            </h3>
            <p className="text-white/80 text-[14px] leading-relaxed">
              Settles in ~75 sec with near-zero fees.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY REVIEWS (Image 4) ================= */}
      <section className="w-full py-24 pl-4 pr-0 md:pl-10 flex flex-col relative z-10 overflow-hidden">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-16 text-center md:text-left w-full max-w-[1200px] mx-auto">
          Community <span className="text-[#4EA5FF]">Reviews</span>
        </h2>

        <div className="w-full max-w-[1200px] mx-auto relative">
          <div
            className="flex overflow-x-auto gap-6 pb-10 hide-scrollbar md:overflow-visible md:flex-wrap md:justify-between"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Review 1 */}
            <div className="w-[320px] max-w-[400px] flex-shrink-0 md:flex-1 md:min-w-0 md:max-w-[32%] bg-[linear-gradient(180deg,#193674_0%,#0B1B3D_100%)] border border-white/20 rounded-[20px] p-8 relative">
              <div className="absolute top-6 left-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
              <p className="text-white/80 text-[14px] leading-relaxed mt-6 mb-8 italic relative z-10">
                W Swap is more than a DEX- it's a gateway to financial
                empowerment. With low-cost transactions, high APRS, and a focus
                on user-driven innovation, W Swap delivers unparalleled value to
                DeFi enthusiasts worldwide.
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-[#4EA5FF] font-bold">X</span>
                <span className="text-[#4EA5FF] font-bold text-[15px]">
                  @cryptoperrix
                </span>
              </div>
              <div className="absolute bottom-6 right-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="w-[320px] max-w-[400px] flex-shrink-0 md:flex-1 md:min-w-0 md:max-w-[32%] bg-[linear-gradient(180deg,#193674_0%,#0B1B3D_100%)] border border-white/20 rounded-[20px] p-8 relative">
              <div className="absolute top-6 left-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
              <p className="text-white/80 text-[14px] leading-relaxed mt-6 mb-8 italic relative z-10">
                W Swap has launched seamlessly and delivers a smooth experience
                on both mobile and desktop. It's a well-executed addition to the
                chain. Intuitive, reliable, and user-friendly. This marks a
                promising step forward and hopefully the beginning of something
                impactful, innovative, and built to last in the ecosystem.
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-[#4EA5FF] font-bold">X</span>
                <span className="text-[#4EA5FF] font-bold text-[15px]">
                  TheDavey92
                </span>
              </div>
              <div className="absolute bottom-6 right-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="w-[320px] max-w-[400px] flex-shrink-0 md:flex-1 md:min-w-0 md:max-w-[32%] bg-[linear-gradient(180deg,#193674_0%,#0B1B3D_100%)] border border-white/20 rounded-[20px] p-8 relative">
              <div className="absolute top-6 left-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
              <p className="text-white/80 text-[14px] leading-relaxed mt-6 mb-8 italic relative z-10">
                The launch of W Swap is more than just another DEX; it's the
                gateway to real yield, governance, and growth on W Chain. With
                WAVE at its core, and WCO fueling it, this is the start of a new
                era where the community can finally build, earn, and take
                control of their DeFi journey
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <span className="text-[#4EA5FF] font-bold">X</span>
                <span className="text-[#4EA5FF] font-bold text-[15px]">
                  OxSerx
                </span>
              </div>
              <div className="absolute bottom-6 right-6 opacity-30">
                <span className="text-[40px] text-white">&quot;</span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center md:justify-start gap-2 mt-4 md:ml-4">
            <div className="w-2 h-2 rounded-full bg-[#4EA5FF]"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>
      </section>

      {/* ================= CTA (Image 5) ================= */}
      <section className="w-full pt-24 pb-44 px-4 md:px-10 flex flex-col items-center justify-center relative z-10 bg-[#020B2D] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#020B2D] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1000px] bg-[linear-gradient(180deg,#152E5E_0%,#0A1B4A_100%)] border border-white/20 rounded-[30px] p-12 md:p-20 flex flex-col items-center text-center shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-white text-[32px] md:text-[48px] font-bold mb-6">
            Start trading on <span className="text-[#4EA5FF]">W Swap</span>
          </h2>
          <p className="text-white/80 text-[16px] md:text-[18px] mb-12 max-w-[600px] leading-relaxed">
            Join thousands of traders moving value at the speed of payments —
            not the speed of blocks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
              Launch W Swap
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg
                  width="14"
                  height="14"
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
            </button>

            <button className="flex items-center justify-center gap-3 bg-transparent border border-white/40 hover:bg-white/10 transition-colors text-white px-8 py-3.5 rounded-full font-bold text-[16px]">
              Read the docs
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <svg
                  width="14"
                  height="14"
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
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
