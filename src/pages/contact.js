import React from "react";
import { graphql } from "gatsby";
//the file h.js is like the header in C and C++ language. That's work like an index, catalogue...
import { FormNetlify, Form, ContentMarkdownHtml, LayoutMain } from "../components/h.js"

/*
it's necessary to export the Components Page as default
If it's not do, Gatsby Router don't find the page and return an error
*/
export default function PageContact ({data}) {
  const style_cell = {
    width: "100px",
  }

  const style_box = {
    padding:"0.5em",
  }

  const style_form = {
    display: "flex",
    flexDirection: "column",
  }

  const node = data.allMarkdownRemark.edges[0].node;
  return <LayoutMain>
    <h1>{node.frontmatter.title}</h1>
    <ContentMarkdownHtml html={node.html} />
    <FormNetlify style={style_form} id_name="contact">
      {/* The dot notation give the opportunity to only load Form */}
      <Form.Input type="text" name="first name" placeHolder={node.frontmatter.firstname}/>
      <Form.Input type="text" name="family name" placeHolder={node.frontmatter.lastname}/>
      <Form.Input type="email" name="email" placeHolder={node.frontmatter.mail}/>
      <Form.TextArea name="message" placeHolder={node.frontmatter.message}/>
      <Form.Submit style_box={style_box} style_cell={style_cell} type="submit">{node.frontmatter.send}</Form.Submit>
    </FormNetlify>
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
            firstname
            lastname
            mail
            send
            message
          }
          html
        }
      }
    }
  }
`