import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import { header, container, navLinks, navLinkItem, navLinkText }  from "../components/container-index.module.css" 
//import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top
import { graphql } from "gatsby" //Will allow us to use common bits of data
import portrait from "../images/IMG_1685.jpeg"



export default function Home({ data }) {
    return (
       
        <main className={container}>
            <div className={header}>
                <img src={portrait} alt="Icon" />
                <h1>Ramsey Nofal</h1>
            </div>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/home/" className={navLinkText}>
                            Home
            </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog/" className={navLinkText}>
                            Blog
            </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog/" className={navLinkText}>
                            Blog
            </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog/" className={navLinkText}>
                            Blog
            </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog/" className={navLinkText}>
                            Blog
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
