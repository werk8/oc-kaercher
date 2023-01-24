import React from 'react'
import Link from 'next/link'

import dataInput from '../json/data.json'

import Header from '../components/head'
import HeadComponent from '../components/header'
import Layout from '../components/layout'

export async function getStaticProps() {
  const data = dataInput
  return {
    props: {
      data,
    },
  }
}

export default function Index({ data }) {
  return (
    <>
      <HeadComponent />
      <Header data={data.navigation.title} />
      <Layout>
        <section>
          <h1 className="pb-4">
            welcome to <span className="font-medium">banner tool</span>
          </h1>
          <p>Please select a year from the main navigation.</p>
        </section>
      </Layout>
    </>
  )
}
