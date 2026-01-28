import { isValidLocale, defaultLocale, type Locale } from '@/config/i18n'
import LandingEn from './landing-en.mdx'
import LandingDe from './landing-de.mdx'

const landing = {
  en: LandingEn,
  de: LandingDe,
} as const

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isValidLocale(raw) ? raw : defaultLocale
  const Page = landing[locale] ?? landing.en
  return <Page />
}
