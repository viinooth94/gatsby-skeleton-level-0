import React from "react";
import { useState } from "react";
import { get_css_value}  from "../../utils/h";
import { GoHome, MenuContent, Region } from "./menu_content";

const header_style = {
	margin: "0 auto",
  display: "flex",
  alignItems: "center",
	justifyContent : "space-between",

	width: "95%",
	height: get_css_value("--height_header"),
}

const style_box = {
	background: get_css_value("--color_menu_small"),
	width: "100%",
	height:"100vh",
}

const style_cell = {
	width: "0px",
	height: get_css_value("--height_header"),
	fontFamily: get_css_value("--font_current"),
	// border: "1px "+ get_css_value("--color_0") + " solid",
	cursor: "pointer",
}


const hamburger_style = {
	width: get_css_value("--width_header_cell"),
	height: get_css_value("--height_header_cell"),
	background: get_css_value("--color_2"),
	cursor: "pointer",
}

const home_style = {
	height: get_css_value("--height_header_cell"),
	// color: get_css_value("--color_0"),
	fontFamily: get_css_value("--font_current"),
	// border: "1px "+ get_css_value("--color_0") + " solid",
	cursor: "pointer",
}


const region_style_box = {
	// margin: "0 auto",
	width: get_css_value("--width_header_cell"),
	height: get_css_value("--height_header"),
	background: get_css_value("--color_header"),
	// display:"flex",
	// textAlign: "center",
	// alignItem: "center",
}

const region_style_cell = {
	textAlign: "center",
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
			<Region style_box={region_style_box} style_cell={region_style_cell}/>
		</div>
		{is ? <MenuContent style_box={style_box} style_cell={style_cell} in_line={false}/> : null}
	</>
}