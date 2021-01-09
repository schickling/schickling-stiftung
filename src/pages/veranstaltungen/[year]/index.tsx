import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React, { FC, Fragment } from 'react'
import { Layout, Container } from '../../../components/Layout'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { promiseAllObject } from '../../../utils/utils'
import { Event, getEventsForYear, getYears } from '../../../models/event'
import { H1 } from '../../../components/H1'
import { EventFlyer } from '../../../components/EventFlyer'

export const getStaticProps = defineStaticProps(async (context) => {
  const currentYear = parseInt(context.params!.year as string)
  const { events, years } = await promiseAllObject({
    events: getEventsForYear({ year: currentYear }),
    years: getYears(),
  })

  return { props: { events, years, currentYear } }
})

export const getStaticPaths = defineStaticPaths(async () => {
  const years = await getYears()
  const paths = years.map((_) => ({ params: { year: `${_}` } }))

  return { paths, fallback: false }
})

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  events,
  years,
  currentYear,
}) => (
  <Layout
    title="Veranstaltungen"
    subNavItems={[
      { path: '/veranstaltungen', title: 'Übersicht', exact: true },
      ...years.map((_) => ({ path: `/veranstaltungen/${_}`, title: `${_}` })),
    ]}
  >
    <div className="py-10 text-gray-900 bg-white lg:py-24">
      <Container className="flex flex-col space-y-16">
        <H1
          title={`Veranstaltungen in ${currentYear}`}
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
        <Spacer />
        <EventFlyer />
      </Container>
    </div>
  </Layout>
)

export default Page

export const Spacer: FC<{
  className?: string
  fullWidthOnMobile?: boolean
}> = ({ className, fullWidthOnMobile = false }) => (
  <div
    className={`h-px bg-gray-200 my-9 ${
      fullWidthOnMobile ? 'w-screen -mx-6 lg:mx-0 lg:w-full' : 'w-full'
    } ${className ?? ''}`}
  />
)

export const EventBox: FC<{
  event: Event
  path: string
}> = ({ event, path }) => {
  const { imageUrl, tag, title, description, place, date } = event
  // const path = `/veranstaltungen/${year}/${escapeAndParamCase(title)}`
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-35-65 lg:gap-11">
      {/* NOTE Wrapping div is needed otherwise h-full will be 100vh in Safari */}
      <div>
        <img src={imageUrl} className="w-full lg:object-cover lg:h-full" />
      </div>
      <div>
        <div className="inline-flex rounded px-2.5 py-1.5 text-gray-600 font-medium text-sm bg-gray-200">
          {tag}
        </div>
        <div className="text-gray-900 text-lg font-bold mt-2.5 mb-2">
          <Link href={path}>
            <a>{title} →</a>
          </Link>
        </div>
        <div className="font-normal text-gray-900">{description}</div>
        <div className="font-bold mt-6 mb-1.5 text-gray-600">{place}</div>
        <div className="flex justify-between mt-1.5">
          <div className="font-bold text-gray-900">{date}</div>
          <div className="hidden font-bold text-gray-900 lg:block">
            <Link href={path}>
              <a>Mehr →</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
