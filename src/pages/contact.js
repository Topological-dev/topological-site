import React from "react"
import Layout from "../hoc/Layout"
import {FcPhone, FcFeedback} from 'react-icons/fc'
import { graphql, useStaticQuery } from "gatsby"
// import SEO from "../components/SEO"

const query = graphql`
  query {
    allContentfulSite {
      nodes {
        phone
        email
        contactUs {
          contactUs
        }
      }
    }
  }
`

const Contact = () => {
  const {allContentfulSite:{nodes:[{contactUs: {contactUs}, email, phone}]}} = useStaticQuery(query)
  //console.log(data)
  return (
    <Layout>
      {/* <SEO title="Contact Us" /> */}
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Let's get in touch</h3>
            <p> &emsp;&emsp;{contactUs}</p>
            <h4><b>phone: </b>{phone}<FcPhone /></h4>
            <h4 className="contact-email"><b>Email: </b>{email}<FcFeedback /></h4>
          </article>
          <article>
            <form className="form contact-form" action="https://formspree.io/f/mwkydnqe" method="POST">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
