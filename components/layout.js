import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <main className="container relative pt-[4.5rem]">{children}</main>
    </>
  )
}

export default Layout
