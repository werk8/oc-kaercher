import React, { useState } from 'react'
import Link from 'next/link'

import dataInput from '../../json/data-2023.json'

import Header from '../../components/head'
import HeadComponent from '../../components/header'
import Layout from '../../components/layout'
import NavLink from '../../components/link'

export async function getStaticProps() {
  const data = dataInput
  return {
    props: {
      data,
    },
  }
}

export default function Index({ data }) {
  const [currentTab, setCurrentTab] = useState('01')
  const [currentItem, setCurrentItem] = useState('01')
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
