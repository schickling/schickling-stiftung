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
    <Container className="py-3">
      <div className="h-16"></div>
      {event.title}
    </Container>
  </Layout>
)

export default Page
