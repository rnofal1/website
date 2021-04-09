import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import Footer from "../components/footer" //Grabs the CSS info
import Container from "../components/container" //Formatting
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top
import { graphql } from "gatsby" //Will allow us to use common bits of data

export default function Blog({ data }) {
  return (
    <Layout>
    <Container>
    <div style={{ color: `teal` }}>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <p>Blog Posts: </p>
      <Link to="/">Index</Link> 
       <Footer />
    </div>
    </Container>
    </Layout>
  )
}
/* Below will retrieve the site title from my metadata in gatsby-config.js */
export const query = graphql` 
query {
  site {
    siteMetadata {
      title
    }
  }
}
`