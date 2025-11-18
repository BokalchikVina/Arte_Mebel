/**
 * @fileoverview About Page
 * @version 2.0.0
 */

import { Navigation } from '@/components/molecules/Navigation';
import { AboutSection } from '@/components/organisms/AboutSection';
import { Footer } from '@/components/organisms/Footer';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen page-enter">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
