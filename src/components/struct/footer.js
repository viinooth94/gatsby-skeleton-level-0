import React from "react";
import { get_css_value } from "../../utils/utils";
import { useStaticQuery, graphql } from "gatsby";
import {Legal} from "./../menu_footer/menu_content_footer.js"

const style_footer = {
	margin: "auto 0",
	display: "flex",
	alignItems: "center",
	justifyContent : "center",
	width: "100%",
	height: "50px",
	background: get_css_value("--color_4"),
}





export function Footer() {
	const data = useStaticQuery(
    graphql`
			query {
				site {
					siteMetadata {
						title
						version
					}
				}
			}
    `
	)

	const year = new Date().getFullYear();
	return <div  style={style_footer}>
		<div>{data.site.siteMetadata.title} {year}</div>
		<Legal/>
	</div>
}