export type SourcebitProps<FM extends Frontmatter> = {
  data: any
  page: Page<FM>
  pages: Page[]
  path: string
  liveUpdate: boolean
  liveUpdateEventName: 'props_changed'
  liveUpdatePort: number
}

type Frontmatter = { layout: string } & Record<string, any>

export type Page<FM extends Frontmatter = Frontmatter> = {
  frontmatter: FM
  markdown: string
  __metadata: Metadata
}

type Metadata = {
  id: string
  modelLabel: string
  modelName: string
  modelType: string
  relProjectPath: string
  relSourcePath: string
  source: string
  sourceName: string
  sourcePath: string
  urlPath: string
}

export type GetDataResponse = {
  props: {
    pages: Page[]
    data: any
    liveUpdate: boolean
    liveUpdateEventName: 'props_changed'
    liveUpdatePort: number
  }
  pages: PageWrapper[]
}

type PageWrapper = {
  path: string
  page: Page
}
