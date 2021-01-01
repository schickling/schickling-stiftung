import { InferGetStaticPropsType } from 'next'
import React, { FC } from 'react'
import { Spacer } from '.'
import { Icons } from '../../../components/icons'
import { Layout, Container } from '../../../components/Layout'
import { events, years } from '../../../data/events'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { escapeAndParamCase } from '../../../utils/utils'

export const getStaticProps = defineStaticProps(async (context) => {
  const currentYear = parseInt(context.params!.year as string)
  const event = events.find(
    (_) =>
      context.params!.slug === escapeAndParamCase(_.title) &&
      _.year === currentYear,
  )!
  return {
    props: {
      event,
      years,
    },
  }
})

export const getStaticPaths = defineStaticPaths(async () => {
  const paths = events.map((_) => ({
    params: {
      year: _.year.toString(),
      slug: escapeAndParamCase(_.title),
    },
  }))

  return { paths, fallback: false }
})

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  event,
  years,
}) => (
  <Layout
    title={event.title}
    subNavItems={[
      { path: '/veranstaltungen', title: 'Übersicht', exact: true },
      ...years.map((_) => ({ path: `/veranstaltungen/${_}`, title: `${_}` })),
    ]}
  >
    <div className="py-10 text-gray-900 bg-white lg:py-24">
      <Container>
        <div className="rounded inline-flex px-2.5 py-1.5 text-gray-600 font-medium text-sm bg-gray-200">
          {event.tag}
        </div>
        <div className="mt-5 text-2xl font-bold mb-9">{event.title}</div>
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2 lg:gap-16">
          <TimeDate
            icon={<Icons.ClockOutline />}
            title="Datum"
            description={event.date}
          />
          <TimeDate
            icon={<Icons.LocationMarkerOutline />}
            title="Ort"
            description="Konzerthalle in Erich-Schickling-Stiftung"
          />
        </div>
        <Spacer className="hidden lg:block" />
        <div className="mt-8 mb-10 font-normal lg:mb-16">
          Der Pianist Andrej Jussow spielt Klaviersonaten aus der frühen,
          mittleren und späten Schaffenszeit Ludwig van Beethovens, gipfelnd in
          seiner letzten Klaviersonate C-Moll op. 111 mit der berühmten Arietta
          und ihren transzendenten Variationen.
        </div>
        <img src="https://i.imgur.com/JDtlA2b.png" className="w-full" />
        <div className="flex justify-center mt-3 text-base font-normal text-gray-600">
          Andrej Jussow
        </div>
        <div className="mt-10 mb-16 lg:mt-16">
          Andrej Jussow stammt aus der Ukraine und gehört einer ausdrucksstarken
          jungen Pianistengeneration an, von russischer Tradition geprägt, dem
          klassischen Repertoire sowohl als Solist wie als Kammermusiker
          zutiefst verpflichtet. Er konzertiert häufig mit den Klavierkonzerten
          von Beethoven, Chopin, Brahms, Prokofieff, darunter oft mit dem
          Orchester der Württembergischen Staatstheater Stuttgart. Als
          Lehrbeauftragter für Kammermusik an der HfM arbeitet er begeistert mit
          jungen wie arrivierten Musikern zusammen.
        </div>
        <div className="grid grid-cols-1 gap-3 gap-5 lg:grid-cols-3">
          <img src="https://i.imgur.com/8EWvPH8.png" />
          <img src="https://i.imgur.com/Ds5yyxb.png" className="w-full" />
          <img src="https://i.imgur.com/hBBZs9N.png" className="w-full" />
        </div>
      </Container>
    </div>
  </Layout>
)

export default Page

const TimeDate: FC<{
  icon: JSX.Element
  title: string
  description: string
}> = ({ icon, title, description }) => (
  <div className="flex">
    <div className="text-gray-600">{icon}</div>
    <div className="ml-5">
      <div className="mb-1 text-sm font-bold text-gray-600">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
)
