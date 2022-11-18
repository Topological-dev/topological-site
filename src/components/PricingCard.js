import React from "react"
import {Link} from "gatsby"

const PricingCard = ({ title, dollars, details }) => {
  return (
    <div className="pricing-card">
      <h4>
        <span>{title}</span>
        <span>{dollars === -1? <Link to={`/contact`} >Contact</Link>: `${dollars}$`}</span>
      </h4>
      <hr />
      <ul className="pricing-card-details">
        {/* {type === "free forever" ? <></> : type === "basic"? <h5>includes everything in <b>free forever</b>.</h5>:<h5>includes everything in <b>basic</b>.</h5>} */}
        {details.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard
