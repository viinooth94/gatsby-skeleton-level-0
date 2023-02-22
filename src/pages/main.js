// APP
import React from "react";
// GATSBY
import { graphql } from "gatsby";
// APP
import { LayoutMain } from "../components/h.js"
import { RenderPage} from "../components/render/render_page";


/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
export default function PageMain ({data}) {
  return <LayoutMain>
    <RenderPage data={data}/>
  </LayoutMain>;
};

export const Head = ({data}) => <title>{data.allMarkdownRemark.edges[0].node.frontmatter.categorie}</title>


export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "main"}}}) {
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

