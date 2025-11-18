import { useEffect } from 'react'
import { NavBar } from './components/molecules/NavBar'
import { Hero } from './components/organisms/Hero'
import { Configurator } from './components/organisms/Configurator'
import { Testimonials } from './components/organisms/Testimonials'
import { LaunchCTA } from './components/organisms/LaunchCTA'
import { initYandexMetrica } from './analytics/yandex'
import { useTranslation } from 'react-i18next'

const YANDEX_COUNTER_ID = 12345678

const App = () => {
  const { t } = useTranslation()

  useEffect(() => {
    initYandexMetrica({ counterId: YANDEX_COUNTER_ID })
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04060d]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(104,214,255,0.15),transparent_45%),radial-gradient(circle_at_80%_0,rgba(240,144,255,0.12),transparent_45%)]" />
      <div className="relative flex min-h-screen flex-col gap-12 pb-16">
        <NavBar />
        <Hero />
        <Configurator />
        <Testimonials />
        <LaunchCTA />
        <footer className="mx-auto w-full max-w-6xl px-6 text-xs uppercase tracking-[0.3em] text-white/40">
          <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 py-6">
            <span>{t('footer.rights')}</span>
            <div className="flex gap-4">
              <a href="/privacy">{t('footer.privacy')}</a>
              <a href="/offer">{t('footer.contracts')}</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
