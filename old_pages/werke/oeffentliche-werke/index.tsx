// import { Gql as graphql } from '../../../utils/graphql/graphql-zeus'
import Layout from '../../../components/Layout'
import WerkeNav from '../../../components/WerkeNav'

const Post = (props: any/* : GetProps<typeof getStaticProps>*/) => {
  console.log(props)
  return (
    <Layout title="Öffentliche Werke">
      <WerkeNav />
      <div className="grid gap-6 md:grid-cols-3">
        WIP
      </div>
    </Layout>
  )
}

export default Post

// export const getStaticProps = async () => {
//   const response = await graphql.query({
//     collection: [
//       {
//         collectionName: 'Werke/Bilder',
//       },
//       {
//         collectionView: [
//           {
//             collectionViewName: 'Galerie Sichtbar',
//           },
//           {
//             items: [
//               { filter: [{ key: 'visible', value: 'Yes' }] },
//               {
//                 properties: {
//                   '...on CollectionItemProperties_WERKE_BILDER': {
//                     name: true,
//                     image: true,
//                   },
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   })

//   const data = response.collection.collectionView

//   return {
//     props: data,
//   }
// }
