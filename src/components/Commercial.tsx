"use client";

import { Zap, ShieldCheck, Box } from "lucide-react";

export default function CommerceSection() {
  return (
    <section className="w-full bg-[#000D27] pt-[120px] md:pt-[130px] pb-20 px-6 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center text-white">
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

            text-white

            max-w-[508px]
            mx-auto
          "
        >
          Built for the <br />
          <span
            className="
              bg-clip-text
              text-transparent

              bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]
            "
          >
            Speed of Commerce
          </span>
        </h2>

        {/* ================= SUBTEXT ================= */}
        <p
          className="
            mt-6

            font-Montserrat
            font-medium

            text-white

            text-[15px]
            sm:text-[16px]
            lg:text-[18px]

            leading-[1.5]
            lg:leading-[22px]

            tracking-[-0.03em]

            max-w-[785px]
            mx-auto
          "
        >
          W Chain is a payment-native hybrid blockchain — combining
          enterprise-grade security with the throughput required for global
          payments.
        </p>

        {/* ================= FEATURES ================= */}
        <div
          className="
            mt-16

            flex
            flex-col
            sm:flex-row

            items-center
            justify-center

            gap-14
            sm:gap-10
            lg:gap-20

            w-full
            max-w-[900px]

            mx-auto
          "
        >
          {/* ITEM 1 */}
          <FeatureCard
            icon={
              <Zap
                width={60}
                height={65}
                strokeWidth={1.5}
                className="text-[#8BC9D4]"
              />
            }
            title="Speed"
            description="Up to 10,000 TPS"
          />

          {/* ITEM 2 */}
          <FeatureCard
            icon={
              <ShieldCheck
                width={60}
                height={65}
                strokeWidth={1.5}
                className="text-[#8BC9D4]"
              />
            }
            title="Security"
            description="KYC-native & audit-ready"
          />

          {/* ITEM 3 */}
          <FeatureCard
            icon={
              <Box
                width={60}
                height={65}
                strokeWidth={1.5}
                className="text-[#8BC9D4]"
              />
            }
            title="Scale"
            description="Built for millions of daily transactions"
          />
        </div>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <div
        className="
          absolute
          bottom-0
          left-1/2

          -translate-x-1/2

          w-[calc(100%-48px)]
          max-w-[1100px]

          h-[1px]

          bg-white/[0.08]
        "
      />
    </section>
  );
}

/* ================= FEATURE CARD ================= */
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        flex-col

        items-center
        justify-center

        text-center

        w-full
        max-w-[220px]

        mx-auto

        shrink-0
      "
    >
      {/* ================= ICON CIRCLE ================= */}
      <div
        className="
          w-[145px]
          h-[145px]

          sm:w-[140px]
          sm:h-[140px]

          lg:w-[150px]
          lg:h-[150px]

          rounded-full

          flex
          items-center
          justify-center

          bg-[linear-gradient(180deg,#0C2B4A_0%,#081C33_100%)]

          border
          border-[#8BC9D4]

          shadow-[0_0_30px_rgba(139,201,212,0.25)]

          hover:scale-105
          hover:border-white

          transition-all
          duration-300
        "
      >
        <div
          className="
            text-white

            flex
            items-center
            justify-center

            scale-100
            sm:scale-95
            lg:scale-100
          "
        >
          {icon}
        </div>
      </div>

      {/* ================= TITLE ================= */}
      <h3
        className="
          mt-5

          font-Montserrat
          font-bold

          text-[#3bb4ff]

          text-[20px]
          sm:text-[18px]

          leading-[24px]

          text-center
        "
      >
        {title}
      </h3>

      {/* ================= DESCRIPTION ================= */}
      <p
        className="
          mt-2

          text-white/70

          text-[15px]

          leading-[22px]

          font-Montserrat
          font-medium

          max-w-[220px]

          text-center
        "
      >
        {description}
      </p>
    </div>
  );
}
