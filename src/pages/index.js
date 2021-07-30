import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import { header, container, navLinks, navLinkItem, navLinkText }  from "../components/container-index.module.css" 
//import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top
import { graphql } from "gatsby" //Will allow us to use common bits of data
import portrait from "../images/IMG_1685.jpeg"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import projects from "../images/projects.png"
import coursework from "../images/serverRoom.jpg"



//import spin from "../images/giphy.gif"

//<img src={spin} alt="Icon" />


export default function Home({ data }) {
    return (
       
        <main className={container}>
            <div className={header}>
                <a id="header" href="https://www.linkedin.com/in/rnofal/">
                    <img src={linkedin} alt="linked logo" ></img>
                </a>
                <a id="header" href="https://github.com/rnofal1">
                    <img src={github} alt="github logo" width="20" height="20"></img>
                </a>
                <h1>Ramsey Nofal</h1>
            </div>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/home/" className={navLinkText}>
                            Projects
                            <img src={projects} alt="projects"></img> 
            </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog/" className={navLinkText}>
                            Coursework
                            <img src={coursework} alt="coursework"></img> 
            </Link>
                       </li>
                </ul>
            </nav>
        </main>
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
