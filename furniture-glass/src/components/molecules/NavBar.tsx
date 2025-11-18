import { useTranslation } from 'react-i18next'
import { GlassButton } from '../atoms/GlassButton'
import { motion } from 'framer-motion'

const navItems: Array<{ key: string; href: string }> = [
  { key: 'nav.studio', href: '#studio' },
  { key: 'nav.catalog', href: '#catalog' },
  { key: 'nav.cases', href: '#cases' },
  { key: 'nav.analytics', href: '#analytics' },
]

export const NavBar = () => {
  const { t } = useTranslation()

  return (
    <motion.nav
      className="sticky top-0 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-[32px] border border-white/10 bg-[rgba(3,5,10,0.72)] px-6 py-4 text-sm text-white shadow-[0_30px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3">
        <span className="text-base font-semibold tracking-[0.3em] text-white/80">ATELIER</span>
        <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/50">
          IOS28
        </span>
      </div>
      <div className="hidden gap-6 text-white/70 md:flex">
        {navItems.map((item) => (
          <a key={item.key} href={item.href} className="transition hover:text-white">
            {t(item.key)}
          </a>
        ))}
      </div>
      <GlassButton labelKey="hero.ctaSecondary" variant="secondary" analyticsGoal="nav_sync" />
    </motion.nav>
  )
}
