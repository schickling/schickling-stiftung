import React, { FC } from 'react'
import { FeatureBox } from '../components/FeatureBox'
import { H1 } from '../components/H1'
import { H2 } from '../components/H2'
import { Icons } from '../components/icons'
import { Container, Layout } from '../components/Layout'

const Page: FC = () => (
  <Layout title="Kontakt">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        {/* Image fehlt */}
        <div className="flex flex-col space-y-16">
          <H1 title="Anfahrt und Kontakt" />
          <FeatureBox.Grid>
            <FeatureBox.Item
              icon={<Icons.LocationMarkerOutline />}
              title="Ort"
              description={`Erich-Schickling-Stiftung
        Eggisried 29 1/2
        87724 Ottobeuren`}
            />
            <FeatureBox.Item
              icon={<Icons.PhoneOutline />}
              title="Kontakt"
              description={`08332/936424
                        info@schickling-stiftung.de`}
            />
          </FeatureBox.Grid>
          <div>
            <img
              src="https://i.imgur.com/qoh85Ar.png"
              className="w-full rounded"
            />
          </div>

          <div>
            <div className="flex flex-col space-y-5">
              <H2 title="Anfahrt zur Erich-Schickling-Stiftung" />
              <div className="flex flex-col space-y-1">
                <div className="text-xl font-bold">
                  Autobahn A7 von Ulm nach Memmingen
                </div>
                <div>
                  Bei Autobahnkreuz Memmingen weiterfahren auf A7 Richtung
                  Kempten-Füssen bis zur Ausfahrt Memmingen-Süd. Rechts nach
                  Memmingen, dann bald rechts ab nach Ottobeuren , den Schildern
                  nach Ottobeuren folgen. Beim Ortseingang von Ottobeuren links
                  halten auf der Haupt- und Umgehungsstraße (rechts würde es zur
                  Ortsmitte und zur Basilika gehen). Auf der Umgehungsstraße ca.
                  500m bleiben, bis links eine kleine Straße abzweigt Richtung
                  Stephansried, erstes braunes Schild „Schickling-Stiftung“. Die
                  Abzweigung wird linkerhand von Büschen etwas verdeckt. Der
                  Straße bergauf folgend, oben am Waldrand bei Kreuzung links
                  nach Eggisried. Den braunen Schildern folgend in Eggisried bei
                  der Kapelle links einbiegen in den Weiler, nach kurzem rechts
                  durch die Unterführung und sogleich links halten und ins Tal
                  hinunterfahren bis zum weißen Turm. Parkplatz unter den
                  Apfelbäumen oder unten an der Günz.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-1">
              <div className="text-xl font-bold">Anfahrt von München A96</div>
              <div>
                Autobahn München – Memmingen (Richtung Lindau) Ausfahrt
                Erkheim/Ottobeuren. Über Sontheim - Attenhausen - Stephansried -
                Eggisried. In Eggisried bei der weissen Kapelle einbiegen und
                den Schildern zur Schickling-Stiftung folgen bis ins Günztal.
                Parkplatz unter den Apfelbäumen oder unten an der Günz.
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-1">
              <div className="text-xl font-bold">
                Anfahrt von Süden (Lindau) A96
              </div>
              <div>
                Autobahn von Lindau nach Memmingen bis Autobahnkreuz Memmingen,
                wechseln auf A7 Richtung Kempten/Füssen, nächste Ausfahrt
                Memmingen-Süd nehmen. Rechts nach Memmingen, dann bald rechts ab
                nach Ottobeuren , den Schildern nach Ottobeuren folgen. Beim
                Ortseingang von Ottobeuren links halten auf der Haupt- und
                Umgehungsstraße (rechts würde es zur Ortsmitte und zur Basilika
                gehen). Auf der Umgehungsstraße ca. 500m bleiben, bis links eine
                kleine Straße abzweigt Richtung Stephansried, erstes braunes
                Schild „Schickling-Stiftung“. Die Abzweigung wird linkerhand von
                Büschen etwas verdeckt. Der Straße bergauf folgend, oben am
                Waldrand bei Kreuzung links nach Eggisried. Den braunen
                Schildern folgend inEggisried bei der Kapelle links einbiegen in
                den Weiler, nach kurzem rechts durch die Unterführung und
                sogleich links halten und ins Tal hinunterfahren bis zum weißen
                Turm. Parkplatz unter den Apfelbäumen oder unten an der Günz.
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-1">
              <div className="text-xl font-bold">Parken an der Stiftung</div>
              <div>
                Öffentliche Parkplätze der Stfittung befinden sich direkt an der
                Stiftung neben dem Fluß “Günz”.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </Layout>
)

export default Page
