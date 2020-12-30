import { Story } from '@storybook/react'
import { FC } from 'react'

export type FCStory<FC_ extends FC<any>> = Story<Parameters<FC_>[0]>
export const makeTemplate = <FC_ extends FC<any>>(Comp: FC_): FCStory<FC_> => (
  args,
) => <Comp {...args} />
