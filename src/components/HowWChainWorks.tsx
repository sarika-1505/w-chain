"use client";

import {
  ClipboardList,
  Building2,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";

export default function HowWChainWorks() {
  const features = [
    {
      icon: <ClipboardList size={24} />,
      title: "EVM Compatible",
      description:
        "Easily deploy and run existing Ethereum dApps without friction",
    },
    {
      icon: <Building2 size={24} />,
      title: "Payment-Native by Design",
      description:
        "Built-in systems for seamless transactions, fee abstraction, and reconciliation",
    },
    {
      icon: <BadgeDollarSign size={24} />,
      title: "Ultra-Low Gas Fees",
      description: "Supports micro-transactions at negligible cost",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Sub-Second Finality",
      description:
        "Near real-time transaction settlement for consumer-grade payments",
    },
  ];

  return (
    <section className="w-full h-auto lg:h-[720px] bg-[#02142B] flex flex-col justify-center py-16 lg:py-0 overflow-hidden">
      <div className="w-full max-w-[1180px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[42px] md:text-[60px] font-bold text-[#66C3FF] leading-tight">
            How W Chain Works
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[560px_451px] justify-center gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto">
            {/* Divider Lines (Dashed styling from the design) */}
            <div className="hidden lg:block absolute right-[-40px] top-[10%] h-[80%] w-[2px] border-r-[2px] border-dashed border-[#0088FF]" />
            <div className="hidden lg:block absolute right-[-40px] top-1/2 w-[40px] border-t-[2px] border-dashed border-[#0088FF]" />

            <div className="space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  {/* Icon Circle */}
                  <div
                    className="
                      min-w-[72px]
                      h-[72px]
                      rounded-full
                      border
                      border-[#7AD0FF]/50
                      bg-[linear-gradient(180deg,#1C3955_0%,#0A203A_100%)]
                      flex
                      items-center
                      justify-center
                      text-white
                      shadow-[0_0_25px_rgba(102,195,255,0.12)]
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[#55B8FF] text-[20px] font-semibold leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-white/85 text-[15px] leading-[1.45] max-w-[360px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">
            <div
              className="
                relative
                w-full
                max-w-[451px]
                rounded-[22px]
                border
                border-[#0F2945]
                bg-[#030B18]
                px-4
                py-3
                shadow-[0_0_50px_rgba(0,0,0,0.45)]
                overflow-hidden
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_50%)]" />

              <div className="relative z-10 flex flex-col gap-0.5">
                {/* USER / APP */}
                <div
                  className="
                    relative
                    rounded-[14px]
                    border
                    border-cyan-400
                    bg-[linear-gradient(90deg,#1A6173_0%,#35335D_100%)]
                    px-4
                    py-2
                    text-center
                    shadow-[0_0_18px_rgba(0,255,255,0.25)]
                  "
                >
                  <h3 className="text-white font-semibold text-[13px]">
                    👥 User / App
                  </h3>

                  <p className="mt-0.5 text-white/70 text-[9px]">
                    Users & Applications (Wallet + dApps + Exchanges)
                  </p>

                  {/* Dot */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_cyan]" />
                </div>

                {/* Arrow */}
                <FlowArrow label="Data & Responses" color="cyan" />

                {/* APPLICATION LAYER */}
                <div
                  className="
                    relative
                    rounded-[16px]
                    border
                    border-purple-400
                    bg-[linear-gradient(180deg,#1B2944_0%,#241A3E_100%)]
                    px-3
                    py-2.5
                  "
                >
                  <h4 className="text-center text-white font-semibold text-[13px]">
                    ⚙️ Application Layer
                  </h4>

                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {/* EVM */}
                    <div
                      className="
                        rounded-[10px]
                        border
                        border-cyan-400
                        border-dashed
                        px-2
                        py-2
                        text-center
                      "
                    >
                      <h5 className="text-cyan-300 font-semibold text-[11px]">
                        EVM Layer
                      </h5>

                      <p className="mt-1 text-white/60 text-[8px] leading-relaxed">
                        Ethereum-compatible smart contracts
                      </p>
                    </div>

                    {/* DEFI */}
                    <div
                      className="
                        rounded-[10px]
                        border
                        border-purple-400
                        border-dashed
                        px-2
                        py-2
                        text-center
                      "
                    >
                      <h5 className="text-purple-300 font-semibold text-[11px]">
                        DeFi & Payments
                      </h5>

                      <p className="mt-1 text-white/60 text-[8px] leading-relaxed">
                        Trade + Bridge + Liquidity + Farm
                      </p>
                    </div>
                  </div>

                  {/* Side Label */}
                  <div className="hidden lg:block absolute -right-[32px] top-1/2 -translate-y-1/2 rotate-90 text-cyan-300 text-[8px] tracking-[2px]">
                    Scaling + Protocol
                  </div>
                </div>

                {/* Arrow */}
                <FlowArrow label="Confirmed State" color="purple" />

                {/* CONSENSUS */}
                <div
                  className="
                    rounded-[16px]
                    border
                    border-yellow-400
                    bg-[linear-gradient(90deg,#14394B_0%,#2A1F43_100%)]
                    px-3
                    py-2.5
                  "
                >
                  <h4 className="text-center text-yellow-200 font-semibold text-[13px]">
                    🛡 Consensus & Security
                  </h4>

                  <p className="text-center mt-0.5 text-yellow-100/70 text-[9px]">
                    Validators (Proof of Stake)
                  </p>

                  {/* Validators */}
                  <div className="mt-2 flex justify-between items-center px-4">
                    {[1, 2, "N"].map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-5 h-5 rounded-full border border-yellow-300 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-yellow-300" />
                        </div>

                        <span className="mt-1 text-white/70 text-[8px]">
                          Validator {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <FlowArrow label="Block Rewards & Finality" color="yellow" />

                {/* BASE LAYER */}
                <div
                  className="
                    relative
                    rounded-[16px]
                    border
                    border-yellow-400
                    bg-[linear-gradient(90deg,#4B4439_0%,#5C3825_100%)]
                    px-4
                    py-2.5
                    text-center
                  "
                >
                  <h4 className="text-yellow-100 font-semibold text-[14px]">
                    ⚡ W Chain (L1 Base Layer)
                  </h4>

                  <p className="mt-0.5 text-white/70 text-[9px]">
                    Chain ID: 171717 | Native Token: WCO
                  </p>

                  {/* Dot */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_15px_#FFD700]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Flow Arrow */
function FlowArrow({
  label,
  color,
}: {
  label: string;
  color: "cyan" | "purple" | "yellow";
}) {
  const colors = {
    cyan: {
      text: "text-cyan-300",
      border: "border-cyan-400",
    },
    purple: {
      text: "text-purple-300",
      border: "border-purple-400",
    },
    yellow: {
      text: "text-yellow-300",
      border: "border-yellow-400",
    },
  };

  return (
    <div className="flex flex-col items-center py-1">
      <span className={`text-[8px] ${colors[color].text}`}>{label}</span>

      <div className="relative mt-0.5 w-[2px] h-3.5 bg-white/20">
        <div
          className={`
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-2.5
            h-2.5
            rotate-45
            border-r-2
            border-b-2
            ${colors[color].border}
          `}
        />
      </div>
    </div>
  );
}
