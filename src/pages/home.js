import React from 'react';
import { Link } from "gatsby" //Needed to traverse between pages
import Footer from "../components/footer" //The footer/contact info
import Container from "../components/container" //Formatting
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top
import { graphql } from "gatsby" //Will allow us to use common bits of data

//<Footer />
export default function Home({ data }) {
    return (
      <Layout>
      </Layout>
    );
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

