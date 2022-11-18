import React from "react"
import Layout from "../hoc/Layout"
import Pricings from "../components/Pricings"
import { graphql, useStaticQuery } from "gatsby"
import FAQs from "../components/FAQs"

const query = graphql`
  query {
    allContentfulQuestions(filter: {category: {eq: "pricing"}}, sort: { fields: createdAt, order: ASC }) {
      questions: nodes {
        question {
          question
        }
        answer {
          answer
        }
      }
    }
    allContentfulPricing(sort: { fields: createdAt, order: ASC }) {
      pricings: nodes {
        title
        createdAt
        dollars
        details
      }
    }
  }
`

const Pricing = () => {
  const {allContentfulQuestions:{ questions }, allContentfulPricing: {pricings}} = useStaticQuery(query)
  //console.log(data)
  return (
    <>
      <Layout>
        <main className="page">
          <section>
            <Pricings pricings={pricings} />
            <h5 className="pricing-header">FAQs</h5>
            <FAQs questions={questions} />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Pricing
