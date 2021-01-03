import * as React from 'react'
import { FC } from 'react'
import { H2 } from './H2'

export const ContactBox: FC<{
  title: string
  description: string
  button: string
  number: string
}> = ({ title, description, button, number }) => (
  <div className="border border-gray-300 rounded p-9">
    <div className="flex flex-col space-y-4">
      <H2 title={title} subtext={description} />
      <div className="flex flex-col items-start space-y-4 md:space-y-0 md:space-x-5 md:flex-row md:items-center">
        <div className="px-5 py-3 text-lg font-medium text-white bg-black rounded">
          {button}
        </div>
        <div className="font-bold text-gray-600">{number}</div>
      </div>
    </div>
  </div>
)
