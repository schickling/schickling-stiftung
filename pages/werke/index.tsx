import React, { useEffect } from 'react'
import Router from 'next/router'

const Component: React.FunctionComponent<{}> = () => {
  useEffect(() => {
    Router.push('/werke/bilder')
  })
  return <div></div>
}

export default Component
