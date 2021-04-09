import React from "react"
import { graphql } from "gatsby" //Lets me use/query site-wide data 
import Layout from "../components/layout"

export default function MyFiles({ data }) {
  console.log(data)
  return ( //Will Create a list of all of my sites files through GraphQL (not totally sure how this works)
    <Layout> 
        <div> 
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
/* Below will grab necessary info from my files to display (which is done Above)*/
export const query = graphql` 
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`