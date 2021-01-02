import { FC } from 'react'
import { Layout, Container } from '../components/Layout'
import { Spacer } from './veranstaltungen/[year]'

const Page: FC = () => (
  <Layout title="Ort">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        <div className="mb-5 text-xl font-bold">Entdecken</div>
        <div className="mb-10 font-normal">
          Alle unsere Künstler und Referenten sind ehrenamtlich für die Stiftung
          tätig. Sie sind dem Hause Schickling in besonderer Weise verbunden.
          Ihnen gilt zuerst unser Dank! Manche kommen immer wieder zu uns und
          machen ihr Wort, ihre Musik, ihre Kunst allen zum Geschenk. Junge
          Musiker erproben hier gerne ihre Programme vor einem wohlgesonnenen
          Publikum.
        </div>
        <img src="https://i.imgur.com/LVE0DiA.png" className="w-full mb-10" />
        <div className="grid gap-11 cols-1 lg:grid-cols-2 lg:gap-6">
          <Sight
            number="1"
            title="Kapelle mit Glockenturm"
            description="In der Kapelle lassen sich die farbigen Glasfenster bewundern."
            imageUrl="https://i.imgur.com/kExKy2f.png"
          />
          <Sight
            number="2"
            title="Franziskusmosaik"
            description="Am Eingang der Stiftung begrüßt der heilige Franz von Assisi."
            imageUrl="https://i.imgur.com/Fj0n0ud.png"
          />
        </div>
        <Spacer className="hidden lg:block" />
        <div className="grid gap-11 cols-1 lg:grid-cols-2 lg:gap-6">
          <Sight
            number="3"
            title="Innenhof mit Pfauen"
            description="Im Innenhof der Stifttung halten sich die wunderschönen Pfauen der Stiftung am liebsten auf."
            imageUrl="https://i.imgur.com/94zh4mm.png"
          />
          <Sight
            number="4"
            title="Günzbrücke"
            description="Die Günz ist die Lebensader der Stiftung."
            imageUrl="blob:https://imgur.com/65000673-2f67-43cf-84a5-c9f4587b20ef"
          />
        </div>
        <Spacer className="hidden lg:block" />
        <div className="grid gap-11 cols-1 lg:grid-cols-2 lg:gap-6">
          <Sight
            number="5"
            title="Wolkenschiff"
            description="Das Wolkenschiff baut Erich Schickling im Rahmen eines Wettbewerbs. Nun begrüßt es am Eingang der Stiftung."
            imageUrl="https://i.imgur.com/JtqKDG9.png"
          />
          <Sight
            number="6"
            title="Galerie Elisabeth Schickling"
            description="In der Galerie am Glockenturm stellt die Künstlerin Elisabeth Schickling aus."
            imageUrl="https://i.imgur.com/EWieqfM.png"
          />
        </div>
        <Spacer className="hidden lg:block" />
      </Container>
    </div>
  </Layout>
)

export default Page

const Sight: FC<{
  number: string
  title: string
  description: string
  imageUrl: string
}> = ({ number, title, description, imageUrl }) => (
  <div className="grid grid-cols-1 gap-0 px-6 py-6 pt-6 lg:border lg:rounded lg:grid-cols-2 lg:gap-6 lg:border-gray-300">
    <div>
      <div className="flex">
        <div className="w-6 h-6 rounded-full text-sm leading-none border-gray-900 mr-2.5">
          <div className="border inline-flex justify-center items-center w-6 h-6 rounded-full text-sm leading-none border-gray-900 mr-2.5">
            {number}
          </div>
        </div>
        <div className="mb-1 text-lg font-bold">{title} →</div>
      </div>
      <div className="font-normal text-gray-600">{description}</div>
    </div>
    <div>
      <img src={imageUrl} className="w-full mt-6 lg:object-cover lg:h-full" />
    </div>
  </div>
)
