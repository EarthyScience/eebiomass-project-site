import { isValidLocale, defaultLocale, type Locale, locales } from '@/config/i18n'
import LandingEn from './landing-en.mdx'
import LandingDe from './landing-de.mdx'

const landing = {
  en: LandingEn,
  de: LandingDe,
} as const

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return (locales as readonly string[]).map((locale) => ({ locale }))
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isValidLocale(raw) ? raw : defaultLocale
  const Page = landing[locale] ?? landing[defaultLocale]
  return <Page />
}
