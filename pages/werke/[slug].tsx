import { useRouter } from 'next/router'
import { createAgent } from 'notionapi-agent'
import { GetStaticPaths } from 'next'
import { toUUID } from '../../utils/notion'
import { Page } from 'notionapi-agent/dist/interfaces/notion-models/block/basic_block'

const notion = createAgent()

const Post = (props: GetProps<typeof getStaticProps>) => {
  const router = useRouter()
  const { slug } = router.query

  console.log(props)

  return (
    <p>
      Post: {slug} {JSON.stringify(props, null, 2)}
    </p>
  )
}

export default Post

export const getStaticProps = async (context: any) => {
  console.log(context)

  return {
    props: {},
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pageId = toUUID('6e4a0e9e37b54c1f9a89f50a9dcb0e2b')
  // f236df8f918741d8879fbc315893491d

  const result = await notion.loadPageChunk({
    pageId,
    chunkNumber: 0,
    limit: 50,
    cursor: { stack: [[{ table: 'block', index: 0, id: pageId }]] },
    verticalColumns: false,
  })

  const collectionViewName = 'Galerie'
  const collectionId = Object.values(result.recordMap.collection!)[0].value!.id
  const collectionResult = await notion.queryCollection({
    collectionId,
    collectionViewId: Object.values(result.recordMap.collection_view!).find(
      (cv) => cv.value!.name === collectionViewName,
    )!.value!.id,
    loader: {
      limit: 70,
      loadContentCover: true,
      // searchQuery: '',
      type: 'table',
      userLocale: 'en',
      userTimeZone: 'Europe/Berlin',
    },
    query: {} as any,
  })

  const resultsArray = Object.values(collectionResult.recordMap.block)
    .map((o) => o.value!)
    .filter(
      (b) => b.parent_table === 'collection' && b.type === 'page',
    ) as Page[]

  const schema = collectionResult.recordMap.collection[collectionId]!.value
    ?.schema!
  const schemaKeyMap = Object.keys(schema).reduce((obj, key) => {
    const name = schema[key].name
    return { ...obj, [name]: key }
  }, {}) as any

  const slugKey = 'Slug'
  const paths = resultsArray.map((r) => ({
    params: { slug: r.properties![schemaKeyMap[slugKey]][0][0], r: JSON.stringify(r) },
  }))

  return { paths, fallback: false }
}
