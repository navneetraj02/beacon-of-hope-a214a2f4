import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/chat/AIChatbot";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ImpactPreview } from "@/components/home/ImpactPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Beacon of Blessings | Helping Hands, Healing Hearts</title>
        <meta
          name="description"
          content="Beacon of Blessings Charity Initiative shares the love of Jesus Christ through practical compassion—supporting children, widows, orphans, and young girls across Nigeria."
        />
        <meta name="keywords" content="charity, Nigeria, children, widows, orphans, education support, community outreach" />
      </Helmet>

      <Navigation />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ImpactPreview />
        <CTASection />
      </main>

      <Footer />
      <AIChatbot />
    </>
  );
};

export default Index;
