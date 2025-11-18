export type GlassToken = {
  radius: {
    full: string
    xl: string
    lg: string
    md: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  typography: {
    display: string
    headline: string
    body: string
    caption: string
  }
  layer: {
    card: string
    panel: string
    badge: string
  }
}

export const glassTokens: GlassToken = {
  radius: {
    full: '30px',
    xl: '24px',
    lg: '18px',
    md: '14px',
  },
  spacing: {
    xs: '6px',
    sm: '12px',
    md: '20px',
    lg: '32px',
    xl: '48px',
  },
  typography: {
    display: 'clamp(36px, 6vw, 74px)',
    headline: 'clamp(24px, 3vw, 38px)',
    body: 'clamp(16px, 1.2vw, 20px)',
    caption: '13px',
  },
  layer: {
    card: 'linear-gradient(180deg, rgba(13,17,30,0.78) 0%, rgba(7,9,17,0.95) 100%)',
    panel:
      'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(86,97,124,0.12) 45%, rgba(17,22,40,0.85) 100%)',
    badge:
      'linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(92,244,255,0.35) 100%)',
  },
}

export const motionPreset = {
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  hover: { scale: 1.015, y: -2, transition: { duration: 0.4 } },
}
