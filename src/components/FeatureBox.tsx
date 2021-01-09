import { FC } from 'react'

const Grid: FC = ({ children }) => (
  <div className="grid grid-cols-1 gap-6 my-5 lg:grid-cols-2 lg:gap-10">
    {children}
  </div>
)

const Item: FC<{
  icon: JSX.Element
  title: string
  description: string
}> = ({ icon, title, description }) => (
  <div className="flex space-x-5 text-gray-600">
    <div className="">{icon}</div>
    <div className="flex flex-col space-y-1 text-sm lg:text-base">
      <div className="font-bold">{title}</div>
      <div className="font-normal">{description}</div>
    </div>
  </div>
)

export const FeatureBox = { Grid, Item }
