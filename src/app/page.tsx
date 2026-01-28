'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { defaultLocale } from '@/config/i18n'

export default function RootPage() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}`)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 antialiased">
      <h1 className="text-2xl font-bold text-[var(--accent-1)]">eebiomass</h1>
      <p className="text-neutral-600 dark:text-neutral-400">Weiterleitung …</p>
      <Link href={`/${defaultLocale}`} className="text-[var(--accent-1)] underline">
        Weiter zur Startseite
      </Link>
    </div>
  )
}
