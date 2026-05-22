import Image from "next/image";

const DISTRIBUTION_DATA = [
  {
    category: "Validation on Nodes",
    allocation: "100,000,000",
    transfer: "N/A",
    contract: "0xfAc510D5dB8cadff323D4b979D898dc38F3FB6dF",
    vesting: "Always locked",
  },
  {
    category: "Liquidity Provision",
    allocation: "500,000,000",
    transfer: "N/A",
    contract: "0x511A6355407bb78f26172DB35100A87B9bE20Fc3",
    vesting: "N/A",
  },
  {
    category: "Marketing & Community",
    allocation: "500,000,000",
    transfer: "4,166,666.67",
    contract: "0x2ca9472ADd8a02c74D50FC3Ea444548502E35BDb",
    vesting: "120 cycles of 15 days each",
  },
  {
    category: "Premium Account Features",
    allocation: "500,000,000",
    transfer: "6,944,444.44",
    contract: "0xa306799aE31c7f89D3ff82D3397972933d57d679",
    vesting: "As and When Applicable",
  },
  {
    category: "W Chain Ecosystem",
    allocation: "400,000,000",
    transfer: "5,555,555.56",
    contract: "0x94DbFF05e1C129869772E1Fb291901083CdAdef1",
    vesting: "72 cycles of 15 days each",
  },
  {
    category: "Developer Incentives",
    allocation: "500,000,000",
    transfer: "N/A",
    contract: "0x58213DD561d12a0Ea7b538B1b26DE34dACelD0F0",
    vesting: "As and When Applicable",
  },
  {
    category: "Exchange Listings",
    allocation: "500,000,000",
    transfer: "N/A",
    contract: "0x13768af351B4627dcE8De6A67e59e4b27B4Cbf5D",
    vesting: "As and When Applicable",
  },
  {
    category: "Incentives",
    allocation: "1,000,000,000",
    transfer: "8,333,333.33",
    contract: "0xa237FeAFa2BAc4096867aF6229a2370B7A661A5F",
    vesting: "120 cycles of 15 days each",
  },
  {
    category: "Institutional Sales",
    allocation: "1,000,000,000",
    transfer: "N/A",
    contract: "0xFC06231E2e4488778680202BEA8427884c011341",
    vesting: "As and When Applicable",
  },
  {
    category: "Enterprises & Partnerships",
    allocation: "1,000,000,000",
    transfer: "8,333,333.33",
    contract: "0x80eaBD19b84b4f5f042103e957964297589C657D",
    vesting: "120 cycles of 15 days each",
  },
  {
    category: "Development Fund",
    allocation: "1,000,000,000",
    transfer: "8,333,333.33",
    contract: "0x57Ab15Ca8Bd528D509DbC81d11E9BecA44f3445f",
    vesting: "120 cycles of 15 days each",
  },
  {
    category: "WTK Conversion",
    allocation: "3,000,000,000",
    transfer: "N/A",
    contract: "",
    vesting: "In Circulation",
  },
  {
    category: "Total Supply",
    allocation: "10,000,000,000",
    transfer: "",
    contract: "0xba9Be06936CB06AEfAd981Ae96fa4D599B78aD24",
    vesting: "",
  },
  {
    category: "Treasury Wallet",
    allocation: "",
    transfer: "",
    contract: "0x67F2696c125D8D1307a5aE17348A440718229D03",
    vesting: "As and When Applicable",
  },
];

