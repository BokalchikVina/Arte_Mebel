import type { PropsWithChildren } from 'react'
import classNames from 'classnames'

export type GlassCardProps = PropsWithChildren<{
  headline?: string
  subline?: string
  accent?: string
  className?: string
}>

export const GlassCard = ({ headline, subline, accent, className, children }: GlassCardProps) => (
  <article
    className={classNames(
      'relative overflow-hidden rounded-[28px] border border-white/12 bg-[rgba(9,12,25,0.7)] p-6 text-white shadow-[0_25px_65px_rgba(2,6,23,0.55)] backdrop-blur-3xl',
      className,
    )}
  >
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-px rounded-[26px] border border-white/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent" />
    </div>
    <div className="relative space-y-2">
      {accent && <p className="text-xs uppercase tracking-[0.35em] text-white/40">{accent}</p>}
      {headline && <h3 className="text-xl font-semibold text-white">{headline}</h3>}
      {subline && <p className="text-sm text-white/70">{subline}</p>}
    </div>
    <div className="relative mt-4">{children}</div>
  </article>
)
