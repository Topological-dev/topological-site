import React from "react"
import Layout from "../hoc/Layout"
import AllServices from "../components/AllServices"
import Hero from "../components/Hero"
//import SEO from '../components/SEO'

export default function Home({location}) {
 
  console.log(location)
  
  return (
    <Layout>
      {/* <SEO title="Home" description="This is Home Page" /> */}
      <main className="page">
        <Hero />
        <AllServices location={location} />
      </main>
    </Layout>
  )
}