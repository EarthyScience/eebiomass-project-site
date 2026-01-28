'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/config/i18n'

const labels: Record<Locale, string> = { de: 'DE', en: 'EN' }
const titles: Record<Locale, string> = { de: 'Deutsch', en: 'English' }

export default function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname() ?? ''

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Language">
      {locales.map((loc, i) => {
        const href = pathname.replace(/^\/(en|de)(\/|$)/, `/${loc}$2`)
        const isActive = loc === currentLocale
        return (
          <span key={loc} className="inline-flex items-center">
            {i > 0 && (
              <span className="text-[var(--secondary-link-color)] select-none px-0.5" aria-hidden>
                |
              </span>
            )}
            {isActive ? (
              <span
                className="px-2 py-1 text-sm font-semibold text-[var(--accent-1)] rounded"
                aria-current="true"
              >
                {labels[loc]}
              </span>
            ) : (
              <Link
                href={href}
                title={titles[loc]}
                className="px-2 py-1 text-sm text-[var(--secondary-link-color)] hover:text-[var(--link-hover)] rounded transition-colors"
              >
                {labels[loc]}
              </Link>
            )}
          </span>
        )
      })}
    </div>
  )
}
