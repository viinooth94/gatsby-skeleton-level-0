// REACT
import React from "react";
// GATSBY
import { graphql } from "gatsby";
// APP
import { LayoutMain } from "../components/h.js"
import { RenderPageAccount} from "../components/render/render_page_account"

/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
export default function Account({data}) {
  const style_cell = {
    width: "100px",
  }

  const style_box = {
    padding:"0.5em",
  }

  const style_field = {
    width: "30em",
    background: "cyan"
  }

  const style_form = {
    display: "flex",
    flexDirection: "column",
  }

  return <LayoutMain>
    <RenderPageAccount data={data}
                        style_box={style_box}
                        style_cell={style_cell}
                        style_form={style_form}
                        style_field={style_field}/>
  </LayoutMain>;
};

export const Head = ({data}) => <title>{data.allMarkdownRemark.edges[0].node.frontmatter.categorie}</title>

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "logging"}}}) {
      edges {
        node {
          frontmatter {
            categorie
            title
            menu
            mail
            send
            password
            lang
          }
          html
        }
      }
    }
  }
`