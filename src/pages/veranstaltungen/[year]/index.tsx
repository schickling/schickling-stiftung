import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { FC, Fragment } from 'react'
import { Layout, Container } from '../../../components/Layout'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { promiseAllObject } from '../../../utils/utils'
import { Event, getEventsForYear, getYears } from '../../../models/event'

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
    <div className="py-10 text-gray-600 bg-white lg:py-24">
      <Container>
        <div className="mb-5 text-2xl font-bold text-gray-900">
          Veranstaltungen in {currentYear}
        </div>
        <div className="pb-10 font-normal text-gray-900">
          Alle unsere Künstler und Referenten sind ehrenamtlich für die Stiftung
          tätig. Sie sind dem Hause Schickling in besonderer Weise verbunden.
          Ihnen gilt zuerst unser Dank! Manche kommen immer wieder zu uns und
          machen ihr Wort, ihre Musik, ihre Kunst allen zum Geschenk. Junge
          Musiker erproben hier gerne ihre Programme vor einem wohlgesonnenen
          Publikum.
        </div>
        {events.map(({ frontmatter: event, __metadata }, index) => (
          <Fragment key={event.title}>
            {index > 0 && <Spacer />}
            <EventBox event={event} path={__metadata.urlPath} />
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
      </Container>
    </div>
  </Layout>
)

export default Page

export const PDFDownload: FC<{
  imageUrl: string
  description: string
}> = ({ imageUrl, description }) => (
  <div>
    <img src={imageUrl} className="w-full mb-6" />
    <div className="flex justify-center px-5 py-3 pl-5 text-base font-medium border border-gray-300 rounded">
      {description}
    </div>
  </div>
)

export const Spacer: FC<{ className?: string }> = ({ className }) => (
  <div className={`w-full h-px bg-gray-200 my-9 ${className ?? ''}`} />
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
