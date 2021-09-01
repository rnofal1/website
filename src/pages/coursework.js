import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import { graphql } from "gatsby" //Will allow us to use common bits of data
import { container, navLinks, navLinkItem, navLinkText, tab, tabcontent } from "../components/container-index.module.css"
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top


export default function Coursework({ data }) {
    console.log(data) //necessary for querying
    return (
        <Layout>
            <main className={container}>
                <h1> Completed:  </h1>
                <dl>
                    <dt>EECS 370</dt>
                    <dd>Computer Architecture</dd>
                    <dt>EECS 281</dt>
                    <dd>Data Structures and Algorithms</dd>
                    <dt>EECS 270</dt>
                    <dd>Logic Design</dd>
                    <dt>EECS 216</dt>
                    <dd>Signals and Systems</dd>
                    <dt>EECS 215</dt>
                    <dd>Electronic Circuits</dd>
                    <dt>EECS 201</dt>
                    <dd>Computer Science Pragmatics</dd>
                    <dt>STATS 412</dt>
                    <dd>Probability and Statistics</dd>
                </dl>
                <h1> In Progress:  </h1>
                <dl>
                    <dt>EECS 442</dt>
                    <dd>Computer Vision</dd>
                    <dt>EECS 373</dt>
                    <dd>Embedded System Design</dd>
                    <dt>EECS 351</dt>
                    <dd>Digital Signal Processing</dd>
                </dl>
            </main>
        
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
