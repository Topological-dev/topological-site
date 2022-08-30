import React from "react"
import Layout from "../hoc/Layout"
import { StaticImage } from "gatsby-plugin-image"
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

const About = () => {
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
              <div className="paragraph">
                &emsp;&emsp;We have over 30 years of experience skilled people
                in test automation. With the current QA automation technologies
                we are overwhelmed with the right automation tools and coding
                skilled people. We all know that it is very hard to find people
                who has the right testing attitude and knowledge about a tool,
                which would not be under our control and does not provide 95% of
                coverage or wait for longtime for future release..
              </div>
              <div className="paragraph">
                &emsp;&emsp;With our vast industrial automation experience we
                will help to make the automation process simple by providing
                solutions in terms of architecture and process with the right
                tools and training people. We also provide consulting services
                to speed up the automation process to achieve the goals faster
                and provide scalable people to support.
              </div>
              <div className="paragraph">
                &emsp;&emsp;Our tool set can successfully automate 95% of
                process and can be customized as needed. Can automate browser,
                API, Desktop or Mobile, RPA (Robotic Process Automation), can be
                scheduled to run testcases or RPA Tasks, Provide test reports
                (results log and test coverage reports) to collect metrics, can
                be used to capture data and reuse for other purposes. We as a
                company are young and open-minded to take challenges/learn and
                help to mitigate the challenges. With our tools we will also
                provide a quick feasibility check before we go any further.
              </div>
            </article>
            <h5 className="about-header">FAQs</h5>
            <FAQs questions={Questions} />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default About
