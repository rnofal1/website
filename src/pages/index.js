import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import { graphql } from "gatsby" //Will allow us to use common bits of data
import { container, navLinks, navLinkItem, navLinkText } from "../components/container-index.module.css"
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top
import projects from "../images/projects.png"
import coursework from "../images/serverRoom.jpg"
import myFace from "../images/myFace.jpeg"
import network from "../images/network.jpg"



export default function Home({ data }) {
    console.log(data) //necessary for querying
    return (
        <Layout>
            <main className={container}>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/projects/" className={navLinkText}>
                                Projects
                            <img src={projects} alt="projects"></img>
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/coursework/" className={navLinkText}>
                                Coursework
                            <img src={coursework} alt="coursework"></img>
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/bio/" className={navLinkText}>
                                About Me
                            <img src={network} alt="network"></img>
                            </Link>
                        </li>
                    </ul>
                </nav>
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
