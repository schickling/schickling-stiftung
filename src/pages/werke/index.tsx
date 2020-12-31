import React, { FC, useEffect } from 'react'
import Router from 'next/router'

const Component: FC<{}> = () => {
  useEffect(() => {
    Router.push('/werke/bilder')
  })
  return <div></div>
}

export default Component
