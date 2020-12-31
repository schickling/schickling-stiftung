import { Meta } from '@storybook/react'
import { makeTemplate } from '../utils/storybook'
import { Footer } from './Footer'

export default {
  title: 'Footer',
  component: Footer,
} as Meta

const Template = makeTemplate(Footer)

export const Default = Template.bind({})
Default.args = {}
