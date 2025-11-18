import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GlassButton } from '../atoms/GlassButton'
import { MetricBadge } from '../molecules/MetricBadge'
import { ContinuityBar } from '../atoms/ContinuityBar'
import { useAmbientMotion } from '../../hooks/useAmbientMotion'

export const Hero = () => {
  const { t } = useTranslation()
  const tilt = useAmbientMotion()

  return (
    <header className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-12 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 rounded-[60px] border border-white/5 bg-white/[0.02] blur-3xl" />
      </div>
      <ContinuityBar />
      <motion.div
        className="rounded-[46px] border border-white/12 bg-[rgba(10,13,25,0.65)] p-10 shadow-[0_60px_120px_rgba(2,6,23,0.45)] backdrop-blur-[52px]"
        style={{ transform: `rotateX(${tilt.y / 8}deg) rotateY(${tilt.x / 12}deg)` }}
      >
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">{t('hero.badge')}</p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">{t('hero.description')}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <GlassButton
            labelKey="hero.ctaPrimary"
            analyticsGoal="launch_configurator"
            className="bg-gradient-to-r from-[#c9f4ff45] to-[#e3b2ff45]"
          />
          <GlassButton
            labelKey="hero.ctaSecondary"
            variant="secondary"
            analyticsGoal="designer_sync"
          />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <MetricBadge label={t('hero.metricLead')}>accelerated launch</MetricBadge>
          <MetricBadge label={t('hero.metricRetention')}>continuity flow</MetricBadge>
        </div>
      </motion.div>
    </header>
  )
}
