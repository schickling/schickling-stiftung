import * as React from 'react'
import Head from 'next/head'
import { FC } from 'react'
import { SubNavItem, Header } from './Header'
import { useRouter } from 'next/router'
import { Footer } from './Footer'

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
      <Container className="py-10 text-gray-300 lg:text-gray-700 lg:py-24 lg:hover:text-gray-300">
        <Footer />
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
