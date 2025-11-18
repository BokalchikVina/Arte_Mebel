/**
 * @fileoverview Home Page
 * @version 1.0.0
 */

import { Navigation } from '@/components/molecules/Navigation';
import { Hero } from '@/components/molecules/Hero';
import { CatalogSection } from '@/components/organisms/CatalogSection';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ContactsSection } from '@/components/organisms/ContactsSection';
import { Footer } from '@/components/organisms/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <CatalogSection />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </main>
  );
}
