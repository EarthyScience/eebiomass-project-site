export const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isValidLocale(s: string): s is Locale {
  return locales.includes(s as Locale)
}
