/**
 * @fileoverview Portfolio Page
 * @version 2.0.0
 */

import { Navigation } from '@/components/molecules/Navigation';
import { PortfolioSection } from '@/components/organisms/PortfolioSection';
import { Footer } from '@/components/organisms/Footer';

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen page-enter">
      <Navigation />
      <div className="pt-20">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  );
}
