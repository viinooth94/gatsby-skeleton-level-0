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

function Form(props) {
  const style = {
    paddingLeft:" 0.3em",
  }

  return (
    <form name={props.form_name} method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value={props.form_name} />
      <div>
        <label>
          <input type="text" name="first name" placeHolder={props.firstname}/>
        </label>
      </div>
      <div>
        <label>
          <input type="text" name="family name" placeHolder={props.name} />
        </label>
      </div>
      <div>
        <label>
          <input type="email" name="email" placeHolder={props.mail} />
        </label>
      </div>
      <div>
        <label>
          <textarea name="message" placeHolder={props.message}></textarea>
        </label>
      </div>
      <div style={style}>
        <button type="submit">{props.send}</button>
      </div>
    </form>
  );
}


export default function PageC ({data}) {
  return <LayoutMain>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <ContentMarkdownHtml html={data.allMarkdownRemark.edges[0].node.html} />
    <Form form_name="contact"
          firstname= {data.allMarkdownRemark.edges[0].node.frontmatter.firstname}
          name= {data.allMarkdownRemark.edges[0].node.frontmatter.lastname}
          mail= {data.allMarkdownRemark.edges[0].node.frontmatter.mail}
          message= {data.allMarkdownRemark.edges[0].node.frontmatter.message}
          send= {data.allMarkdownRemark.edges[0].node.frontmatter.send} />
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