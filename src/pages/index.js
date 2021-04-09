import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import Container from "../components/container" //Import the html "wrapper" for formatting
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top
import { graphql } from "gatsby" //Will allow us to use common bits of data

export default function Home({ data }) {
  return (
    <Layout>
    <Container>
    <div style={{ color: `teal` }}>
      <img src="https://www.wilsoninfo.com/welcome/welcomeclipart10.gif" alt="" />
      <p>Site Map: </p>
      <Link to="/home/">Home</Link>
      <p></p>
      <Link to="/blog/">Blog</Link>
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
