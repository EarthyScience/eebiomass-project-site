import { isValidLocale, defaultLocale, type Locale } from '@/config/i18n'
import ContentEn from './content-en.mdx'
import ContentDe from './content-de.mdx'

const content = {
  en: ContentEn,
  de: ContentDe,
} as const

interface PageProps {
  params: Promise<{ locale?: string }>
}

export default async function DiscDataPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = raw && isValidLocale(raw) ? raw : defaultLocale
  const Page = content[locale] ?? content.en
  return <Page />
}
