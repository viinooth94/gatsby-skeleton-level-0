import React from "react";
import { useState } from "react";
import { get_css_value}  from "../../utils/utils";
import { MenuContent} from "./menu_content";


const style_box = {
	boxShadow:"none",
	textAlign: "center",
	background: "red",
	width: "100%",
	height:"100vh",
}

const style_cell = {
	padding: "1em",
	color:"white",
	fontFamily:"sans-serif",
	// border: "1px black solid",
	border: "1px "+   get_css_value("--color_3") + " solid",
	cursor: "pointer",
}





const header_style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
	width: "100%",
	height: "40px",
	background: get_css_value("--color_4"),
}

const button_style = {
	width: "30px",
	height: "30px",
	background : get_css_value("--color_2"),
	cursor: "pointer",
}


export function MenuSmall() {
	const [is, set_is] = useState(false);

	function mouse_click(event) {
		is ? set_is(false) : set_is(true);
	}

	return <>
		<div style={header_style}>
			<div style={button_style} onClick={mouse_click}></div>
		</div>
		{is ? <MenuContent style_box={style_box} style_cell={style_cell}/> : null}
	</>
}