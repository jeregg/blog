import Link from 'next/link'
import { useConfig } from '@/lib/config'
import FormattedDate from '@/components/FormattedDate'

const BlogPost = ({ post }) => {
  const BLOG = useConfig()

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-6 md:mb-8">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          <h2 className="text-2xl md:text-2xl font-thin mb-2 cursor-pointer text-grey-800 dark:text-gray-100 hover:underline-offset-8">
            {post.title}
          </h2>
          <time className="flex-shrink-0 text-sm text-gray-800 dark:text-gray-400">
            <FormattedDate date={post.date} />
          </time>
        </header>
        <main>
          <p className="hidden md:block text-sm leading-6 text-gray-800 dark:text-gray-300">
            {post.summary}
          </p>
        </main>
      </article>
    </Link>
  )
}

export default BlogPost
