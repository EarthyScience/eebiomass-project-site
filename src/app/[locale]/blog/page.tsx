import { BlogPosts } from '@/components/posts'
import { isValidLocale, defaultLocale, type Locale } from '@/config/i18n'

export const metadata = {
  title: 'Posts',
  description: 'Read my posts.',
}

interface PageProps {
  params: Promise<{ locale?: string }>
}

export default async function Page({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = raw && isValidLocale(raw) ? raw : defaultLocale
  return (
    <section>
      <p></p>
      <h1 className="max-w-6xl mx-auto px-6 mt-8 py-12 font-bold text-3xl text-center tracking-tighter text-[var(--accent-1)]">NEWS</h1>
      <BlogPosts locale={locale} />
    </section>
  )
}
