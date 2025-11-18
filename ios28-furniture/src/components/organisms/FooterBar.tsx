import { useTranslation } from '@i18n/useTranslation'
import type { TranslationKey } from '@i18n/keys'

interface ContactLink {
  id: string
  labelKey: TranslationKey
  href: string
}

interface FooterBarProps {
  rightsKey: TranslationKey
  policyKey: TranslationKey
  contacts: ReadonlyArray<ContactLink>
  policyHref?: string
}

export const FooterBar = ({
  rightsKey,
  policyKey,
  contacts,
  policyHref = 'https://tailorglass.ru/policy',
}: FooterBarProps) => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <span>{t(rightsKey)}</span>
      <a href={policyHref} target="_blank" rel="noreferrer">
        {t(policyKey)}
      </a>
      <div>
        {contacts.map((contact) => (
          <a key={contact.id} href={contact.href}>
            {t(contact.labelKey)}
          </a>
        ))}
      </div>
    </footer>
  )
}
