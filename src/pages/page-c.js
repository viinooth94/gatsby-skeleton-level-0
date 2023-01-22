import React from "react";
import {LayoutMain} from "../components/struct/layout.js";
import { graphql } from "gatsby";

/*
it's necessary to export the Components Page as default
If it's not do, Gatsby Router don't find the page and return an error
*/

function ContentMarkdownHtml({html}) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

function Form({ name, children }) {
  const style = {
    paddingLeft:" 0.3em",
  }

  return (
    <form name={name} method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value={name} />
      <div>
        <label>
          <input type="text" name="first name" placeHolder="prénom" />
        </label>
      </div>
      <div>
        <label>
          <input type="text" name="family name" placeHolder="nom" />
        </label>
      </div>
      <div>
        <label>
          <input type="email" name="email" placeHolder="courriel" />
        </label>
      </div>
      <div>
        <label>
          <textarea name="message" placeHolder={children}></textarea>
        </label>
      </div>
      <div style={style}>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}


export default function PageC ({data}) {
  return <LayoutMain>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <ContentMarkdownHtml html={data.allMarkdownRemark.edges[0].node.html} />
    <Form name="contact">
          Un petit message pour expliquer pourquoi, comment... et au diable le
          reste.
        </Form>
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