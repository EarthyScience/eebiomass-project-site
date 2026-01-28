'use client'

import React, { createContext, useContext } from 'react'
import type { Locale } from '@/config/i18n'

const LocaleContext = createContext<Locale | null>(null)

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): Locale {
  const locale = useContext(LocaleContext)
  if (!locale) {
    // Fallback when outside [locale] (e.g. root / page)
    return 'en'
  }
  return locale
}
