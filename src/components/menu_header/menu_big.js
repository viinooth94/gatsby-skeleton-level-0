import React from "react";

import { get_css_value}  from "../../utils/h";
import { MenuContent} from "./menu_content";

const style_box = {
	margin: "0 auto",
	display: "flex",
	alignItem: "center",
	justifyContent: "space-between",
	maxWidth: "1000px",
}

const style_cell = {
	width: "70px",
	height: get_css_value("--height_header"),
	fontFamily:"sans-serif",
	cursor: "pointer",
}

export function MenuBig() {
	return <MenuContent style_box={style_box} style_cell={style_cell}/>
}