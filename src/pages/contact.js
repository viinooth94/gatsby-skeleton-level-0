import React from "react";
import {useContext, useState} from "react";
// GATSBY
import { graphql } from "gatsby";
// APP
//the file h.js is like the header in C and C++ language. That's work like an index, catalogue...
import { FormNetlify, Form, ContentMarkdownHtml, LayoutMain } from "../components/h.js";
import { RegionContext } from "./../context";
import { RenderPageContact } from "../components/render/render_page_contact"


// function useNode({data}) {
//   const { lang } = useContext(RegionContext);
//   let buf_node = data.allMarkdownRemark.edges[0].node;

//   for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
//     if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
//       buf_node = data.allMarkdownRemark.edges[i].node;
//     }
//   }

//   const [node, set_node] = useState(buf_node);
//   return node;

// }
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

  // const node = useNode(data);
  // const node = data.allMarkdownRemark.edges[0].node;
  return <LayoutMain>
    <RenderPageContact  data={data} 
                        style_box={style_box}
                        style_cell={style_cell}
                        style_form={style_form}/>
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
            lang
          }
          html
        }
      }
    }
  }
`