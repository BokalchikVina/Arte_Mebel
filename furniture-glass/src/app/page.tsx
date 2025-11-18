import { ConfiguratorSection } from "@/components/organisms/ConfiguratorSection";
import { EcosystemSection } from "@/components/organisms/EcosystemSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ShowcaseRail } from "@/components/organisms/ShowcaseRail";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { YandexStackSection } from "@/components/organisms/YandexStackSection";
import { FooterCTA } from "@/components/layout/FooterCTA";
import { HeaderBar } from "@/components/layout/HeaderBar";

export default function Home() {
  return (
    <div className="min-h-screen w-full px-4 py-8 text-white md:px-8">
      <HeaderBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <HeroSection />
        <ShowcaseRail />
        <EcosystemSection />
        <ConfiguratorSection />
        <TestimonialsSection />
        <YandexStackSection />
        <FooterCTA />
      </main>
    </div>
  );
}
