import { useConfig } from '@/lib/config'
import Vercel from '@/components/Vercel'
const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full font-extrabold text-gray-800 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-100 dark:border-gray-600" />
      <div className="mt-2 mb-4 text-sm text-grey-800 leading-6">
        <div className="flex align-top justify-between flex-wrap">
          <p className="mx-auto text-sm">
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
      
        </div>
      </div>
    </div>
  )
}

export default Footer
