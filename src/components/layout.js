import React from "react"
import { css } from "@emotion/react" //Import some styling
import { rhythm } from "../utils/typography" //Import a text theme
import { useStaticQuery, Link, graphql } from "gatsby" //Will allow me to grab static data?

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
    <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}> 
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        > 
          {data.site.siteMetadata.title} 
        </h3>
      </Link>
      {children}
    </div>
  )
}