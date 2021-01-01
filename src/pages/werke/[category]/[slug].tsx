import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Layout, Container } from '../../../components/Layout'
import { Artwork, artworks, categories } from '../../../data/artworks'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { escapeAndParamCase } from '../../../utils/utils'
import React, { FC } from 'react'

export const getStaticProps = defineStaticProps(async (context) => {
  const categoryArtworks = artworks.filter(
    (_) => context.params!.category === escapeAndParamCase(_.category),
  )!
  const artworkIndex = categoryArtworks.findIndex(
    (_) => context.params!.slug === escapeAndParamCase(_.title),
  )!
  const artwork = categoryArtworks[artworkIndex]
  return {
    props: {
      artwork,
      subNavItems: categories.map((_) => ({
        title: _.title,
        path: `/werke/${_.slug}`,
      })),
      prevPath: adjacentPath({
        currentIndex: artworkIndex,
        categoryArtworks,
        direction: 'before',
      }),
      nextPath: adjacentPath({
        currentIndex: artworkIndex,
        categoryArtworks,
        direction: 'after',
      }),
    },
  }
})

export const getStaticPaths = defineStaticPaths(async () => {
  const paths = artworks.map((_) => ({
    params: {
      category: escapeAndParamCase(_.category),
      slug: escapeAndParamCase(_.title),
    },
  }))

  return { paths, fallback: false }
})

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  artwork,
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
            <Image
              src={`${artwork.imageUrl}`}
              layout="intrinsic"
              width={imageWidth}
              height={imageWidth * artwork.imageRatio}
              loading="eager"
              objectFit="contain"
            />
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
                  {artwork.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Page

function adjacentPath({
  currentIndex,
  direction,
  categoryArtworks,
}: {
  currentIndex: number
  direction: 'before' | 'after'
  categoryArtworks: Artwork[]
}): string | null {
  if (
    (direction === 'before' && currentIndex === 0) ||
    (direction === 'after' && currentIndex === categoryArtworks.length - 1)
  ) {
    return null
  }

  const offset = direction === 'before' ? -1 : 1
  const adjacentArtwork = categoryArtworks[currentIndex + offset]
  return `/werke/${escapeAndParamCase(
    adjacentArtwork.category,
  )}/${escapeAndParamCase(adjacentArtwork.title)}`
}
