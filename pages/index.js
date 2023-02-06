import React from 'react'
import Link from 'next/link'

import Header from '../components/head'
import HeadComponent from '../components/header'
import Layout from '../components/layout'

export default function Index({}) {
  return (
    <>
      <HeadComponent />
      <Header data={data.navigation.title} />
      <Layout>
        <section className="content-wrapper-xl mt-calc-24">
          <h1 className="pb-4">
            welcome to <span className="font-medium">banner tool</span>
          </h1>
          <p>Please select a year from the main navigation.</p>
        </section>
      </Layout>
    </>
  )
}
