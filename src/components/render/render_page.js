// REACT
import React from "react";
import { useContext, useState } from "react";
// APP
import { RegionContext } from "./../../context";
import { ContentMarkdownHtml } from "../h.js"

export function RenderPage({data}) {
  const { lang } = useContext(RegionContext);
  let buf_title = data.allMarkdownRemark.edges[0].node.frontmatter.title;
  let buf_html = data.allMarkdownRemark.edges[0].node.html;

  // useEffect or not useEffect in this case ?????
  for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
    if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
      buf_title = data.allMarkdownRemark.edges[i].node.frontmatter.title;
      buf_html = data.allMarkdownRemark.edges[i].node.html;
    }
  }

  const [title, set_title] = useState(buf_title);
  const [html, set_html] = useState(buf_html);

  return <>
    <h1>{title}</h1>
    <ContentMarkdownHtml html={html} />
  </>
}