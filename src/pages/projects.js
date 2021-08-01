import React from "react"
import Footer from "../components/footer" //Grabs the CSS info
import container from "../components/container-index.module.css"  //Formatting
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top
import { Link, graphql } from "gatsby" //Will allow us to use common bits of data
import { css } from "@emotion/react" //Add some style
import { rhythm } from "../utils/typography" //Add some text theme
//     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>


export default function Projects({ data }) {
  console.log(data) //necessary for querying
  return (
    <Layout>
    <main className={container}>
    <div style={{ color: `teal` }}>
      <h1>Projects: </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => ( //This grabs and outputs a list of my blog posts
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #fc4e03;
                `}
              >
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
       <Footer />
    </div>
    </main>
    </Layout>
  )
}
/* Below will retrieve the site title from my metadata in gatsby-config.js */
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`