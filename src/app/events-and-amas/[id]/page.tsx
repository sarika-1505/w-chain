import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CommunityCTA from "@/components/CommunityCTA";

const EVENTS_DATA = [
  {
    id: "1",
    image: "/Rectangle 1125.png",
    date: "October 22, 2025",
    title: "W Chain x Winity AMA \u2013 Key Updates on W Chain",
    description: "Precap- W Chain's 3rd W Builders Project Play Recording",
    content: "This is a detailed summary of the AMA. W Chain and Winity joined forces to provide key updates on the ecosystem, specifically focusing on the 3rd W Builders Project. The session covered upcoming milestones, technical architecture enhancements, and ways for the community to get involved.",
  },
  {
    id: "2",
    image: "/Rectangle 1125 (1).png",
    date: "October 22, 2025",
    title: "Precap- 3rd W Builders Project AMA",
    description: "W Chain x Winity Play Recording",
    content: "Recording of the 3rd W Builders Project AMA featuring exclusive insights into the project's development. Our developers shared their experiences and the challenges they've overcome while building on W Chain.",
  },
  {
    id: "3",
    image: "/Rectangle 1125 (2).png",
    date: "October 1, 2025",
    title: "W-Access AMA \u2013 2nd W Builders Project",
    description: "ENDED \u2013 31 min W-Access \u2013 W Chain's 2nd W Builders Project Host Speakers",
    content: "The 2nd W Builders Project AMA featured the founders of W-Access. The 31-minute session focused on improving accessibility within the blockchain space and how W-Access plans to integrate with W Chain's native infrastructure.",
  },
  {
    id: "4",
    image: "/Rectangle 1125 (3).png",
    date: "September 16, 2025",
    title: "W Builders AMA- WCO Ocean Tracker",
    description: "Catch the recording of our very first W Builders Project AMA, featuring the",
    content: "Our very first W Builders Project AMA highlighted the WCO Ocean Tracker. The team discussed their mission to bring transparency to ocean conservation efforts using blockchain technology.",
  },
  {
    id: "5",
    image: "/Rectangle 1125 (4).png",
    date: "August 21, 2025",
    title: "Binance Live AMA with Crypto Astronaut X W Chain",
    description: "Our AMA with Crypto Astronaut featured W Chain team updates, insights, and direct community",
    content: "Hosted on Binance Live, this AMA featured Crypto Astronaut interviewing the W Chain leadership team. Topics ranged from core protocol updates to upcoming strategic partnerships.",
  },
  {
    id: "6",
    image: "/Rectangle 1125 (5).png",
    date: "April 29, 2025",
    title: "Unlock the power of strategic alliances in Web3!",
    description: "Join us for the next episode of You, Me & Web3, brought to you by Uni-Fy, as we.",
    content: "Strategic alliances are key to Web3 growth. In this episode of You, Me & Web3, experts from Uni-Fy discussed the importance of interoperability and cross-chain collaborations.",
  },
  {
    id: "7",
    image: "/Rectangle 1125 (6).png",
    date: "April 16, 2025",
    title: "How are you building in Web3?",
    description: "W Chain is joining an epic line up of #Web3 innovators to discuss the future of blockchain, DeFi and more!",
    content: "W Chain participated in an epic panel of Web3 innovators to discuss the current landscape of decentralized finance, infrastructure scaling, and what the future holds for the industry.",
  },
  {
    id: "8",
    image: "/Rectangle 1125 (7).png",
    date: "April 10, 2025",
    title: "W Chain x SEA Blockchain Week 2025",
    description: "W Chain \u2013 The Future of Payments\" with a deep dive into the technology, vision, and innovation driving W Chain's",
    content: "At SEA Blockchain Week 2025, W Chain delivered a keynote presentation on 'The Future of Payments'. The presentation covered how our technology is reducing transaction costs and increasing throughput for global payments.",
  },
  {
    id: "9",
    image: "/Rectangle 1125 (8).png",
    date: "April 9, 2025",
    title: "Explore the future of W Chain",
    description: "W Chain \u2013 The Future of Payments\" with a deep dive into the technology, vision, and innovation driving W Chain's",
    content: "A deep dive into the technology, vision, and innovation driving W Chain. Our lead engineers took the stage to answer technical questions and present our roadmap for the next 12 months.",
  },
  {
    id: "10",
    image: "/Rectangle 1125 (9).png",
    date: "March 27, 2025",
    title: "W Chain \u2013 The Future Of Payments",
    description: "W Chain \u2013 The Future of Payments\" with a deep dive into the technology, vision, and innovation driving W Chain's",
    content: "The Future of Payments session provided insights into how blockchain technology is transforming traditional finance. We explored real-world use cases of W Chain in the enterprise sector.",
  },
  {
    id: "11",
    image: "/Rectangle 1125 (10).png",
    date: "December 18, 2024",
    title: "Deep Dive on W Chain",
    description: "W Chain's Leadership discusses the technical aspects of W Chain's blockchain architecture...",
    content: "W Chain's leadership team discussed the core technical aspects of our blockchain architecture, explaining the consensus mechanism, security model, and scalability solutions in depth.",
  },
  {
    id: "12",
    image: "/Rectangle 1125 (11).png",
    date: "December 3, 2024",
    title: "Journey so far \u2013 Ask Me Anything",
    description: "Dive deep into the journey of W Chain, from its inception to its bright future...",
    content: "An intimate AMA looking back at the journey of W Chain from inception to today. The founders shared stories of early challenges, pivotal moments, and their vision for a decentralized future.",
  },
];

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = EVENTS_DATA.find((e) => e.id === params.id) || EVENTS_DATA[0];

  return (
    <main className="min-h-screen bg-[#020B2D] flex flex-col">
      <Header />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-b-[50px] mt-20">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <div className="relative z-10 max-w-[900px] mx-auto h-full flex flex-col justify-center px-6">
          <Link 
            href="/events-and-amas"
            className="text-[#4EA5FF] flex items-center gap-2 mb-6 hover:text-white transition-colors w-fit"
          >
            ← Back to Events
          </Link>
          <span className="text-[#4EA5FF] font-medium mb-3">{event.date}</span>
          <h1 className="text-white text-[32px] md:text-[54px] font-bold leading-tight mb-4">
            {event.title}
          </h1>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full py-16 px-6 md:px-10 flex-grow">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 text-[20px] leading-relaxed mb-8 font-light">
              {event.description}
            </p>
            
            <div className="w-full h-[1px] bg-white/10 my-8"></div>
            
            <div className="text-white text-[18px] leading-[1.8] space-y-6">
              <p>{event.content}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= CTA SECTION ================= */}
      <div className="pb-10 pt-10">
        <CommunityCTA />
      </div>

      <Footer />
    </main>
  );
}
