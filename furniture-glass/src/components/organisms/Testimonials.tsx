import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionShell } from '../layout/SectionShell'
import { testimonials } from '../../data/content'

export const Testimonials = () => {
  const { t } = useTranslation()

  return (
    <SectionShell
      id='cases'
      headline={t('testimonials.title')}
      subline={t('testimonials.subtitle')}
      align='center'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.id}
            className='rounded-[30px] border border-white/10 bg-[rgba(10,13,25,0.65)] p-8 text-white/80 shadow-[0_40px_80px_rgba(0,0,0,0.35)] backdrop-blur-3xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className='text-lg leading-relaxed text-white'>{`“${testimonial.quote}”`}</p>
            <div className='mt-6 text-sm text-white/60'>
              <p className='font-semibold text-white'>{testimonial.author}</p>
              <p>{testimonial.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
