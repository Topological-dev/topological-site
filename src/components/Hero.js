import { StaticImage } from "gatsby-plugin-image"
import React, {useEffect, useState} from "react"

const Hero = () => {
  const [text, setText] = useState("10X faster")
  
  useEffect(() => {
    const interval = setInterval(() => {
      let new_text = text
      if (new_text === "10X faster") {
        setText("90% Cheaper")
      } else if (new_text === "90% Cheaper") {
        setText("95% Coverage")
      } else if (new_text === "95% Coverage") {
        setText("10X faster")
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [text])

  return (
    <>
      <header className="hero">
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="main"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>build automation</h1>
            <h2 className="hero-subtext">{text}</h2>
          </div>
        </div>
      </header>
    </>
  )
}

export default Hero
