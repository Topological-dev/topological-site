import React from "react"
import Navbar from "../components/Navbar"
import Footer from "./Footer"
import "../assets/css/main.css"
import "normalize.css"

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
