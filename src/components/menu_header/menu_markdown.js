// REACT
import React from "react";
import { useContext } from "react";
// APP
import { HeaderContext } from "../../context";
import { NavCell } from "../gui";
import { useStaticQuery, graphql } from "gatsby";

export function MenuMarkdown ({style_box, style_cell}) {
	// CONTEXT
	const { set_num_item_bd } = useContext(HeaderContext); // context
	// GRAPHQL
	const data = useStaticQuery(
    graphql`
      query {
				allFile(filter: {sourceInstanceName: {eq: "markdown pages"}}) {
					edges {
						node {
							childrenMarkdownRemark {
								frontmatter {
									slug
									menu
									title
								}
							}
						}
					}
				}
      }
    `
	)

	const { allFile } = data;
	const menu = [];
	allFile.edges.map((elem, key) => {
		const obj = {
			key: key,
			to: elem.node.childrenMarkdownRemark[0].frontmatter.slug,
			name: elem.node.childrenMarkdownRemark[0].frontmatter.menu,
		}
		menu.push(obj);
		return null;
	})
	// context
	set_num_item_bd(menu.length); 


	return <>{menu.map((elem, key) => 
		<div style={style_box}>
			<NavCell key={key} to={elem.to} style={style_cell}>{elem.name}</NavCell>
		</div>
	)}</>
}