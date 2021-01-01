import { Layout, Container } from '../../../components/Layout'
import Link from 'next/link'
import { escapeAndParamCase } from '../../../utils/utils'
import { artworks, categories } from '../../../data/artworks'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { InferGetStaticPropsType } from 'next'
import { FC } from 'react'
import Image from 'next/image'

export const getStaticProps = defineStaticProps(async (context) => {
  return {
    props: {
      artworks: artworks.filter(
        (_) => escapeAndParamCase(_.category) === context.params!.category,
      ),
      subNavItems: categories.map((_) => ({
        title: _.title,
        path: `/werke/${_.slug}`,
      })),
    },
  }
})

export const getStaticPaths = defineStaticPaths(async () => {
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
          {artworks.map((artwork) => (
            <div key={artwork.title}>
              <Link
                href={`/werke/${escapeAndParamCase(
                  artwork.category,
                )}/${escapeAndParamCase(artwork.title)}`}
              >
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
