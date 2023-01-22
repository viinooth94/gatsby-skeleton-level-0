import React from "react";
import {LayoutMain} from "../components/struct/layout.js";
import { graphql } from "gatsby";

/*
it's necessary to export the Components Page as default
If it's not do, Gatsby Router don't find the page and return an error
*/

function ContentMarkdownHtml({html}) {
	// take in the data {} just what is necessary by destructuration
  // const { frontmatter, html } = data_md
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}



export default function PageC ({data}) {
  return <LayoutMain>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <ContentMarkdownHtml html={data.allMarkdownRemark.edges[0].node.html} />
  </LayoutMain>;
};

export const Head = ({data}) => <title>{data.allMarkdownRemark.edges[0].node.frontmatter.categorie}</title>



export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "contact"}}}) {
      edges {
        node {
          frontmatter {
            categorie
            title
            menu
          }
          html
        }
      }
    }
  }
`