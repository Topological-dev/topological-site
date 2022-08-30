import React from "react"
import { Link } from "gatsby"
import Video from "./Video"

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
        ) : (<>
          <Video url="https://www.youtube.com/embed/3AR432bguOY?" title="YouTube video player" allowFullScreen />
          <div><strong>{service.title} </strong>: {long}</div></>
        )}
      </section>
    </>
  )
}

export default ServiceDetails
