import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type MetricBadgeProps = PropsWithChildren<{
  label: string
}>

export const MetricBadge = ({ label, children }: MetricBadgeProps) => (
  <motion.div
    className="flex flex-col rounded-[22px] border border-white/15 bg-white/5 px-5 py-4 text-white/80 backdrop-blur-xl"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
  >
    <span className="text-xs uppercase tracking-[0.45em] text-white/50">{label}</span>
    <span className="text-2xl font-semibold text-white">{children}</span>
  </motion.div>
)
