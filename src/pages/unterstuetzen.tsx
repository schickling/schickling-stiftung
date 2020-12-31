import { FC } from 'react'
import { Layout, Container } from '../components/Layout'

const Page: FC = () => (
  <Layout title="Unterstützen">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        <div className="text-4xl font-bold">Unterstützen</div>
        <div className="mt-5 mb-10">
          Von und durch viele helfende, musizierende, denkende und gebende Hände
          und Köpfe lebt die Erich-Schickling-Stiftung. Um die Stiftung zu
          erhalten freuen wir uns über Unterstützung in allen möglichen Formen.
        </div>
        <div className="text-2xl font-bold">
          Förderkreis Erich-Schickling e.V.
        </div>
        <div className="mt-5 mb-8">
          Um die Erich-Schickling-Stiftung als Ort der Kunst und der kulturellen
          und religiösen Bildung und Begegnung zu erhalten und weiterhin
          zugänglich zu machen, haben sich namhafte Persönlichkeiten aus Kunst,
          Kultur und Politik 1998 zum "Förderkreis der Erich-Schickling-Stiftung
          e.V." zusammengeschlossen.{' '}
        </div>
        <div className="mb-2 text-xl font-bold">Was ist der Förderkreis?</div>
        <div className="mb-8">
          Im Schönen sich dem göttlichen Schöpfungsgeheimnis zu nähern, war
          immer Erich Schicklings grösste Sehnsucht. In diesem Sinne hat er mit
          seiner Frau von Anbeginn ein Haus der offenen Tür für Freunde und
          Besucher geführt. Die Veranstaltungen des Förderkreises und der
          Stiftung tragen diese Tradition weiter, unterstützt durch die
          ehrenamtlich tätigen Künstler und Referenten. Der Förderkreis dient
          allein den Interessen der Erich-Schickling-Stiftung und unterstützt
          deren Aufgaben finanziell und ideell. Dazu gehören neben Vorträgen,
          Konzerten, Lesungen, Seminaren auch die Herausgabe von Dokumentationen
          und Veröffentlichungen der Bilder und Texte.
        </div>
        <div className="flex flex-col mb-8">
          <div className="pr-0">
            <div className="mb-2 text-xl font-bold">Vorstand</div>
            <div className="mb-4">
              Der Vorstand des Förderkreises der Erich-Schickling-Stiftung e.V.
              setzt sich wie folgt zusammen: Vorsitzender: Michael Trieb
              Vorsitzender: Prof. Dr. Hans Frei Kassenführerin: Ulrike Meyer
              Schriftführer: Peter Rietzler Beisitzer: German Fries, Klaus
              Holetschek, Günter Schwanghart
            </div>
          </div>
          <img src="https://i.imgur.com/s95Y7g1.jpg" className="w-80" />
        </div>
        <div className="mb-2 text-xl font-bold">Mitglied werden</div>
        <div className="mb-8">
          Die Mitglieder des Förderkreises erhalten die Einladungen zu den
          Veranstaltungen, die Rundbriefe sowie die Dokumentationen der
          Stiftung. Sie zahlen meistens ermäßigten Eintritt. Mit 25 Euro
          Jahresbeitrag sind Sie Mitglied des Förderkreises, ein zusätzlicher
          Förderbeitrag steht in Ihrem Ermessen. Gerne schicken wir Ihnen unser
          Beitrittsformular zu.
        </div>
        <div className="border border-gray-300 rounded pt-9 pr-9 py-9 px-9">
          <div>
            <div className="mb-4 text-2xl font-bold">
              Anfrage Beitrittsformular
            </div>
            <div className="font-normal text-gray-600 mb-9">
              Sehr gerne sende wir Ihnen ein Beitrittsformular per Email oder
              postalisch zu.
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center">
              <div className="px-5 py-3 mb-4 mr-0 text-lg font-medium text-white bg-black md:mb-0 md:mr-5">
                Per Email anfragen
              </div>
              <div className="font-bold text-gray-600">
                Telefon: 08332 / 936362
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px my-5 bg-gray-200" />
        <div className="mt-5 text-2xl font-bold">
          Jede Unterstützung ist willkommen!
        </div>
        <div className="mt-5">
          Gemeinsam wird die Erich-Schickling-Stiftung zu einem Ort von Kunst,
          Musik, Natur und Begegnung.
        </div>
        <div className="grid grid-cols-1 gap-5 my-5 lg:grid-cols-2">
          <FeatureBox
            imageUrl="https://i.imgur.com/MUk0BBh.png"
            title="Pflanzen und Bäume"
            description="Das Gelände der Erich-Schickling-Stiftung ist Heimat von
                  zahlreichen Pflanzen, Blumen und Bäumen."
          />
          <FeatureBox
            imageUrl="https://i.imgur.com/8lzq0Fk.png"
            title="Musik schenken"
            description="Im Rahmen der Veranstaltung in der Erich-Schickling-Stiftung
          freuen wir uns über Beiträge und Anregungen."
          />
          <FeatureBox
            imageUrl="https://i.imgur.com/5p0Egm9.png"
            title="Für die Stiftung spenden"
            description=" Unterstützen Sie die Stiftung mit einer monetären Spende und
            tragen Sie somit zum Erhalt der Stiftungsgebäude und den
            öffentlichen Angeboten bei."
          />
          <FeatureBox
            imageUrl="https://i.imgur.com/se8R7f2.png"
            title="Weitererzählen"
            description="Begeisterung steckt an! Laden Sie gerne auch Familie und
            Freundeskreis in die Erich-Schicklung-Stiftung ein."
          />
        </div>
      </Container>
    </div>
  </Layout>
)

export default Page

const FeatureBox: FC<{
  imageUrl: string
  title: string
  description: string
}> = ({ imageUrl, title, description }) => (
  <div className="flex">
    <img src={imageUrl} className="w-11 h-11" />
    <div className="ml-5">
      <div className="font-bold text-gray-600">{title}</div>
      <div className="mt-1 font-normal text-gray-600">{description}</div>
    </div>
  </div>
)
