import React, { FC } from 'react'
import { ContactBox } from '../components/ContactBox'
import { FeatureBox } from '../components/FeatureBox'
import { H1 } from '../components/H1'
import { H2 } from '../components/H2'
import { Icons } from '../components/icons'
import { Layout, Container } from '../components/Layout'
import { EventBox, Spacer } from './veranstaltungen/[year]'

const Page: FC = () => (
  <Layout title="Ort">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        <div className="flex flex-col space-y-11">
          {/* Dronenvideo fehlt */}
          <div>
            <H1
              title="Die Stiftung entdecken"
              subtext="Alle unsere Künstler und Referenten sind ehrenamtlich für die Stiftung
        tätig. Sie sind dem Hause Schickling in besonderer Weise verbunden.
        Ihnen gilt zuerst unser Dank! Manche kommen immer wieder zu uns und
        machen ihr Wort, ihre Musik, ihre Kunst allen zum Geschenk. Junge
        Musiker erproben hier gerne ihre Programme vor einem wohlgesonnenen
        Publikum."
            />
          </div>
          <FeatureBox.Grid>
            <FeatureBox.Item
              icon={<Icons.QrcodeOutline />}
              title="QR Codes"
              description="Vorort findest du an den Standorten 1-10 QR Codes, die sich ganz einfach mit deinem Smartphone scannen lassen. So erfährst du noch mehr über die Kunstwerke der Stiftung."
            />
            <FeatureBox.Item
              icon={<Icons.LocationMarkerOutline />}
              title="Ort"
              description="Erich-Schickling Stiftung
              Eggisried 29 1/2
              87724 Ottobeuren"
            />
          </FeatureBox.Grid>
          <div>
            <img
              src="https://i.imgur.com/J8zqK4O.jpg"
              className="w-full rounded"
            />
          </div>

          <div className="grid gap-4 cols-1 lg:grid-cols-2 lg:gap-6">
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
              imageUrl="https://i.imgur.com/9bhikO8.png"
            />
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
          <div className="text-2xl font-bold">Führung durch die Stiftung</div>
          <EventBox
            event={{
              title: 'Einblicke in das Schaffen und Werk des Künstlers',
              date: 'Sonntag, 03.01.2021 um 15:00 - 16:00 Uhr',
              description:
                'Im Weiler Eggisried bei Ottobeuren hat der Künstler Erich Schickling (1924-2012) in über 60-jähriger Arbeit zusammen mit seiner Frau Inge eine Begegnungsstätte für Kunst und Religion geschaffen.',
              imageUrl: 'https://i.imgur.com/tpMrNgz.png',
              layout: 'event',
              place: 'In der Erich Schickling Stiftung',
              tag: 'Wöchentliche Führung',
              year: 2021,
            }}
            path="/veranstaltungen/fuehrung"
          />
        </div>
        <Spacer fullWidthOnMobile />
        <div className="flex flex-col space-y-11">
          <H2
            title="Öffnungszeiten des Stiftungsgeländes"
            subtext="Montag - Sonntag, 10:00 Uhr - 18:00 Uhr oder auf Anfrage."
          />
          <ContactBox
            title="Kontakt"
            description="Das Gelände der Stiftung mit Kapelle ist für Besuch jederzeit
        zugänglich. Die Ausstellungsgebäuden sind im Rahmen der Führungen
        oder auf Anfrage kostenfrei zugänglich."
            button="Per Email anfragen"
            number="Telefon: 08332 / 936362"
          />
        </div>
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
  <div className="flex flex-col justify-between border border-gray-300 rounded sm:flex-row">
    <div className="p-6">
      <div className="flex items-center mb-1">
        <div className="border flex justify-center items-center w-6 h-6 rounded-full text-sm leading-none border-gray-900 mr-2.5">
          {number}
        </div>
        <div className="text-lg font-bold">{title} →</div>
      </div>
      <div className="font-normal text-gray-600">{description}</div>
    </div>
    <div className="flex-shrink-0">
      <img src={imageUrl} className="object-cover w-full sm:w-32 sm:h-auto" />
    </div>
  </div>
)
