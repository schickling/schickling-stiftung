import { InferGetStaticPropsType } from 'next'
import React, { FC } from 'react'
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
    <div className="py-24 text-gray-900 bg-white">
      <Container>
        <div className="rounded inline-flex px-2.5 py-1.5 text-gray-600 font-medium text-sm bg-gray-200 mt-10">
          {event.tag}
        </div>
        <div className="mt-5 text-2xl font-bold mb-9">{event.title}</div>
        <TimeDate
          imageUrl="https://i.imgur.com/ufu0Cib.png"
          title="Datum"
          description={event.date}
        />
        <TimeDate
          imageUrl="https://i.imgur.com/n9nepuU.png"
          title="Ort"
          description="Konzerthalle in Erich-Schickling-Stiftung"
        />
      </Container>
    </div>
  </Layout>
)

export default Page

const TimeDate: FC<{
  imageUrl: string
  title: string
  description: string
}> = ({ imageUrl, title, description }) => (
  <div className="flex">
    <img src={imageUrl} className="w-6 h-6 text-gray-600" />
    <div className="ml-5">
      <div className="text-sm font-bold text-gray-600">{title}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
)
