import React from 'react'
import Layout from '../hoc/Layout'
//import SEO from '../components/SEO'

const Error = () => {
  return (
    <Layout>
      {/* <SEO title="Page Not Found" /> */}
      <main className='error-page'>
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error