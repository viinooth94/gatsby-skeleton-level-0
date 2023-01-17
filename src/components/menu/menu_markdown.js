import React from "react";
import {LinkCell} from "../goto";
import { useStaticQuery, graphql } from "gatsby";

export function MenuMarkdown ({style}) {
	const data = useStaticQuery(
    graphql`
      query {
				allFile(filter: {sourceInstanceName: {eq: "markdown"}}) {
					edges {
						node {
							childrenMarkdownRemark {
								frontmatter {
									slug
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
			name: elem.node.childrenMarkdownRemark[0].frontmatter.title,
		}
		menu.push(obj);
		return null;
	})

	return <>{menu.map((elem, key) => 
		<LinkCell key={key} to={elem.to} style={style}>{elem.name}</LinkCell>
	)}</>
}