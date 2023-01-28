import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import dataInput from '../json/data.json'

export async function getStaticProps() {
  const data = dataInput
  return {
    props: {
      data,
    },
  }
}

export default function Header({ data }) {
  const router = useRouter()
  return (
    <header className="fixed w-full border-b border-[rgba(0,0,0,0.16)] bg-white">
      <section className="container">
        <div className="content-wrapper-xl flex flex-row items-center justify-between py-5">
          <Link href={`/`}>
            <div className="flex flex-row items-center gap-3">
              <svg
                className="h-8 w-auto"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#ee7100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9979 22.2806C17.6675 22.2806 22.2796 17.6676 22.2796 12C22.2796 6.33088 17.6675 1.71941 11.9979 1.71941C6.33125 1.71941 1.7191 6.33088 1.7191 12C1.7191 17.6676 6.33125 22.2806 11.9979 22.2806ZM0 12C0 5.38379 5.38284 0 11.9979 0C18.6129 0 23.9972 5.3823 23.9957 12C23.9957 18.6162 18.6129 24 11.9979 24C5.38284 24 0 18.6162 0 12ZM11.9978 19.5277C16.1559 19.5277 19.5254 16.1576 19.5254 12.0002C19.5254 7.83839 16.1574 4.46979 11.9978 4.46979C7.8412 4.46979 4.46721 7.83839 4.46721 12.0002C4.46721 16.1576 7.8412 19.5277 11.9978 19.5277Z" />
              </svg>
              <span className="text-[1.25rem] font-medium">banner</span>
            </div>
          </Link>
          <ul className="flex flex-row gap-6">
            <li>
              <Link href="/2021" passHref>
                <span
                  className={`cursor-pointer text-[0.875] transition-all duration-500 ease-out hover:text-[rgba(0,0,0,0.48)] ${
                    router.asPath === '/2021' ? 'font-medium text-oc-orange' : null
                  }`}
                >
                  2021
                </span>
              </Link>
            </li>
            <li>
              <Link href="/2022" passHref>
                <span
                  className={`cursor-pointer text-[0.875] transition-all duration-500 ease-out hover:text-[rgba(0,0,0,0.48)] ${
                    router.asPath === '/2022' ? 'font-medium text-oc-orange' : null
                  }`}
                >
                  2022
                </span>
              </Link>
            </li>
            <li>
              <Link href="/2023" passHref>
                <span
                  className={`cursor-pointer text-[0.875] transition-all duration-500 ease-out hover:text-[rgba(0,0,0,0.48)] ${
                    router.asPath === '/2023' ? 'font-medium text-oc-orange' : null
                  }`}
                >
                  2023
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}
