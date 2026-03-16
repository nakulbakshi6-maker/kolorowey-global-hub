import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Kolorowey - AdTech Unfragmented | Premium Programmatic Platform"
        description="Kolorowey is the unified infrastructure for programmatic advertising. Connect publishers, advertisers, and platforms through a single enterprise-grade platform with sub-10ms latency and 50B+ daily impressions."
        canonical="https://kolorowey.com/"
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
