import { isValidLocale, defaultLocale, type Locale } from '@/config/i18n'
import AboutEn from './about-en.mdx'
import AboutDe from './about-de.mdx'

const content = {
  en: AboutEn,
  de: AboutDe,
} as const

interface PageProps {
  params: Promise<{ locale?: string }>
}

export default async function ProjectAboutPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isValidLocale(raw) ? raw : defaultLocale
  const Page = content[locale] ?? content.en
  return <Page />
}
