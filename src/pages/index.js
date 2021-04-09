import React from "react"
import { Link } from "gatsby";
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
    <div style={{ color: `teal` }}>
      <img src="https://www.wilsoninfo.com/welcome/welcomeclipart10.gif" alt="" />
      <p>Site Map: </p>
      <Link to="/home/">Home</Link>
      <p></p>
      <Link to="/blog/">Blog</Link>
    </div>
    </Container>
  )
}

