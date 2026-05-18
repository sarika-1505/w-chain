import Image from "next/image";
import Link from "next/link";
import CommunityCTA from "./CommunityCTA";

const EVENTS_DATA = [
  {
    id: "1",
    image: "/Rectangle 1125.png",
    date: "October 22, 2025",
    title: "W Chain x Winity AMA \u2013 Key Updates on W Chain",
    description: "Precap- W Chain's 3rd W Builders Project Play Recording",
  },
  {
    id: "2",
    image: "/Rectangle 1125 (1).png",
    date: "October 22, 2025",
    title: "Precap- 3rd W Builders Project AMA",
    description: "W Chain x Winity Play Recording",
  },
  {
    id: "3",
    image: "/Rectangle 1125 (2).png",
    date: "October 1, 2025",
    title: "W-Access AMA \u2013 2nd W Builders Project",
    description: "ENDED \u2013 31 min W-Access \u2013 W Chain's 2nd W Builders Project Host Speakers",
  },
  {
    id: "4",
    image: "/Rectangle 1125 (3).png",
    date: "September 16, 2025",
    title: "W Builders AMA- WCO Ocean Tracker",
    description: "Catch the recording of our very first W Builders Project AMA, featuring the",
  },
  {
    id: "5",
    image: "/Rectangle 1125 (4).png",
    date: "August 21, 2025",
    title: "Binance Live AMA with Crypto Astronaut X W Chain",
    description: "Our AMA with Crypto Astronaut featured W Chain team updates, insights, and direct community",
  },
  {
    id: "6",
    image: "/Rectangle 1125 (5).png",
    date: "April 29, 2025",
    title: "Unlock the power of strategic alliances in Web3!",
    description: "Join us for the next episode of You, Me & Web3, brought to you by Uni-Fy, as we.",
  },
  {
    id: "7",
    image: "/Rectangle 1125 (6).png",
    date: "April 16, 2025",
    title: "How are you building in Web3?",
    description: "W Chain is joining an epic line up of #Web3 innovators to discuss the future of blockchain, DeFi and more!",
  },
  {
    id: "8",
    image: "/Rectangle 1125 (7).png",
    date: "April 10, 2025",
    title: "W Chain x SEA Blockchain Week 2025",
    description: "W Chain \u2013 The Future of Payments\" with a deep dive into the technology, vision, and innovation driving W Chain's",
  },
  {
    id: "9",
    image: "/Rectangle 1125 (8).png",
    date: "April 9, 2025",
    title: "Explore the future of W Chain",
    description: "W Chain \u2013 The Future of Payments\" with a deep dive into the technology, vision, and innovation driving W Chain's",
  },
  {
    id: "10",
    image: "/Rectangle 1125 (9).png",
    date: "March 27, 2025",
    title: "W Chain \u2013 The Future Of Payments",
    description: "W Chain \u2013 The Future of Payments\" with a deep dive into the technology, vision, and innovation driving W Chain's",
  },
  {
    id: "11",
    image: "/Rectangle 1125 (10).png",
    date: "December 18, 2024",
    title: "Deep Dive on W Chain",
    description: "W Chain's Leadership discusses the technical aspects of W Chain's blockchain architecture...",
  },
  {
    id: "12",
    image: "/Rectangle 1125 (11).png",
    date: "December 3, 2024",
    title: "Journey so far \u2013 Ask Me Anything",
    description: "Dive deep into the journey of W Chain, from its inception to its bright future...",
  },
];

export default function EventsAndAmas() {
  return (
    <div className="w-full bg-[#020B2D] min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px] overflow-hidden rounded-b-[50px]">
        
        {/* Background Image */}
        <Image
          src="/bg-hero.png"
          alt="Events and AMAs Background"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(1,1,1,0.8)_0%,rgba(0,0,0,0.6)_50%,rgba(0,64,136,0.85)_100%)]
          "
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mt-8">
          
          <h2 className="text-white text-[18px] md:text-[20px] font-medium mb-2">
            Events & AMA's
          </h2>
          
          <h1
            className="
              text-[42px]
              md:text-[64px]
              font-bold
              text-white
              leading-tight
            "
          >
            <span className="text-[#4EA5FF]">W Chain</span> Events & AMA's
          </h1>

          <p
            className="
              mt-4
              text-white
              text-[16px]
              md:text-[22px]
              font-medium
              max-w-[950px]
              leading-relaxed
            "
          >
            Where the Future of Blockchain Gets Built - Live Connect directly
            with W Chain's core team, developers, and community pioneers.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full py-20 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS_DATA.map((event) => (
              <div 
                key={event.id}
                className="flex flex-col rounded-[24px] border border-white/10 bg-[#07132F] overflow-hidden hover:border-[#4EA5FF]/50 transition-colors"
              >
                {/* Card Image */}
                <div className="w-full h-[220px] relative p-4 pb-0">
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[#4EA5FF] text-[15px] font-bold mb-3">
                    {event.date}
                  </p>
                  <h3 className="text-white text-[20px] font-bold mb-3 leading-tight line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed mb-6 flex-grow line-clamp-3">
                    {event.description}
                  </p>
                  
                  <Link 
                    href={`/events-and-amas/${event.id}`}
                    className="text-[#4EA5FF] italic text-[15px] font-semibold hover:text-white transition-colors mt-auto inline-block w-fit"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <CommunityCTA />
    </div>
  );
}
