import React, { useState } from 'react'

import Header from '../../components/head'
import HeadComponent from '../../components/header'
import Layout from '../../components/layout'

export default function Index({}) {
  return (
    <>
      <HeadComponent />
      <Header />

      <Layout>
        <section className="border-b pb-calc-64">
          <h1 className="pb-3 font-medium">coming soon</h1>
        </section>
      </Layout>
    </>
  )
}
