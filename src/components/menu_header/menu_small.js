import React from "react";
import { useState } from "react";
import { get_css_value}  from "../../utils/utils";
import { GoHome, MenuContent} from "./menu_content";

const header_style = {
	margin: "0 auto",
  display: "flex",
  alignItems: "center",
	justifyContent : "space-between",

	width: "95%",
	height: "40px",
}

const style_box = {
	background: "red",
	width: "100%",
	height:"100vh",
}

const style_cell = {
	width: "60px",
	height: "40px",
	color:"white",
	fontFamily:"sans-serif",
	border: "1px "+ get_css_value("--color_0") + " solid",
	cursor: "pointer",
}


const hamburger_style = {
	width: "30px",
	height: "30px",
	background : get_css_value("--color_2"),
	cursor: "pointer",
}

const home_style = {
	height: "30px",
	color: get_css_value("--color_0"),
	fontFamily:"sans-serif",
	// border: "1px "+ get_css_value("--color_0") + " solid",
	cursor: "pointer",
}

export function MenuSmall() {
	const [is, set_is] = useState(false);

	function mouse_click(event) {
		is ? set_is(false) : set_is(true);
	}

	return <>
		<div style={header_style}>
			<GoHome style={home_style}/>
			<div style={hamburger_style} onClick={mouse_click}></div>
		</div>
		{is ? <MenuContent style_box={style_box} style_cell={style_cell} in_line={false}/> : null}
	</>
}