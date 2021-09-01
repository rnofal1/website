import React from "react"
import { css } from "@emotion/react" //Import some styling
import { rhythm } from "../utils/typography" //Import a text theme
import { useStaticQuery, Link, graphql } from "gatsby" //Will allow me to grab static data?
import { header } from "../components/container-index.module.css" 
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"

export default function Layout({ children }) { //Setup a basic layout in CSS; adds some padding and a link to the main page
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
    return (
        <div>
        <div className={header}>
            <a id="header" href="https://www.linkedin.com/in/rnofal/">
                <img src={linkedin} alt="linked logo" ></img>
            </a>
            <a id="header" href="https://github.com/rnofal1">
                <img src={github} alt="github logo" width="20" height="20"></img>
                </a>
            <p> rnofal@umich.edu </p>
            <h1>{data.site.siteMetadata.title}</h1>
            <Link to={`/`}>
                <h3>
                    {data.site.siteMetadata.title}
                </h3>
                </Link>
            </div>
            {children}
            </div>
    )
}