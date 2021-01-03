import { sourcebitDataClient } from 'sourcebit-target-next'
import { GetDataResponse, Page, SourcebitProps } from '.'
import { unique } from '../utils/utils'

export type Event = {
  imageUrl: string
  tag: string
  title: string
  description: string
  place: string
  date: string
  year: number
  layout: 'event'
}

export const getYears = async (): Promise<number[]> => {
  const data: GetDataResponse = await sourcebitDataClient.getData()

  const years = unique(
    data.props.pages
      .map((_) => _.frontmatter)
      .filter((_) => _.layout === 'event')
      .map((_) => _.year as number),
  )

  years.sort((a, b) => b - a)

  return years
}

export const getEventsForYear = async ({
  year,
}: {
  year: number
}): Promise<Page<Event>[]> => {
  const data: GetDataResponse = await sourcebitDataClient.getData()
  const events = data.props.pages.filter(
    (_) => _.frontmatter.layout === 'event' && _.frontmatter.year === year,
  )
  return events as Page<Event>[]
}

export const getDetailsProps = async ({
  currentYear,
  slug,
}: {
  currentYear: number
  slug: string
}): Promise<SourcebitProps<Event>> => {
  const pagePath = `/veranstaltungen/${currentYear}/${slug}`
  const props: SourcebitProps<Event> = await sourcebitDataClient.getStaticPropsForPageAtPath(
    pagePath,
  )
  return props
}

export const getDetailsPaths = async (): Promise<string[]> => {
  const paths: string[] = await sourcebitDataClient.getStaticPaths()
  return paths.filter((_) => _.startsWith('/veranstaltungen/'))
}
