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
                    <h2> Programming: </h2>
                    <dt>EECS 370</dt>
                    <dd>Introduction to Computer Architecture</dd>
                    <dt>EECS 281</dt>
                    <dd>Data Structures and Algorithms</dd>
                    <dt>EECS 270</dt>
                    <dd>Introduction to Logic Design</dd>
                    <h2> Circuitry: </h2>
                    <dt>EECS 216</dt>
                    <dd>Introduction to Signals and Systems</dd>
                    <dt>EECS 215</dt>
                    <dd>Introduction to Electronic Circuits</dd>
                </dl>
                <h1> In Progress:  </h1>
                <dl>
                    <h2> Programming: </h2>
                    <dt>EECS 442</dt>
                    <dd>Computer Vision</dd>
                    <dt>EECS 373</dt>
                    <dd>Introduction to Embedded System Design</dd>
                    <h2> Circuitry: </h2>
                    <dt>EECS 351</dt>
                    <dd>Introduction to Digital Signal Processing</dd>
                </dl>
                <h2> **Detailed info on each course coming soon </h2>
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
