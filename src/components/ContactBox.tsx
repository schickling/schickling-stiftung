import * as React from 'react'
import { FC } from 'react'

export const ContactBox: FC<{
  title: string
  description: string
  button: string
  number: string
}> = ({ title, description, button, number }) => (
  <div className="border rounded p-9 border-gray-300 mb-16">
    <div>
      <div className="mb-4 text-2xl font-bold">{title}</div>
      <div className="font-normal text-gray-600 mb-9">{description}</div>
      <div className="flex flex-col items-start md:flex-row md:items-center">
        <div className="px-5 py-3 text-lg font-medium text-white bg-black rounded md:mr-5">
          {button}
        </div>
        <div className="mt-4 font-bold text-gray-600 md:mt-0">{number}</div>
      </div>
    </div>
  </div>
)
