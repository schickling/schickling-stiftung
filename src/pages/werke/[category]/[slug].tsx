import { InferGetStaticPropsType } from 'next'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { promiseAllObject } from '../../../utils/utils'
import {
  adjacentPath,
  getArtworkPage,
  getCategories,
  getDetailsPaths,
} from '../../../models/artwork'
import { ArtworkDetails } from '../../../components/pages/ArtworkDetails'

export const getStaticProps = defineStaticProps(async (context) => {
  const categorySlug = context.params!.category as string
  const artworkSlug = context.params!.slug as string
  const { artwork, categories, prevPath, nextPath } = await promiseAllObject({
    artwork: getArtworkPage({ categorySlug, artworkSlug }),
    categories: getCategories(),
    prevPath: adjacentPath({ categorySlug, artworkSlug, direction: 'before' }),
    nextPath: adjacentPath({ categorySlug, artworkSlug, direction: 'after' }),
  })

  return {
    props: {
      artwork,
      subNavItems: categories.map((_) => ({
        title: _.title,
        path: `/werke/${_.slug}`,
      })),
      prevPath,
      nextPath,
    },
  }
})

export const getStaticPaths = defineStaticPaths(async () => {
  const paths = await getDetailsPaths()

  return { paths, fallback: false }
})

export type Props = InferGetStaticPropsType<typeof getStaticProps>

export default ArtworkDetails
