'use client'

import { useEffect } from 'react'
import type { Locale } from '@/config/i18n'

export function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return null
}
