import { useMemo } from 'react'

import { siteContent } from '@content/structure'
import { useContinuityMotion } from '@hooks/useContinuityMotion'
import { HeroSection } from '@organisms/HeroSection'
import { FeatureOrbit } from '@organisms/FeatureOrbit'
import { ConfiguratorSection } from '@organisms/ConfiguratorSection'
import { ShowcaseSection } from '@organisms/ShowcaseSection'
import { TestimonialsSection } from '@organisms/TestimonialsSection'
import { ProcessTimeline } from '@organisms/ProcessTimeline'
import { CTASection } from '@organisms/CTASection'
import { FooterBar } from '@organisms/FooterBar'

function App() {
  useContinuityMotion()

  const content = useMemo(() => siteContent, [])

  return (
    <div className="app-shell">
      <HeroSection
        metrics={content.hero.metrics}
        navigation={content.navigation}
        adsSlotId={content.ads.slotId}
        adsLabelKey={content.ads.labelKey}
      />
      <FeatureOrbit
        headingKey={content.features.headingKey}
        captionKey={content.features.captionKey}
        cards={content.features.cards}
      />
      <ConfiguratorSection
        headingKey={content.configurator.headingKey}
        captionKey={content.configurator.captionKey}
        steps={content.configurator.steps}
      />
      <ShowcaseSection
        headingKey={content.showcase.headingKey}
        captionKey={content.showcase.captionKey}
        scenes={content.showcase.scenes}
      />
      <TestimonialsSection
        headingKey={content.testimonials.headingKey}
        captionKey={content.testimonials.captionKey}
        cards={content.testimonials.cards}
      />
      <ProcessTimeline
        headingKey={content.process.headingKey}
        captionKey={content.process.captionKey}
        stages={content.process.stages}
      />
      <CTASection
        headingKey={content.cta.headingKey}
        captionKey={content.cta.captionKey}
        buttonKey={content.cta.buttonKey}
      />
      <FooterBar
        rightsKey={content.footer.rightsKey}
        policyKey={content.footer.policyKey}
        contacts={content.footer.contacts}
      />
    </div>
  )
}

export default App
