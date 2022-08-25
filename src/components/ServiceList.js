import React from "react"
import { Link } from "gatsby"

const ServiceList = ({ services, handleService, activeService }) => {
  return (
    <div className="service-container">
      {/* {location === "/" ?<h5 className="services-header">What we offer</h5>:<></>} */}
      <div className="services-list">
        {services.map((service, index) => {
          const { title, icon } = service
          return (
            <span
              key={index}
              className={ activeService && activeService.title === title ? "active" : ""}
              onClick={ () => { handleService(title)}}
            >
              {icon} {title}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default ServiceList
