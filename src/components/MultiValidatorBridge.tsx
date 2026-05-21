import Image from "next/image";
import Link from "next/link";

export default function MultiValidatorBridge() {
  return (
    <div className="w-full bg-[#002F8D] flex flex-col items-center font-Montserrat pb-24">
      {/* ================= HERO SECTION ================= */}
      <section
        className="
    relative
    w-full
    min-h-[800px]

    py-20

    flex
    items-center
    justify-center

    overflow-hidden

    bg-[#020B2D]

    rounded-b-[45px]
    md:rounded-b-[60px]

    border-b
    border-[#5AB6DE]/20

    z-10
  "
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <Image
          src="/Group 162958.png"
          alt="Background"
          fill
          priority
          className="
      object-cover
      opacity-80
    "
        />

        {/* ================= BLUE OVERLAY ================= */}
        <div
          className="
      absolute
      inset-0

      bg-[linear-gradient(90deg,rgba(2,11,45,0.92)_0%,rgba(2,11,45,0.6)_50%,rgba(2,11,45,0.2)_100%)]

      pointer-events-none
    "
        />

        {/* ================= BOTTOM BLUE GLOW ================= */}
        <div
          className="
      absolute
      bottom-0
      left-0
      w-full

      h-[180px]

      bg-[linear-gradient(180deg,rgba(0,47,141,0)_0%,rgba(0,47,141,0.85)_100%)]

      pointer-events-none
    "
        />

        {/* ================= CONTENT ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1200px]

      px-4
      md:px-10

      flex
      flex-col
      md:flex-row

      items-center
      justify-between

      gap-16
    "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col items-start w-full max-w-[706px] min-h-[328px]">
            <h1
              className="
          text-white

          font-Montserrat
          font-bold

          text-[40px]
          md:text-[56px]

          leading-[1.08]

          tracking-[-0.03em]

          mb-10
        "
            >
              Multi Validator Bridge
              <br />
              <span
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
          "
              >
                Trust-Minimized,
              </span>{" "}
              Validator-
              <br />
              Secured Cross-Chain
              <br />
              Transfers.
            </h1>

            {/* ================= BUTTON ================= */}
            <div className="flex flex-wrap items-center gap-4 mt-auto">
              <Link
                href="#"
                className="
            group

            h-[50px]
            min-w-[200px]

            pl-[24px]
            pr-[8px]

            rounded-full

            bg-[linear-gradient(90deg,#5AB6DE_0%,#035DA9_100%)]

            flex
            items-center
            justify-between

            text-white

            font-Montserrat
            font-bold
            text-[16px]

            shadow-[0_0_20px_rgba(90,182,222,0.25)]

            hover:opacity-90

            transition-all
            duration-300
          "
              >
                <span>Bridge Now</span>

                <span
                  className="
              w-[34px]
              h-[34px]

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

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex justify-center md:justify-end w-full max-w-[452px]">
            <Image
              src="/Vector1.png"
              alt="Bridge"
              width={452}
              height={323}
              className="
          w-[320px]
          md:w-[452px]

          h-auto

          object-contain

          drop-shadow-[0_0_30px_rgba(78,165,255,0.4)]
        "
            />
          </div>
        </div>
      </section>

      {/* ================= TRADITIONAL BRIDGES SECTION ================= */}
      <section className="w-full py-[100px] md:py-[120px] px-4 md:px-10 flex flex-col items-center relative z-10">
        {/* ================= HEADING ================= */}
        <h2
          className="
      text-white

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[42px]
      lg:text-[50px]

      leading-[1.1]
      lg:leading-[60px]

      tracking-[-0.03em]

      text-center

      mb-[90px]
      max-w-[908px]
    "
        >
          The Downside of Traditional Bridges
        </h2>

        {/* ================= ITEMS ================= */}
        <div
          className="
      w-full
      max-w-[728px]

      flex
      flex-row

      items-start
      justify-between

      gap-[24px]

      mx-auto
    "
        >
          {/* ================= ITEM 1 ================= */}
          <div
            className="
        flex
        flex-col
        items-center
        text-center

        w-[220px]
      "
          >
            {/* ICON */}
            <div
              className="
          relative

          w-[150px]
          h-[150px]

          shrink-0

          mb-[18px]
        "
            >
              <Image
                src="/Group 162908.png"
                alt="Centralized validator nodes"
                fill
                className="object-contain"
              />
            </div>

            {/* TEXT */}
            <h3
              className="
          text-transparent
          bg-clip-text

          bg-[linear-gradient(180deg,#0D7FF2_0%,#1F9DD8_45%,#4EA5FF_100%)]

          font-Montserrat
          font-bold

          text-[18px]
          leading-[1.05]

          tracking-[-0.03em]

          text-center
        "
            >
              Centralized
              <br />
              validator nodes
            </h3>
          </div>

          {/* ================= ITEM 2 ================= */}
          <div
            className="
        flex
        flex-col
        items-center
        text-center

        w-[220px]
      "
          >
            {/* ICON */}
            <div
              className="
          relative

          w-[150px]
          h-[150px]

          shrink-0

          mb-[18px]
        "
            >
              <Image
                src="/Group 162909.png"
                alt="Limited transparency"
                fill
                className="object-contain"
              />
            </div>

            {/* TEXT */}
            <h3
              className="
          text-transparent
          bg-clip-text

          bg-[linear-gradient(180deg,#0D7FF2_0%,#1F9DD8_45%,#4EA5FF_100%)]

          font-Montserrat
          font-bold

          text-[18px]
          leading-[1.05]

          tracking-[-0.03em]

          text-center
        "
            >
              Limited
              <br />
              transparency
            </h3>
          </div>

          {/* ================= ITEM 3 ================= */}
          <div
            className="
        flex
        flex-col
        items-center
        text-center

        w-[220px]
      "
          >
            {/* ICON */}
            <div
              className="
          relative

          w-[150px]
          h-[150px]

          shrink-0

          mb-[18px]
        "
            >
              <Image
                src="/Group 162910.png"
                alt="Fragmented security models"
                fill
                className="object-contain"
              />
            </div>

            {/* TEXT */}
            <h3
              className="
          text-transparent
          bg-clip-text

          bg-[linear-gradient(180deg,#0D7FF2_0%,#1F9DD8_45%,#4EA5FF_100%)]

          font-Montserrat
          font-bold

          text-[18px]
          leading-[1.05]

          tracking-[-0.03em]

          text-center
        "
            >
              Fragmented
              <br />
              security models
            </h3>
          </div>
        </div>
      </section>

      {/* ================= W CHAIN TRANSFORMATION ================= */}
      <section className="w-full min-h-[610px] py-24 px-4 md:px-10 flex flex-col items-center justify-center relative z-10 bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]">
        {/* ================= HEADING ================= */}
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-20 text-center relative z-10">
          W Chain Transformation across{" "}
          <span className="text-[#4EA5FF]">Industries</span>
        </h2>

        {/* ================= ITEMS ================= */}
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-12 md:gap-8 w-full max-w-[1200px]">
          {/* ================= BOX 1 ================= */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[341px] relative z-10">
            {/* ICON */}
            <div className="w-[120px] h-[120px] rounded-full border border-[#8BC9D4] bg-[linear-gradient(180deg,#3B4C72_0%,#10284D_100%)] flex items-center justify-center mb-6">
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
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>

            {/* TITLE */}
            <h3
              className="
          text-[#69B9FF]

          font-Montserrat
          font-bold

          text-[20px]
          leading-[100%]

          tracking-[-0.03em]

          mb-4
        "
            >
              Cross-Chain DeFi Platforms
            </h3>

            {/* SUBTITLE */}
            <p
              className="
          text-white

          font-Montserrat
          font-normal

          text-[18px]
          leading-[120%]

          max-w-[330px]
        "
            >
              Link your W Chain-compatible wallet in seconds. MetaMask,
              WalletConnect, and Trust Wallet supported.
            </p>
          </div>

          {/* ================= BOX 2 ================= */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[341px] relative z-10">
            {/* ICON */}
            <div className="w-[120px] h-[120px] rounded-full border border-[#8BC9D4] bg-[linear-gradient(180deg,#3B4C72_0%,#10284D_100%)] flex items-center justify-center mb-6">
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
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>

            {/* TITLE */}
            <h3
              className="
          text-[#69B9FF]

          font-Montserrat
          font-bold

          text-[20px]
          leading-[100%]

          tracking-[-0.03em]

          mb-4
        "
            >
              Crypto Startups & Asset Issuers
            </h3>

            {/* SUBTITLE */}
            <p
              className="
          text-white

          font-Montserrat
          font-normal

          text-[18px]
          leading-[120%]

          max-w-[330px]
        "
            >
              Approve the transaction. Settlement happens in under 75 seconds
              with negligible network fees.
            </p>
          </div>

          {/* ================= BOX 3 ================= */}
          <div className="flex flex-col items-center text-center flex-1 max-w-[341px] relative z-10">
            {/* ICON */}
            <div className="w-[120px] h-[120px] rounded-full border border-[#8BC9D4] bg-[linear-gradient(180deg,#3B4C72_0%,#10284D_100%)] flex items-center justify-center mb-6">
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
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>

            {/* TITLE */}
            <h3
              className="
          text-[#69B9FF]

          font-Montserrat
          font-bold

          text-[20px]
          leading-[100%]

          tracking-[-0.03em]

          mb-4
        "
            >
              DApp Builders
            </h3>

            {/* SUBTITLE */}
            <p
              className="
          text-white

          font-Montserrat
          font-normal

          text-[18px]
          leading-[120%]

          max-w-[330px]
        "
            >
              Select the tokens you want to swap. The smart router finds the
              best price across all liquidity pools.
            </p>
          </div>
        </div>
      </section>

      {/* ================= POWER UNDER THE HOOD ================= */}
      <section className="w-full py-[100px] px-4 md:px-10 flex flex-col items-center relative z-10 bg-[#000D27]">
        {/* ================= MAIN BOX ================= */}
        <div
          className="
    relative

    w-full
    max-w-[1206px]

    rounded-[24px]

    p-[1px]

    overflow-hidden
  "
          style={{
            background:
              "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 50%, #8BC9D4 100%)",
          }}
        >
          {/* ================= INNER BOX ================= */}
          <div
            className="
      relative
      z-10

      w-full

      rounded-[23px]

      bg-[linear-gradient(180deg,#3A4666_0%,#091B3E_100%)]

      px-[24px]
      md:px-[70px]

      py-[50px]

      flex
      flex-col
      items-center

      shadow-[0_0_40px_rgba(105,185,255,0.08)]
    "
          >
            {/* ================= HEADING ================= */}
            <h2
              className="
        text-center

        font-Montserrat
        font-bold

        text-[34px]
        md:text-[50px]

        leading-[1.15]
        md:leading-[60px]

        tracking-[-0.03em]

        mb-[48px]

        text-transparent
        bg-clip-text

        bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
      "
            >
              Power Under the Hood — Funky Specs
            </h2>

            {/* ================= CONTENT ================= */}
            <div
              className="
        w-full
        max-w-[820px]

        flex
        flex-col

        gap-[22px]
      "
            >
              {/* ROW 1 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-[14px] md:gap-[30px]">
                <div className="flex items-center gap-[12px] w-full md:w-[330px] shrink-0">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#2997FF] flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <span className="text-white font-Montserrat font-medium text-[16px]">
                    Supported Chains:
                  </span>
                </div>

                <div className="text-white font-Montserrat font-medium text-[16px] leading-[150%]">
                  Ethereum, BSC, Polygon, Solana, Avalanche (more coming)
                </div>
              </div>

              {/* ROW 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-[14px] md:gap-[30px]">
                <div className="flex items-center gap-[12px] w-full md:w-[330px] shrink-0">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#2997FF] flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <span className="text-white font-Montserrat font-medium text-[16px]">
                    Validators per Transaction:
                  </span>
                </div>

                <div className="text-white font-Montserrat font-medium text-[16px] leading-[150%]">
                  Configurable (default: 4 independent nodes)
                </div>
              </div>

              {/* ROW 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-[14px] md:gap-[30px]">
                <div className="flex items-center gap-[12px] w-full md:w-[330px] shrink-0">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#2997FF] flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <span className="text-white font-Montserrat font-medium text-[16px]">
                    Settlement Time:
                  </span>
                </div>

                <div className="text-white font-Montserrat font-medium text-[16px] leading-[150%]">
                  1–2 minutes
                </div>
              </div>

              {/* ROW 4 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-[14px] md:gap-[30px]">
                <div className="flex items-center gap-[12px] w-full md:w-[330px] shrink-0">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#2997FF] flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <span className="text-white font-Montserrat font-medium text-[16px]">
                    Security:
                  </span>
                </div>

                <div className="text-white font-Montserrat font-medium text-[16px] leading-[150%]">
                  Audits + Bug Bounty + HackerOne
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US FUNKY & SECURE ================= */}
      <section
        className="
    w-full

    py-[100px]
    md:py-[120px]

    px-4
    md:px-10

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    flex
    flex-col
    items-center

    relative
    overflow-hidden
  "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
      text-white

      font-Montserrat
      font-bold

      text-[34px]
      md:text-[50px]

      leading-[1.1]
      md:leading-[60px]

      tracking-[-0.03em]

      text-center

      mb-[60px]
    "
        >
          What Makes Us Funky & Secure?
        </h2>

        {/* ================= GRID ================= */}
        <div
          className="
      w-full
      max-w-[820px]

      mx-auto

      grid
      grid-cols-1
      md:grid-cols-2

      gap-[20px]

      place-items-center
    "
        >
          {/* ================= CARD 1 ================= */}
          <div
            className="
        relative

        w-full
        max-w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden
      "
            style={{
              background:
                "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 45%, #8BC9D4 100%)",
            }}
          >
            <div
              className="
          w-full
          h-full

          rounded-[19px]

          bg-[linear-gradient(180deg,#4B5677_0%,#0F2D63_100%)]

          px-[30px]
          py-[26px]

          flex
          flex-col
          justify-start
        "
            >
              {/* ICON */}
              <div className="mb-[22px]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-white flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00142C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2 2 4-4" />
                  </svg>
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="
            text-[#69B9FF]

            text-[20px]

            font-Montserrat
            font-bold

            leading-[120%]

            mb-[12px]
          "
              >
                Multi-Validator Consensus
              </h3>

              {/* SUBTITLE */}
              <p
                className="
            text-white

            text-[18px]

            font-Montserrat
            font-medium

            leading-[140%]

            max-w-[270px]
          "
              >
                Every transaction verified by decentralized network.
              </p>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
        relative

        w-full
        max-w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden
      "
            style={{
              background:
                "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 45%, #8BC9D4 100%)",
            }}
          >
            <div
              className="
          w-full
          h-full

          rounded-[19px]

          bg-[linear-gradient(180deg,#4B5677_0%,#0F2D63_100%)]

          px-[30px]
          py-[26px]

          flex
          flex-col
          justify-start
        "
            >
              {/* ICON */}
              <div className="mb-[22px]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-white flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00142C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                  </svg>
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="
            text-[#69B9FF]

            text-[20px]

            font-Montserrat
            font-bold

            leading-[120%]

            mb-[12px]
          "
              >
                Audit-Ready Architecture
              </h3>

              {/* SUBTITLE */}
              <p
                className="
            text-white

            text-[18px]

            font-Montserrat
            font-medium

            leading-[140%]

            max-w-[280px]
          "
              >
                Open-source, real-time monitoring.
              </p>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div
            className="
        relative

        w-full
        max-w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden
      "
            style={{
              background:
                "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 45%, #8BC9D4 100%)",
            }}
          >
            <div
              className="
          w-full
          h-full

          rounded-[19px]

          bg-[linear-gradient(180deg,#4B5677_0%,#0F2D63_100%)]

          px-[30px]
          py-[26px]

          flex
          flex-col
          justify-start
        "
            >
              {/* ICON */}
              <div className="mb-[22px]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-white flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00142C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  </svg>
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="
            text-[#69B9FF]

            text-[20px]

            font-Montserrat
            font-bold

            leading-[120%]

            mb-[12px]
          "
              >
                Developer-First Integration
              </h3>

              {/* SUBTITLE */}
              <p
                className="
            text-white

            text-[18px]

            font-Montserrat
            font-medium

            leading-[140%]

            max-w-[260px]
          "
              >
                Easy API/SDK integration.
              </p>
            </div>
          </div>

          {/* ================= CARD 4 ================= */}
          <div
            className="
        relative

        w-full
        max-w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden
      "
            style={{
              background:
                "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 45%, #8BC9D4 100%)",
            }}
          >
            <div
              className="
          w-full
          h-full

          rounded-[19px]

          bg-[linear-gradient(180deg,#4B5677_0%,#0F2D63_100%)]

          px-[30px]
          py-[26px]

          flex
          flex-col
          justify-start
        "
            >
              {/* ICON */}
              <div className="mb-[22px]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-white flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00142C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="
            text-[#69B9FF]

            text-[20px]

            font-Montserrat
            font-bold

            leading-[120%]

            mb-[12px]
          "
              >
                Cross-Chain Interoperability
              </h3>

              {/* SUBTITLE */}
              <p
                className="
            text-white

            text-[18px]

            font-Montserrat
            font-medium

            leading-[140%]

            max-w-[290px]
          "
              >
                Ethereum, BSC, Polygon, Solana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        className="
    relative
    w-full

    pt-[90px]
    pb-[60px]

    px-4
    md:px-10

    overflow-hidden

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    z-10
  "
      >
        {/* ================= CTA BOX ================= */}
        <div
          className="
      relative

      w-full
      max-w-[1206px]

      min-h-[276px]

      mx-auto

      rounded-[20px]

      p-[1px]

      overflow-hidden

      z-20
    "
          style={{
            background:
              "radial-gradient(circle at top left, #8BC9D4 0%, #FFFFFF 45%, #8BC9D4 100%)",
          }}
        >
          {/* INNER BOX */}
          <div
            className="
        w-full
        h-full

        rounded-[19px]

        bg-[linear-gradient(180deg,#4B5677_0%,#0F2D63_100%)]

        px-6
        md:px-[80px]

        py-[52px]

        flex
        flex-col
        items-center
        justify-center

        text-center
      "
          >
            {/* ================= HEADING ================= */}
            <h2
              className="
          text-transparent
          bg-clip-text

          bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

          font-Montserrat
          font-bold

          text-[34px]
          md:text-[60px]

          leading-[1.05]
          md:leading-[72px]

          tracking-[-0.03em]

          mb-[10px]
        "
            >
              Own the network you use
            </h2>

            {/* ================= SUBTITLE ================= */}
            <p
              className="
          text-white

          font-Montserrat
          font-medium

          text-[18px]
          md:text-[20px]

          leading-[140%]

          mb-[36px]

          max-w-[700px]
        "
            >
              Govern, stake, and earn with WCO. Get started in minutes.
            </p>

            {/* ================= BUTTONS ================= */}
            <div
              className="
          flex
          flex-wrap

          items-center
          justify-center

          gap-[18px]
        "
            >
              {/* GET WCO */}
              <Link
                href="#"
                className="
            group

            h-[50px]
            min-w-[200px]

            pl-[24px]
            pr-[8px]

            rounded-full

            bg-[linear-gradient(90deg,#0F6CB8_0%,#5AB6DE_100%)]

            flex
            items-center
            justify-between

            text-white

            font-Montserrat
            font-bold

            text-[16px]

            shadow-[0_0_20px_rgba(90,182,222,0.25)]

            hover:opacity-90

            transition-all
            duration-300
          "
              >
                <span>Get WCO</span>

                <span
                  className="
              w-[34px]
              h-[34px]

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
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* STAKE NOW */}
              <Link
                href="#"
                className="
            group

            h-[50px]
            min-w-[200px]

            pl-[24px]
            pr-[8px]

            rounded-full

            border
            border-[#5AB6DE]

            bg-[#00142C]

            flex
            items-center
            justify-between

            text-white

            font-Montserrat
            font-bold

            text-[16px]

            hover:bg-[#071A3D]

            transition-all
            duration-300
          "
              >
                <span>Stake Now</span>

                <span
                  className="
              w-[34px]
              h-[34px]

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
          </div>
        </div>
      </section>
    </div>
  );
}
