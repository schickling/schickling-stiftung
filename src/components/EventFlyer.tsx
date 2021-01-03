import * as React from 'react'
import { FC } from 'react'
import { H2 } from './H2'

export const EventFlyer: FC<{}> = ({}) => (
  <div className="flex flex-col space-y-10">
    <H2
      title="Jahresprogramm als PDF herunterladen"
      subtext="Fotos, Videos und Text der letzten Veranstaltungen finden Sie hier."
    />
    <div className="grid cols-1 gap-11 lg:grid-cols-3">
      <PDFDownload
        imageUrl="https://i.imgur.com/4LtthQc.png/"
        description="Jahresprogramm 2021 als PDF →"
      />
      <PDFDownload
        imageUrl="https://i.imgur.com/3uy98We.png"
        description="Jahresprogramm 2020 als PDF →"
      />
      <PDFDownload
        imageUrl="https://i.imgur.com/u7FQKvA.png"
        description="Jahresprogramm 2019 als PDF →"
      />
    </div>
  </div>
)

const PDFDownload: FC<{
  imageUrl: string
  description: string
}> = ({ imageUrl, description }) => (
  <div>
    <img src={imageUrl} className="w-full mb-6" />
    <div className="flex justify-center px-5 py-3 pl-5 text-base font-medium border border-gray-300 rounded">
      {description}
    </div>
  </div>
)
