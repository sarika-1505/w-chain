"use client";

import Image from "next/image";

export default function Airdrop() {
  return (
    <main className="w-full overflow-hidden bg-[#020B2D]">
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section
        className="
          relative
          w-full

          min-h-[720px]
          md:min-h-[800px]

          overflow-hidden

          rounded-b-[40px]
          md:rounded-b-[60px]

          border-b
          border-[#4EA5FF]/30

          bg-[#020B2D]

          z-20
        "
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <Image
          src="/Airdop/Airdop-bg.png"
          alt="Airdrop Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* ================= OVERLAY ================= */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        {/* ================= CONTENT ================= */}
        <div
          className="
            relative
            z-10

            w-full
            max-w-[1440px]

            mx-auto

            px-5
            sm:px-8
            md:px-12
            lg:px-[80px]

            pt-[110px]
            md:pt-[140px]

            pb-[140px]

            flex
            flex-col-reverse
            lg:flex-row

            items-center
            justify-between

            gap-14
            lg:gap-10
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              w-full
              max-w-[640px]

              flex
              flex-col

              items-center
              lg:items-start

              text-center
              lg:text-left
            "
          >
            {/* HEADING */}
            <h1
              className="
                font-Montserrat
                font-bold

                text-[36px]
                sm:text-[44px]
                lg:text-[50px]

                leading-[1.15]
                lg:leading-[60px]

                tracking-[-0.03em]

                text-transparent
                bg-clip-text

                bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)]

                max-w-[629px]

                mb-6
              "
            >
              A New Era for W Chain:
              <br />
              Community Airdrop &
              <br />
              Strategic Buyback
            </h1>

            {/* SUBTEXT */}
            <p
              className="
                text-white

                font-Montserrat
                font-medium

                text-[16px]
                sm:text-[18px]
                lg:text-[22px]

                leading-[1.4]

                max-w-[560px]
              "
            >
              Announcing two significant steps towards a brighter future for W
              Chain and its community.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              relative

              w-full
              max-w-[280px]
              sm:max-w-[340px]
              lg:max-w-[406px]

              flex
              items-center
              justify-center

              shrink-0
            "
          >
            <Image
              src="/Airdop/Vector.png"
              alt="Airdrop Icon"
              width={406}
              height={471}
              priority
              className="
                w-full
                h-auto
                object-contain

                drop-shadow-[0_0_35px_rgba(78,165,255,0.18)]
              "
            />
          </div>
        </div>

        {/* ================= BOTTOM BLUE GLOW ================= */}
        <div
          className="
            absolute
            bottom-0
            left-0

            w-full
            h-[180px]

            bg-[linear-gradient(180deg,rgba(0,47,141,0)_0%,rgba(0,47,141,0.55)_100%)]

            z-[2]
          "
        />
      </section>

      {/* ========================================================= */}
      {/* COMMUNITY AIRDROP SECTION */}
      {/* ========================================================= */}

      <section
        className="
          relative

          w-full

          -mt-[60px]
          md:-mt-[80px]

          z-10

          pt-[120px]
          md:pt-[150px]

          pb-20
          md:pb-28

          px-4
          md:px-10

          flex
          flex-col
          items-center

          bg-[#020B2D]

          overflow-hidden
        "
      >
        {/* TOP BORDER */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0D7FF2]" />

        {/* ================= HEADING ================= */}
        <h2
          className="
            font-Montserrat
            font-bold

            text-white

            text-[34px]
            sm:text-[42px]
            lg:text-[56px]

            leading-[1.1]

            tracking-[-0.03em]

            text-center

            mb-5
          "
        >
          500 Million WCO Community Airdrop
        </h2>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
            text-center

            text-white

            font-Montserrat
            font-medium

            text-[16px]
            sm:text-[18px]
            lg:text-[24px]

            leading-[1.35]

            max-w-[780px]

            mb-12
            md:mb-16
          "
        >
          As a token of our appreciation, we&apos;re allocating
          <br className="hidden md:block" />
          500 million WCO tokens for a community airdrop.
        </p>

        {/* ================= CARDS ================= */}
        <div
          className="
            w-full
            max-w-[1180px]

            grid
            grid-cols-1
            lg:grid-cols-2

            gap-6
            md:gap-8
          "
        >
          {/* CARD 1 */}
          <div className="rounded-[22px] p-[1.5px] bg-[linear-gradient(180deg,rgba(180,228,255,0.9)_0%,rgba(31,157,216,0.55)_100%)]">
            <div className="h-full w-full rounded-[21px] bg-[linear-gradient(180deg,#3A4667_0%,#173768_55%,#0C2E73_100%)] p-7 md:p-8">
              <Image
                src="/Airdop/image 39.png"
                alt="Airdrop"
                width={50}
                height={50}
                className="object-contain mb-6"
              />

              <h3 className="font-Montserrat font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)] text-[22px] md:text-[26px] mb-5">
                Token Source
              </h3>

              <div className="flex flex-col gap-4">
                <p className="text-white text-[15px] md:text-[17px]">
                  • 250 million from the Marketing & Community Fund
                </p>

                <p className="text-white text-[15px] md:text-[17px]">
                  • 250 million from the Premium Account Features Allocation
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-[22px] p-[1.5px] bg-[linear-gradient(180deg,rgba(180,228,255,0.9)_0%,rgba(31,157,216,0.55)_100%)]">
            <div className="h-full w-full rounded-[21px] bg-[linear-gradient(180deg,#3A4667_0%,#173768_55%,#0C2E73_100%)] p-7 md:p-8">
              <Image
                src="/Airdop/image 39.png"
                alt="Timeline"
                width={50}
                height={50}
                className="object-contain mb-6"
              />

              <h3 className="font-Montserrat font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)] text-[22px] md:text-[26px] mb-5">
                Timeline
              </h3>

              <p className="text-white text-[15px] md:text-[17px] leading-[1.5]">
                Tokens will be airdropped alongside the launch of Premium
                Accounts in March 2025. *Lock in Period will apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1 BILLION WCO BUYBACK SECTION */}
      {/* ========================================================= */}

      <section
        className="
    w-full

    py-20
    md:py-28

    px-4
    md:px-10

    flex
    flex-col
    items-center

    bg-[linear-gradient(180deg,#020B2D_0%,#002B7F_100%)]

    relative
    overflow-hidden
  "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
      font-Montserrat
      font-bold

      text-white

      text-[34px]
      sm:text-[42px]
      lg:text-[56px]

      leading-[1.1]

      tracking-[-0.03em]

      text-center

      mb-5
    "
        >
          1 Billion WCO Buyback & Redistribution
        </h2>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
      text-center

      text-white

      font-Montserrat
      font-medium

      text-[16px]
      sm:text-[18px]
      lg:text-[24px]

      leading-[1.35]

      max-w-[850px]

      mb-12
      md:mb-16
    "
        >
          To further enhance the value of WCO, we&apos;ll initiate a buyback
          program for
          <br className="hidden md:block" />1 billion tokens from the
          circulating supply.
        </p>

        {/* ================= CARDS ================= */}
        <div
          className="
      w-full
      max-w-[1180px]

      grid
      grid-cols-1
      lg:grid-cols-2

      gap-6
      md:gap-8
    "
        >
          {/* ================= CARD 1 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1.5px]

        bg-[linear-gradient(180deg,rgba(180,228,255,0.9)_0%,rgba(31,157,216,0.55)_100%)]

        shadow-[0_0_24px_rgba(78,165,255,0.14)]
      "
          >
            <div
              className="
          h-full
          w-full

          rounded-[21px]

          bg-[linear-gradient(180deg,#3A4667_0%,#173768_55%,#0C2E73_100%)]

          p-7
          md:p-8
        "
            >
              {/* ICON */}
              <Image
                src="/Airdop/image 39.png"
                alt="Program Details"
                width={50}
                height={50}
                className="object-contain mb-6"
              />

              {/* TITLE */}
              <h3
                className="
            font-Montserrat
            font-bold

            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)]

            text-[22px]
            md:text-[26px]

            mb-5
          "
              >
                Program Details
              </h3>

              {/* LIST */}
              <div className="flex flex-col gap-4">
                {/* ITEM */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                w-6
                h-6

                rounded-full

                bg-[#2196F3]

                flex
                items-center
                justify-center

                shrink-0

                mt-[2px]
              "
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                  </div>

                  <p
                    className="
                text-white

                text-[15px]
                md:text-[17px]

                leading-[1.5]

                font-Montserrat
              "
                  >
                    The buyback will be executed over a year.
                  </p>
                </div>

                {/* ITEM */}
                <div className="flex items-start gap-3">
                  <div
                    className="
                w-6
                h-6

                rounded-full

                bg-[#2196F3]

                flex
                items-center
                justify-center

                shrink-0

                mt-[2px]
              "
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 5 5 9-9" />
                    </svg>
                  </div>

                  <p
                    className="
                text-white

                text-[15px]
                md:text-[17px]

                leading-[1.5]

                font-Montserrat
              "
                  >
                    Acquired tokens will be distributed quarterly to Premium
                    Account holders post the buyback.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
        rounded-[22px]

        p-[1.5px]

        bg-[linear-gradient(180deg,rgba(180,228,255,0.9)_0%,rgba(31,157,216,0.55)_100%)]

        shadow-[0_0_24px_rgba(78,165,255,0.14)]
      "
          >
            <div
              className="
          h-full
          w-full

          rounded-[21px]

          bg-[linear-gradient(180deg,#3A4667_0%,#173768_55%,#0C2E73_100%)]

          p-7
          md:p-8
        "
            >
              {/* ICON */}
              <Image
                src="/Airdop/image 39.png"
                alt="Transparency"
                width={50}
                height={50}
                className="object-contain mb-6"
              />

              {/* TITLE */}
              <h3
                className="
            font-Montserrat
            font-bold

            text-transparent
            bg-clip-text

            bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)]

            text-[22px]
            md:text-[26px]

            mb-5
          "
              >
                Transparency & Accountability
              </h3>

              {/* CONTENT */}
              <div className="flex items-start gap-3">
                <div
                  className="
              w-6
              h-6

              rounded-full

              bg-[#2196F3]

              flex
              items-center
              justify-center

              shrink-0

              mt-[2px]
            "
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 5 5 9-9" />
                  </svg>
                </div>

                <p
                  className="
              text-white

              text-[15px]
              md:text-[17px]

              leading-[1.5]

              font-Montserrat
            "
                >
                  A dedicated wallet will ensure full visibility of the buyback
                  and redistribution process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
    w-full

    pt-10
    md:pt-16

    pb-24
    md:pb-32

    px-4
    md:px-10

    flex
    justify-center

    bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]

    relative
    overflow-hidden
  "
      >
        {/* ================= CTA BOX ================= */}
        <div
          className="
      w-full
      max-w-[1206px]

      min-h-[376px]

      rounded-[28px]

      p-[1.5px]

      bg-[linear-gradient(180deg,#B4E4FF_0%,#1F9DD8_100%)]

      shadow-[0_0_35px_rgba(78,165,255,0.18)]
    "
        >
          {/* ================= INNER BOX ================= */}
          <div
            className="
        w-full
        h-full

        rounded-[27px]

        bg-[linear-gradient(180deg,#44527A_0%,#183768_55%,#0A2C73_100%)]

        px-6
        md:px-14

        py-14
        md:py-20

        flex
        flex-col
        items-center
        justify-center

        text-center

        relative
        overflow-hidden
      "
          >
            {/* ================= INNER GLOW ================= */}
            <div
              className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(78,165,255,0.18)_0%,transparent_70%)]

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

          text-transparent
          bg-clip-text

          bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)]

          text-[34px]
          sm:text-[42px]
          lg:text-[50px]

          leading-[1.1]
          lg:leading-[60px]

          tracking-[-0.03em]

          mb-6
        "
            >
              Connect, Collaborate and Thrive
            </h2>

            {/* ================= CONTENT ================= */}
            <p
              className="
          relative
          z-10

          text-white

          font-Montserrat
          font-medium

          text-[16px]
          sm:text-[20px]
          lg:text-[25px]

          leading-[1.4]

          max-w-[930px]

          mb-10
        "
            >
              Ready to be part of something big? The W Chain community is
              waiting for you! Connect with fellow enthusiasts, contribute to
              exciting projects, and help shape the future of finance. Join us
              today and let&apos;s build the decentralized world together!
            </p>

            {/* ================= BUTTON ================= */}
            <button
              className="
          relative
          z-10

          flex
          items-center
          gap-4

          bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

          hover:opacity-90
          transition-opacity

          text-white

          px-8
          md:px-10

          py-3.5
          md:py-4

          rounded-full

          font-Montserrat
          font-bold

          text-[15px]
          md:text-[18px]

          shadow-[0_0_18px_rgba(78,165,255,0.4)]
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
            border-white
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
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
