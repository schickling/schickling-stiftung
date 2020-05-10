import Link from 'next/link'
import { useRouter } from 'next/router'
import { isActivePath } from './Layout'

const subNavItems = [
  { path: '/werke/bilder', title: 'Bilder' },
  { path: '/werke/oeffentliche-werke', title: 'Öffentliche Werke' },
  { path: '/werke/architektur', title: 'Architektur' },
]

const WerkeNav: React.FunctionComponent<{}> = () => {
  const router = useRouter()
  return (
    <nav className="self-stretch hidden lg:flex mb-4" style={{ marginTop: -1 }}>
      {subNavItems.map((navItem) => {
        const classes = isActivePath(router.pathname, navItem.path)
          ? 'border-t border-white'
          : 'text-gray-600'
        return (
          <Link href={navItem.path} key={navItem.path}>
            <a
              className={`mr-5 py-4 flex text-sm hover:text-white items-center font-medium ${classes}`}
            >
              {navItem.title}
            </a>
          </Link>
        )
      })}
    </nav>
  )
}

export default WerkeNav
