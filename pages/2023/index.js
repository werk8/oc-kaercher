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
        <section className="border-b pb-4">
          <h1 className="pb-4 font-medium">2023</h1>
          <ul className="flex flex-row gap-x-6">
            {data.projects.map((item, index) => {
              const handleTabClick = () => {
                setCurrentTab(item.number)
              }
              return (
                <li key={index}>
                  <button
                    id={item.number}
                    disabled={currentTab === `${item.number}`}
                    onClick={handleTabClick}
                    className={`cursor-pointer transition-all duration-500 ease-out hover:text-[rgba(0,0,0,0.48)] ${
                      currentTab === `${item.number}` ? 'font-medium text-oc-orange' : null
                    }`}
                  >
                    <span>{item.title}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="mt-calc-24 flex flex-row gap-4">
          <section className="w-3/12">
            {data.projects.map((item, index) => (
              <section key={index}>
                {currentTab === item.number ? (
                  <>
                    <span className="text-[0.875rem] opacity-50">Formats</span>
                    <ul className="list-disc gap-4 pt-2 pl-5">
                      {item.formats.map((data, index) => {
                        const handleTabClick = () => {
                          setCurrentItem(data.id)
                        }
                        return (
                          <>
                            <li key={index} className="py-1">
                              <button
                                id={data.id}
                                disabled={currentItem === `${data.id}`}
                                onClick={handleTabClick}
                                className={`cursor-pointer transition-all duration-500 ease-out hover:text-[rgba(0,0,0,0.48)] ${
                                  currentItem === `${data.id}` ? 'font-medium text-oc-orange' : null
                                }`}
                              >
                                <span>{data.label}</span>
                              </button>
                            </li>
                          </>
                        )
                      })}
                    </ul>
                  </>
                ) : null}
              </section>
            ))}
          </section>
          <section className="h-[900px] w-full border border-[rgba(0,0,0,0.12)]">
            {data.projects.map((item, index) => (
              <section key={index}>
                {currentTab === item.number ? (
                  <>
                    <section className="flex justify-center">
                      {item.formats.map((data, index) => (
                        <>
                          <div key={index}>
                            {currentItem === data.id ? (
                              <iframe
                                src={`http://localhost:3000/${data.slug}`}
                                className="m-auto h-[900px] w-full"
                              ></iframe>
                            ) : null}
                          </div>
                        </>
                      ))}
                    </section>
                  </>
                ) : null}
              </section>
            ))}
          </section>
        </section>
      </Layout>
    </>
  )
}
