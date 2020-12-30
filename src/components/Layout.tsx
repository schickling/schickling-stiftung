import * as React from 'react'
import Head from 'next/head'
import { FC } from 'react'
import { Topnav } from './Topnav'
import { useRouter } from 'next/router'

type Props = {
  title?: string
}

const Layout: FC<Props> = ({ children, title }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{`${title} - Schickling Stiftung`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Topnav currentPath={router.pathname as any} />
      </Container>
      {children}
      <Container>
        <footer className="py-3 mt-8 font-medium text-gray-700 border-t border-gray-700">
          <span>Erich Schickling Stiftung © 1998 - 2020</span>
        </footer>
      </Container>
    </div>
  )
}

const Container: FC = ({ children }) => (
  <div
    className="container mx-auto"
    style={{ maxWidth: 1048, padding: '0 24px' }}
  >
    {children}
  </div>
)

export default Layout
