import Hero from "@/components/Hero";
import CommerceSection from "@/components/Commercial";
import Ecosystem from "@/components/EcoSystem";
import CTA from "@/components/CTA";
import PoSSection from "@/components/PoSSection";
import HowWChainWorks from "@/components/HowWChainWorks";
import EcosystemSection from "@/components/EcosystemSection";
import NativeCoinSection from "@/components/NativeCoinSection";
import NewsPressSection from "@/components/NewsPressSection";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <CommerceSection />
      <PoSSection />
      <HowWChainWorks />
      <EcosystemSection />
      <NativeCoinSection />
      <NewsPressSection />
      <Ecosystem />
      <CTA />
    </main>
  );
}
