import Image from "next/image";
import Link from "next/link";

export default function WCO() {
  return (
    <div className="w-full bg-[#020B2D] flex flex-col items-center font-Montserrat">
      {/* ================= HERO SECTION ================= */}
      <section
        className="
    relative
    w-full

    min-h-[800px]
    lg:h-[800px]

    overflow-hidden

    rounded-b-[40px]
    md:rounded-b-[50px]

    border-b
    border-l
    border-r

    border-[#4EA5FF]/30

    -mb-[40px]
    md:-mb-[50px]

    z-10

    flex
    items-center
    justify-center

    font-Montserrat

    bg-[#020B2D]

    px-4
    sm:px-6
  "
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <Image
          src="/Group 162729.png"
          alt="WCO Background"
          fill
          priority
          className="
      object-cover
      object-center

      opacity-80
    "
        />

        {/* ================= OVERLAY ================= */}
        <div
          className="
      absolute
      inset-0

      bg-[linear-gradient(90deg,rgba(2,11,45,0.92)_0%,rgba(2,11,45,0.72)_45%,rgba(2,11,45,0.35)_100%)]

      z-[1]
    "
        />

        {/* ================= CONTENT WRAPPER ================= */}
        <div
          className="
      relative
      z-10

      w-full
      max-w-[1200px]

      px-2
      sm:px-4
      md:px-6
      lg:px-10

      py-[120px]
      md:py-[140px]

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
        flex-1

        flex
        flex-col

        items-center
        lg:items-start

        text-center
        lg:text-left

        max-w-[600px]
        w-full
      "
          >
            {/* ================= HEADING ================= */}
            <h1
              className="
          font-Montserrat

          text-transparent
          bg-clip-text

          bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

          text-[34px]
          sm:text-[44px]
          md:text-[52px]
          lg:text-[50px]

          font-bold

          leading-[1.12]
          lg:leading-[60px]

          tracking-[-0.03em]

          mb-8

          w-full
        "
            >
              Powering Payments &
              <br />
              DeFi with Fast, Secure
              <br />
              Transactions
            </h1>

            {/* ================= BUTTONS ================= */}
            <div
              className="
          flex
          flex-col
          sm:flex-row

          items-center

          gap-4

          mb-12

          w-full
          sm:w-auto
        "
            >
              {/* BTN 1 */}
              <Link
                href="#"
                className="
            w-full
            sm:w-auto

            min-w-[220px]

            flex
            items-center
            justify-center

            gap-3

            bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)]

            hover:opacity-90

            transition-opacity

            text-white

            px-6
            py-3.5

            rounded-[30px]

            font-bold
            text-[15px]

            shadow-[0_0_15px_rgba(78,165,255,0.4)]
          "
              >
                Get on W Swap
                <span
                  className="
              w-6
              h-6

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
              </Link>

              {/* BTN 2 */}
              <Link
                href="#"
                className="
            w-full
            sm:w-auto

            min-w-[220px]

            flex
            items-center
            justify-center

            gap-3

            bg-transparent

            border
            border-white/40

            hover:bg-white/10

            transition-colors

            text-white

            px-6
            py-3.5

            rounded-[30px]

            font-bold
            text-[15px]
          "
              >
                Start Staking
                <span
                  className="
              w-6
              h-6

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
              </Link>
            </div>

            {/* ================= BUY ON SECTION ================= */}
            <div
              className="
          w-full

          flex
          flex-col

          border-t
          border-b

          border-white/10

          py-6
        "
            >
              <div
                className="
            flex
            flex-col
            sm:flex-row

            sm:items-center

            gap-4
          "
              >
                <span
                  className="
              text-white/90

              text-[14px]

              shrink-0

              text-center
              sm:text-left
            "
                >
                  Buy on:
                </span>

                <div
                  className="
              flex
              flex-wrap

              justify-center
              sm:justify-start

              gap-2.5
            "
                >
                  {["MEXC", "BitMart", "Bitrue", "W Swap"].map((exchange) => (
                    <div
                      key={exchange}
                      className="
                  px-5
                  py-1.5

                  rounded-[20px]

                  border
                  border-white/30

                  text-white/90

                  text-[13px]

                  hover:bg-white/10

                  transition-colors

                  cursor-pointer
                "
                    >
                      {exchange}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
        flex-1

        flex
        justify-center
        lg:justify-end

        items-center

        relative

        z-10

        w-full
      "
          >
            <Image
              src="/wco-right.png"
              alt="WCO Card and Shield"
              width={500}
              height={423}
              className="
          object-contain

          w-full

          max-w-[280px]
          sm:max-w-[360px]
          md:max-w-[430px]
          lg:max-w-[500px]

          h-auto

          relative
          lg:right-[-5%]
        "
            />
          </div>
        </div>
      </section>

      {/* ================= DECODING THE NUMBERS ================= */}
      <section className="relative overflow-hidden w-full pt-[120px] md:pt-[130px] pb-24 px-6 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)]">
        {/* Heading */}
        <h2 className="font-Montserrat text-transparent bg-clip-text bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)] text-[32px] sm:text-[40px] lg:text-[60px] font-bold leading-[100%] tracking-[-0.03em] mb-20 text-center">
          Decoding the Numbers
        </h2>

        {/* Circles */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 mb-14 w-full max-w-[1300px]">
          {/* Circle 1 */}
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[263px] lg:h-[263px] rounded-full border-[10px] border-[#1482F2]/20 flex flex-col items-center justify-center bg-transparent">
            <h3 className="font-Montserrat font-black text-white text-[38px] sm:text-[48px] lg:text-[60px] leading-[100%] tracking-[-0.03em] text-center">
              $284M
            </h3>

            <p className="mt-5 text-white text-[14px] sm:text-[16px] font-normal leading-[100%] tracking-[-0.03em] text-center">
              Market Cap
            </p>
          </div>

          {/* Circle 2 */}
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[263px] lg:h-[263px] rounded-full border-[10px] border-[#1482F2]/20 flex flex-col items-center justify-center bg-transparent">
            <h3 className="font-Montserrat font-black text-white text-[38px] sm:text-[48px] lg:text-[60px] leading-[100%] tracking-[-0.03em] text-center">
              1.2B
            </h3>

            <p className="mt-5 text-white text-[14px] sm:text-[16px] font-normal leading-[100%] tracking-[-0.03em] text-center">
              Total Supply
            </p>
          </div>

          {/* Circle 3 */}
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[263px] lg:h-[263px] rounded-full border-[10px] border-[#1482F2]/20 flex flex-col items-center justify-center bg-transparent">
            <h3 className="font-Montserrat font-black text-white text-[38px] sm:text-[48px] lg:text-[60px] leading-[100%] tracking-[-0.03em] text-center">
              $48M
            </h3>

            <p className="mt-5 text-white text-[14px] sm:text-[16px] font-normal leading-[100%] tracking-[-0.03em] text-center">
              Volume (24h)
            </p>
          </div>

          {/* Circle 4 */}
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[263px] lg:h-[263px] rounded-full border-[10px] border-[#1482F2]/20 flex flex-col items-center justify-center bg-transparent">
            <h3 className="font-Montserrat font-black text-white text-[38px] sm:text-[48px] lg:text-[60px] leading-[100%] tracking-[-0.03em] text-center">
              16.9%
            </h3>

            <p className="mt-5 text-white text-[14px] sm:text-[16px] font-normal leading-[100%] tracking-[-0.03em] text-center">
              Volume/Mkt
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] font-Montserrat leading-[100%] tracking-[-0.03em] text-center max-w-[760px]">
          The numbers speak! See W Chain&apos;s rapid growth, security, and
          efficiency in action.
        </p>
      </section>

      {/* ================= WCO IN ACTION ================= */}
      <section className="w-full py-20 px-6 md:px-10 flex flex-col items-center bg-[#000D27] border-t border-[#4EA5FF]/20">
        <h2 className="text-[#4EA5FF] text-[32px] sm:text-[36px] md:text-[48px] font-bold mb-16 flex items-center gap-4 text-center leading-tight">
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 0L0 21H10.5L9 36L24 13.5H13.5L15 0Z" />
          </svg>
          WCO In Action
        </h2>

        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[linear-gradient(180deg,#1C3666_0%,#0A1938_100%)] rounded-[20px] p-8 md:p-10 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="mb-6 h-[32px] flex items-center">
              <Image
                src="/trade, transaction, payment, trading.png"
                alt="Capital-Efficient"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-[#4EA5FF] text-[20px] font-bold mb-3">
              Capital-Efficient
            </h3>
            <p className="text-white/80 text-[15px] font-light leading-relaxed">
              Staked security — no waste,
              <br />
              aligned incentives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[linear-gradient(180deg,#1C3666_0%,#0A1938_100%)] rounded-[20px] p-8 md:p-10 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="mb-6 h-[32px] flex items-center">
              <Image
                src="/Group 162756.png"
                alt="Sustainable"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-[#4EA5FF] text-[20px] font-bold mb-3">
              Sustainable
            </h3>
            <p className="text-white/80 text-[15px] font-light leading-relaxed">
              99% less energy vs PoW.
              <br />
              ESG-ready.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[linear-gradient(180deg,#1C3666_0%,#0A1938_100%)] rounded-[20px] p-8 md:p-10 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="mb-6 h-[32px] flex items-center">
              <Image
                src="/Group.png"
                alt="Economic Participation"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="text-[#4EA5FF] text-[20px] font-bold mb-3">
              Economic Participation
            </h3>
            <p className="text-white/80 text-[15px] font-light leading-relaxed">
              Stake & delegate earn rewards
              <br />
              strengthening decentralization.
            </p>
          </div>
        </div>
      </section>

      <div className="w-[1205px] h-[1px] bg-white/10 mx-auto" />

      {/* ================= ECOSYSTEM / LISTINGS ================= */}
      <section className="w-full lg:h-[616px] h-auto py-20 lg:py-0 px-6 md:px-10 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] overflow-hidden">
        {/* Left Side: Phone Mockup */}
        <div className="flex-1 w-full max-w-[500px] flex justify-center items-center bg-gradient-to-b from-white to-[#E8F1FC] rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.15)] border border-[#8BC9D4]/30">
          <Image
            src="/image 28.png"
            alt="W Chain App Mockup"
            width={500}
            height={500}
            className="w-full h-auto object-contain rounded-[24px]"
          />
        </div>

        {/* Right Side: Exchange Links */}
        <div className="w-full lg:w-[705px] lg:h-[380px] h-auto flex flex-col justify-between gap-[40px] lg:gap-0">
          {/* CoinMarketCap Card */}
          <div className="lg:h-[170px] w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(28,96,107,0.2)_100%)] backdrop-blur-md border border-[#8BC9D4]/30 rounded-[20px] px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <Image
              src="/image 29.png"
              alt="CoinMarketCap"
              width={299}
              height={79}
              className="object-contain lg:w-[299px] lg:h-[79px] w-[200px] h-auto sm:ml-2"
            />

            <Link
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-[15px] sm:text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)] sm:mr-2"
            >
              Explore Coin Market
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

          {/* CoinGecko Card */}
          <div className="lg:h-[170px] w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(28,96,107,0.2)_100%)] backdrop-blur-md border border-[#8BC9D4]/30 rounded-[20px] px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <Image
              src="/image 30.png"
              alt="CoinGecko"
              width={299}
              height={79}
              className="object-contain lg:w-[299px] lg:h-[79px] w-[180px] h-auto sm:ml-2"
            />

            <Link
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[linear-gradient(90deg,#0F6CB8_0%,#4EA5FF_100%)] hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-[15px] sm:text-[16px] shadow-[0_0_15px_rgba(78,165,255,0.4)] sm:mr-2"
            >
              Explore Coin Gecko
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
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      {/* ================= CTA SECTION ================= */}
      <section className="relative w-full pt-[90px] pb-[170px] px-6 md:px-10 flex flex-col items-center bg-[linear-gradient(180deg,#000D27_0%,#002F8D_100%)] overflow-hidden -mb-[80px] lg:-mb-[100px]">
        {/* Bottom Background Extension */}
        <div className="absolute left-0 right-0 bottom-[-120px] h-[120px] bg-[#002F8D] -z-10 pointer-events-none" />

        {/* CTA CARD */}
        <div
          className="
      relative
      w-full
      max-w-[1126px]
      min-h-[300px]

      rounded-[22px]

      border-[5px]
      border-[#1D4F9B]

      bg-[linear-gradient(180deg,#00113A_0%,#012A7B_100%)]

      shadow-[inset_0_0_0_1px_rgba(180,224,255,0.04)]

      hover:border-[#0B2A5A]
      hover:bg-[linear-gradient(180deg,#000C28_0%,#001E5C_100%)]

      transition-all
      duration-500

      flex
      flex-col
      items-center
      justify-center

      text-center

      px-6
      md:px-16
      py-[70px]

      overflow-hidden
    "
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(78,165,255,0.08),transparent_60%)] pointer-events-none" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center">
            {/* HEADING */}
            <h2
              className="
          font-Montserrat
          font-bold

          text-[34px]
          sm:text-[46px]
          lg:text-[60px]

          leading-[100%]
          tracking-[-0.03em]

          text-transparent
          bg-clip-text
          bg-[linear-gradient(90deg,#0D7FF2_0%,#B4E4FF_50%,#1F9DD8_100%)]

          mb-5
        "
            >
              Own the network you use.
            </h2>

            {/* SUBTEXT */}
            <p
              className="
          text-white

          text-[14px]
          sm:text-[16px]
          md:text-[18px]

          font-normal
          leading-[100%]
          tracking-[-0.03em]

          mb-10
        "
            >
              Govern, stake, and earn with WCO. Get started in minutes.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* GET WCO */}
              <button
                className="
            h-[48px]
            pl-8
            pr-[10px]

            rounded-full

            bg-[linear-gradient(90deg,#0F6CB8_0%,#5EBEFF_100%)]

            flex
            items-center
            gap-5

            text-white
            font-semibold
            text-[16px]

            hover:brightness-110

            transition-all
            duration-300
          "
              >
                Get WCO
                <span className="w-[28px] h-[28px] rounded-full border border-white flex items-center justify-center">
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

              {/* STAKE NOW */}
              <button
                className="
            h-[48px]
            pl-8
            pr-[10px]

            rounded-full

            border
            border-[#4EA5FF]

            bg-[#00142C]

            hover:bg-[#071A3D]
            hover:border-[#0B2A5A]

            transition-all
            duration-300

            flex
            items-center
            gap-5

            text-white
            font-semibold
            text-[16px]
          "
              >
                Stake Now
                <span className="w-[28px] h-[28px] rounded-full border border-white flex items-center justify-center">
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
        </div>
      </section>
    </div>
  );
}
