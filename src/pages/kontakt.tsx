import React, { FC } from 'react'
import { FeatureBox } from '../components/FeatureBox'
import { H1 } from '../components/H1'
import { Icons } from '../components/icons'
import { Container, Layout } from '../components/Layout'

const Page: FC = () => (
  <Layout title="Kontakt">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        {/* Image fehlt */}
        <H1 title="Anfahrt und Kontakt" />
        <FeatureBox.Grid>
          <FeatureBox.Item
            icon={<Icons.LocationMarkerOutline />}
            title="Ort"
            description="Erich-Schickling-Stiftung
        Eggisried 29 1/2
        87724 Ottobeuren"
          />
          <FeatureBox.Item
            icon={<Icons.PhoneOutline />}
            title="Kontakt"
            description="08332/936424
            info@schickling-stiftung.de"
          />
        </FeatureBox.Grid>
      </Container>
    </div>
  </Layout>
)

export default Page
