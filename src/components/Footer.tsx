import Link from 'next/link'
import React, { FC } from 'react'
import { categories } from '../data/artworks'
import { Icons } from './icons'

export const Footer: FC<{}> = ({}) => {
  return (
    <div>
      <div className="lg:flex">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-4">
          <NavBlock
            title="Besuchen"
            items={[
              { title: 'Ort', path: '/ort' },
              { title: 'Führungen', path: '/veranstaltungen/fuehrungen' },
              { title: 'Anfahrt', path: '/' },
              { title: 'Veranstaltungen', path: '/veranstaltungen' },
            ]}
          />
          <NavBlock
            title="Stiftung"
            items={[
              { title: 'Blog', path: '/ort' },
              { title: 'Förderkreis', path: '/veranstaltungen/fuehrungen' },
              { title: 'Unterstützen', path: '/' },
              // { title: 'Shop', path: '/veranstaltungen/uebersicht' },
            ]}
          />
          <NavBlock
            title="Werke"
            items={[
              { title: 'Erich Schickling', path: '/erich-schickling' },
              ...categories.map((_) => ({
                title: _.title,
                path: `/werke/${_.slug}`,
              })),
            ]}
          />
          <NavBlock
            title="Mehr"
            items={[
              { title: 'Spiritual Care', path: '/ort' },
              {
                title: 'Allgäuer Glückswege',
                path: '/veranstaltungen/fuehrungen',
              },
            ]}
          />
        </div>
        <div className="mt-6 lg:ml-8 lg:mt-0">
          <div className="mb-4 font-bold">Kontakt</div>
          <div className="grid gap-1.5">
            <div>
              <span className="font-bold">Telefon: </span>
              <a href="tel:+4908332936362">08332 / 936362</a>
            </div>
            <div>
              <span className="font-bold">E-Mail: </span>
              <a href="mailto:info@schickling-stiftung.de">
                info@schickling-stiftung.de
              </a>
            </div>
          </div>
          <div className="flex mt-5">
            <a
              href="https://www.youtube.com/watch?v=f-lC3Ubup7Q"
              target="_blank"
            >
              <Icons.Youtube />
            </a>
            <a
              href="https://www.instagram.com/erichschicklingstiftung/"
              target="_blank"
              className="ml-3.5"
            >
              <Icons.Instagram />
            </a>
          </div>
        </div>
      </div>
      <footer className="flex justify-between py-5 font-medium text-gray-700 border-t border-gray-800 mt-14">
        <div>Erich Schickling Stiftung © 1998 - {new Date().getFullYear()}</div>
        <div>
          <Link href="/impressum">
            <a>Impressum</a>
          </Link>
        </div>
      </footer>
    </div>
  )
}

const NavBlock: FC<{
  title: string
  items: { title: string; path: string }[]
}> = ({ title, items }) => {
  return (
    <div>
      <div className="mb-4 font-bold">{title}</div>
      <div className="grid gap-1.5">
        {items.map((item) => (
          <Link key={item.title} href={item.path}>
            <a className="block">{item.title}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}
