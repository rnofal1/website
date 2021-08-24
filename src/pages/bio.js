import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import { graphql } from "gatsby" //Will allow us to use common bits of data
import { container, navLinks, navLinkItem, navLinkText, tab, tabcontent } from "../components/container-index.module.css"
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top


export default function Coursework({ data }) {
    console.log(data) //necessary for querying
    return (
        <Layout>
            <h1> About Me </h1>
            <p> Hi! My name is Ramsey Nofal... </p>
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
