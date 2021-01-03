import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Props } from '../../pages/werke/[category]/[slug]'
import { Container, Layout } from '../Layout'

export const ArtworkDetails: FC<Props> = ({
  artwork: { frontmatter: artwork, markdown },
  subNavItems,
  prevPath,
  nextPath,
}) => {
  const isVertical = artwork.format === 'Vertikal'
  const imageWidth = isVertical ? 600 : 1000

  return (
    <Layout title={artwork.title} subNavItems={subNavItems}>
      <Container>
        <div className="relative">
          {prevPath && (
            <div className="absolute left-0 hidden -ml-10 text-2xl font-medium leading-none text-gray-700 transform -translate-x-full bg-gray-900 rounded-full xl:block hover:text-gray-300 top-60">
              <Link href={prevPath}>
                <a className="block p-3">←</a>
              </Link>
            </div>
          )}
          {nextPath && (
            <div className="absolute right-0 hidden -mr-10 text-2xl font-medium leading-none text-gray-700 transform translate-x-full bg-gray-900 rounded-full xl:block hover:text-gray-300 top-60">
              <Link href={nextPath}>
                <a className="block p-3">→</a>
              </Link>
            </div>
          )}
          <div className={isVertical ? 'flex' : ''}>
            <div className="flex-shrink-0">
              <Image
                src={`${artwork.imageUrl}`}
                layout="intrinsic"
                width={imageWidth}
                height={imageWidth * artwork.imageRatio}
                loading="eager"
                objectFit="contain"
              />
            </div>
            <div className={isVertical ? 'ml-12' : 'mt-8'}>
              <div className="text-2xl font-medium">{artwork.title}</div>
              <div className="my-4">
                <div>
                  <span className="font-medium">Technik</span>:{' '}
                  {artwork.technique}
                </div>
                <div>
                  <span className="font-medium">Maße</span>: {artwork.size}
                </div>
                <div>
                  <span className="font-medium">Entstehung</span>:{' '}
                  {artwork.date}
                </div>
              </div>
              <div>
                <div className="mt-2 text-sm leading-relaxed whitespace-pre-line">
                  {markdown}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
