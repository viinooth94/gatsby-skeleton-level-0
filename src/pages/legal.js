// REACT
import React from "react";
// GATSBY
import { graphql } from "gatsby";
// APP
import { LayoutMain } from "../components/struct/layout.js";
import { RenderPage, RenderHead } from "../components/render/render_page";

/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
// function ContentMarkdownHtml({html}) {
//   return <div dangerouslySetInnerHTML={{ __html: html }} />
// }


export default function Legal ({data}) {
  return<LayoutMain>
    <RenderPage data={data}/>
    {/* <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
		<ContentMarkdownHtml html={data.allMarkdownRemark.edges[0].node.html} /> */}
  </LayoutMain>;
};


export const Head = ({data}) => <title>{data.allMarkdownRemark.edges[0].node.frontmatter.categorie}</title>

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "legal"}}}) {
      edges {
        node {
          frontmatter {
            categorie
            title
            menu
            lang
          }
          html
        }
      }
    }
  }
`
