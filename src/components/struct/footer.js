import React from "react";
import { get_css_value } from "../../utils/utils";

const style_footer = {
	width: "100%",
	height: "50px",
	background: get_css_value("--color_4"),

}

export function Footer() {
	const year = new Date().getFullYear();
	return <div style={style_footer}>my site {year}</div>
}