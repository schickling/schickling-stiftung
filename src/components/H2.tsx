import * as React from 'react'
import { FC } from 'react'

export const H2: FC<{
  title: string
  subtext: string
}> = ({ title, subtext }) => (
  <div className="flex flex-col space-y-1">
    <div className="text-2xl font-bold">{title}</div>
    <div className="font-normal text-gray-600">{subtext}</div>
  </div>
)
