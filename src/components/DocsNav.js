import React from "react"
import { Link } from "gatsby"
import setupNav from "../utils/setUpDocs"

const DocsNav = ({ data }) => {
  const navs = setupNav(data)
  const main_navs = Object.keys(navs)

  return (
    <section className="docs-nav">
      <section className="mobile-view">
        <select val={main_navs[0]}>
            {main_navs.map( (page, index) => (
                <option key={index} val={page.toLowerCase()}>{page}</option>
            ))}
        </select>
        <div className="separator">|</div>
        <select val={navs["desktop"][0]}>
            {navs["desktop"].map( (subPage, index) => (
                <option key={index} val={subPage.toLowerCase()}>{subPage}</option>
            ))}
        </select>
      </section>
      <section className="large-view">
        {main_navs.map((page, index) => {
          if (Array.isArray(navs[page]) && navs[page].length > 1) {
            return (
              <ul className="main-nav" key={index}>
                {page}
                {/* <Link to={`${page.toLowerCase()}`}>{page}</Link> */}
                {navs[page].map((subPage, index) => {
                  return (
                    <li className="sub-nav" key={index}>
                      {" "}
                      {subPage}
                      {/* <Link to={`${subPage.toLowerCase()}`}>
                        {subPage}
                      </Link> */}
                    </li>
                  )
                })}
              </ul>
            )
          } else {
            return (
              <div className="main-nav" key={index}>
                <Link to={`${page.toLowerCase()}`}>{page}</Link>
              </div>
            )
          }
        })}
      </section>
    </section>
  )
}

export default DocsNav
