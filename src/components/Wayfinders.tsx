import Image from "next/image";

export default function Wayfinders() {
  return (
    <div className="w-full bg-[#020B2D] flex flex-col items-center">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px]  overflow-hidden rounded-b-[50px] md:rounded-b-[100px] flex items-center justify-center">
        
        {/* Background Image */}
        <Image
          src="/wayfinder-bg.png"
          alt="Wayfinders Background"
          fill
          priority
          className="object-cover w-full h-full"
        />


        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-[#2196F3] text-[48px] md:text-[64px] font-bold mb-4">
            Wayfinders
          </h1>
          <p className="text-white text-[18px] md:text-[22px] font-light max-w-[800px]">
            Join the movement shaping the future of Web3 with W Chain!
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full max-w-[1200px] pt-[120px] pb-[80px] px-4 md:px-10 text-center flex flex-col items-center relative">
        <h2 className="text-[#2196F3] text-[36px] md:text-[48px] font-bold mb-10">
          Become a WayFinder
        </h2>

        <div className="space-y-8 text-white/90 text-[18px] md:text-[20px] leading-[32px] font-light mb-12 max-w-[1000px]">
          <p>
            The WayFinders Program features a tiered structure -
            Rising, Premium, and Elite-designed to recognize contributions at every level.
          </p>
          <p>
            Whether you&apos;re a new creator, a mid-sized influencer, or a Web3 expert, there&apos;s a place
            for you to shine.
          </p>
          <p>
            As a WayFinder, you&apos;ll engage with our community, share updates, and contribute to
            W Chain&apos;s growth through content creation, discussions, and more.
          </p>
        </div>

        <button 
          className="
            inline-flex items-center gap-3 
            bg-gradient-to-r from-[#1C606B] to-[#2196F3] 
            text-white text-[16px] md:text-[18px] font-medium 
            px-10 py-3 
            rounded-full 
            hover:opacity-90 transition-opacity
            border border-white/20
          "
        >
          Apply Now
          <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </button>
      </section>

      {/* Divider Between Sections */}
      <div className="w-full max-w-[1000px] h-[1px] bg-white/10 my-[80px]"></div>

      {/* ================= ADVANTAGES SECTION ================= */}
      <section className="w-full bg-gradient-to-br from-[#000D27] to-[#002F8D] py-20 flex flex-col items-center relative z-10">
        <div className="w-full max-w-[1200px] flex flex-col items-center text-center px-4 md:px-10">
          <h2 className="text-[#2196F3] text-[32px] md:text-[40px] font-bold mb-6">
            Advantages of being a WayFinder
          </h2>
          <p className="text-white/90 text-[18px] md:text-[20px] font-light max-w-[800px] mb-12">
            WayFinders earn monthly rewards based on their tier and contributions,
            including WCO tokens, exclusive NFTs, and special perks like mentorship and
            alpha leaks. Your efforts will be recognized and celebrated!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[850px] mx-auto text-left">
            
            {/* Card 1 */}
            <div className="bg-white/5 p-8 rounded-[20px] border border-white/10 w-full h-[200px] flex flex-col justify-center backdrop-blur-sm">
              <div className="w-[50px] h-[50px] rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <Image src="/Group 163303.png" alt="Be a Leader" width={24} height={24} className="object-contain" />
              </div>
              <h3 className="text-[#2196F3] text-[20px] font-bold mb-2">Be a Leader</h3>
              <p className="text-white/80 text-[15px] font-light leading-snug">
                Shape the W Chain ecosystem by sharing news, leading conversations, and providing feedback.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 p-8 rounded-[20px] border border-white/10 w-full h-[200px] flex flex-col justify-center backdrop-blur-sm">
              <div className="w-[50px] h-[50px] rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <Image src="/Group 163303 (1).png" alt="Grow Your Influence" width={24} height={24} className="object-contain" />
              </div>
              <h3 className="text-[#2196F3] text-[20px] font-bold mb-2">Grow Your Influence</h3>
              <p className="text-white/80 text-[15px] font-light leading-snug">
                Connect with a vibrant Web3 community and expand your network.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 p-8 rounded-[20px] border border-white/10 w-full h-[200px] flex flex-col justify-center backdrop-blur-sm">
              <div className="w-[50px] h-[50px] rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <Image src="/Group 163303 (2).png" alt="Access Exclusive Benefits" width={24} height={24} className="object-contain" />
              </div>
              <h3 className="text-[#2196F3] text-[20px] font-bold mb-2">Access Exclusive Benefits:</h3>
              <p className="text-white/80 text-[15px] font-light leading-snug">
                Enjoy early access to updates, direct communication with the W Chain team, and more.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 p-8 rounded-[20px] border border-white/10 w-full h-[200px] flex flex-col justify-center backdrop-blur-sm">
              <div className="w-[50px] h-[50px] rounded-lg bg-white/5 flex items-center justify-center mb-4">
                <Image src="/Group 163303 (3).png" alt="Get Rewarded" width={24} height={24} className="object-contain" />
              </div>
              <h3 className="text-[#2196F3] text-[20px] font-bold mb-2">Get Rewarded</h3>
              <p className="text-white/80 text-[15px] font-light leading-snug">
                Earn monthly rewards based on tier and contributions, including tokens, NFTs, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HANDBOOK BANNER ================= */}
      <section className="w-full flex justify-center px-4 md:px-10 relative z-10">
        <div className="w-full max-w-[1174px] h-auto md:h-[332px] bg-transparent flex flex-col md:flex-row items-center overflow-hidden">
          
          {/* Left Image */}
          <div className="w-full md:w-[332px] h-[250px] md:h-[332px] relative flex items-center justify-center flex-shrink-0">
            <Image src="/left-img.png" alt="Blocks" fill className="object-contain" />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-center items-start md:pl-24">
            <div className="w-full md:w-[708px] h-auto md:h-[200px] flex flex-col justify-between items-start">
              <h2 className="text-[#2196F3] text-[32px] md:text-[44px] font-bold leading-[1.2] max-w-[650px]">
                For full details on eligibility, responsibilities and rewards.
              </h2>
              <button 
                className="
                  inline-flex items-center justify-between gap-4 w-fit
                  bg-gradient-to-r from-[#1C606B] to-[#2196F3]
                  text-white text-[15px] font-medium 
                  px-6 py-3 
                  rounded-full 
                  hover:opacity-90 transition-opacity
                "
              >
                View the WayFinders Program Handbook
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Between Sections */}
      <div className="w-full max-w-[1000px] h-[1px] bg-white/10 my-[60px]"></div>

      {/* APPLICATION FORM */}
      <section className="w-full h-auto md:h-[698px] bg-gradient-to-br from-[#000D27] to-[#002F8D] px-4 md:px-10 pt-20 pb-16 flex flex-col items-center relative z-10">
        <div className="w-full max-w-[1174px]">
          <h2 className="text-[#2196F3] text-[36px] md:text-[48px] font-bold mb-12 text-center md:text-left">
            Application Form
          </h2>

          <form className="w-full flex flex-col gap-6">
            {/* Grid for inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <input type="text" placeholder="Enter Your Name" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] italic" />
              <input type="email" placeholder="Email Address" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] italic" />
              
              <input type="text" placeholder="Telegram Handles" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] italic" />
              <input type="text" placeholder="Your Social Media Handles" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] italic" />
              
              <input type="text" placeholder="Follower Count & Weekly Impressions" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] italic" />
              <input type="text" placeholder="Portfolio Links" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] italic" />
              
              <input type="text" placeholder="Provide an Idea or examples" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] italic" />
              
              {/* Custom Select / Input with Chevron */}
              <div className="relative w-full">
                <input type="text" placeholder="Preferred Tier" className="w-full bg-[#1C2C54]/30 border border-white/20 rounded-[12px] px-6 py-5 text-white placeholder-white/60 focus:outline-none focus:border-[#2196F3] font-light text-[16px] appearance-none italic cursor-pointer" readOnly />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 mt-2 px-2">
              <div className="w-[20px] h-[20px] border border-white/40 rounded-[4px] bg-transparent flex items-center justify-center cursor-pointer hover:border-white/80 transition-colors"></div>
              <span className="text-white text-[16px] font-light select-none cursor-pointer">
                I&apos;m not a robot
              </span>
            </div>

            {/* Submit Button */}
            <button 
              type="button"
              className="
                mt-6
                inline-flex items-center gap-3 w-fit
                bg-gradient-to-r from-[#1C606B] to-[#2196F3]
                text-white text-[16px] font-medium 
                px-10 py-3 
                rounded-full 
                hover:opacity-90 transition-opacity
              "
            >
              Submit
              <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
