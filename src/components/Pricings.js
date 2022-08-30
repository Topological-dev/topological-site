import React from "react"
import PricingCard from "./PricingCard"

const Pricing_data = [
  {
    type: "free forever",
    dollarAmt: "0",
    features: ["All demo videos", "documentation", "basic api testing"],
  },
  {
    type: "basic",
    dollarAmt: "25000",
    features: [
      "Two basic flows",
      "1 month training to all resources for a project",
      "3 months support with dedicated resource",
      "10% customization",
      "more...",
    ],
  },
  {
    type: "enterprise",
    dollarAmt: "custom",
    features: [
      "Unlimited flows",
      "Dedicated account manager",
      "Scalable people for account in groups of 4",
      "Fast SLAs",
      "Unlimited customization",
    ],
  },
]

const Pricings = () => {
  return <div className="pricing">{
    Pricing_data.map((data, index)=> (
      <PricingCard {...data} key={index} />
    ))}</div>
}

export default Pricings
