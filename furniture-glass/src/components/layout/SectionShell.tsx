import type { PropsWithChildren } from 'react'
import classNames from 'classnames'

type SectionShellProps = PropsWithChildren<{
  id?: string
  headline?: string
  subline?: string
  align?: 'left' | 'center'
}>

export const SectionShell = ({
  id,
  headline,
  subline,
  align = 'left',
  children,
}: SectionShellProps) => (
  <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-20 text-white">
    <div
      className={classNames('mb-10 space-y-3', {
        'text-center': align === 'center',
      })}
    >
      {headline && <h2 className="text-4xl font-semibold tracking-tight">{headline}</h2>}
      {subline && <p className="text-white/70">{subline}</p>}
    </div>
    <div className="relative">{children}</div>
  </section>
)
