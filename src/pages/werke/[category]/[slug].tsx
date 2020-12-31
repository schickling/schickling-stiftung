import { Layout, Container } from '../../../components/Layout'
import { artworks, categories } from '../../../data/artworks'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { escapeAndParamCase } from '../../../utils/utils'
import React, { FC } from 'react'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = defineStaticProps(async (context) => {
  const artwork = artworks.find(
    (_) =>
      context.params!.slug === escapeAndParamCase(_.title) &&
      context.params!.category === escapeAndParamCase(_.category),
  )!
  return {
    props: {
      artwork,
      subNavItems: categories.map((_) => ({
        title: _.title,
        path: `/werke/${_.slug}`,
      })),
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
}) => {
  const isVertical = artwork.format === 'Vertikal'

  return (
    <Layout title={artwork.title} subNavItems={subNavItems}>
      <Container>
        <div className={isVertical ? 'flex' : ''}>
          <img
            src={`${artwork.imageUrl}?width=${isVertical ? 600 : 1000}`}
            className="self-start object-contain"
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
                <span className="font-medium">Entstehung</span>: {artwork.date}
              </div>
            </div>
            <div>
              <div className="mt-2 text-sm leading-relaxed whitespace-pre-line">
                {artwork.text}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Page
