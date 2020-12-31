import * as React from 'react'
import Head from 'next/head'
import { FC } from 'react'
import { SubNavItem, Header } from './Header'
import { useRouter } from 'next/router'

export const Layout: FC<{
  title?: string
  subNavItems?: SubNavItem[]
}> = ({ title, subNavItems, children }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{`${title} - Schickling Stiftung`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className="py-5">
        <Header currentPath={router.asPath} subNavItems={subNavItems} />
      </Container>
      {children}
      <Container>
        <footer className="py-3 mt-8 font-medium text-gray-700 border-t border-gray-700">
          <span>
            Erich Schickling Stiftung © 1998 - {new Date().getFullYear()}
          </span>
        </footer>
      </Container>
    </div>
  )
}

export const Container: FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={`container mx-auto ${className ?? ''}`}
    style={{ maxWidth: 1048, paddingLeft: 24, paddingRight: 24 }}
  >
    {children}
  </div>
)
