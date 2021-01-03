import { Layout, Container } from '../../../components/Layout'
import Link from 'next/link'
import { promiseAllObject } from '../../../utils/utils'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { InferGetStaticPropsType } from 'next'
import { FC } from 'react'
import Image from 'next/image'
import {
  getArtworkPagesForCategory,
  getCategories,
} from '../../../models/artwork'

export const getStaticProps = defineStaticProps(async (context) => {
  const categorySlug = context.params!.category as string
  const { categories, artworks } = await promiseAllObject({
    categories: getCategories(),
    artworks: getArtworkPagesForCategory({ categorySlug }),
  })
  return {
    props: {
      artworks,
      subNavItems: categories.map((_) => ({
        title: _.title,
        path: `/werke/${_.slug}`,
      })),
    },
  }
})

export const getStaticPaths = defineStaticPaths(async () => {
  const categories = await getCategories()
  const paths = categories.map((_) => ({ params: { category: _.slug } }))

  return { paths, fallback: false }
})

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  artworks,
  subNavItems,
}) => {
  return (
    <Layout title="Bilder" subNavItems={subNavItems}>
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {artworks.map(({ frontmatter: artwork, __metadata }) => (
            <div key={artwork.title}>
              <Link href={__metadata.urlPath}>
                <a>
                  <div className="flex bg-gray-900">
                    <Image
                      src={`${artwork.imageUrl}`}
                      // className="self-start object-contain w-full overflow-hidden"
                      objectFit="contain"
                      height={330}
                      width={500}
                    />
                  </div>
                  <div className="mt-4 font-medium">{artwork.title}</div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Page
