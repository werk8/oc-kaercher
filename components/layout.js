import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <main className="container relative mt-calc-48">
        <section className="content-wrapper-xl">{children}</section>
      </main>
    </>
  )
}

export default Layout
