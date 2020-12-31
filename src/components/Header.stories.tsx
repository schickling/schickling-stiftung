import { Meta } from '@storybook/react'
import { makeTemplate } from '../utils/storybook'
import { Header } from './Header'

export default {
  title: 'Header',
  component: Header,
} as Meta

const Template = makeTemplate(Header)

export const Default = Template.bind({})
Default.args = {
  currentPath: '/',
}

export const Subnav = Template.bind({})
Subnav.args = {
  currentPath: '/werke/bilder',
  subNavItems: [
    { title: 'Bilder', path: '/werke/bilder' },
    { title: 'Architektur', path: '/werke/architektur' },
  ],
}
