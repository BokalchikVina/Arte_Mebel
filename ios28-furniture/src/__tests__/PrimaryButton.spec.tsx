import '@testing-library/jest-dom/vitest'

import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { PrimaryButton } from '@atoms/PrimaryButton'
import { i18nKeys } from '@i18n/keys'
import { trackYandexGoal } from '@services/yandex'

vi.mock('@services/yandex', () => ({
  trackYandexGoal: vi.fn(),
}))

describe('PrimaryButton', () => {

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders as anchor when href provided (edge case: external CTA)', () => {
    render(
      <PrimaryButton
        labelKey={i18nKeys.cta.button}
        href="https://example.com"
        target="_blank"
      />,
    )

    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('href', 'https://example.com')
  })

  it('skips analytics when disabled (edge case: throttled CTA)', () => {
    render(
      <PrimaryButton
        labelKey={i18nKeys.cta.button}
        analyticsGoal="test-goal"
        disabled
      />,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(trackYandexGoal).not.toHaveBeenCalled()
  })

  it('fires analytics exactly once per click (edge case: rapid double tap)', () => {
    render(
      <PrimaryButton
        labelKey={i18nKeys.cta.button}
        analyticsGoal="test-goal"
      />,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(trackYandexGoal).toHaveBeenCalledTimes(1)
  })
})
