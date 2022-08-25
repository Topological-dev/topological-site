import React, {useState} from "react"
import Layout from "../hoc/Layout"
import AllServices from "../components/AllServices"

const Services = ({location}) => {
  return (
    <>
      <Layout>
        <main className="page">
          <AllServices activeService={{title: location && location.state && location.state.title || "Browser"}} />
        </main>
      </Layout>
    </>
  )
}

export default Services
