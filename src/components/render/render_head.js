// REACT
import React from "react";
import { useRef } from "react";

/**
 * DON'T WORK FOR NOW
 * DON'T WORK FOR NOW
 * DON'T WORK FOR NOW
 * DON'T WORK FOR NOW
 * 
 * 
 * SO DON'T USE
 * 
 */

export function RenderHead({data}) {
  // lang
	const browser_is = typeof window !== "undefined";
	let language = "fr"
  if(browser_is) {
		language = window.navigator.userLanguage || window.navigator.language;
	}

  let buf_categorie = data.allMarkdownRemark.edges[0].node.frontmatter.categorie;

  // useEffect or not useEffect in this case ?????
  for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
    if(language === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
      buf_categorie = data.allMarkdownRemark.edges[i].node.frontmatter.categorie;
    }
  }

  const [categorie] = useRef(buf_categorie);

  return <>{categorie}</>
}