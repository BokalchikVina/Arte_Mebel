import { motion } from 'framer-motion'
import { motionPreset } from '../../design/tokens'

export const ContinuityBar = () => (
  <motion.div
    className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/60 backdrop-blur-3xl"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ...motionPreset.transition, ease: [0.16, 1, 0.3, 1] as const }}
  >
    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#8cd4ff] to-[#f7b7ff]" />
    Continuity
  </motion.div>
)
