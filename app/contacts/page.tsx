/**
 * @fileoverview Contacts Page
 * @version 2.0.0
 */

import { Navigation } from '@/components/molecules/Navigation';
import { ContactsSection } from '@/components/organisms/ContactsSection';
import { Footer } from '@/components/organisms/Footer';

export default function ContactsPage() {
  return (
    <main className="relative min-h-screen page-enter">
      <Navigation />
      <div className="pt-20">
        <ContactsSection />
      </div>
      <Footer />
    </main>
  );
}
