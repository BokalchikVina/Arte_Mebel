/**
 * @fileoverview Home Page - Portfolio Style
 * @version 2.0.0
 */

import { Navigation } from '@/components/molecules/Navigation';
import { Hero } from '@/components/molecules/Hero';
import { PortfolioSection } from '@/components/organisms/PortfolioSection';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ContactsSection } from '@/components/organisms/ContactsSection';
import { Footer } from '@/components/organisms/Footer';
import { AnimatedBackground } from '@/components/organisms/AnimatedBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </main>
  );
}
