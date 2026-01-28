import Link from 'next/link'
import { locales } from '@/config/i18n'

const labels: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
}

export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 antialiased">
      <h1 className="text-2xl font-bold text-[var(--accent-1)]">eebiomass</h1>
      <p className="text-neutral-600 dark:text-neutral-400">Choose your language / Wählen Sie Ihre Sprache</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}`}
            className="px-6 py-3 rounded-lg bg-[var(--accent-1)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            {labels[locale] ?? locale}
          </Link>
        ))}
      </div>
    </div>
  )
}
