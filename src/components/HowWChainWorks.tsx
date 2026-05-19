"use client";

import Image from "next/image";

export default function HowWChainWorks() {
  const features = [
    {
      icon: <Image src="/1.png" alt="EVM Compatible" width={72} height={72} className="shrink-0" />,
      title: "EVM Compatible",
      description:
        "Easily deploy and run existing Ethereum dApps without friction",
    },
    {
      icon: <Image src="/2.png" alt="Payment-Native by Design" width={72} height={72} className="shrink-0" />,
      title: "Payment-Native by Design",
      description:
        "Built-in systems for seamless transactions, fee abstraction, and reconciliation",
    },
    {
      icon: <Image src="/3.png" alt="Ultra-Low Gas Fees" width={72} height={72} className="shrink-0" />,
      title: "Ultra-Low Gas Fees",
      description: "Supports micro-transactions at negligible cost",
    },
    {
      icon: <Image src="/4.png" alt="Sub-Second Finality" width={72} height={72} className="shrink-0" />,
      title: "Sub-Second Finality",
      description:
        "Near real-time transaction settlement for consumer-grade payments",
    },
  ];

  return (
    <section className="relative w-full h-auto lg:h-[720px] bg-[#000D27] flex flex-col justify-center py-16 lg:py-0 overflow-hidden">
      <div className="w-full max-w-[1180px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-Montserrat text-[32px] sm:text-[40px] lg:text-[50px] font-bold leading-[40px] sm:leading-[50px] lg:leading-[60px] tracking-[-0.03em] bg-clip-text text-transparent bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] lg:w-[662px] lg:h-[60px] max-w-full mx-auto">
            How W Chain Works
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[560px_451px] justify-center gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto">
            {/* Divider Line */}
            <div className="hidden lg:block absolute right-[-20px] top-1/2 -translate-y-1/2 h-[287px] w-[1px] bg-white/10" />

            <div className="space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  {/* Icon (Image asset) */}
                  {item.icon}

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
          <div className="flex justify-center shrink-0">
            <div className="relative w-full max-w-[451px] md:w-[451px] h-[369px] overflow-hidden shrink-0">
              <Image
                src="/right-box.png"
                alt="How W Chain Works Flow"
                width={451}
                height={369}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Centered separator line that does not touch the edges */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1100px] h-[1px] bg-white/[0.08]" />
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
