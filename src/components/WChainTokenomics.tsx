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
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/Group 163426.png"
          alt="W Chain Tokenomics Background"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16">
          <h1 className="text-[#4EA5FF] text-[36px] md:text-[52px] font-bold">
            W Chain Tokenomics
          </h1>
        </div>
      </section>

      {/* ================= INTRODUCTION TO WCO ================= */}
      <section className="w-full py-16 px-4 md:px-10 flex flex-col items-center bg-[#020B2D]">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-6">
          Introduction to WCO
        </h2>
        <p className="text-center text-white text-[16px] md:text-[18px] leading-relaxed max-w-[800px]">
          The W Coin is the native utility coin of W Chain, designed to support
          secure, scalable, and efficient payment.
        </p>
      </section>

      {/* ================= DISTRIBUTION OVERVIEW ================= */}
      <section className="w-full py-16 px-4 md:px-10 flex flex-col items-center bg-[#020B2D]">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-6">
          W Coin Distribution Overview
        </h2>
        <p className="text-center text-white text-[16px] md:text-[18px] leading-relaxed max-w-[900px] mb-12">
          The W Coin (WCO) distribution is strategically structured to encourage
          growth, incentivise network participants, and ensure long term
          sustainability. Key allocations include:
        </p>

        {/* Desktop Table */}
        <div className="hidden lg:block w-full max-w-[1200px] overflow-x-auto">
          <table className="w-full text-left text-white border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/20 text-[#4EA5FF] text-[15px] md:text-[16px] font-bold">
                <th className="py-4 px-4 font-bold">Category</th>
                <th className="py-4 px-4 font-bold">Allocation</th>
                <th className="py-4 px-4 font-bold max-w-[200px]">
                  Token Transfer from Vesting to Treasury every 15th day
                </th>
                <th className="py-4 px-4 font-bold">
                  Wallet/Vesting Contract Address
                </th>
                <th className="py-4 px-4 font-bold">
                  Vesting Period (In cycle of 15 days)
                </th>
              </tr>
            </thead>
            <tbody className="text-[13px] md:text-[14px]">
              {DISTRIBUTION_DATA.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4">{row.category}</td>
                  <td className="py-4 px-4">{row.allocation}</td>
                  <td className="py-4 px-4 text-white/80">{row.transfer}</td>
                  <td className="py-4 px-4 text-white/60 font-mono text-[12px]">
                    {row.contract}
                  </td>
                  <td className="py-4 px-4 text-white/80">{row.vesting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="flex lg:hidden flex-col gap-4 w-full max-w-[1200px]">
          {DISTRIBUTION_DATA.map((row, i) => (
            <div key={i} className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-6 border border-white/10 flex flex-col gap-4 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-[#4EA5FF] font-bold text-[16px]">{row.category}</span>
                <span className="text-white font-bold text-[15px]">{row.allocation}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">Transfer to Treasury (every 15th day)</span>
                <span className="text-white/80 text-[14px]">{row.transfer}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">Wallet/Vesting Contract Address</span>
                <span className="text-[#4EA5FF]/80 font-mono text-[11px] break-all bg-white/5 p-2 rounded-md mt-1">{row.contract || "N/A"}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60 text-[11px] uppercase tracking-wider font-semibold">Vesting Period</span>
                <span className="text-white/80 text-[14px]">{row.vesting}</span>
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
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#002055_100%)] border-t border-[#4EA5FF]/30">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-12">
          W Coin Utility
        </h2>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Utility 1 */}
          <div className="bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[20px] p-8 border border-[#4EA5FF]/30 shadow-[0_0_15px_rgba(78,165,255,0.1)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/40 flex items-center justify-center mb-6">
              <Image
                src="/Group 163361.png"
                alt="Staking"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">
              Staking and Farming
            </h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              WCO holders can stake to secure the network and earn rewards.
              Long-term stakers receive additional bonuses, encouraging
              sustained participation. Users may also participate in farming or
              liquidity mining programs to earn WCO rewards by providing
              liquidity to designated pools.
            </p>
          </div>

          {/* Utility 2 */}
          <div className="bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[20px] p-8 border border-[#4EA5FF]/30 shadow-[0_0_15px_rgba(78,165,255,0.1)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/40 flex items-center justify-center mb-6">
              <Image
                src="/Group 163387.png"
                alt="Enterprise"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">
              Enterprise Use-Cases
            </h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Enterprises holding WCO gain access to exclusive features such as
              enhanced transaction capabilities and priority support.
              Additionally, enterprises can use WCO to pay transaction fees at
              discounted rates within the W Chain ecosystem.
            </p>
          </div>

          {/* Utility 3 */}
          <div className="bg-[linear-gradient(180deg,#152E5E_0%,#081736_100%)] rounded-[20px] p-8 border border-[#4EA5FF]/30 shadow-[0_0_15px_rgba(78,165,255,0.1)]">
            <div className="w-12 h-12 rounded-[10px] border border-[#4EA5FF]/40 flex items-center justify-center mb-6">
              <Image
                src="/Group 163390.png"
                alt="Governance"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">
              Exclusive Access and
              <br />
              Governance
            </h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              W Coin (WCO) holders have early access to platform features, beta
              programs, and exclusive events. They can participate in governance
              decisions, allowing them to influence the future direction of the
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LIQUIDITY PROVISION & INCENTIVES ================= */}
      <section className="w-full pt-16 pb-24 px-4 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#001B54_100%)] relative">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-6">
          Liquidity Provision
        </h2>
        <p className="text-center text-white text-[16px] md:text-[18px] leading-relaxed max-w-[1000px] mb-20">
          To maintain a healthy trading environment and consistent market
          presence, an initial liquidity pool of 100 Million WCO paired with a
          Stablecoin will be established. Additionally, 400 Million WCO are
          allocated as reserves for ongoing liquidity provision to stabilise
          trading as the platform expands.
        </p>

        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-10">
          Incentives and Rewards
        </h2>

        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image
                src="/Group 163382.png"
                alt="Node Rewards"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">
              Node Rewards
            </h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Validators running nodes on the network receive rewards in WCO
              annually, incentivising network security and stability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image
                src="/Group 163353.png"
                alt="Staking Rewards"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">
              Staking Rewards
            </h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Stakers earn an annual yield based on the stake amount and
              duration, with bonus tiers for extended staking commitments. This
              incentivises long-term participation and helps maintain network
              security.
            </p>
          </div>
        </div>
      </section>
      {/* ================= DEVELOPMENT FUND MILESTONES ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] border-t border-white/5">
        <div className="w-full max-w-[1000px] border border-[#4EA5FF] rounded-[20px] p-8 md:p-12">
          <h2 className="text-[#4EA5FF] text-[28px] md:text-[36px] font-bold mb-4 text-center md:text-left">
            Development Fund Release Milestones
          </h2>
          <p className="text-white text-[15px] md:text-[16px] leading-relaxed mb-10 text-center md:text-left">
            A total of 1 Billion WCO are allocated to the Development Fund, released upon<br className="hidden md:block" />
            the achievement of specific milestones:
          </p>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
            <div className="flex-1 w-full">
              <table className="w-full text-left text-white border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-[#4EA5FF] text-[15px] font-bold">
                    <th className="py-4 pr-4 border-r border-white/20">Milestone</th>
                    <th className="py-4 pl-6">W Coin Allocation</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  <tr className="border-b border-white/10">
                    <td className="py-4 pr-4 border-r border-white/20 text-white/90">Mainnet Launch</td>
                    <td className="py-4 pl-6 text-white/80">100 Million</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 pr-4 border-r border-white/20 text-white/90">Layer 2 Launch</td>
                    <td className="py-4 pl-6 text-white/80">100 Million</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 border-r border-white/20 text-white/90">Future Developments</td>
                    <td className="py-4 pl-6 text-white/80">800 Million</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex-1 flex items-center h-full pt-4 md:pt-10">
              <p className="text-white/90 text-[15px] md:text-[16px] leading-relaxed">
                Note: Detailed allocations for 2026-2027 milestones will be published as W Chain continues to grow, ensuring resources align with ongoing platform requirements and expansion opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPLY AND EMISSION SCHEDULE ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#001C54_100%)] border-t border-[#4EA5FF]/20">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-12">
          Supply and Emission Schedule
        </h2>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Group 163408.png" alt="Initial Circulating Supply" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">Initial Circulating Supply</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Includes tokens from the liquidity provision and a portion of the treasury to establish a stable market base.
            </p>
          </div>
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Shape_29_.png" alt="Emission Rate" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">Emission Rate</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              A controlled release of WCO through vesting schedules helps maintain market balance. Enterprises & Partnerships WCO&apos;s vest linearly over 60 months, while Marketing & Community WCO&apos;s vest over 60 months. Development Fund WCO&apos;s are distributed as per milestones.
            </p>
          </div>
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Group 163353.png" alt="Deflationary Mechanisms" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">Deflationary Mechanisms</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Potential Coin burns or other mechanisms may be introduced in the future to regulate supply and enhance WCO&apos;s value.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECURITY AND AUDITS ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] border-t border-white/5">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-12">
          Security and Audits
        </h2>

        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Group 163428.png" alt="Smart Contract Audits" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">Smart Contract Audits</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              W Chain undergoes regular third-party audits to ensure the security and integrity of its smart contracts, safeguarding user funds and network functionality.
            </p>
          </div>
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Group (1).png" alt="Regulatory Compliance" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">Regulatory Compliance</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Compliance with KYC and AML regulations is prioritised for premium features and enterprise-focused solutions to meet legal standards across various jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEGAL AND COMPLIANCE ================= */}
      <section className="w-full py-20 px-4 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#001C54_100%)] border-t border-[#4EA5FF]/20">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-12">
          Legal and Compliance
        </h2>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Group.png" alt="Jurisdictional Compliance" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">Jurisdictional Compliance</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              W Chain will operate in line with relevant legal frameworks, ensuring lawful adherence across all markets.
            </p>
          </div>
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Group 163365.png" alt="W Chain Coin Classification" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">W Chain Coin Classification</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              WCO is designated as a utility coin, serving specific functions within the W Chain ecosystem.
            </p>
          </div>
          <div className="bg-[#1C3666]/40 backdrop-blur-sm rounded-[16px] p-8 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <div className="mb-5">
              <Image src="/Vector.png" alt="Participant Disclaimers" width={32} height={32} className="object-contain" />
            </div>
            <h4 className="text-[#4EA5FF] text-[18px] font-bold mb-3">Participant Disclaimers</h4>
            <p className="text-white/80 text-[14px] leading-relaxed font-light">
              Transparent risk disclosures and terms inform participants of digital asset considerations within the W Chain platform.
            </p>
          </div>
        </div>
      </section>

      {/* ================= W COIN ALLOCATION (PIE CHART) ================= */}
      <section className="w-full py-24 px-4 md:px-10 flex flex-col items-center bg-[#020B2D] border-t border-white/5 pb-32">
        <h2 className="text-[#4EA5FF] text-[32px] md:text-[42px] font-bold text-center mb-16">
          W Coin Allocation
        </h2>

        <div className="w-full max-w-[1000px] mb-12">
          <Image
            src="/image 44.png"
            alt="W Coin Allocation Pie Chart"
            width={1000}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        <p className="text-center text-white/90 text-[16px] md:text-[18px] leading-relaxed max-w-[900px]">
          The WCO Tokenomics are crafted to support W Chain&apos;s ecosystem growth through strategic
          allocations and incentives. By balancing development, security, community engagement, and
          legal compliance, W Chain aims to establish a robust, sustainable digital payment platform
          benefiting all stakeholders.
        </p>
      </section>
      {/* ================= CTA SECTION ================= */}
      <section className="w-full pt-24 pb-44 px-4 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#020B2D_0%,#002B7F_100%)] border-t border-white/5 relative z-10 -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002B7F] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1000px] bg-[linear-gradient(180deg,#2B4573_0%,#0B1B3D_100%)] rounded-[24px] p-10 md:p-16 border border-[#4EA5FF]/30 shadow-[0_0_30px_rgba(78,165,255,0.15)] flex flex-col items-center text-center">
          <h2 className="text-[#4EA5FF] text-[32px] md:text-[44px] font-bold mb-6">
            Connect, Collaborate and Thrive
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed max-w-[800px] mb-10">
            Ready to be part of something big? The W Chain community is waiting for you! 
            Connect with fellow enthusiasts, contribute to exciting projects, and help shape the future 
            of finance. Join us today and let&apos;s build the decentralized world together!
          </p>
          <button className="flex items-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)]">
            Join the Revolution
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
