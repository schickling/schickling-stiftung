import { InferGetStaticPropsType } from 'next'
import React, { FC } from 'react'
import Markdown from 'react-markdown'
import { Spacer } from '.'
import { Icons } from '../../../components/icons'
import { Layout, Container } from '../../../components/Layout'
import { defineStaticPaths, defineStaticProps } from '../../../utils/next'
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates'
import {
  getDetailsPaths,
  getDetailsProps,
  getYears,
} from '../../../models/event'
import { promiseAllObject } from '../../../utils/utils'

export const getStaticProps = defineStaticProps(async (context) => {
  const { years, props } = await promiseAllObject({
    years: getYears(),
    props: getDetailsProps({
      currentYear: parseInt(context.params!.year as string),
      slug: context.params!.slug as string,
    }),
  })

  return { props: { years, ...props.page, ...props } }
})

export const getStaticPaths = defineStaticPaths(async () => {
  const paths = await getDetailsPaths()

  return { paths, fallback: false }
})

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  years,
  frontmatter: event,
  markdown,
}) => {
  return (
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
          <Spacer fullWidthOnMobile />
          <Markdown
            className="markdown"
            children={markdown}
            renderers={{
              paragraph: ({ children }) => (
                <div className="mb-10 lg:mb-16">{children}</div>
              ),
              image: ({ src, alt }) => (
                <div>
                  <img src={src} alt={alt} title={alt} className="w-full" />
                  {alt !== '' && (
                    <div className="flex justify-center mt-3 text-base font-normal text-gray-600">
                      {alt}
                    </div>
                  )}
                </div>
              ),
            }}
          />
          <div className="grid grid-cols-1 gap-3 lg:gap-5 lg:grid-cols-3">
            <img src="https://i.imgur.com/8EWvPH8.png" />
            <img src="https://i.imgur.com/Ds5yyxb.png" className="w-full" />
            <img src="https://i.imgur.com/hBBZs9N.png" className="w-full" />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default withRemoteDataUpdates(Page)

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
