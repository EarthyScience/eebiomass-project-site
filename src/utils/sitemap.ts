// Adapted from https://github.com/vercel/examples/tree/main/solutions/blog MIT License
import { getAllBlogPosts } from '@/utils/utilsBlog'
import { locales } from '@/config/i18n'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

/** Slug belongs to de if it ends with _de, else en. */
function postLocale(slug: string) {
  return slug.endsWith('_de') ? 'de' : 'en'
}

export default async function sitemap() {
  const today = new Date().toISOString().split('T')[0]
  const allPosts = getAllBlogPosts()

  const blogs = allPosts.map((post) => {
    const locale = postLocale(post.slug)
    return {
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }
  })

  const routes = locales.flatMap((locale) => [
    { url: `${baseUrl}/${locale}`, lastModified: today },
    { url: `${baseUrl}/${locale}/blog`, lastModified: today },
  ])

  return [...routes, ...blogs]
}
