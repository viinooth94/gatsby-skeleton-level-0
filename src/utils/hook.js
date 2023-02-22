import { useContext, useState } from "react";
import { RegionContext } from "./../context";

export function useNode(data) {
  const { lang } = useContext(RegionContext);
  let buf_node = data.allMarkdownRemark.edges[0].node;

  for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
    if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
      buf_node = data.allMarkdownRemark.edges[i].node;
    }
  }

  const [node, set_node] = useState(buf_node);
  return node;
}