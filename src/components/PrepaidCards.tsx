import Image from "next/image";
import Link from "next/link";

export default function PrepaidCards() {
  return (
    <div className="w-full bg-[#000D27] flex flex-col items-center font-Montserrat">
      {/* ================= HERO SECTION ================= */}
      <section
        className="
    relative
    w-full
    h-[800px]

    overflow-hidden

    flex
    items-center

    rounded-b-[50px]
    md:rounded-b-[80px]
  "
        style={{
          background: `
      linear-gradient(
        180deg,
        #020816 0%,
        #010101 42%,
        #02142F 68%,
        #003B82 100%
      )
    `,
        }}
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <Image
          src="/Prepaid-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* ================= MAIN OVERLAY ================= */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `
        linear-gradient(
          180deg,
          rgba(1,4,12,0.92) 0%,
          rgba(0,0,0,0.82) 38%,
          rgba(0,10,25,0.65) 60%,
          rgba(0,47,120,0.55) 82%,
          rgba(0,59,130,0.92) 100%
        )
      `,
          }}
        />

        {/* ================= EXTRA BLUE BOTTOM GLOW ================= */}
        <div
          className="
      absolute
      bottom-0
      left-0
      w-full
      h-[320px]
      z-[2]
    "
          style={{
            background: `
        linear-gradient(
          180deg,
          rgba(0,47,141,0) 0%,
          rgba(0,47,141,0.25) 35%,
          rgba(0,59,130,0.95) 100%
        )
      `,
          }}
        />

        {/* ================= CONTENT ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1440px]

      mx-auto

      px-6
      md:px-[72px]

      flex
      flex-col-reverse
      lg:flex-row

      items-center
      justify-between

      gap-[60px]
    "
        >
          {/* ================= LEFT SIDE ================= */}
          <div
            className="
        w-full
        max-w-[629px]

        flex
        flex-col
        items-start
      "
          >
            <h1
              className="
    max-w-[649px]

    text-transparent
    bg-clip-text

    bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_52%,#1F9DD8_100%)]

    font-Montserrat
    font-bold

    text-[40px]
    sm:text-[45px]
    lg:text-[50px]

    leading-[1.16]

    tracking-[-0.03em]

    mb-[30px]
  "
            >
              Spend Crypto Anywhere
              <br />
              with Prepaid Cards
            </h1>

            {/* ================= BUTTON GROUP ================= */}
            <div
              className="
          flex
          flex-wrap
          items-center
          gap-[14px]
        "
            >
              <Link href="#">
                <Image
                  src="/btn1.png"
                  alt="App Store"
                  width={194}
                  height={50}
                  className="
              h-[50px]
              w-auto
              object-contain
              hover:opacity-90
              transition-all
              duration-300
            "
                />
              </Link>

              <Link href="#">
                <Image
                  src="/btn2.png"
                  alt="Google Play"
                  width={194}
                  height={50}
                  className="
              h-[50px]
              w-auto
              object-contain
              hover:opacity-90
              transition-all
              duration-300
            "
                />
              </Link>

              <Link href="#">
                <Image
                  src="/btn3.png"
                  alt="Visit Winity"
                  width={220}
                  height={50}
                  className="
              h-[50px]
              w-auto
              object-contain
              hover:opacity-90
              transition-all
              duration-300
            "
                />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT CARD IMAGE ================= */}
          <div
            className="
        relative

        w-full
        max-w-[475px]

        flex
        items-center
        justify-center
      "
          >
            <Image
              src="/card.png"
              alt="Prepaid Card"
              width={475}
              height={343}
              priority
              className="
          w-full
          max-w-[475px]
          h-auto
          object-contain
        "
            />
          </div>
        </div>
      </section>

      {/* ================= INNOVATIVE FEATURES ================= */}
      <section className="w-full pt-16 pb-12 px-4 md:px-10 flex flex-col items-center relative z-10">
        <h2 className="text-white text-[32px] md:text-[44px] font-bold mb-16 text-center">
          Discover the Innovative Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[804px]">
          {/* Card 1 */}
          <div
            className="
        relative
        w-full
        md:w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden

        mx-auto
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

          flex
          flex-col
          items-start
          justify-center

          p-8

          backdrop-blur-md

          hover:scale-[1.02]
          transition-transform
        "
            >
              <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000D27"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="17 4 14 1 11 4" />
                  <line x1="14" y1="1" x2="14" y2="15" />
                  <polyline points="7 20 10 23 13 20" />
                  <line x1="10" y1="23" x2="10" y2="9" />
                </svg>
              </div>

              <h3 className="text-[#69B9FF] text-[20px] font-bold mb-3 font-Montserrat">
                Seamless Crypto-to-Fiat
              </h3>

              <p className="text-white text-[18px] leading-[140%] font-Montserrat">
                Spend crypto instantly as fiat — no
                <br />
                complex exchanges.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
        relative
        w-full
        md:w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden

        mx-auto
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

          flex
          flex-col
          items-start
          justify-center

          p-8

          backdrop-blur-md

          hover:scale-[1.02]
          transition-transform
        "
            >
              <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000D27"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>

              <h3 className="text-[#69B9FF] text-[20px] font-bold mb-3 font-Montserrat">
                Worldwide Acceptance
              </h3>

              <p className="text-white text-[18px] leading-[140%] font-Montserrat">
                Use anywhere major debit/
                <br />
                credit cards are accepted.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="
        relative
        w-full
        md:w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden

        mx-auto
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

          flex
          flex-col
          items-start
          justify-center

          p-8

          backdrop-blur-md

          hover:scale-[1.02]
          transition-transform
        "
            >
              <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000D27"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>

              <h3 className="text-[#69B9FF] text-[20px] font-bold mb-3 font-Montserrat">
                Instant & Secure
              </h3>

              <p className="text-white text-[18px] leading-[140%] font-Montserrat">
                Fast, compliant, and reliable
                <br />
                transactions.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="
        relative
        w-full
        md:w-[390px]
        h-[200px]

        rounded-[20px]

        p-[1px]

        overflow-hidden

        mx-auto
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

          flex
          flex-col
          items-start
          justify-center

          p-8

          backdrop-blur-md

          hover:scale-[1.02]
          transition-transform
        "
            >
              <div className="w-10 h-10 rounded-[8px] bg-white flex items-center justify-center mb-4 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000D27"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 1v22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>

              <h3 className="text-[#69B9FF] text-[20px] font-bold mb-3 font-Montserrat">
                Multi-Currency Support
              </h3>

              <p className="text-white text-[18px] leading-[140%] font-Montserrat">
                Convert and spend in various fiat
                <br />
                currencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full pt-12 pb-44 px-4 md:px-10 flex flex-col items-center relative z-10 bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] -mb-[80px] lg:-mb-[100px]">
        {/* Deep blue background extension to cover the overlapping footer corners */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002F8D] -z-10 pointer-events-none" />
        <div className="w-full max-w-[1206px] min-h-[300px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,69,115,0.4)_0%,rgba(11,27,61,0.6)_100%)] backdrop-blur-md flex flex-col items-center justify-center p-10 md:p-16 relative shadow-[0_0_50px_rgba(78,165,255,0.05)] text-center">
          <h2 className="text-[36px] md:text-[48px] font-bold mb-4 tracking-tight">
            <span className="text-[#228AFB]">Join the </span>
            <span className="text-[#59BAF8]">Future of Payments</span>
          </h2>

          <p className="text-white/90 text-[18px] md:text-[20px] mb-10 max-w-[600px] font-medium">
            Spend Crypto Anywhere, Anytime
          </p>

          <Link
            href="#"
            className="flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-[0_0_15px_rgba(78,165,255,0.4)]"
          >
            Pre Order Now
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
          </Link>
        </div>
      </section>
    </div>
  );
}
