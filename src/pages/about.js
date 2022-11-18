import React from "react"
import Layout from "../hoc/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import FAQs from "../components/FAQs"

const query = graphql`
  query {
    allContentfulSite {
      nodes {
        about {
          about
        }
      }
    }
    allContentfulQuestions(filter: {category: {eq: "about"}}, sort: { fields: createdAt, order: ASC }) {
      questions: nodes {
        question {
          question
        }
        answer {
          answer
        }
      }
    }
  }
`

const About = () => {
  const {allContentfulQuestions:{ questions }, allContentfulSite: {nodes: [{about: {about}}]}}  = useStaticQuery(query)
  
  const paragraphs = about.split('\n\n')
  
  return (
    <>
      <Layout>
        <main className="page">
          <section>
            <StaticImage
              src="../assets/images/about.png"
              alt="about"
              className="about-img"
              placeholder="tracedSVG"
              layout="fullWidth"
              objectFit="fill"
            />
            <h4 className="about-header">About us</h4>
            <article>
              { paragraphs.map( (paragraph, index) => (
                <div className="paragraph" key={index}>
                &emsp;&emsp;{paragraph}
              </div>
              ))}
            </article>
            <h5 className="about-header">FAQs</h5>
            <FAQs questions={questions} />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default About
