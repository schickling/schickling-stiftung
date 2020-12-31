import { FC } from 'react'
import Link from 'next/link'

const navItems = d([
  { path: '/', title: 'Startseite' },
  { path: '/erich-schickling', title: 'Erich Schickling' },
  { path: '/werke', title: 'Werke' },
  { path: '/foederkreis', title: 'Förderkreis' },
  { path: '/veranstaltungen', title: 'Veranstaltungen' },
  { path: '/kontakt', title: 'Kontakt' },
])

type NavPath = typeof navItems[number]['path']

export const Topnav: FC<{
  currentPath: NavPath | string
  subNavItems?: SubNavItem[]
}> = ({ currentPath, subNavItems }) => {
  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-700">
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
            const classes = isActivePath(currentPath, navItem.path)
              ? 'border-b border-white pt-px'
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
      {subNavItems && (
        <SubNav currentPath={currentPath} navItems={subNavItems} />
      )}
    </>
  )
}

export type SubNavItem = {
  title: string
  path: string
}

const SubNav: FC<{ currentPath: string; navItems: SubNavItem[] }> = ({
  currentPath,
  navItems,
}) => {
  return (
    <nav className="self-stretch hidden mb-4 -mt-px lg:flex">
      {navItems.map((navItem) => {
        const classes = isActivePath(currentPath, navItem.path)
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

function isActivePath(currentPath: string, checkPath: string): boolean {
  if (checkPath === '/') {
    return checkPath === currentPath
  }
  console.log({ checkPath, currentPath })

  return currentPath.startsWith(checkPath)
}

function d<X extends { path: Z }, Y extends X[], Z extends string>(_: Y): Y {
  return _
}
