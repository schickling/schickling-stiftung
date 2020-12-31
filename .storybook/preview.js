import { withNextRouter } from 'storybook-addon-next-router'
import { addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../node_modules/.css/tailwind.css'
import './global.css'

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
)

/** @type import('@storybook/addons').Parameters */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
  layout: 'fullscreen',
}
