import { Meta } from '@storybook/react'
import { makeTemplate } from '../utils/storybook'
import { Topnav } from './Topnav'

export default {
  title: 'Topnav',
  component: Topnav,
} as Meta

const Template = makeTemplate(Topnav)

export const Default = Template.bind({})
Default.args = {
  currentPath: '/',
}
