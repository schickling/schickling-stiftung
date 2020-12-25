import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

type Props = {
  title?: string
}

const navItems = [
  { path: '/', title: 'Startseite' },
  { path: '/erich-schickling', title: 'Erich Schickling' },
  { path: '/werke', title: 'Werke' },
  { path: '/foederkreis', title: 'Förderkreis' },
  { path: '/veranstaltungen', title: 'Veranstaltungen' },
  { path: '/kontakt', title: 'Kontakt' },
]

const Layout: FC<Props> = ({ children, title }) => {
  const router = useRouter()

  return (
    <div
      className="container mx-auto"
      style={{ maxWidth: 1048, padding: '0 24px' }}
    >
      <Head>
        <title>{`${title} - Schickling Stiftung`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="flex items-center justify-between mt-3 border-b border-gray-700">
        <Link href="/">
          <a className="py-3">
            <div className="text-lg font-medium">Erich Schickling Stiftung</div>
            <div className="text-sm text-gray-600">
              Begegnungsstätte von Kunst und Religion
            </div>
          </a>
        </Link>
        <nav
          className="self-stretch hidden lg:flex"
          style={{ marginBottom: -1 }}
        >
          {navItems.map((navItem) => {
            const classes = isActivePath(router.pathname, navItem.path)
              ? 'border-b border-white'
              : 'text-gray-600'
            return (
              <Link href={navItem.path} key={navItem.path}>
                <a
                  className={`ml-5 flex text-sm hover:text-white items-center font-medium ${classes}`}
                >
                  {navItem.title}
                </a>
              </Link>
            )
          })}
        </nav>
      </header>
      {children}
      <footer className="py-3 mt-8 font-medium text-gray-700 border-t border-gray-700">
        <span>Erich Schickling Stiftung © 1998 - 2020</span>
      </footer>
    </div>
  )
}

export default Layout

export function isActivePath(currentPath: string, checkPath: string): boolean {
  if (checkPath === '/') {
    return checkPath === currentPath
  }

  return currentPath.startsWith(checkPath)
}
