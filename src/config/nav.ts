import type { Locale } from './i18n'
import { defaultLocale } from './i18n'

type NavItem = {
  text: string
  link?: string
  description?: string
  items?: NavItem[]
  featured?: { logo: string; name: string; description?: string }
  isHome?: boolean
  name?: string
}

type NavFooterItem = { text: string; link: string }

// English
const navigationEn: NavItem[] = [
  {
    text: 'DE:Project Office',
    link: '/project',
    featured: { logo: '/Logo3.png', name: 'German Project Office BIOMASS', description: '' },
    items: [
      { text: 'About', link: '/project/about', description: 'Learn more about the project, its goals, and its impact.' },
      { text: 'Team', link: '/project/team', description: 'Meet the team behind the project, their roles, and contributions.' },
      { text: 'Work packages', link: '/project/wps', description: 'Explore the project\'s core work packages, objectives, and scientific approach.' },
      { text: 'Publications', link: '/project/publications', description: 'Access our latest research papers, reports, and articles.' },
    ],
  },
  {
    text: 'DE:CalVal',
    link: '/decalval/',
    featured: { logo: '/decalval_logo_small.png', name: 'German Contribution to the BIOMASS Cal/Val Activities' },
    items: [
      { text: 'About', link: '/decalval/about', description: 'Learn more about the project, its goals, and its impact.' },
      { text: 'Team', link: '/decalval/team', description: 'Meet the team behind the project, their roles, and contributions.' },
      // { text: 'Work packages', link: '/decalval/wps', description: 'Learn more about the key activities, methods, and contributions that drive the project forward.' },
    ],
  },
  {
    text: 'BIOMASS Mission',
    link: '/biomass',
    items: [
      { text: 'About', link: '/biomass/about', description: 'Learn more about Earth Explorer BIOMASS.' },
      { text: 'Earth Explorers', link: '/biomass/earthexplorer', description: 'Find out more about ESA Earth Explorers and International missions.' },
      { text: 'DISC & Data', link: '/biomass/disc&data', description: 'Learn about the Data Innovation and Science Cluster and open access data products.' },
    ],
  },
  { text: 'News', link: '/blog' },
  {
    text: 'Events',
    link: '/events',
    items: [
      { text: 'Webinar Series', link: '/events/webinar', description: 'Access our latest research papers, reports, and articles.' },
      { text: 'Summer Schools', link: '/events/summerschool', description: 'Access our latest research papers, reports, and articles.' },
      { text: 'PolInSAR course', link: '/events/polinsar', description: 'Access our latest research papers, reports, and articles.' },
    ],
  },
  {
    text: 'Resources',
    items: [
      { text: 'Further Reading', link: '/resources/publications', description: 'Access latest research papers, reports, and articles.' },
      { text: 'Related Missions and Projects', link: '/resources/relatedmissions', description: 'Find out about missions and projects related to biomass.' },
      { text: 'Teaching & Data & Tools', link: '/resources/tools-data', description: 'Utilize our tools and datasets to support your work and research.' },
      { text: 'Newsletter', link: '/resources/newsletter', description: 'Subscribe to our eebiomass newsletter.' },
    ],
  },
  { text: 'Contact', link: '/contact' },
]

