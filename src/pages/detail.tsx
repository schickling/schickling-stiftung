import { FC } from 'react'
import { Layout, Container } from '../components/Layout'

const Page: FC = () => (
  <Layout title="Details zur Veranstaltung">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        <div className="rounded inline-flex px-2.5 py-1.5 text-gray-600 font-medium text-sm bg-gray-200 mt-10">
          Konzert in der Erich-Schickling Stiftung
        </div>
        <div className="mt-5 text-2xl font-bold mb-9">
          Klavierabend Beethoven zum 250. mit Andrej Jussow
        </div>
        <TimeDate
          imageUrl="https://i.imgur.com/ufu0Cib.png"
          title="Datum"
          description="Sonntag, 20. September um 16.30 Uhr"
        />
        <TimeDate
          imageUrl="https://i.imgur.com/n9nepuU.png"
          title="Ort"
          description="Konzerthalle in Erich-Schickling-Stiftung"
        />
      </Container>
    </div>
  </Layout>
)

export default Page

const TimeDate: FC<{
  imageUrl: string
  title: string
  description: string
}> = ({ imageUrl, title, description }) => (
  <div className="flex">
    <img src={imageUrl} className="w-6 h-6 text-gray-600" />
    <div className="ml-5">
      <div className="text-sm font-bold text-gray-600">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
)
