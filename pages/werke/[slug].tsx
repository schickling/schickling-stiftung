import { GetStaticPaths } from 'next'
import { Gql as graphql } from '../../utils/graphql/graphql-zeus'
import Layout from '../../components/Layout'
import fetch from 'node-fetch'
import { escapeAndParamCase } from '../../utils/utils'

global.fetch = fetch

const Post = (props: GetProps<typeof getStaticProps>) => {
  const isVertical = props.properties.format === 'Vertikal'
  return (
    <Layout title={props.properties.name}>
      <div className={isVertical ? 'flex' : ''}>
        <img
          src={`${props.properties.image}?width=${isVertical ? 600 : 1000}`}
          className="object-contain self-start"
        />
        <div className={isVertical ? 'ml-8' : 'mt-8'}>
          <div className="text-2xl font-normal">{props.properties.name}</div>
          <div className="my-4">
            <div>
              <span className="font-semibold">Technik</span>:{' '}
              {props.properties.technique}
            </div>
            <div>
              <span className="font-semibold">Maße</span>:{' '}
              {props.properties.size}
            </div>
            <div>
              <span className="font-semibold">Datum</span>:{' '}
              {props.properties.date}
            </div>
          </div>
          <div>
            {props.textContent.map((t) => (
              <div key={t} className="mt-2">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const getStaticProps = async (context: any) => {
  const response = await graphql.query({
    collection: [
      {
        collectionName: 'Werke/Bilder',
      },
      {
        collectionView: [
          {
            collectionViewName: 'Galerie',
          },
          {
            items: {
              properties: {
                '...on CollectionItemProperties_WERKE_BILDER': {
                  name: true,
                  // image: [{ width: 600 }, true],
                  image: true,
                  technique: true,
                  size: true,
                  date: true,
                  format: true,
                },
              },
              textContent: true,
            },
          },
        ],
      },
    ],
  })

  const data = response.collection.collectionView.items.find(
    (i) => context.params.slug === escapeAndParamCase(i.properties.name),
  )!

  return {
    props: data,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await graphql.query({
    collection: [
      {
        collectionName: 'Werke/Bilder',
      },
      {
        collectionView: [
          {
            collectionViewName: 'Galerie',
          },
          {
            items: {
              properties: {
                '...on CollectionItemProperties_WERKE_BILDER': {
                  name: true,
                },
              },
            },
          },
        ],
      },
    ],
  })

  const paths = response.collection.collectionView.items.map((i) => ({
    params: { slug: escapeAndParamCase(i.properties.name) },
  }))

  return { paths, fallback: false }
}
