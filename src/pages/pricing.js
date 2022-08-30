import React from "react"
import Layout from "../hoc/Layout"
import Pricings from "../components/Pricings"
import FAQs from "../components/FAQs"

const Questions = [
  {
    title: "How are you different",
    answer: "TBD",
  },
  {
    title: "How are you different",
    answer: "TBD",
  },
  {
    title: "How are you different",
    answer: "TBD",
  },
]

const Pricing = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section>
            <Pricings />
            <h5 className="pricing-header">FAQs</h5>
            <FAQs questions={Questions} />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Pricing
