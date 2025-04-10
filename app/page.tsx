import AnalyticsCTASection from "@/components/analytics";
import FeatureCards from "@/components/featureCard";
import Features from "@/components/features";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
   <div className="bg-[#0B0121]" >
    <HeroSection/>
    <Features/>
    <FeatureCards/>
    <AnalyticsCTASection/>
   </div>
  );
}
