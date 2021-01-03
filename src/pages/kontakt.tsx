import React, { FC } from 'react'
import { ContactBox } from '../components/ContactBox'
import { Layout, Container } from '../components/Layout'
import { EventBox, Spacer } from './veranstaltungen/[year]'

const Page: FC = () => (
  <Layout title="Kontak">
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        <div>Anfahrt und Kontakt</div>
      </Container>
    </div>
  </Layout>
)
