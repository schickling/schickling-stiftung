import React, { FC } from 'react'
import { ContactBox } from '../components/ContactBox'
import { Icons } from '../components/icons'
import { Layout, Container } from '../components/Layout'
import { H2 } from '../components/H2'
import { Spacer } from './veranstaltungen/[year]'
import { H1 } from '../components/H1'

const Page: FC = () => (
  <Layout title="Unterstützen">
    <div className="py-24 text-gray-900 bg-white">
      <Container className="flex flex-col space-y-10">
        <H1
          title="Unterstützen"
          subtext="Von und durch viele helfende, musizierende, denkende und gebende Hände und Köpfe lebt die Erich-Schickling-Stiftung. Um die Stiftung zu erhalten freuen wir uns über Unterstützung in allen möglichen Formen."
        />
        <div className="flex flex-col space-y-16">
          <div>
            <div className="text-2xl font-bold">
              Förderkreis Erich-Schickling e.V.
            </div>
            <div className="mt-5 mb-8">
              Um die Erich-Schickling-Stiftung als Ort der Kunst und der
              kulturellen und religiösen Bildung und Begegnung zu erhalten und
              weiterhin zugänglich zu machen, haben sich namhafte
              Persönlichkeiten aus Kunst, Kultur und Politik 1998 zum
              "Förderkreis der Erich-Schickling-Stiftung e.V."
              zusammengeschlossen.{' '}
            </div>
            <div className="mb-2 text-xl font-bold">
              Was ist der Förderkreis?
            </div>
            <div className="mb-8">
              Im Schönen sich dem göttlichen Schöpfungsgeheimnis zu nähern, war
              immer Erich Schicklings grösste Sehnsucht. In diesem Sinne hat er
              mit seiner Frau von Anbeginn ein Haus der offenen Tür für Freunde
              und Besucher geführt. Die Veranstaltungen des Förderkreises und
              der Stiftung tragen diese Tradition weiter, unterstützt durch die
              ehrenamtlich tätigen Künstler und Referenten. Der Förderkreis
              dient allein den Interessen der Erich-Schickling-Stiftung und
              unterstützt deren Aufgaben finanziell und ideell. Dazu gehören
              neben Vorträgen, Konzerten, Lesungen, Seminaren auch die
              Herausgabe von Dokumentationen und Veröffentlichungen der Bilder
              und Texte.
            </div>
            <div className="flex flex-col mb-8 lg:grid lg:grid-cols-2 lg:gap-11">
              <div className="pr-0">
                <div className="mb-2 text-xl font-bold">Vorstand</div>
                <div className="mb-4">
                  Der Vorstand des Förderkreises der Erich-Schickling-Stiftung
                  e.V. setzt sich wie folgt zusammen: Vorsitzender: Michael
                  Trieb Vorsitzender: Prof. Dr. Hans Frei Kassenführerin: Ulrike
                  Meyer Schriftführer: Peter Rietzler Beisitzer: German Fries,
                  Klaus Holetschek, Günter Schwanghart
                </div>
              </div>
              <img src="https://i.imgur.com/s95Y7g1.jpg" className="w-full" />
            </div>
            <div className="mb-2 text-xl font-bold">Mitglied werden</div>
            <div className="mb-8">
              Die Mitglieder des Förderkreises erhalten die Einladungen zu den
              Veranstaltungen, die Rundbriefe sowie die Dokumentationen der
              Stiftung. Sie zahlen meistens ermäßigten Eintritt. Mit 25 Euro
              Jahresbeitrag sind Sie Mitglied des Förderkreises, ein
              zusätzlicher Förderbeitrag steht in Ihrem Ermessen. Gerne schicken
              wir Ihnen unser Beitrittsformular zu.
            </div>
            <ContactBox
              title="Anfrage Beitrittsformular"
              description=" Sehr gerne sende wir Ihnen ein Beitrittsformular per Email oder postalisch zu."
              button="Per Email anfragen"
              number="Telefon: 08332 / 936362"
            />
          </div>
          <Spacer fullWidthOnMobile />
          <div className="flex flex-col space-y-11">
            <H2
              title="Jede Unterstützung ist willkommen!"
              subtext="Gemeinsam wird die Erich-Schickling-Stiftung zu einem Ort von Kunst, Musik, Natur und Begegnung."
            />
            <div className="grid grid-cols-1 gap-6 my-5 lg:grid-cols-2 lg:gap-10">
              <FeatureBox
                icon={<Icons.SunOutline />}
                title="Pflanzen und Bäume"
                description="Das Gelände der Erich-Schickling-Stiftung ist Heimat von
                  zahlreichen Pflanzen, Blumen und Bäumen."
              />
              <FeatureBox
                icon={<Icons.MusicNoteOutline />}
                title="Musik schenken"
                description="Im Rahmen der Veranstaltung in der Erich-Schickling-Stiftung freuen wir uns über Beiträge und Anregungen."
              />
              <FeatureBox
                icon={<Icons.CashOutline />}
                title="Für die Stiftung spenden"
                description=" Unterstützen Sie die Stiftung mit einer monetären Spende und tragen Sie somit zum Erhalt der Stiftungsgebäude und den öffentlichen Angeboten bei."
              />
              <FeatureBox
                icon={<Icons.ChatOutline />}
                title="Weitererzählen"
                description="Begeisterung steckt an! Laden Sie gerne auch Familie und Freundeskreis in die Erich-Schicklung-Stiftung ein."
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  </Layout>
)

export default Page

const FeatureBox: FC<{
  icon: JSX.Element
  title: string
  description: string
}> = ({ icon, title, description }) => (
  <div className="flex space-x-5">
    <div className="w-11 h-11">{icon}</div>
    <div className="flex flex-col space-y-1">
      <div className="font-bold text-gray-600">{title}</div>
      <div className="font-normal text-gray-600">{description}</div>
    </div>
  </div>
)
