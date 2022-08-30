import React from 'react'

const DocsDetails = ({data}) => {
  return (
    <section className='docs-details'>{data[0].details}</section>
  )
}

export default DocsDetails