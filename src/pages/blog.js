import React from "react"
import { Link } from "gatsby";
import Footer from "../components/footer"
import Container from "../components/container"

export default function Blog() {
  return (
    <Container>
    <div style={{ color: `teal` }}>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <p>Blog Posts: </p>
      <Link to="/">Index</Link>
       <Footer />
    </div>
    </Container>
  )
}