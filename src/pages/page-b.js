
import React from "react";
import { graphql } from "gatsby";
import { LayoutMain } from "../components/struct/layout.js";
import { ContentMarkdownHtml } from "../components/markdown.js";

/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
export default function PageB ({data}) {
  return<LayoutMain>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <ContentMarkdownHtml html={data.allMarkdownRemark.edges[0].node.html} />
  </LayoutMain>;
};


export const Head = ({data}) => <title>{data.allMarkdownRemark.edges[0].node.frontmatter.categorie}</title>


export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "about"}}}) {
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