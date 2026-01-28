// Adapted from https://github.com/vercel/examples/tree/main/solutions/blog MIT License
import Link from 'next/link'
import Image from "next/image";
import { formatDate, getBlogPosts } from '@/utils/utilsBlog'
import type { Locale } from '@/config/i18n'

export function BlogPosts({ locale }: { locale: Locale }) {
  const allBlogs = getBlogPosts(locale)

  return (
    <div className='max-w-6xl mx-auto px-6 py-2 space-y-8'>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-1"
            href={`/${locale}/blog/${post.slug}`}>
              
            <article className="flex flex-col md:flex-row gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-6">
              
              {/* Image (left) */}
              {post.metadata.image1 && (
                  <div className="flex-shrink-0 w-full md:w-[350px]">
                    <Image
                      src={post.metadata.image1}
                      alt={post.metadata.title}
                      width={250}
                      height={150} // intrinsic ratio only
                      className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform"
                    />
                  </div>
)}

              {/* Text (right) */}
              <div className="flex flex-col justify-center space-y-2">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>

                <h2 className="text-lg font-semibold group-hover:underline">
                  {post.metadata.title}
                </h2>

                <p className="text-neutral-700 dark:text-neutral-300">
                  {post.metadata.summary}
                </p>
              </div>
            </article>
          </Link>
        ))}
    </div>
  )
}
