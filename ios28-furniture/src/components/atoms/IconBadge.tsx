import type { ReactElement } from 'react'

import type { IconId } from '@content/structure'

const iconMap: Record<IconId, ReactElement> = {
  lidar: (
    <path
      d="M4 8h16M8 4v16M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  continuity: (
    <path
      d="M6 12c0-3.314 2.239-6 5-6s5 2.686 5 6-2.239 6-5 6-5-2.686-5-6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
    />
  ),
  materials: (
    <path
      d="M6 9.5 12 6l6 3.5v5L12 18l-6-3.5v-5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
    />
  ),
  timeline: (
    <path
      d="M6 12h12M12 6v6l3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  shield: (
    <path
      d="M12 6 6.5 8v4c0 3.5 2.5 6.5 5.5 8 3-1.5 5.5-4.5 5.5-8V8L12 6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  play: (
    <path
      d="M9.5 8.5v7l5.5-3.5-5.5-3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinejoin="round"
    />
  ),
}

interface IconBadgeProps {
  icon: IconId
  tone?: 'default' | 'glow'
}

export const IconBadge = ({ icon, tone = 'default' }: IconBadgeProps) => {
  const gradient =
    tone === 'glow'
      ? 'linear-gradient(135deg, rgba(127,140,255,0.2), rgba(122,231,255,0.12))'
      : 'rgba(255,255,255,0.08)'

  return (
    <span
      className="icon-badge"
      style={{
        background: gradient,
      }}
      aria-hidden="true"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {iconMap[icon]}
      </svg>
    </span>
  )
}
