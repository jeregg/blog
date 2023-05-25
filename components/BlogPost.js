import Link from 'next/link'
import { useConfig } from '@/lib/config'
import FormattedDate from '@/components/FormattedDate'

const BlogPost = ({ post }) => {
  const BLOG = useConfig()

  return (
  
    <article key={post.id} className="mb-6 md:mb-8">
      <header className="flex flex-col justify-between md:flex-row">
        <Link href={`${BLOG.path}/${post.slug}`}>
          <h2 className="text-2xl md:text-2xl font-thin mb-2 cursor-pointer text-grey-800 dark:text-gray-100 underline:hover:underline-offset-8">
            {post.title}
          </h2>
        </Link>
          <time className="flex-shrink-0 text-sm text-gray-800 dark:text-gray-400">
            <FormattedDate date={post.date} />
          </time>
      </header>
        <main>
          <p className="hidden md:block text-sm font-extralight leading-6 text-gray-800 dark:text-gray-300">
            {post.summary}
          </p>
        </main>
    </article>
  )
}

export default BlogPost
