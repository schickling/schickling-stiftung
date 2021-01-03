import { Meta } from '@storybook/react'
import { Page } from '../../models'
import { Artwork } from '../../models/artwork'
import { makeTemplate } from '../../utils/storybook'
import { ArtworkDetails } from './ArtworkDetails'

const artworkPage: Page<Artwork> = {
  __metadata: {
    id: 'content/pages/werke/bilder/mose.md',
    source: 'sourcebit-source-filesystem',
    sourceName: 'pages',
    sourcePath: 'content/pages',
    relSourcePath: 'werke/bilder/mose.md',
    relProjectPath: 'content/pages/werke/bilder/mose.md',
    modelType: 'page',
    modelName: 'artwork',
    modelLabel: 'Event',
    urlPath: '/werke/bilder/mose',
  },
  frontmatter: {
    title: 'Mose',
    imageUrl:
      'https://www.schickling-stiftung.de/static/9e95780678bb3265a0bbc44457068c4b/775d9/image.jpg',
    imageRatio: 1.5324947589098532,
    format: 'Vertikal',
    technique: 'Hinterglas',
    location: 'Erich Schickling Stiftung',
    date: '1973',
    size: '1.5m x 0.9m',
    category: 'Bilder',
    layout: 'artwork',
  },
  markdown:
    '\nTheseus war der Sohn des athenischen Königs Aigeus. Jedes Jahr wurden dem Ungeheuer Minotaurus auf Kreta sieben Jünglinge und sieben Jungfrauen geopfert. Das waren junge Mädchen und junge Männer, die man dem Minotaurus übergab, um diesen milde zu stimmen. Minotaurus bewohnte ein Labyrinth, bekannt unter dem Namen "Labyrinth des Minotaurus".\n',
}

export default {
  title: 'Artwork Details',
  component: ArtworkDetails,
} as Meta

const Template = makeTemplate(ArtworkDetails)

export const Default = Template.bind({})
Default.args = {
  nextPath: null,
  prevPath: null,
  subNavItems: [{ title: 'Bilder', path: '/werke/bilder' }],
  artwork: artworkPage,
}
