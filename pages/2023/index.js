import React, { useState } from 'react'

import dataInput from '../../json/data-2023.json'

import Header from '../../components/head'
import HeadComponent from '../../components/header'
import Layout from '../../components/layout'

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
        <section className="content-wrapper-xl flex flex-row items-center border-b bg-white py-5">
          <div className="mr-8 bg-black py-2 px-3">
            <h1 className="pb-0 text-base font-medium leading-none text-white">2023</h1>
          </div>
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

        <section className="content-wrapper-xl mt-calc-24 flex flex-row gap-4">
          <section className="w-3/12">
            {data.projects.map((item, index) => (
              <section key={index}>
                {currentTab === item.number ? (
                  <>
                    <span className="text-[0.875rem] opacity-50">{item.content}</span>
                    <ul className="list-disc gap-4 pt-2 pl-5">
                      {item.formats.map((data, index) => {
                        const handleTabClick = () => {
                          setCurrentItem(data.id)
                        }
                        return (
                          <>
                            <li key={index} className="py-2">
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
          <section className="h-[600px] w-full border border-[rgba(0,0,0,0.12)]">
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
                                src={`https://oc-banner.vercel.app//${data.slug}`}
                                className="m-auto h-[600px] w-[960px]"
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
