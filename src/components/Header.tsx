import React, { FC, useState } from 'react'
import Link from 'next/link'
import { Icons } from './icons'

const navItems = d([
  { path: '/', title: 'Startseite' },
  { path: '/stiftung', title: 'Stiftung' },
  { path: '/werke', title: 'Werke' },
  { path: '/erich-schickling', title: 'Erich Schickling' },
  { path: '/veranstaltungen', title: 'Veranstaltungen' },
  { path: '/unterstuetzen', title: 'Unterstützen' },
  { path: '/kontakt', title: 'Kontakt' },
])

type NavPath = typeof navItems[number]['path']

type Props = {
  currentPath: NavPath | string
  subNavItems?: SubNavItem[]
}

export const Header: FC<Props> = ({ currentPath, subNavItems }) => {
  const [showDropdown, setShowDropdown] = useState(false)
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
        <div
          className="cursor-pointer lg:hidden clickarea"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {showDropdown ? <Icons.X /> : <Icons.Menu />}
        </div>
      </header>
      {showDropdown && (
        <NavDropdown currentPath={currentPath} subNavItems={subNavItems} />
      )}
      {subNavItems && !showDropdown && (
        <SubNav currentPath={currentPath} navItems={subNavItems} />
      )}
    </>
  )
}

const NavDropdown: FC<Props> = ({ currentPath, subNavItems }) => {
  return (
    <div className="py-2">
      {navItems.map((navItem) => {
        const isActive = isActivePath(currentPath, navItem.path, false)
        return (
          <>
            <Link href={navItem.path} key={navItem.path}>
              <a
                className={`flex py-1 hover:text-white items-center font-medium ${
                  isActive ? '' : 'text-gray-600'
                }`}
              >
                {navItem.title}
              </a>
            </Link>
            {isActive && subNavItems && (
              <div className="py-2">
                {subNavItems.map((navItem) => {
                  const classes = isActivePath(
                    currentPath,
                    navItem.path,
                    navItem.exact,
                  )
                    ? ''
                    : 'text-gray-600'
                  return (
                    <Link href={navItem.path} key={navItem.path}>
                      <a
                        className={`flex py-1 pl-4 hover:text-white items-center font-medium ${classes}`}
                      >
                        {navItem.title}
                      </a>
                    </Link>
                  )
                })}{' '}
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}

export type SubNavItem = {
  title: string
  path: string
  exact?: boolean
}

const SubNav: FC<{ currentPath: string; navItems: SubNavItem[] }> = ({
  currentPath,
  navItems,
}) => {
  return (
    <nav className="self-stretch hidden mb-4 -mt-px lg:flex">
      {navItems.map((navItem) => {
        const classes = isActivePath(currentPath, navItem.path, navItem.exact)
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

function isActivePath(
  currentPath: string,
  checkPath: string,
  matchExact?: boolean,
): boolean {
  if (checkPath === '/' || matchExact) {
    return checkPath === currentPath
  }

  return currentPath.startsWith(checkPath)
}

function d<X extends { path: Z }, Y extends X[], Z extends string>(_: Y): Y {
  return _
}
