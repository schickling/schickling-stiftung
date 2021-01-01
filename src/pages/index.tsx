import React from 'react'
import { Container, Layout } from '../components/Layout'

const Page = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container className="py-3">
      <img src="https://i.imgur.com/076mjd8.png" />
      <div className="h-16"></div>
    </Container>
  </Layout>
)

export default Page
