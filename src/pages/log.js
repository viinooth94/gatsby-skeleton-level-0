import React from "react";
import { graphql } from "gatsby";
import { ContentMarkdownHtml, LayoutMain, Form } from "../components/h.js"

/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
export default function Log ({data}) {
  const style_cell = {
    width: "100px",
  }

  const style_box = {
    padding:"0.5em",
  }

  const style_cell_field = {
    width: "30em",
    background: "cyan"
  }

  const style_form = {
    display: "flex",
    flexDirection: "column",
  }

  const node = data.allMarkdownRemark.edges[0].node;

  console.log("node.frontmatter.mail",node.frontmatter.mail);
  return <LayoutMain>
    <h2>{node.frontmatter.title}</h2>
    <ContentMarkdownHtml html={node.html} />
    <Form style={style_form} id_name="contact">
      <Form.Input style_cell={style_cell_field} type="email" name="email" placeHolder={node.frontmatter.mail}/>
      <Form.Input style_cell={style_cell_field} type="password" name="password" placeHolder={node.frontmatter.password}/>
      <Form.Submit style_box={style_box} style_cell={style_cell} type="submit">{node.frontmatter.send}</Form.Submit>
    </Form>
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
          }
          html
        }
      }
    }
  }
`