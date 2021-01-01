import { FC } from 'react'
import { Layout, Container } from '../../components/Layout'

const Page: FC = () => (
  <Layout
    title="Veranstaltungen"
    subNavItems={[
      { path: '/veranstaltungen', title: 'Übersicht' },
      { path: '/veranstaltungen/2020', title: '2020' },
    ]}
  >
    <div className="py-10 text-gray-600 bg-white lg:py-24">
      <Container>
        <div className="mb-5 text-2xl font-bold text-gray-900">
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
        <Spacer />
        <EventBox
          imageUrl="https://i.imgur.com/3rW0XpV.png"
          tag="Konzert in der Erich-Schickling Stiftung"
          title="Einblicke in das Schaffen und Werk des Künstlers →"
          description="Im Weiler Eggisried bei Ottobeuren hat der Künstler Erich
  Schickling (1924-2012) in über 60-jähriger Arbeit zusammen mit
  seiner Frau Inge eine Begegnungsstätte für Kunst und Religion
  geschaffen."
          place="In der Erich Schickling Stiftung"
          date="Sonntag, 03.01.2021 um 15:00 - 16:00 Uhr"
        />
        <Spacer />
        <EventBox
          imageUrl="https://i.imgur.com/XSVguip.png"
          tag="Wöchentliche Führung"
          title="Einblicke in das Schaffen und Werk des Künstlers →"
          description="Im Weiler Eggisried bei Ottobeuren hat der Künstler Erich
  Schickling (1924-2012) in über 60-jähriger Arbeit zusammen mit
  seiner Frau Inge eine Begegnungsstätte für Kunst und Religion
  geschaffen."
          place="In der Erich Schickling Stiftung"
          date="Sonntag, 03.01.2021 um 15:00 - 16:00 Uhr"
        />
        <Spacer />
        <EventBox
          imageUrl="https://i.imgur.com/s95Y7g1.jpeg"
          tag="Wanderausstellung"
          title="„Aufbruch zum Staunen“ mit Werken von Erich Schickling →"
          description="Im Weiler Eggisried bei Ottobeuren hat der Künstler Erich
  Schickling (1924-2012) in über 60-jähriger Arbeit zusammen mit
  seiner Frau Inge eine Begegnungsstätte für Kunst und Religion
  geschaffen."
          place="In der Erich Schickling Stiftung"
          date="Ab 03.05.2020 bis 01.01.2021"
        />
        <Spacer />
        <div className="sm:font-bold sm:text-gray-900 sm:text-xl sm:mt-16 sm:mb-1">
          Jahresprogramm als PDF herunterladen
        </div>
        <div className="sm:font-normal">
          Fotos, Videos und Text der letzten Veranstaltungen finden Sie hier.
        </div>
        <img src="https://i.imgur.com/4LtthQc.png" className="sm:mb-6" />
        <div className="py-3 pt-3 pb-3 text-base border-2 border-gray-300 pr-14 pl-14 sm:block px-14">
          Jahresprogramm 2021 als PDF →
        </div>
      </Container>
    </div>
  </Layout>
)

const Spacer: FC = () => <div className="w-full h-px bg-gray-200 my-9" />

const EventBox: FC<{
  imageUrl: string
  tag: string
  title: string
  description: string
  place: string
  date: string
}> = ({ imageUrl, tag, title, description, place, date }) => (
  <div className="grid grid-cols-1 gap-5 lg:grid-cols-35-65 lg:gap-11">
    {/* NOTE Wrapping div is needed otherwise h-full will be 100vh in Safari */}
    <div>
      <img src={imageUrl} className="w-full lg:object-cover lg:h-full" />
    </div>
    <div>
      <div className="inline-flex rounded px-2.5 py-1.5 text-gray-600 font-medium text-sm bg-gray-200">
        {tag}
      </div>
      <div className="text-gray-900 text-lg font-bold mt-2.5 mb-2">{title}</div>
      <div className="font-normal text-gray-900">{description}</div>
      <div className="font-bold mt-6 mb-1.5">{place}</div>
      <div className="flex justify-between mt-1.5">
        <div className="font-bold text-gray-900">{date}</div>
        <div className="hidden font-bold text-gray-900 lg:block">Mehr →</div>
      </div>
    </div>
  </div>
)

export default Page
