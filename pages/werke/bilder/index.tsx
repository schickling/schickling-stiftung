import { Gql as graphql } from '../../../utils/graphql/graphql-zeus'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { escapeAndParamCase } from '../../../utils/utils'
import WerkeNav from '../../../components/WerkeNav'

const Post = (props: GetProps<typeof getStaticProps>) => {
  return (
    <Layout title="Bilder">
      <WerkeNav />
      <div className="grid md:grid-cols-3 gap-6">
        {props.items.map((i) => (
          <div key={i.properties.name}>
            <Link
              href={`/werke/bilder/${escapeAndParamCase(i.properties.name)}`}
            >
              <a>
                <img
                  src={`${i.properties.image}?width=500`}
                  className="object-contain self-start w-full overflow-hidden"
                  style={{ background: '#111', height: 330 }}
                />
                <div className="font-medium mt-4">{i.properties.name}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Post

export const getStaticProps = async () => {
  const response = await graphql.query({
    collection: [
      {
        collectionName: 'Werke/Bilder',
      },
      {
        collectionView: [
          {
            collectionViewName: 'Galerie Sichtbar',
          },
          {
            items: [
              { filter: [{ key: 'visible', value: 'Yes' }] },
              {
                properties: {
                  '...on CollectionItemProperties_WERKE_BILDER': {
                    name: true,
                    image: true,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  })

  const data = response.collection.collectionView

  return {
    props: data,
  }
}
