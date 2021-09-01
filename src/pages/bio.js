import React from "react"
import { Link } from "gatsby"; //Needed to traverse between pages
import { graphql } from "gatsby" //Will allow us to use common bits of data
import { container, navLinks, navLinkItem, navLinkText, tab, tabcontent } from "../components/container-index.module.css"
import Layout from "../components/layout" //Import the default layout to have a link to Index/Main page at the top


export default function Coursework({ data }) {
    console.log(data) //necessary for querying
    return (
        <Layout>
            <h1> About Me </h1>
            <p> Hi, I'm Ramsey, an aspiring computer engineer and student at the University of Michigan. Let me tell you a bit about myself: </p>

            <p> My hometown and favorite place on Earth is Marquette, a small town in Michigan's upper peninsula.</p> 

            <p> Marquette is a great place to enjoy the great outdoors (when it isn't covered in six feet of ice and snow). Some of my favorite activities include hiking, running, and playing disc golf in the many forests and along the numerous trails of the Marquette wilderness. </p>

            <p> However, come winter I can often still be found outside. Cross-country skiing is my activity of choice when the temperature dips into the negatives. </p>

            <p>Indoors, it's rare for me to be away from a screen or computer of some sort. I'm an avid gamer, computer-tinkerer, and recreational coder.</p> 

            <p>This is especially true during the brutal U of M school year, during which I spend most of my time coding, debugging, and reading spec sheets. As difficult as these things may be, I find them deeply enjoyable, especially when I get to apply my skills to embedded systems or computer architecture. </p>
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
