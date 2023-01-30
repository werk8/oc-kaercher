import React from 'react'

const iFrameComponent = ({ src }) => {
  return (
    <>
      <iframe
        width="100%"
        height="960"
        frameBorder="0"
        src={src}
        className="m-auto h-[600px] w-[960px]"
        sandbox="allow-same-origin allow-scripts"
      ></iframe>
    </>
  )
}

export default iFrameComponent
