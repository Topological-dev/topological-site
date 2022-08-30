import React from "react"
import Layout from "../hoc/Layout"
import {FcPhone, FcFeedback} from 'react-icons/fc'
// import SEO from "../components/SEO"

const Contact = () => {
  return (
    <Layout>
      {/* <SEO title="Contact Us" /> */}
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Let's get in touch</h3>
            <p>
              Fam hexagon fashion axe, praxis food truck salvia slow-carb master
              cleanse neutra tousled selvage small batch pinterest. Chicharrones
              irony PBR&B offal live-edge chia, polaroid shoreditch quinoa
              adaptogen gluten-free. Selfies blog PBR&B fanny pack, wayfarers
              shabby chic sustainable offal. Cray skateboard pitchfork sartorial
              cold-pressed forage pok pok kitsch beard cliche mlkshk distillery.
            </p>
            <h4><b>phone number: </b>(971)221-0092<FcPhone /></h4>
            <h4 className="contact-email"><b>Email: </b>cchintada@topological.dev<FcFeedback /></h4>
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
