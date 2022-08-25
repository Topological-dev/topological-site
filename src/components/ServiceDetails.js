import React from "react"
import { Link } from "gatsby"

const ServiceDetails = ({ service, location, long }) => {
 
  return (
    <>
      <section className="service-details-container">
        {location && location.pathname === "/" ? (
          <>
            <div>{service.short}</div>
            <Link to={`/services`} state={{ title: service.title }} className="service-demo-link">
              Watch Demo ...
            </Link>
          </>
        ) : (
          long
        )}
      </section>
    </>
  )
}

export default ServiceDetails
