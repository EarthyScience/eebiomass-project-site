import { BlogPosts } from '@/components/posts'

export const metadata = {
  title: 'Posts',
  description: 'Read my posts.',
}

export default function Page() {
  return (
    <section>
      <p></p>
      <h1 className="max-w-6xl mx-auto px-6 mt-8 py-12 font-bold text-3xl text-center tracking-tighter text-[var(--accent-1)]">NEWS</h1>
      <BlogPosts />
    </section>
  )
}
