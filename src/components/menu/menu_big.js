import React from "react";

import { get_css_value}  from "../../utils/utils";
import { MenuContent} from "./menu_content";

const style_box = {
	boxShadow:"none",
	display: "flex",
	alignItem :"center",
	background: "red",
}

const style_cell = {
	padding: "1em",
	color:"white",
	fontFamily:"sans-serif",
	border: "1px "+ get_css_value("--color_3") + " solid",
	cursor: "pointer",
}

export function MenuBig() {
	return  <MenuContent style_box={style_box} style_cell={style_cell}/>
}