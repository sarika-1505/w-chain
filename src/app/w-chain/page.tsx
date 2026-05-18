import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WChainTokenomics from "@/components/WChainTokenomics";
import CTA from "@/components/CTA";

export default function WChainTokenomicsPage() {
  return (
    <main className="min-h-screen bg-[#020B2D] flex flex-col items-center overflow-x-clip">
      <WChainTokenomics />
    </main>
  );
}
