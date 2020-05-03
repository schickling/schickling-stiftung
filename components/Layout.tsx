import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

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

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Schickling Stiftung',
}) => {
  const router = useRouter()

  return (
    <div className="container mx-auto" style={{maxWidth: 1000}}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="border-b border-gray-700 flex justify-between items-center mt-3 mb-5">
        <Link href="/">
          <a className='py-3'>
            <div className="text-lg font-medium">
              Erich Schickling Stiftung
            </div>
            <div className="text-sm text-gray-600">
              Begegnungsstätte von Kunst und Religion
            </div>
          </a>
        </Link>
        <nav className="flex self-stretch" style={{ marginBottom: -1 }}>
          {navItems.map((navItem) => {
            const classes =
              navItem.path === router.pathname ? 'border-b border-white' : 'text-gray-600'
            return (
              <Link href={navItem.path}>
                <a className={`ml-5 flex text-sm hover:text-white items-center font-medium ${classes}`}>
                  {navItem.title}
                </a>
              </Link>
            )
          })}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>Erich Schickling Stiftung © 1998 - 2020</span>
      </footer>
    </div>
  )
}

export default Layout
