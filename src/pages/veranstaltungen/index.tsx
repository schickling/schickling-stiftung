import { InferGetStaticPropsType } from 'next'
import React, { FC, Fragment } from 'react'
import { EventFlyer } from '../../components/EventFlyer'
import { H1 } from '../../components/H1'
import { H2 } from '../../components/H2'
import { Layout, Container } from '../../components/Layout'
import { getEventsForYear, getYears } from '../../models/event'
import { defineStaticProps } from '../../utils/next'
import { promiseAllObject } from '../../utils/utils'
import { EventBox, Spacer } from './[year]'

export const getStaticProps = defineStaticProps(async () => {
  const { years, events } = await promiseAllObject({
    years: getYears(),
    events: getEventsForYear({ year: new Date().getFullYear() }),
  })

  return { props: { events, years } }
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
    <div className="py-10 text-gray-900 bg-white lg:py-24">
      <Container className="flex flex-col space-y-16">
        <H1
          title="Veranstaltungen"
          subtext="Alle unsere Künstler und Referenten sind ehrenamtlich für die Stiftung
          tätig. Sie sind dem Hause Schickling in besonderer Weise verbunden.
          Ihnen gilt zuerst unser Dank! Manche kommen immer wieder zu uns und
          machen ihr Wort, ihre Musik, ihre Kunst allen zum Geschenk. Junge
          Musiker erproben hier gerne ihre Programme vor einem wohlgesonnenen
          Publikum."
        />
        <div>
          {events.map(({ frontmatter: event, __metadata }, index) => (
            <Fragment key={event.title}>
              {index > 0 && <Spacer />}
              <EventBox event={event} path={__metadata.urlPath} />
            </Fragment>
          ))}
        </div>
        <Spacer fullWidthOnMobile />
        <EventFlyer />
        <Spacer fullWidthOnMobile />
        <Newsletter />
      </Container>
    </div>
  </Layout>
)

export default Page

const Newsletter: FC = () => (
  <div className="flex flex-col space-y-9">
    <H2
      title="Kostenlosen Newsletter der Schickling Stiftung erhalten"
      subtext="In unserem Newsletter informieren wir regelmäßig über alle Veranstaltung
      in und außerhalb der Stiftung. In unserem Newsletter informieren wir
      regelmäßig über alle Veranstaltung in und außerhalb der Stiftung."
    />

    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5">
      <input
        type="text"
        className="inline-flex px-5 py-3 font-normal text-gray-500 border border-gray-300 rounded shadow-none"
        placeholder="Ihr Name"
      />
      <input
        type="text"
        className="inline-flex px-5 py-3 font-normal text-gray-500 border border-gray-300 rounded shadow-none"
        placeholder="Ihre Email Adresse"
      />
      <div className="inline-flex justify-center px-5 py-3 font-medium text-white bg-black rounded">
        Für Newsletter anmelden
      </div>
    </div>
  </div>
)
