import { LocaleProvider } from '@/contexts/LocaleContext'
import { SetHtmlLang } from '@/components/SetHtmlLang'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import { locales, isValidLocale, defaultLocale, type Locale } from '@/config/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const locale: Locale = isValidLocale(raw) ? raw : defaultLocale

  return (
    <LocaleProvider locale={locale}>
      <SetHtmlLang locale={locale} />
      <Menu locale={locale} />
      {children}
      <Footer locale={locale} />
    </LocaleProvider>
  )
}