// German (placeholder labels; replace with proper translations as needed)
const navigationDe: NavItem[] = [
  {
    text: 'DE:Projektbüro',
    link: '/project',
    featured: { logo: '/Logo3.png', name: 'Deutsches Projektbüro BIOMASS', description: '' },
    items: [
      { text: 'Über uns', link: '/project/about', description: 'Erfahren Sie mehr über das Projektbüro, seine Ziele und Angebote.' },
      { text: 'Team', link: '/project/team', description: 'Lernen Sie das Team und seine Beiträge kennen.' },
      { text: 'Arbeitspakete', link: '/project/wps', description: 'Die Arbeitspakete, Ziele und der wissenschaftliche Ansatz.' },
      { text: 'Publikationen', link: '/project/publications', description: 'Aktuelle Forschungsarbeiten, Berichte und Artikel.' },
    ],
  },
  {
    text: 'DE:CalVal',
    link: '/decalval/',
    featured: { logo: '/decalval_logo_small.png', name: 'Deutscher Beitrag zu den BIOMASS Cal/Val-Aktivitäten' },
    items: [
      { text: 'Über uns', link: '/decalval/about', description: 'Erfahren Sie mehr über das Projekt.' },
      { text: 'Team', link: '/decalval/team', description: 'Lernen Sie das Team kennen.' },
     // { text: 'Arbeitspakete', link: '/decalval/wps', description: 'Schlüsselaktivitäten und Methoden.' },
    ],
  },
  {
    text: 'BIOMASS-Mission',
    link: '/biomass',
    items: [
      { text: 'Über die Mission', link: '/biomass/about', description: 'Earth Explorer BIOMASS.' },
      { text: 'Earth Explorers', link: '/biomass/earthexplorer', description: 'ESA Earth Explorer und internationale Missionen.' },
      { text: 'DISC & Daten', link: '/biomass/disc&data', description: 'Data Innovation and Science Cluster und OPEN DATA.' },
    ],
  },
  { text: 'Aktuelles', link: '/blog' },
  {
    text: 'Veranstaltungen',
    link: '/events',
    items: [
      { text: 'Webinar-Reihe', link: '/events/webinar', description: 'Vorträge und Diskussionen.' },
      { text: 'Sommerschulen', link: '/events/summerschool', description: 'Sommerschulen zur BIOMASS-Mission.' },
      { text: 'PolInSAR-Kurs', link: '/events/polinsar', description: 'DLR PolInSAR-Kurse.' },
    ],
  },
  {
    text: 'Ressourcen',
    items: [
      { text: 'Weiterführende Literatur', link: '/resources/publications', description: 'Forschungsarbeiten und Artikel.' },
      { text: 'Verwandte Missionen', link: '/resources/relatedmissions', description: 'Missionen und Projekte zu Biomasse.' },
      { text: 'Lehre, Daten & Werkzeuge', link: '/resources/tools-data', description: 'Werkzeuge und Datensätze.' },
      { text: 'Newsletter', link: '/resources/newsletter', description: 'eebiomass-Newsletter.' },
    ],
  },
  { text: 'Kontakt', link: '/contact' },
]

const navFooterEn: NavFooterItem[] = [
  { text: 'Imprint', link: '/terms/imprint' },
  { text: 'Privacy Policy', link: '/terms/privacy' },
]

const navFooterDe: NavFooterItem[] = [
  { text: 'Impressum', link: '/terms/imprint' },
  { text: 'Datenschutz', link: '/terms/privacy' },
]

// Helpers to prefix links with /[locale]
function prefixLink(link: string, locale: Locale): string {
  if (!link || !link.startsWith('/')) return link
  return `/${locale}${link}`
}

function prefixNavItem(item: NavItem, locale: Locale): NavItem {
  const { link, items, ...rest } = item
  return {
    ...rest,
    ...(link != null && { link: prefixLink(link, locale) }),
    ...(items?.length && { items: items.map((i) => prefixNavItem(i, locale)) }),
  }
}

function prefixFooterItem({ link, text }: NavFooterItem, locale: Locale): NavFooterItem {
  return { text, link: prefixLink(link, locale) }
}

export const navigation: Record<Locale, NavItem[]> = {
  en: navigationEn,
  de: navigationDe,
}

export const navFooter: Record<Locale, NavFooterItem[]> = {
  en: navFooterEn,
  de: navFooterDe,
}

/** Returns navigation with all links prefixed by /[locale]. Use in Menu. */
export function getNavigation(locale: Locale): NavItem[] {
  const nav = navigation[locale] ?? navigation[defaultLocale]
  return nav.map((item) => prefixNavItem(item, locale))
}

/** Returns footer links with all links prefixed by /[locale]. Use in Footer. */
export function getNavFooter(locale: Locale): NavFooterItem[] {
  const links = navFooter[locale] ?? navFooter[defaultLocale]
  return links.map((l) => prefixFooterItem(l, locale))
}
