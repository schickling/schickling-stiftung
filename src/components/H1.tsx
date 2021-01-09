import * as React from 'react'
import { FC } from 'react'

export const H1: FC<{
  title: string
  subtext?: string
}> = ({ title, subtext }) => (
  <div className="flex flex-col space-y-5">
    <div className="text-4xl font-bold">{title}</div>
    {subtext && <div>{subtext}</div>}
  </div>
)
