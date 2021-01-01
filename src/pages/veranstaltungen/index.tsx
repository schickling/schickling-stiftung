import { InferGetStaticPropsType } from 'next'
import React, { FC, Fragment } from 'react'
import { Layout, Container } from '../../components/Layout'
import { events, years } from '../../data/events'
import { defineStaticProps } from '../../utils/next'
import { EventBox, PDFDownload, Spacer } from './[year]'

export const getStaticProps = defineStaticProps(async () => {
  return {
    props: {
      events: events.filter((_) => _.year === 2020),
      years,
    },
  }
})

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  events,
  years,
}) => (
  <Layout
    title="Veranstaltungen"
    subNavItems={[
      { path: '/veranstaltungen/', title: 'Übersicht', exact: true },
      ...years.map((_) => ({ path: `/veranstaltungen/${_}`, title: `${_}` })),
    ]}
  >
    <div className="py-10 text-gray-600 bg-white lg:py-24">
      <Container>
        <div className="mb-5 text-2xl font-bold text-gray-900">
          Veranstaltungen
        </div>
        <div className="pb-10 font-normal text-gray-900">
          Alle unsere Künstler und Referenten sind ehrenamtlich für die Stiftung
          tätig. Sie sind dem Hause Schickling in besonderer Weise verbunden.
          Ihnen gilt zuerst unser Dank! Manche kommen immer wieder zu uns und
          machen ihr Wort, ihre Musik, ihre Kunst allen zum Geschenk. Junge
          Musiker erproben hier gerne ihre Programme vor einem wohlgesonnenen
          Publikum.
        </div>
        {events.map((event, index) => (
          <Fragment key={event.title}>
            {index > 0 && <Spacer />}
            <EventBox event={event} />
          </Fragment>
        ))}
        <div className="mt-16 mb-1 text-xl font-bold text-gray-900">
          Jahresprogramm als PDF herunterladen
        </div>
        <div className="font-normal mb-11">
          Fotos, Videos und Text der letzten Veranstaltungen finden Sie hier.
        </div>
        <div className="grid cols-1 gap-11 lg:grid-cols-3">
          <PDFDownload
            imageUrl="https://i.imgur.com/4LtthQc.png/"
            description="Jahresprogramm 2021 als PDF →"
          />
          <PDFDownload
            imageUrl="https://i.imgur.com/3uy98We.png"
            description="Jahresprogramm 2020 als PDF →"
          />
          <PDFDownload
            imageUrl="https://i.imgur.com/u7FQKvA.png"
            description="Jahresprogramm 2019 als PDF →"
          />
        </div>
        <Spacer className="hidden lg:block" />
        <div className="mt-10 text-xl font-bold text-gray-900">
          Kostenlosen Newsletter der Schickling Stiftung erhalten
        </div>
        <div className="mt-1 mb-6 font-normal">
          In unserem Newsletter informieren wir regelmäßig über alle
          Veranstaltung in und außerhalb der Stiftung. In unserem Newsletter
          informieren wir regelmäßig über alle Veranstaltung in und außerhalb
          der Stiftung.
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5">
          <input
            type="text"
            className="inline-flex px-5 py-3 pt-3 pl-5 font-normal text-gray-500 border border-gray-300 rounded"
            placeholder="Ihr Name"
          />
          <input
            type="text"
            className="inline-flex px-5 py-3 pt-3 pl-5 font-normal text-gray-500 border border-gray-300 rounded"
            placeholder="Ihre Email Adresse"
          />
          <div className="inline-flex justify-center px-5 py-3 font-medium text-white bg-black rounded">
            Für Newsletter anmelden
          </div>
        </div>
      </Container>
    </div>
  </Layout>
)

export default Page
