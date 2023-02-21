import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { NavCell } from "../gui";

export function Legal() {
	const style_cell = {
		padding : "0 1em",
		cursor: "pointer",
	}
	
	const data = useStaticQuery(
    graphql`
		query {
			allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "legal"}}}) {
				edges {
					node {
						frontmatter {
							title
						}
					}
				}
			}
		}
    `
	)
	console.log("data legal", data);
	return <NavCell to="/legal" style={style_cell}>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</NavCell>
}