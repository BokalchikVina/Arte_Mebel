import { useCallback } from 'react'

import type { Locale, TranslationKey } from './keys'
import { defaultLocale, dictionaries } from './dictionaries'

export const translate = (
  key: TranslationKey,
  locale: Locale = defaultLocale,
): string => dictionaries[locale][key] ?? key

export const useTranslation = (locale: Locale = defaultLocale) => {
  const dictionary = dictionaries[locale]

  const t = useCallback(
    (key: TranslationKey) => dictionary[key] ?? key,
    [dictionary],
  )

  return { t, locale }
}
