import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UnifiedPlatform from "@/components/UnifiedPlatform";
import SupplyDemand from "@/components/SupplyDemand";
import Environments from "@/components/Environments";
import TechStack from "@/components/TechStack";
import GlobalInfrastructure from "@/components/GlobalInfrastructure";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <UnifiedPlatform />
        <SupplyDemand />
        <Environments />
        <TechStack />
        <GlobalInfrastructure />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;