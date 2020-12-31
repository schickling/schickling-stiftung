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
        <img src="https://i.imgur.com/5GwJhHA.jpg" className="mb-6" />
        <div className="rounded inline-flex px-2.5 py-1.5 text-gray-600 font-medium text-sm bg-gray-200">
          Wöchentliche Führung
        </div>
        <div className="text-gray-900 text-lg font-bold mt-2.5 mb-2">
          Einblicke in das Schaffen und Werk des Künstlers →
        </div>
        <div className="font-normal text-gray-900">
          Im Weiler Eggisried bei Ottobeuren hat der Künstler Erich Schickling
          (1924-2012) in über 60-jähriger Arbeit zusammen mit seiner Frau Inge
          eine Begegnungsstätte für Kunst und Religion geschaffen.
        </div>
        <div className="font-bold mt-6 mb-1.5">
          In der Erich Schickling Stiftung
        </div>
        <div className="text-gray-900 font-bold mt-1.5 mb-9">
          Sonntag, 03.01.2021 um 15:00 - 16:00 Uhr
        </div>
        <div className="w-full h-px my-5 bg-gray-200" />
      </Container>
    </div>
  </Layout>
)

export default Page
