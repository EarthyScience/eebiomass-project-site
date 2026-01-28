// Adapted from https://github.com/vercel/examples/tree/main/solutions/blog MIT License
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/../mdx-components'
import { formatDate, getBlogPosts } from '@/utils/utilsBlog'
import { baseUrl } from '@/utils/sitemap'
import Link from 'next/link'
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogParams {
  params: Promise<{ slug: string }>;
}

export default async function Blog({ params }: BlogParams) {
  const { slug } = await params;
  const posts = getBlogPosts();
  const post = posts.find((post) => post.slug === slug);
  
  if (!post) {
    notFound()
  }
  
  return (
    <section className='max-w-6xl mx-auto px-6 mt-8 py-12'>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image2
              ? `${baseUrl}${post.metadata.image2}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div className="flex items-center mb-2">
        <Link href="/blog" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200">
          ← Back to Posts
        </Link>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="w-1/4"></div>
        <h1 className="title font-semibold text-neutral-600 dark:text-neutral-400 text-2xl tracking-tighter text-center w-1/2">
          {post.metadata.title}
        </h1>
        <div className="w-1/4 flex justify-end">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
      </div>
      <p></p>

      {post.metadata.image2 && (
         <div className="relative -mx-10 h-[350px] mb-6 rounded-xl">
            <Image
              src={post.metadata.image2}
              alt={post.metadata.title}
              fill
              priority
              className="object-contain"/>
          </div>
      )}

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}