export default function WChainTokenomics() {
  return (
    <div className="w-full flex flex-col font-Montserrat bg-[#020B2D]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        {/* Background Image */}
        <Image
          src="/Group 163426.png"
          alt="W Chain Tokenomics Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,13,39,0.72)_100%)] z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 md:pt-16">
          <h1
            className="
        text-transparent
        bg-clip-text

        bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

        font-Montserrat
        font-bold

        text-[36px]
        sm:text-[46px]
        md:text-[58px]

        leading-[1.1]

        tracking-[-0.03em]
      "
          >
            W Chain Tokenomics
          </h1>
        </div>
      </section>

      {/* ================= INTRODUCTION TO WCO ================= */}
      <section className="w-full py-16 md:py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D]">
        <h2
          className="
      text-transparent
      bg-clip-text

      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[40px]
      md:text-[50px]

      text-center

      leading-[1.15]

      tracking-[-0.03em]

      mb-6
    "
        >
          Introduction to WCO
        </h2>

        <p
          className="
      text-center
      text-white

      font-Montserrat
      font-medium

      text-[16px]
      md:text-[25px]

      leading-[1.5]

      max-w-[900px]
    "
        >
          The W Coin is the native utility coin of W Chain, designed to support
          secure, scalable, and efficient payment.
        </p>
      </section>

      {/* ================= DISTRIBUTION OVERVIEW ================= */}
      <section className="w-full py-16 md:py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] overflow-hidden">
        {/* ================= HEADING ================= */}
        <h2
          className="
      text-transparent
      bg-clip-text

      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[42px]
      md:text-[50px]

      leading-[1.15]

      tracking-[-0.03em]

      text-center

      mb-5
    "
        >
          W Coin Distribution Overview
        </h2>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
      text-center
      text-white

      font-Montserrat
      font-medium

      text-[16px]
      md:text-[25px]

      leading-[1.45]

      max-w-[1100px]

      mb-10
      md:mb-14
    "
        >
          The W Coin (WCO) distribution is strategically structured to encourage
          growth, incentivise network participants, and ensure long term
          sustainability. Key allocations include:
        </p>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden lg:block w-full max-w-[1320px] overflow-x-auto">
          <table className="w-full border-collapse text-left text-white min-w-[1200px]">
            {/* ================= TABLE HEAD ================= */}
            <thead>
              <tr
                className="
            border-b
            border-white/10
          "
              >
                <th
                  className="
              py-6
              px-4

              text-transparent
              bg-clip-text

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              font-Montserrat
              font-bold

              text-[20px]

              leading-[1.1]

              tracking-[-0.03em]
            "
                >
                  Category
                </th>

                <th
                  className="
              py-6
              px-4

              text-transparent
              bg-clip-text

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              font-Montserrat
              font-bold

              text-[20px]

              leading-[1.1]

              tracking-[-0.03em]
            "
                >
                  Allocation
                </th>

                <th
                  className="
              py-6
              px-4

              max-w-[240px]

              text-transparent
              bg-clip-text

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              font-Montserrat
              font-bold

              text-[20px]

              leading-[1.1]

              tracking-[-0.03em]
            "
                >
                  Token Transfer
                  <br />
                  from Vesting to
                  <br />
                  Treasury every
                  <br />
                  15th day
                </th>

                <th
                  className="
              py-6
              px-4

              text-transparent
              bg-clip-text

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              font-Montserrat
              font-bold

              text-[20px]

              leading-[1.1]

              tracking-[-0.03em]
            "
                >
                  Wallet/Vesting
                  <br />
                  Contract Address
                </th>

                <th
                  className="
              py-6
              px-4

              text-transparent
              bg-clip-text

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              font-Montserrat
              font-bold

              text-[20px]

              leading-[1.1]

              tracking-[-0.03em]
            "
                >
                  Vesting Period
                  <br />
                  (In cycle of 15
                  <br />
                  days)
                </th>
              </tr>
            </thead>

            {/* ================= TABLE BODY ================= */}
            <tbody>
              {DISTRIBUTION_DATA.map((row, i) => (
                <tr
                  key={i}
                  className="
              border-b
              border-white/8

              hover:bg-white/[0.03]

              transition-all
              duration-300
            "
                >
                  {/* CATEGORY */}
                  <td
                    className="
                py-5
                px-4

                text-white

                text-[14px]

                font-Montserrat
                font-medium

                whitespace-nowrap
              "
                  >
                    {row.category}
                  </td>

                  {/* ALLOCATION */}
                  <td
                    className="
                py-5
                px-4

                text-white

                text-[14px]

                font-Montserrat
                font-medium
              "
                  >
                    {row.allocation}
                  </td>

                  {/* TRANSFER */}
                  <td
                    className="
                py-5
                px-4

                text-white/80

                text-[14px]

                font-Montserrat
                font-medium
              "
                  >
                    {row.transfer}
                  </td>

                  {/* CONTRACT */}
                  <td
                    className="
                py-5
                px-4

                text-white/65

                text-[12px]

                font-mono

                break-all
              "
                  >
                    {row.contract}
                  </td>

                  {/* VESTING */}
                  <td
                    className="
                py-5
                px-4

                text-white/80

                text-[14px]

                font-Montserrat
                font-medium
              "
                  >
                    {row.vesting}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div
          className="
      flex
      lg:hidden

      flex-col

      gap-5

      w-full
      max-w-[700px]
    "
        >
          {DISTRIBUTION_DATA.map((row, i) => (
            <div
              key={i}
              className="
          rounded-[20px]

          p-[1px]

          bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_50%,#8BC9D4_100%)]

          shadow-[0_0_20px_rgba(78,165,255,0.08)]
        "
            >
              <div
                className="
            w-full
            h-full

            rounded-[20px]

            bg-[linear-gradient(180deg,#243B67_0%,#0B1C3B_100%)]

            p-5

            flex
            flex-col

            gap-4
          "
              >
                {/* TOP */}
                <div
                  className="
              flex
              items-center
              justify-between

              gap-4

              border-b
              border-white/10

              pb-4
            "
                >
                  <h4
                    className="
                text-transparent
                bg-clip-text

                bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

                text-[18px]

                font-Montserrat
                font-bold

                leading-[1.2]
              "
                  >
                    {row.category}
                  </h4>

                  <span
                    className="
                text-white

                text-[15px]

                font-Montserrat
                font-bold
              "
                  >
                    {row.allocation}
                  </span>
                </div>

                {/* TRANSFER */}
                <div className="flex flex-col gap-1">
                  <span
                    className="
                text-white/50

                text-[11px]

                uppercase

                tracking-[0.08em]

                font-semibold
              "
                  >
                    Transfer To Treasury
                  </span>

                  <span className="text-white/85 text-[14px] leading-relaxed">
                    {row.transfer}
                  </span>
                </div>

                {/* CONTRACT */}
                <div className="flex flex-col gap-1">
                  <span
                    className="
                text-white/50

                text-[11px]

                uppercase

                tracking-[0.08em]

                font-semibold
              "
                  >
                    Wallet/Vesting Contract
                  </span>

                  <span
                    className="
                text-[#8BC9D4]

                text-[11px]

                break-all

                font-mono

                bg-white/[0.04]

                rounded-[10px]

                px-3
                py-2

                mt-1
              "
                  >
                    {row.contract || "N/A"}
                  </span>
                </div>

                {/* VESTING */}
                <div className="flex flex-col gap-1">
                  <span
                    className="
                text-white/50

                text-[11px]

                uppercase

                tracking-[0.08em]

                font-semibold
              "
                  >
                    Vesting Period
                  </span>

                  <span className="text-white/85 text-[14px] leading-relaxed">
                    {row.vesting}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PARAGRAPH ================= */}
      <section className="w-full py-12 px-4 md:px-10 flex flex-col items-center bg-[#020B2D]">
        <p className="text-center text-white text-[16px] md:text-[18px] leading-relaxed max-w-[900px]">
          WCO under As and When vesting period will carry programme based
          vesting period based on the agreement between us and the partner
          involved. Refer to{" "}
          <a href="#" className="underline">
            this post
          </a>{" "}
          to get a better understanding on the updated tokenomics. Reference
          Date: Dec 20 2024.
        </p>
      </section>

      {/* ================= W COIN UTILITY ================= */}
      <section
        className="
    w-full
    py-16
    md:py-20
    px-4
    md:px-10
    flex
    flex-col
    items-center
    bg-[linear-gradient(180deg,#020B2D_0%,#002055_100%)]
    border-t
    border-[#4EA5FF]/20
    overflow-hidden
  "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[42px]
      lg:text-[50px]

      leading-[1.1]
      tracking-[-0.03em]

      text-center

      text-transparent
      bg-clip-text
      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

      mb-12
      md:mb-16
    "
        >
          W Coin Utility
        </h2>

        {/* ================= CARDS ================= */}
        <div
          className="
      w-full
      max-w-[1200px]

      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3

      gap-5
      md:gap-6
    "
        >
          {/* ================= CARD 1 ================= */}
          <div
            className="
        rounded-[22px]
        p-[1px]

        bg-[linear-gradient(180deg,#B4E4FF_0%,#1C606B_100%)]

        shadow-[0_0_25px_rgba(78,165,255,0.12)]
      "
          >
            <div
              className="
          h-full
          rounded-[21px]

          bg-[linear-gradient(180deg,#4A5677_0%,#0A2E63_55%,#002B7F_100%)]

          p-6
          md:p-8
        "
            >
              {/* IMG */}
              <Image
                src="/coin1.png"
                alt="Staking and Farming"
                width={50}
                height={50}
                className="
            w-[50px]
            h-[50px]
            object-contain
            mb-6
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            font-Montserrat
            font-bold

            text-[20px]
            md:text-[22px]

            leading-[1.2]

            mb-4
          "
              >
                Staking and Farming
              </h4>

              {/* DESC */}
              <p
                className="
            text-white

            text-[14px]
            md:text-[15px]

            leading-[1.7]

            font-medium
          "
              >
                WCO holders can stake to secure the network and earn rewards.
                Long-term stakers receive additional bonuses, encouraging
                sustained participation. Users may also participate in farming
                or liquidity mining programs to earn WCO rewards by providing
                liquidity to designated pools.
              </p>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
        rounded-[22px]
        p-[1px]

        bg-[linear-gradient(180deg,#B4E4FF_0%,#1C606B_100%)]

        shadow-[0_0_25px_rgba(78,165,255,0.12)]
      "
          >
            <div
              className="
          h-full
          rounded-[21px]

          bg-[linear-gradient(180deg,#4A5677_0%,#0A2E63_55%,#002B7F_100%)]

          p-6
          md:p-8
        "
            >
              {/* IMG */}
              <Image
                src="/2-wchain.png"
                alt="Enterprise"
                width={50}
                height={50}
                className="
            w-[50px]
            h-[50px]
            object-contain
            mb-6
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            font-Montserrat
            font-bold

            text-[20px]
            md:text-[22px]

            leading-[1.2]

            mb-4
          "
              >
                Enterprise Use-Cases
              </h4>

              {/* DESC */}
              <p
                className="
            text-white

            text-[14px]
            md:text-[15px]

            leading-[1.7]

            font-medium
          "
              >
                Enterprises holding WCO gain access to exclusive features such
                as enhanced transaction capabilities and priority support.
                Additionally, enterprises can use WCO to pay transaction fees at
                discounted rates within the W Chain ecosystem.
              </p>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div
            className="
        rounded-[22px]
        p-[1px]

        bg-[linear-gradient(180deg,#B4E4FF_0%,#1C606B_100%)]

        shadow-[0_0_25px_rgba(78,165,255,0.12)]
      "
          >
            <div
              className="
          h-full
          rounded-[21px]

          bg-[linear-gradient(180deg,#4A5677_0%,#0A2E63_55%,#002B7F_100%)]

          p-6
          md:p-8
        "
            >
              {/* IMG */}
              <Image
                src="/coin3.png"
                alt="Governance"
                width={50}
                height={50}
                className="
            w-[50px]
            h-[50px]
            object-contain
            mb-6
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            font-Montserrat
            font-bold

            text-[20px]
            md:text-[22px]

            leading-[1.2]

            mb-4
          "
              >
                Exclusive Access and
                <br />
                Governance
              </h4>

              {/* DESC */}
              <p
                className="
            text-white

            text-[14px]
            md:text-[15px]

            leading-[1.7]

            font-medium
          "
              >
                W Coin (WCO) holders have early access to platform features,
                beta programs, and exclusive events. They can participate in
                governance decisions, allowing them to influence the future
                direction of the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIQUIDITY PROVISION & INCENTIVES ================= */}
      <section
        className="
    w-full
    pt-16
    md:pt-20
    pb-24
    md:pb-28
    px-4
    md:px-10

    flex
    flex-col
    items-center

    bg-[linear-gradient(180deg,#000D27_0%,#001B54_45%,#002F8D_100%)]

    border-t
    border-[#4EA5FF]/20

    relative
    overflow-hidden
  "
      >
        {/* TOP LIGHT EFFECT */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[900px]
      h-[350px]

      bg-[radial-gradient(circle,rgba(78,165,255,0.10)_0%,transparent_70%)]

      pointer-events-none
    "
        />

        {/* ================= LIQUIDITY HEADING ================= */}
        <h2
          className="
      relative
      z-10

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[42px]
      lg:text-[50px]

      leading-[1.1]
      tracking-[-0.03em]

      text-center

      text-transparent
      bg-clip-text
      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

      mb-6
    "
        >
          Liquidity Provision
        </h2>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
      relative
      z-10

      text-center
      text-white

      text-[16px]
      md:text-[20px]

      leading-[1.5]

      max-w-[1050px]

      mb-20
      md:mb-28

      font-Montserrat
      font-medium
    "
        >
          To maintain a healthy trading environment and consistent market
          presence, an initial liquidity pool of 100 Million WCO paired with a
          Stablecoin will be established. Additionally, 400 Million WCO are
          allocated as reserves for ongoing liquidity provision to stabilise
          trading as the platform expands.
        </p>

        {/* ================= REWARD HEADING ================= */}
        <h2
          className="
      relative
      z-10

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[42px]
      lg:text-[50px]

      leading-[1.1]
      tracking-[-0.03em]

      text-center

      text-transparent
      bg-clip-text
      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

      mb-10
      md:mb-14
    "
        >
          Incentives and Rewards
        </h2>

        {/* ================= CARDS ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1100px]

      grid
      grid-cols-1
      md:grid-cols-2

      gap-6
      md:gap-8
    "
        >
          {/* ================= CARD 1 ================= */}
          <div
            className="
        rounded-[22px]
        p-[1px]

        bg-[linear-gradient(180deg,#B4E4FF_0%,#1C606B_100%)]

        shadow-[0_0_30px_rgba(78,165,255,0.18)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          bg-[linear-gradient(180deg,#4C5A7D_0%,#163B77_55%,#002B7F_100%)]

          p-6
          md:p-8
        "
            >
              {/* IMG */}
              <Image
                src="/rew1.png"
                alt="Node Rewards"
                width={50}
                height={50}
                className="
            w-[50px]
            h-[50px]
            object-contain

            mb-6
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            font-Montserrat
            font-bold

            text-[22px]
            md:text-[24px]

            leading-[1.2]

            mb-4
          "
              >
                Node Rewards
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white

            text-[15px]
            md:text-[16px]

            leading-[1.7]

            font-medium
          "
              >
                Validators running nodes on the network receive rewards in WCO
                annually, incentivising network security and stability.
              </p>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
        rounded-[22px]
        p-[1px]

        bg-[linear-gradient(180deg,#B4E4FF_0%,#1C606B_100%)]

        shadow-[0_0_30px_rgba(78,165,255,0.18)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          bg-[linear-gradient(180deg,#4C5A7D_0%,#163B77_55%,#002B7F_100%)]

          p-6
          md:p-8
        "
            >
              {/* IMG */}
              <Image
                src="/rew2.png"
                alt="Staking Rewards"
                width={50}
                height={50}
                className="
            w-[50px]
            h-[50px]
            object-contain

            mb-6
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            font-Montserrat
            font-bold

            text-[22px]
            md:text-[24px]

            leading-[1.2]

            mb-4
          "
              >
                Staking Rewards
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white

            text-[15px]
            md:text-[16px]

            leading-[1.7]

            font-medium
          "
              >
                Stakers earn an annual yield based on the stake amount and
                duration, with bonus tiers for extended staking commitments.
                This incentivises long-term participation and helps maintain
                network security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT FUND RELEASE ================= */}
      <section
        className="
    w-full

    py-16
    md:py-24

    px-4
    md:px-10

    flex
    justify-center

    bg-[#000D27]

    border-t
    border-[#4EA5FF]/20

    relative
    overflow-hidden
  "
      >
        {/* TOP GLOW */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[900px]
      h-[320px]

      bg-[radial-gradient(circle,rgba(78,165,255,0.08)_0%,transparent_70%)]

      pointer-events-none
    "
        />

        {/* CONTENT */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1200px]

      flex
      flex-col
      items-center
    "
        >
          {/* ================= HEADING ================= */}
          <h2
            className="
        font-Montserrat
        font-bold

        text-[34px]
        sm:text-[42px]
        lg:text-[56px]

        leading-[1.1]
        tracking-[-0.03em]

        text-center

        text-transparent
        bg-clip-text

        bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

        mb-6
      "
          >
            Development Fund Release Milestones
          </h2>

          {/* ================= SUBTITLE ================= */}
          <p
            className="
        text-center
        text-white

        text-[16px]
        md:text-[22px]

        leading-[1.5]

        max-w-[950px]

        mb-14
        md:mb-20

        font-Montserrat
        font-medium
      "
          >
            A total of 1 Billion WCO are allocated to the Development Fund,
            released upon the achievement of specific milestones:
          </p>

          {/* ================= MAIN CONTENT ================= */}
          <div
            className="
        w-full

        flex
        flex-col
        lg:flex-row

        items-center
        lg:items-start

        justify-between

        gap-10
        lg:gap-16
      "
          >
            {/* ================= TABLE ================= */}
            <div
              className="
          w-full
          max-w-[520px]

          overflow-hidden

          border
          border-[#4EA5FF]/15

          bg-[rgba(255,255,255,0.02)]
          backdrop-blur-sm
        "
            >
              {/* TABLE HEADER */}
              <div
                className="
            grid
            grid-cols-2

            border-b
            border-[#4EA5FF]/15
          "
              >
                <div
                  className="
              px-5
              md:px-7

              py-5

              border-r
              border-[#4EA5FF]/15

              text-[#69B9FF]
            
              font-Montserrat
              font-bold

              text-[18px]
              md:text-[22px]
            "
                >
                  Milestone
                </div>

                <div
                  className="
              px-5
              md:px-7

              py-5

              text-transparent
              bg-clip-text

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

              font-Montserrat
              font-bold

              text-[18px]
              md:text-[22px]
            "
                >
                  W Coin Allocation
                </div>
              </div>

              {/* ROW 1 */}
              <div
                className="
            grid
            grid-cols-2

            border-b
            border-[#4EA5FF]/10
          "
              >
                <div
                  className="
              px-5
              md:px-7

              py-6

              border-r
              border-[#4EA5FF]/10

              text-white

              text-[15px]
              md:text-[18px]

              font-Montserrat
            "
                >
                  Mainnet Launch
                </div>

                <div
                  className="
              px-5
              md:px-7

              py-6

              text-white

              text-[15px]
              md:text-[18px]

              font-Montserrat
            "
                >
                  100 Million
                </div>
              </div>

              {/* ROW 2 */}
              <div
                className="
            grid
            grid-cols-2

            border-b
            border-[#4EA5FF]/10
          "
              >
                <div
                  className="
              px-5
              md:px-7

              py-6

              border-r
              border-[#4EA5FF]/10

              text-white

              text-[15px]
              md:text-[18px]

              font-Montserrat
            "
                >
                  Layer 2 Launch
                </div>

                <div
                  className="
              px-5
              md:px-7

              py-6

              text-white

              text-[15px]
              md:text-[18px]

              font-Montserrat
            "
                >
                  100 Million
                </div>
              </div>

              {/* ROW 3 */}
              <div className="grid grid-cols-2">
                <div
                  className="
              px-5
              md:px-7

              py-6

              border-r
              border-[#4EA5FF]/10

              text-white

              text-[15px]
              md:text-[18px]

              font-Montserrat
            "
                >
                  Future Developments
                </div>

                <div
                  className="
              px-5
              md:px-7

              py-6

              text-white

              text-[15px]
              md:text-[18px]

              font-Montserrat
            "
                >
                  800 Million
                </div>
              </div>
            </div>

            {/* ================= NOTE ================= */}
            <div
              className="
          w-full
          max-w-[480px]

          text-center
          lg:text-left
        "
            >
              <p
                className="
            text-white

            text-[20px]
            sm:text-[24px]
            md:text-[34px]

            leading-[1.25]

            font-Montserrat
            font-medium
          "
              >
                Note: Detailed allocations for 2026-2027 milestones will be
                published as W Chain continues to grow, ensuring resources align
                with ongoing platform requirements and expansion opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPLY AND EMISSION SCHEDULE ================= */}
      <section
        className="
    w-full

    py-16
    md:py-24

    px-4
    md:px-10

    flex
    flex-col
    items-center

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    border-t
    border-[#4EA5FF]/20

    relative
    overflow-hidden
  "
      >
        {/* TOP GLOW */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[900px]
      h-[320px]

      bg-[radial-gradient(circle,rgba(78,165,255,0.10)_0%,transparent_70%)]

      pointer-events-none
    "
        />

        {/* ================= HEADING ================= */}
        <h2
          className="
      relative
      z-10

      font-Montserrat
      font-bold

      text-[32px]
      sm:text-[42px]
      lg:text-[58px]

      leading-[1.1]
      tracking-[-0.03em]

      text-center

      mb-10
      md:mb-14

      text-transparent
      bg-clip-text

      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
    "
        >
          Supply and Emission Schedule
        </h2>

        {/* ================= CARDS ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1200px]

      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3

      gap-6
      lg:gap-8
    "
        >
          {/* ================= CARD 1 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_25px_rgba(78,165,255,0.12)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#0A1E4A_55%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <Image
                src="/supply1.png"
                alt="Initial Circulating Supply"
                width={50}
                height={50}
                className="
            object-contain

            mb-6

            w-[50px]
            h-[50px]
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[20px]
            md:text-[24px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                Initial Circulating Supply
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                Includes tokens from the liquidity provision and a portion of
                the treasury to establish a stable market base.
              </p>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_25px_rgba(78,165,255,0.12)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#0A1E4A_55%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <Image
                src="/2-wchain.png"
                alt="Emission Rate"
                width={50}
                height={50}
                className="
            object-contain

            mb-6

            w-[50px]
            h-[50px]
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[20px]
            md:text-[24px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                Emission Rate
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                A controlled release of WCO through vesting schedules helps
                maintain market balance. Enterprises & Partnerships WCO&apos;s
                vest linearly over 60 months, while Marketing & Community
                WCO&apos;s vest over 60 months. Development Fund WCO&apos;s are
                distributed as per milestones.
              </p>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_25px_rgba(78,165,255,0.12)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#0A1E4A_55%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <Image
                src="/Group 163353.png"
                alt="Deflationary Mechanisms"
                width={50}
                height={50}
                className="
            object-contain

            mb-6

            w-[50px]
            h-[50px]
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[20px]
            md:text-[24px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                Deflationary Mechanisms
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                Potential Coin burns or other mechanisms may be introduced in
                the future to regulate supply and enhance WCO&apos;s value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECURITY AND AUDITS ================= */}
      <section
        className="
    w-full

    py-16
    md:py-24

    px-4
    md:px-10

    flex
    flex-col
    items-center

    bg-[#000D27]

    border-t
    border-[#4EA5FF]/20

    relative
    overflow-hidden
  "
      >
        {/* TOP GLOW */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[900px]
      h-[320px]

      bg-[radial-gradient(circle,rgba(78,165,255,0.08)_0%,transparent_70%)]

      pointer-events-none
    "
        />

        {/* ================= HEADING ================= */}
        <h2
          className="
      relative
      z-10

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[44px]
      lg:text-[58px]

      leading-[1.1]
      tracking-[-0.03em]

      text-center

      mb-10
      md:mb-14

      text-transparent
      bg-clip-text

      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
    "
        >
          Security and Audits
        </h2>

        {/* ================= CARDS ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1050px]

      grid
      grid-cols-1
      md:grid-cols-2

      gap-6
      lg:gap-8
    "
        >
          {/* ================= CARD 1 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_24px_rgba(78,165,255,0.10)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#112A58_45%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <Image
                src="/Group (1).png"
                alt="Smart Contract Audits"
                width={50}
                height={50}
                className="
            object-contain

            w-[50px]
            h-[50px]

            mb-6
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[22px]
            md:text-[26px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                Smart Contract Audits
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                W Chain undergoes regular third-party audits to ensure the
                security and integrity of its smart contracts, safeguarding user
                funds and network functionality.
              </p>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_24px_rgba(78,165,255,0.10)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#112A58_45%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <Image
                src="/audit2.png"
                alt="Regulatory Compliance"
                width={50}
                height={50}
                className="
            object-contain

            w-[50px]
            h-[50px]

            mb-6
          "
              />

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[22px]
            md:text-[26px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                Regulatory Compliance
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                Compliance with KYC and AML regulations is prioritised for
                premium features and enterprise-focused solutions to meet legal
                standards across various jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEGAL AND COMPLIANCE ================= */}
      <section
        className="
    w-full

    py-16
    md:py-24

    px-4
    md:px-10

    flex
    flex-col
    items-center

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    border-t
    border-[#4EA5FF]/20

    relative
    overflow-hidden
  "
      >
        {/* TOP GLOW */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[900px]
      h-[320px]

      bg-[radial-gradient(circle,rgba(78,165,255,0.10)_0%,transparent_70%)]

      pointer-events-none
    "
        />

        {/* ================= HEADING ================= */}
        <h2
          className="
      relative
      z-10

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[44px]
      lg:text-[58px]

      leading-[1.1]
      tracking-[-0.03em]

      text-center

      mb-10
      md:mb-14

      text-transparent
      bg-clip-text

      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
    "
        >
          Legal and Compliance
        </h2>

        {/* ================= CARDS ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1200px]

      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3

      gap-6
      lg:gap-8
    "
        >
          {/* ================= CARD 1 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_24px_rgba(78,165,255,0.10)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#112A58_45%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <div
                className="
            w-[50px]
            h-[50px]

            rounded-[8px]

            bg-[#00193D]

            border
            border-[#4EA5FF]/40

            flex
            items-center
            justify-center

            mb-6
          "
              >
                <Image
                  src="/legal1.png"
                  alt="Jurisdictional Compliance"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[20px]
            md:text-[24px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                Jurisdictional Compliance
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                W Chain will operate in line with relevant legal frameworks,
                ensuring lawful adherence across all markets.
              </p>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_24px_rgba(78,165,255,0.10)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#112A58_45%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <div
                className="
            w-[50px]
            h-[50px]

            rounded-[8px]

            bg-[#00193D]

            border
            border-[#4EA5FF]/40

            flex
            items-center
            justify-center

            mb-6
          "
              >
                <Image
                  src="/legal2.png"
                  alt="W Chain Coin Classification"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[20px]
            md:text-[24px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                W Chain Coin Classification
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                WCO is designated as a utility coin, serving specific functions
                within the W Chain ecosystem.
              </p>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1px]

        bg-[linear-gradient(180deg,#8BC9D4_0%,#FFFFFF_45%,#8BC9D4_100%)]

        shadow-[0_0_24px_rgba(78,165,255,0.10)]
      "
          >
            <div
              className="
          h-full

          rounded-[21px]

          p-6
          md:p-8

          bg-[linear-gradient(180deg,#46577F_0%,#112A58_45%,#08204A_100%)]

          backdrop-blur-sm
        "
            >
              {/* ICON */}
              <div
                className="
            w-[50px]
            h-[50px]

            rounded-[8px]

            bg-[#00193D]

            border
            border-[#4EA5FF]/40

            flex
            items-center
            justify-center

            mb-6
          "
              >
                <Image
                  src="/legal3.png"
                  alt="Participant Disclaimers"
                  width={21}
                  height={19}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h4
                className="
            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

            text-[20px]
            md:text-[24px]

            font-bold

            leading-[1.3]

            mb-4

            font-Montserrat
          "
              >
                Participant Disclaimers
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
            text-white/90

            text-[15px]
            md:text-[17px]

            leading-[1.6]

            font-light

            font-Montserrat
          "
              >
                Transparent risk disclosures and terms inform participants of
                digital asset considerations within the W Chain platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= W COIN ALLOCATION (PIE CHART) ================= */}
      <section
        className="
    w-full

    py-16
    md:py-24

    px-4
    md:px-10

    flex
    flex-col
    items-center

    bg-[#000D27]

    border-t
    border-white/5

    pb-24
    md:pb-32

    relative
    overflow-hidden
  "
      >
        {/* TOP GLOW */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[900px]
      h-[320px]

      bg-[radial-gradient(circle,rgba(78,165,255,0.08)_0%,transparent_70%)]

      pointer-events-none
    "
        />

        {/* ================= HEADING ================= */}
        <h2
          className="
      relative
      z-10

      font-Montserrat
      font-bold

      text-[34px]
      sm:text-[42px]
      lg:text-[50px]

      leading-[1.1]

      tracking-[-0.03em]

      text-center

      mb-10
      md:mb-16

      text-transparent
      bg-clip-text

      bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
    "
        >
          W Coin Allocation
        </h2>

        {/* ================= IMAGE ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1024px]

      mb-10
      md:mb-14
    "
        >
          <Image
            src="/image 44.png"
            alt="W Coin Allocation Pie Chart"
            width={1024}
            height={495}
            priority
            className="
        w-full
        h-auto

        object-contain
      "
          />
        </div>

        {/* ================= CONTENT ================= */}
        <p
          className="
      relative
      z-10

      text-center

      text-white/95

      text-[17px]
      sm:text-[20px]
      lg:text-[25px]

      leading-[1.45]

      font-Montserrat
      font-medium

      max-w-[1120px]
    "
        >
          The WCO Tokenomics are crafted to support W Chain&apos;s ecosystem
          growth through strategic allocations and incentives. By balancing
          development, security, community engagement, and legal compliance, W
          Chain aims to establish a robust, sustainable digital payment platform
          benefiting all stakeholders.
        </p>
      </section>
      {/* ================= CTA SECTION ================= */}
      <section
        className="
    w-full

    pt-20
    md:pt-24

    pb-40
    md:pb-44

    px-4
    md:px-10

    flex
    flex-col
    items-center

    bg-[linear-gradient(180deg,#020B2D_0%,#002B7F_100%)]

    border-t
    border-white/5

    relative
    z-10

    -mb-[80px]
    lg:-mb-[100px]

    overflow-hidden
  "
      >
        {/* Bottom extension */}
        <div
          className="
      absolute
      left-0
      right-0
      bottom-[-120px]

      h-[120px]

      bg-[#002B7F]

      -z-10
      pointer-events-none
    "
        />

        {/* Top subtle line */}
        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2

      w-[92%]
      max-w-[980px]

      h-[1px]

      bg-white/10
    "
        />

        {/* CTA CARD */}
        <div
          className="
      relative

      w-full
      max-w-[1206px]

      rounded-[24px]
      md:rounded-[28px]

      p-[1px]

      overflow-hidden

      bg-[linear-gradient(180deg,rgba(180,228,255,0.8)_0%,rgba(31,157,216,0.5)_100%)]

      shadow-[0_0_30px_rgba(78,165,255,0.12)]
    "
        >
          {/* INNER CARD */}
          <div
            className="
        relative

        w-full
        h-full

        rounded-[23px]
        md:rounded-[27px]

        px-6
        sm:px-10
        md:px-16

        py-14
        md:py-20

        flex
        flex-col
        items-center
        text-center

        bg-[linear-gradient(180deg,#3C4C72_0%,#0C1F47_55%,#0A2E73_100%)]

        overflow-hidden
      "
          >
            {/* Glow */}
            <div
              className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0%,transparent_60%)]

          pointer-events-none
        "
            />

            {/* HEADING */}
            <h2
              className="
          relative
          z-10

          font-Montserrat
          font-bold

          text-[34px]
          sm:text-[40px]
          lg:text-[50px]

          leading-[1.1]

          tracking-[-0.03em]

          mb-5
          md:mb-6

          text-transparent
          bg-clip-text

          bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)]
        "
            >
              Connect, Collaborate and Thrive
            </h2>

            {/* SUBTITLE */}
            <p
              className="
          relative
          z-10

          max-w-[1103px]

          text-white

          text-[16px]
          sm:text-[18px]
          lg:text-[20px]

          leading-[1.45]

          font-Montserrat
          font-medium

          mb-8
          md:mb-10
        "
            >
              Ready to be part of something big? The W Chain community is
              waiting for you! Connect with fellow enthusiasts, contribute to
              exciting projects, and help shape the future of finance. Join us
              today and let&apos;s build the decentralized world together!
            </p>

            {/* BUTTON */}
            <button
              className="
          relative
          z-10

          flex
          items-center
          gap-4

          bg-[linear-gradient(90deg,#0F6CB8_0%,#59C7FF_100%)]

          hover:opacity-90

          transition-all
          duration-300

          text-white

          px-7
          md:px-9

          py-3
          md:py-3.5

          rounded-full

          font-Montserrat
          font-bold

          text-[15px]
          md:text-[17px]

          shadow-[0_0_18px_rgba(78,165,255,0.35)]
        "
            >
              Join the Revolution
              <span
                className="
            w-8
            h-8

            flex
            items-center
            justify-center

            rounded-full

            border
            border-white/80
          "
              >
                <svg
                  width="15"
                  height="15"
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
