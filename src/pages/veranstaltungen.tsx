import { title } from 'process'
import { FC } from 'react'
import { Layout, Container } from '../components/Layout'

const Page: FC = () => (
  <Layout title="Veranstaltungen">
    <div className="py-24 text-gray-600 bg-white">
      <Container>
        <div className="mt-10 mb-5 text-2xl font-bold text-gray-900">
          Veranstaltungen in 2020
        </div>
        <div className="pb-10 font-normal text-gray-900">
          Alle unsere Künstler und Referenten sind ehrenamtlich für die Stiftung
          tätig. Sie sind dem Hause Schickling in besonderer Weise verbunden.
          Ihnen gilt zuerst unser Dank! Manche kommen immer wieder zu uns und
          machen ihr Wort, ihre Musik, ihre Kunst allen zum Geschenk. Junge
          Musiker erproben hier gerne ihre Programme vor einem wohlgesonnenen
          Publikum.
        </div>
        <EventBox
          imageUrl="https://i.imgur.com/5GwJhHA.jpg"
          tag="Wöchentliche Führung"
          title="Einblicke in das Schaffen und Werk des Künstlers →"
          description="Im Weiler Eggisried bei Ottobeuren hat der Künstler Erich
  Schickling (1924-2012) in über 60-jähriger Arbeit zusammen mit
  seiner Frau Inge eine Begegnungsstätte für Kunst und Religion
  geschaffen."
          place="In der Erich Schickling Stiftung"
          date="Sonntag, 03.01.2021 um 15:00 - 16:00 Uhr"
        />
        <div className="w-full h-px my-5 bg-gray-200" />
      </Container>
    </div>
  </Layout>
)

const EventBox: FC<{
  imageUrl: string
  tag: string
  title: string
  description: string
  place: string
  date: string
}> = ({ imageUrl, tag, title, description, place, date }) => (
  <div className="grid grid-cols-1 gap-5 lg:grid-cols-35-65">
    <img src={imageUrl} className="mb-6" />
    <div>
      <div className="inline-flex rounded px-2.5 py-1.5 text-gray-600 font-medium text-sm bg-gray-200">
        {tag}
      </div>
      <div className="text-gray-900 text-lg font-bold mt-2.5 mb-2">{title}</div>
      <div className="font-normal text-gray-900">{description}</div>
      <div className="font-bold mt-6 mb-1.5">{place}</div>
      <div className="flex justify-between mt-1.5 mb-9">
        <div className="font-bold text-gray-900">{date}</div>
        <div className="hidden font-bold text-gray-900 lg:block">Mehr →</div>
      </div>
    </div>
  </div>
)

export default Page
