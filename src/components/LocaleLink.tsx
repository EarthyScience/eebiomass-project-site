'use client'

import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import { isValidLocale } from '@/config/i18n'

/** Use for internal links in MDX so they are prefixed with /[locale] */
export function LocaleLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const locale = useLocale()
  const href = props.href
  if (!href || typeof href !== 'string') {
    return <a {...props} />
  }
  // External or hash: keep as-is
  if (href.startsWith('http') || href.startsWith('//') || href.startsWith('#')) {
    return <a {...props} />
  }
  // Already has a known locale prefix: use as-is
  const firstSegment = href.split('/').filter(Boolean)[0]
  if (firstSegment && isValidLocale(firstSegment)) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }
  // Internal: prefix with /{locale}
  const prefixed = href.startsWith('/') ? `/${locale}${href}` : `/${locale}/${href}`
  return (
    <Link href={prefixed} {...props}>
      {props.children}
    </Link>
  )
}
