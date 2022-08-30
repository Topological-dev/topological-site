import React from "react"
import {Link} from "gatsby"

const PricingCard = ({ type, dollarAmt, features }) => {
  return (
    <div className="pricing-card">
      <h4>
        <span>{type}</span>
        <span>{dollarAmt === "custom"? <Link to={`/contact`} >Contact</Link>: `${dollarAmt} $`}</span>
      </h4>
      <hr />
      <ul className="pricing-card-details">
        {/* {type === "free forever" ? <></> : type === "basic"? <h5>includes everything in <b>free forever</b>.</h5>:<h5>includes everything in <b>basic</b>.</h5>} */}
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard
