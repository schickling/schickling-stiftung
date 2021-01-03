import { sourcebitDataClient } from 'sourcebit-target-next'
import { Frontmatter, GetDataResponse, Page } from '.'
import { escapeAndParamCase, promiseAllObject, unique } from '../utils/utils'

export type Artwork = {
  title: string
  imageUrl: string
  imageRatio: number
  format: 'Vertikal' | 'Horizontal'
  technique: string
  location: string
  date: string
  size: string
  category: 'Bilder' | 'Öffentliche Werke' | 'Architektur'
  layout: 'artwork'
}

export type Category = Artwork['category']

export const isArtwork = (_: Frontmatter): _ is Artwork =>
  _.layout === 'artwork'

export const getCategories = async (): Promise<
  { title: Category; slug: string }[]
> => {
  const data: GetDataResponse = await sourcebitDataClient.getData()

  const categories = unique(
    data.props.pages
      .map((_) => _.frontmatter)
      .filter(isArtwork)
      .map((_) => _.category),
  )

  categories.sort()

  return categories.map((_) => ({ title: _, slug: escapeAndParamCase(_) }))
}

export const getArtworkPagesForCategory = async ({
  categorySlug,
}: {
  categorySlug: string
}): Promise<Page<Artwork>[]> => {
  const data: GetDataResponse = await sourcebitDataClient.getData()
  const artworks = data.props.pages.filter(
    (_) =>
      isArtwork(_.frontmatter) &&
      escapeAndParamCase(_.frontmatter.category) === categorySlug,
  )
  return artworks as Page<Artwork>[]
}

export const getArtworkPage = async ({
  categorySlug,
  artworkSlug,
}: {
  categorySlug: string
  artworkSlug: string
}): Promise<Page<Artwork>> => {
  const { artworkPage } = await getArtworkPageWithIndex({
    categorySlug,
    artworkSlug,
  })
  return artworkPage
}

const getArtworkPageWithIndex = async ({
  categorySlug,
  artworkSlug,
}: {
  categorySlug: string
  artworkSlug: string
}): Promise<{ artworkPage: Page<Artwork>; index: number }> => {
  const categoryArtworkPages = await getArtworkPagesForCategory({
    categorySlug,
  })
  const index = categoryArtworkPages.findIndex(
    (_) => _.__metadata.urlPath === `/werke/${categorySlug}/${artworkSlug}`,
  )
  if (index === -1) {
    throw new Error(`No artwork found for ${categorySlug}/${artworkSlug}`)
  }
  return { artworkPage: categoryArtworkPages[index], index }
}

export const getDetailsPaths = async (): Promise<string[]> => {
  const paths: string[] = await sourcebitDataClient.getStaticPaths()
  return paths.filter((_) => _.startsWith('/werke/'))
}

export const adjacentPath = async ({
  categorySlug,
  artworkSlug,
  direction,
}: {
  categorySlug: string
  artworkSlug: string
  direction: 'before' | 'after'
}): Promise<string | null> => {
  const {
    categoryArtworkPages,
    artworkPageWitIndex: { index },
  } = await promiseAllObject({
    categoryArtworkPages: getArtworkPagesForCategory({ categorySlug }),
    artworkPageWitIndex: getArtworkPageWithIndex({ categorySlug, artworkSlug }),
  })
  if (
    (direction === 'before' && index === 0) ||
    (direction === 'after' && index === categoryArtworkPages.length - 1)
  ) {
    return null
  }

  const offset = direction === 'before' ? -1 : 1
  const adjacentArtworkPage = categoryArtworkPages[index + offset]
  return adjacentArtworkPage.__metadata.urlPath
}
