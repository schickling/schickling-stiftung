import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'
import fetch from 'node-fetch'

global.fetch = fetch

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
