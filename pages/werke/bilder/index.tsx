import { Gql as graphql } from '../../../utils/graphql/graphql-zeus'
import Layout, { isActivePath } from '../../../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { escapeAndParamCase } from '../../../utils/utils'

const subNavItems = [
  { path: '/werke/bilder', title: 'Bilder' },
  { path: '/werke/oeffentliche-werke', title: 'Öffentliche Werke' },
  { path: '/werke/architektur', title: 'Architektur' },
]

const Post = (props: GetProps<typeof getStaticProps>) => {
  const router = useRouter()

  return (
    <Layout title="Bilder">
      <nav
        className="self-stretch hidden lg:flex mb-4"
        style={{ marginTop: -1 }}
      >
        {subNavItems.map((navItem) => {
          const classes = isActivePath(router.pathname, navItem.path)
            ? 'border-t border-white'
            : 'text-gray-600'
          return (
            <Link href={navItem.path} key={navItem.path}>
              <a
                className={`mr-5 py-4 flex text-sm hover:text-white items-center font-medium ${classes}`}
              >
                {navItem.title}
              </a>
            </Link>
          )
        })}
      </nav>
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
                  style={{background: '#111', height: 330}}
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
            collectionViewName: 'Galerie',
          },
          {
            items: {
              properties: {
                '...on CollectionItemProperties_WERKE_BILDER': {
                  name: true,
                  image: true,
                },
              },
            },
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
