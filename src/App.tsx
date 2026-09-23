/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapabilitiesStrip } from './components/CapabilitiesStrip';
import { AboutPreview } from './components/AboutPreview';
import { ServicesGrid } from './components/ServicesGrid';
import { RoboticsFeature } from './components/RoboticsFeature';
import { ProcessesGrid } from './components/ProcessesGrid';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { AutomotiveSection } from './components/AutomotiveSection';
import { WorkProcess } from './components/WorkProcess';
import { TechnologyGrid } from './components/TechnologyGrid';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08122D] text-white selection:bg-[#E42332] selection:text-white font-sans">
      {/* Sticky Header with Nav and Direct CTA */}
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      <main id="main-content">
        {/* Hero: Engineering In Motion */}
        <Hero onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Capabilities Horizontal Strip */}
        <CapabilitiesStrip />

        {/* Section 01: About Dream TM */}
        <AboutPreview />

        {/* Section 02: Services / Capabilities */}
        <ServicesGrid onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Visual Break: Industrial Robotics Statement */}
        <RoboticsFeature />

        {/* Applications / Robotic Processes */}
        <ProcessesGrid />

        {/* Section 03: Projects */}
        <ProjectsShowcase onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Automotive Specialized Industry */}
        <AutomotiveSection />

        {/* Section 04: Engineering Methodology */}
        <WorkProcess />

        {/* Technology & Standards */}
        <TechnologyGrid />

        {/* Public Google Testimonials */}
        <Testimonials />

        {/* Intermediate High-Impact CTA */}
        <CTASection onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Section 05: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 06: B2B Contact Form & Physical Location */}
        <ContactSection onOpenPrivacy={() => setPrivacyModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Modals */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        onOpenPrivacy={() => {
          setQuoteModalOpen(false);
          setPrivacyModalOpen(true);
        }}
      />
    </div>
  );
}
