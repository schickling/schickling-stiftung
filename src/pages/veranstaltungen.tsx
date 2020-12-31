import { FC } from 'react'
import Layout, { Container } from '../components/Layout'

const Page: FC = () => (
  <Layout title="Veranstaltungen">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        <div className="pt-10 text-2xl font-bold">Veranstaltungen in 2020</div>
        <div className="pt-5 pb-10 font-normal">
          Alle unsere Künstler und Referenten sind ehrenamtlich für die Stiftung
          tätig. Sie sind dem Hause Schickling in besonderer Weise verbunden.
          Ihnen gilt zuerst unser Dank! Manche kommen immer wieder zu uns und
          machen ihr Wort, ihre Musik, ihre Kunst allen zum Geschenk. Junge
          Musiker erproben hier gerne ihre Programme vor einem wohlgesonnenen
          Publikum.
        </div>
        <img src="https://i.imgur.com/5GwJhHA.jpg" className="pb-6 mb-6" />
        <div className="rounded pt-2 pr-0 pl-3 mr-0 mt-0 mx-0 my-0 px-3 py-2 text-gray-600 font-medium text-sm bg-gray-200">
          Wöchentliche Führung
        </div>
        <div>Einblicke in das Schaffen und Werk des Künstlers →</div>
        <div>
          Im Weiler Eggisried bei Ottobeuren hat der Künstler Erich Schickling
          (1924-2012) in über 60-jähriger Arbeit zusammen mit seiner Frau Inge
          eine Begegnungsstätte für Kunst und Religion geschaffen.
        </div>
      </Container>
    </div>
  </Layout>
)

export default Page
