import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionShell } from '../layout/SectionShell'
import { GlassCard } from '../atoms/GlassCard'
import { features, scenarios } from '../../data/content'

export const Configurator = () => {
  const { t } = useTranslation()

  return (
    <SectionShell
      id="catalog"
      headline={t('configurator.title')}
      subline={t('configurator.description')}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard accent="Realtime" headline={t('configurator.optionsTitle')}>
          <div className="grid gap-4">
            {scenarios.map((scenario) => (
              <motion.div
                key={scenario.id}
                className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/5 px-6 py-4 text-white/80 backdrop-blur-2xl"
                whileHover={{ scale: 1.01 }}
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.45em] text-white/40">
                    {scenario.accent}
                  </p>
                  <p className="text-lg font-semibold text-white">{scenario.title}</p>
                  <p className="text-sm text-white/60">{scenario.meta}</p>
                </div>
                <span className="text-white/40">↗</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
        <GlassCard accent="Pods" headline="Core сервисы" subline="GraphQL + Event Sourcing">
          <ul className="space-y-4 text-sm text-white/70">
            {features.map((feature) => (
              <li key={feature.id} className="rounded-[18px] border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.45em] text-white/40">{feature.badge}</p>
                <p className="mt-2 text-lg font-medium text-white">{feature.title}</p>
                <p className="text-white/70">{feature.body}</p>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </SectionShell>
  )
}
