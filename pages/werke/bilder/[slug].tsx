import { GetStaticPaths } from 'next'
import { Gql as graphql } from '../../../utils/graphql/graphql-zeus'
import Layout, { isActivePath } from '../../../components/Layout'
import { escapeAndParamCase } from '../../../utils/utils'
import { useRouter } from 'next/router'
import Link from 'next/link'

const subNavItems = [
  { path: '/werke/bilder', title: 'Bilder' },
  { path: '/werke/oeffentliche-werke', title: 'Öffentliche Werke' },
  { path: '/werke/architektur', title: 'Architektur' },
]

const Post = (props: GetProps<typeof getStaticProps>) => {
  const router = useRouter()
  const isVertical = props.properties.format === 'Vertikal'

  return (
    <Layout title={props.properties.name}>
      <nav className="self-stretch hidden lg:flex mb-4" style={{ marginTop: -1 }}>
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
      <div className={isVertical ? 'flex' : ''}>
        <img
          src={`${props.properties.image}?width=${isVertical ? 600 : 1000}`}
          className="object-contain self-start"
        />
        <div className={isVertical ? 'ml-8' : 'mt-8'}>
          <div className="text-2xl font-medium">{props.properties.name}</div>
          <div className="my-4">
            <div>
              <span className="font-medium">Technik</span>:{' '}
              {props.properties.technique}
            </div>
            <div>
              <span className="font-medium">Maße</span>: {props.properties.size}
            </div>
            <div>
              <span className="font-medium">Datum</span>:{' '}
              {props.properties.date}
            </div>
          </div>
          <div>
            {props.textContent.map((t) => (
              <div key={t} className="mt-2 text-sm leading-relaxed">
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
