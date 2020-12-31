import { Layout, Container } from '../../../components/Layout'
import Link from 'next/link'
import { escapeAndParamCase } from '../../../utils/utils'
import { artworks, categories } from '../../../data/artworks'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { InferGetStaticPropsType } from 'next'
import { FC } from 'react'

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
                  <img
                    src={`${artwork.imageUrl}?width=500`}
                    className="self-start object-contain w-full overflow-hidden"
                    style={{ background: '#111', height: 330 }}
                  />
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
