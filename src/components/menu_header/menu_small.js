// REACT
import React from "react";
import { useState } from "react";
// APP
import { Box, Hamburger } from "../gui";
import { get_css_value}  from "../../utils/h";
import { GoHome, MenuContent, Region } from "./menu_content";

const header_box_style = {
	margin: "0 auto",
  display: "flex",
  alignItems: "center",
	justifyContent : "space-between",

	height: get_css_value("--height_header"),
	width: "95%",
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


const hamburger_style_cell = {
	width: get_css_value("--size_header_cell"),
	height: get_css_value("--size_header_cell"),
	background: get_css_value("--color_2"),
	cursor: "pointer",
}

const home_style_box = {
	cursor: "pointer",
}

const home_style_cell = {
	width: get_css_value("--width_header_cell"),
	height: get_css_value("--height_header_cell"),
}


const region_style_box = {
	width: get_css_value("--width_header_cell"),
	height: get_css_value("--size_header_cell"),
	background: get_css_value("--color_header"),
}

const region_style_cell = {
	position: "relative",
  top: "50%",
  transform: "translate(25%, -50%)",
	cursor: "pointer",
}

export function MenuSmall() {
	const [is, set_is] = useState(false);

	function mouse_click(event) {
		is ? set_is(false) : set_is(true);
	}

	return <>
		<Box style={header_box_style}>
			<GoHome style_box={home_style_box} style_cell={home_style_cell}/>
			<Hamburger>
				<div style={hamburger_style_cell} onClick={mouse_click}></div>
			</Hamburger>
			{/* the compute offset need to be optimize */}
			<Region style_box={region_style_box} style_cell={region_style_cell} 
							offset={get_css_value("--size_header_cell").slice(0,-2)/2+"px"}/>
		</Box>
		{is ? <MenuContent style_box={style_box} style_cell={style_cell} in_line={false}/> : null}
	</>
}